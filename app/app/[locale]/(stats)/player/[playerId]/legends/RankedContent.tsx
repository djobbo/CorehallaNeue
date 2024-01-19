import { CollapsibleSection } from "@/components/layout/CollapsibleSection"
import { Image } from "@/components/Image"
import { type MiscStat, MiscStatGroup } from "@/components/stats/MiscStatGroup"
import { RatingDisplay } from "@/components/stats/RatingDisplay"
import { calculateWinrate } from "bhapi/helpers/calculateWinrate"
import { getLegendEloReset } from "bhapi/calculator"
import { getTierFromRating } from "bhapi/helpers/getTierFromRating"
import type { FullLegend } from "bhapi/legends"

type PlayerLegendRankedContentProps = {
    ranked: FullLegend["ranked"]
}

export const PlayerLegendRankedContent = ({
    ranked,
}: PlayerLegendRankedContentProps) => {
    if (!ranked) return null

    const eloReset = getLegendEloReset(ranked?.rating)

    const rankedStats: MiscStat[] = [
        {
            name: "Games",
            value: ranked.games,
            desc: "1v1 Ranked games played this season",
        },
        {
            name: "Winrate",
            value: `${calculateWinrate(ranked.wins, ranked.games).toFixed(2)}%`,
            desc: "Ranked winrate (ranked wins / ranked games)",
        },
        ...(eloReset
            ? [
                  {
                      name: "Elo reset",
                      value: <>{eloReset}</>,
                      desc: `Elo reset for next season (${getTierFromRating(
                          eloReset,
                      )})`,
                  },
              ]
            : []),
    ]

    return (
        <CollapsibleSection trigger="Ranked Season">
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
