import { getPlayerStats as getPlayerStatsFn } from "@ch/bhapi"
import { logError, logInfo } from "@ch/logger"
import { numericLiteralValidator } from "@ch/common/helpers/validators"
import { publicProcedure } from "@server/trpc"
import { updateDBClanData } from "@ch/db-utils/mutations/updateDBClanData"
import { updateDBPlayerAliases } from "@ch/db-utils/mutations/updateDBPlayerAliases"
import { withTimeLog } from "@server/helpers/withTimeLog"
import { z } from "zod"

export const getPlayerStats = publicProcedure //
    .input(
        z.object({
            playerId: numericLiteralValidator,
        }),
    )
    .query(
        withTimeLog(async (req) => {
            const { playerId } = req.input
            logInfo("getPlayerStats", req.input)

            const stats = await withTimeLog(
                getPlayerStatsFn,
                "BHAPI:playerStats",
            )(playerId)

            const updateClanData = async () => {
                if (!stats.clan) return

                const clan = stats.clan

                await withTimeLog(
                    updateDBClanData,
                    "updateDBClanData",
                )({
                    id: clan.clan_id.toString(),
                    name: clan.clan_name,
                    xp: parseInt(clan.clan_xp),
                }).catch((e) => {
                    logError(
                        `Failed to update clan#${clan.clan_id} for player#${playerId} in database`,
                        e,
                    )
                })
            }

            // Fire and forget
            Promise.all([
                withTimeLog(
                    updateDBPlayerAliases,
                    "updateDBPlayerAliases",
                )([
                    {
                        playerId: stats.brawlhalla_id.toString(),
                        alias: stats.name,
                        createdAt: new Date(),
                        public: true,
                    },
                ]).catch((e) => {
                    logError("Error updating player aliases", e)
                }),
                updateClanData(),
            ])

            return stats
        }, "getPlayerStats"),
    )
