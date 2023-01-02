import { getRankings } from "@ch/bhapi"
import type { Bracket } from "@ch/bhapi/types"
import type { NextApiHandler } from "next"
import type { RankedRegion } from "@ch/bhapi/constants"

const handler: NextApiHandler = async (req, res) => {
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=300, stale-while-revalidate=480",
    )

    try {
        const { bracket, region, page, name } = req.query
        const data = await getRankings(
            bracket as Bracket,
            region as RankedRegion,
            page as string,
            name as string,
        )
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: "something went wrong" })
    }
}

export default handler
