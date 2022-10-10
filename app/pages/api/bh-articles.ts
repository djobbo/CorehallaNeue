import { parseBHArticlesPage } from "web-parser/bh-articles/parseBHArticlesPage"
import type { NextApiHandler } from "next"

const handler: NextApiHandler = async (req, res) => {
    const { page = "1", type = "patch-notes", max } = req.query

    try {
        const pageNum = parseInt(page as string)
        const articles = await parseBHArticlesPage(pageNum, type.toString())
        if (max) {
            res.json(articles.slice(0, parseInt(max.toString())))
        }
        res.json(articles)
    } catch {
        res.status(404).json({ error: "Page not found" })
    }
}

export default handler
