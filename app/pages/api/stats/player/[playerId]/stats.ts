import { getPlayerStats } from "@ch/bhapi"
import type { NextApiHandler } from "next"

const handler: NextApiHandler = async (req, res) => {
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=300, stale-while-revalidate=480",
    )

    try {
        const { playerId } = req.query
        const data = await getPlayerStats(parseInt(playerId as string))
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: "something went wrong" })
    }
}

export default handler
