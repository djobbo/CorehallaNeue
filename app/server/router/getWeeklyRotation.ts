import { getWeeklyRotation as getWeeklyRotationFn } from "web-parser/weekly-rotation/getWeeklyRotation"
import { logInfo } from "logger"
import { publicProcedure } from "@server/trpc"

export const getWeeklyRotation = publicProcedure //
    .query(() => {
        logInfo("getWeeklyRotation")

        return getWeeklyRotationFn()
    })
