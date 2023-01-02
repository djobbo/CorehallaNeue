import { getPlayerRanked as getPlayerRankedFn } from "@ch/bhapi"
import { getTeamPlayers } from "@ch/bhapi/helpers/getTeamPlayers"
import { logError, logInfo } from "@ch/logger"
import { numericLiteralValidator } from "@ch/common/helpers/validators"
import { publicProcedure } from "@server/trpc"
import { updateDBPlayerAliases } from "@ch/db-utils/mutations/updateDBPlayerAliases"
import { withTimeLog } from "@server/helpers/withTimeLog"
import { z } from "zod"
import type { BHPlayerAlias } from "@ch/db/generated/client"

export const getPlayerRanked = publicProcedure //
    .input(
        z.object({
            playerId: numericLiteralValidator,
        }),
    )
    .query(
        withTimeLog(async (req) => {
            const { playerId } = req.input
            logInfo("getPlayerRanked", req.input)

            const ranked = await withTimeLog(
                getPlayerRankedFn,
                "BHAPI:playerRanked",
            )(playerId)

            // TODO: check whole object with zod
            try {
                z.undefined().or(z.object({}).strict()).parse(ranked)
                throw new Error("Player ranked not found")
            } catch {
                // do nothing, continue
            }

            const aliases = [
                {
                    id: ranked.brawlhalla_id,
                    name: ranked.name,
                },
                ...(ranked["2v2"]?.map(getTeamPlayers).flat() ?? []),
            ].map<BHPlayerAlias>(({ name, id }) => ({
                playerId: id.toString(),
                alias: name,
                createdAt: new Date(),
                public: true,
            }))

            // Fire and forget
            withTimeLog(
                updateDBPlayerAliases,
                "updateDBPlayerAliases",
            )(aliases).catch((e) => {
                logError("Error updating player aliases", e)
            })

            return ranked
        }, "getPlayerRanked"),
    )
