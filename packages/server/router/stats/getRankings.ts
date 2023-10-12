import {
    get1v1Rankings as get1v1RankingsFn,
    get2v2Rankings as get2v2RankingsFn,
} from "bhapi"
import { logInfo } from "logger"
import { numericLiteralValidator } from "common/helpers/validators"
import { publicProcedure } from "../../trpc"
import { rankedRegionSchema } from "bhapi/constants"
import { withTimeLog } from "../../helpers/withTimeLog"
import { z } from "zod"

export const get1v1Rankings = publicProcedure //
    .input(
        z.object({
            region: rankedRegionSchema,
            page: numericLiteralValidator,
            name: z.optional(z.string()),
        }),
    )
    .query(
        withTimeLog(async (req) => {
            const { region, page, name } = req.input
            logInfo("get1v1Rankings", req.input)

            // const controller = new AbortController()

            const rankings = await withTimeLog(
                get1v1RankingsFn,
                "BHAPI:rankings1v1",
            )(region, page, name)

            // Fire and forget
            // const fireAndForget = withTimeLog(
            //     updateDBPlayerAliases,
            //     "updateDBPlayerAliases",
            // )(
            //     rankings.map((player) => ({
            //         playerId: player.brawlhalla_id.toString(),
            //         alias: player.name,
            //         createdAt: new Date(),
            //         public: true,
            //     })),
            //     {
            //         abortSignal: controller.signal,
            //     },
            // ).catch((e) => {
            //     logError("Error updating player aliases", e)
            // })

            // waitForRequestTimeout(fireAndForget, {
            //     abortController: controller,
            // })

            return rankings
        }, "get1v1Rankings"),
    )

export const get2v2Rankings = publicProcedure //
    .input(
        z.object({
            region: rankedRegionSchema,
            page: numericLiteralValidator,
        }),
    )
    .query(
        withTimeLog(async (req) => {
            const { region, page } = req.input
            logInfo("get2v2Rankings", req.input)

            // const controller = new AbortController()

            const rankings = await withTimeLog(
                get2v2RankingsFn,
                "BHAPI:rankings2v2",
            )(region, page)

            // Fire and forget
            // const fireAndForget = withTimeLog(
            //     updateDBPlayerAliases,
            //     "updateDBPlayerAliases",
            // )(
            //     rankings
            //         .map(getTeamPlayers)
            //         .flat()
            //         .map((player) => ({
            //             playerId: player.id.toString(),
            //             alias: player.name,
            //             createdAt: new Date(),
            //             public: true,
            //         }))
            //         .flat(),
            //     {
            //         abortSignal: controller.signal,
            //     },
            // ).catch((e) => {
            //     logError("Error updating player aliases", e)
            // })

            // waitForRequestTimeout(fireAndForget, {
            //     abortController: controller,
            //     timeout: 5000,
            // })

            return rankings
        }, "get2v2Rankings"),
    )
