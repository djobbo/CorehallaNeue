import { load } from "cheerio"
import { powerRankingsMock } from "./powerRankingsMock"
import { z } from "zod"
import axios from "axios"
import type { Bracket } from "@ch/bhapi/types"

const __DEV = process.env.NODE_ENV === "development"

const PR_BASE_URL = "https://www.brawlhalla.com/rankings/power"

export type PR = {
    rank: number
    name: string
    earnings: string
    t1: number
    t2: number
    t3: number
    t8: number
    t32: number
    socials: {
        twitter?: string
        twitch?: string
    }
}

export const powerRankingsBracketValidator = z.union([
    z.literal("1v1"),
    z.literal("2v2"),
])

export type PowerRankingsBracket = z.infer<typeof powerRankingsBracketValidator>

export const powerRankingsRegionValidator = z.union([
    z.literal("us-e"),
    z.literal("eu"),
    z.literal("sea"),
    z.literal("brz"),
    z.literal("aus"),
])

export type PowerRankingsRegion = z.infer<typeof powerRankingsRegionValidator>

export const parsePowerRankingsPage = async (
    bracket: Bracket,
    region: "us-e" | "eu" | "sea" | "brz" | "aus",
): Promise<PR[]> => {
    if (__DEV) return powerRankingsMock

    const page = `${PR_BASE_URL}/${bracket}/${region}`
    const { data } = await axios.get<string>(page)

    const $ = load(data)

    return $("tr")
        .not("#rheader")
        .map((_, el) => {
            const $row = $(el)
            const [, rank, socials, name, earnings, t8, t32, t1, t2, t3] = $row
                .children()
                .toArray()

            return {
                rank: parseInt($(rank).text(), 10),
                name: $(name).text(),
                earnings: $(earnings).text(),
                t1: parseInt($(t1).text(), 10),
                t2: parseInt($(t2).text(), 10),
                t3: parseInt($(t3).text(), 10),
                t8: parseInt($(t8).text(), 10),
                t32: parseInt($(t32).text(), 10),
                socials: {
                    twitter: $(socials)
                        .find("img[src*='ranktwitter']")
                        ?.parent()
                        .attr("href")
                        ?.replace("https://twitter.com/", ""),
                    twitch: $(socials)
                        .find("img[src*='ranktwitch']")
                        ?.parent()
                        .attr("href")
                        ?.replace("https://twitch.tv/", ""),
                },
            }
        })
        .get()
}
