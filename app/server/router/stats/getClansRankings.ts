import { CLANS_RANKINGS_PER_PAGE } from "@util/constants"
import { logInfo } from "@ch/logger"
import { numericLiteralValidator } from "@ch/common/helpers/validators"
import { publicProcedure } from "@server/trpc"
import { supabaseService } from "@ch/db/supabase/service"
import { withTimeLog } from "@server/helpers/withTimeLog"
import { z } from "zod"
import type { BHClan } from "@ch/db/generated/client"

export const getClansRankings = publicProcedure
    .input(
        z.object({
            name: z.string(),
            page: numericLiteralValidator,
        }),
    )
    .query(
        withTimeLog(async (req) => {
            const { name, page } = req.input
            logInfo("getClansRankings", req.input)

            let query = supabaseService
                .from<BHClan>("BHClan")
                .select("*")
                .order("xp", { ascending: false })

            if (name) {
                query = query.textSearch("name", name)
            }

            const { data, error } = await query.range(
                (page - 1) * CLANS_RANKINGS_PER_PAGE,
                page * CLANS_RANKINGS_PER_PAGE - 1,
            )

            if (error) throw error

            // TODO: type check this with zod
            return data
        }, "getClansRankings"),
    )
