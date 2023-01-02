import { parsePowerRankingsPage } from "@ch/web-parser/power-rankings/parsePowerRankingsPage"
import type { Bracket } from "@ch/bhapi/types"
import type { NextApiHandler } from "next"

const handler: NextApiHandler = async (req, res) => {
    try {
        const { bracket, region } = req.query
        const data = await parsePowerRankingsPage(
            bracket as Bracket,
            // @ts-expect-error typecheck region
            region,
        )

        res.setHeader(
            "Cache-Control",
            "public, s-maxage=300, stale-while-revalidate=480",
        )

        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: "something went wrong" })
    }
}

export default handler
