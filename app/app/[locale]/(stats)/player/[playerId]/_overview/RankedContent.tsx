"use client"

import { CollapsibleSection } from "@/components/layout/CollapsibleSection"
import { Image } from "@/components/Image"
import { type MiscStat, MiscStatGroup } from "@/components/stats/MiscStatGroup"
import { Rankings1v1Icon } from "ui/icons"
import { RatingDisplay } from "@/components/stats/RatingDisplay"
import { calculateWinrate } from "bhapi/helpers/calculateWinrate"
import { getGlory, getPersonalEloReset } from "bhapi/calculator"
import { getTierFromRating } from "bhapi/helpers/getTierFromRating"
import { usePlayerStats } from "../PlayerStatsProvider"

export const RankedContent = () => {
    const { ranked } = usePlayerStats()

    if (!ranked) {
        return null
    }

    const glory = getGlory(ranked)

    const eloReset = getPersonalEloReset(ranked.rating)

    const rankedStats: MiscStat[] = [
        {
            name: "1v1 Games",
            value: ranked.games,
            desc: "1v1 Ranked games played this season",
        },
        // {
        //     name: "Total Games",
        //     value: totalGames,
        //     desc: "Total ranked games played this season (all gamemodes)",
        // },
        {
            name: "Winrate",
            value: `${calculateWinrate(ranked.wins, ranked.games).toFixed(2)}%`,
            desc: "Ranked winrate (ranked wins / ranked games)",
        },
        ...(glory.hasPlayedEnoughGames
            ? [
                  {
                      name: "Total Glory",
                      value: glory.totalGlory,
                      desc: "Total glory earned this season (wins + best rating)",
                  },
                  {
                      name: "Glory from rating",
                      value: glory.gloryFromBestRating,
                      desc: `Glory earned from best rating (${glory.bestRating} Elo)`,
                  },
                  {
                      name: "Glory from wins",
                      value: glory.gloryFromWins,
                      desc: `Glory earned from wins (${glory.totalWins} Wins)`,
                  },
              ]
            : [
                  {
                      name: "Total Glory",
                      value: "N/A (not enough games)",
                      desc: "Total glory earned this season (wins + best rating)",
                  },
              ]),
        {
            name: "Elo reset",
            value: <>{eloReset}</>,
            desc: `Elo reset for next season (${getTierFromRating(eloReset)})`,
        },
    ]

    return (
        <CollapsibleSection
            trigger={
                <>
                    <Rankings1v1Icon size={20} className="fill-accentVar1" />
                    Ranked Season
                </>
            }
        >
            <div className="flex items-center gap-4">
                <Image
                    src={`/images/ranked-banners/${ranked.tier}.png`}
                    alt={ranked.tier ?? "Valhallan"}
                    containerClassName="h-24 w-16"
                    className="object-contain object-center"
                />
                <div>
                    <span className="text-sm font-light">{ranked.tier}</span>
                    <RatingDisplay
                        className="w-80"
                        games={ranked.games}
                        wins={ranked.wins}
                        rating={ranked.rating}
                        peak_rating={ranked.peak_rating}
                    />
                </div>
            </div>
            <MiscStatGroup className="mt-4" stats={rankedStats} />
        </CollapsibleSection>
    )
}
