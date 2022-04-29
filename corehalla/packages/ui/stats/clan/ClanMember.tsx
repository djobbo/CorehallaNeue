import { AppLink } from "../../base/AppLink"
import { Card } from "../../base/Card"
import { MiscStatGroup } from "../MiscStatGroup"
import { cleanString } from "common/helpers/cleanString"
import { formatUnixTime } from "common/helpers/date"
import type { Clan } from "bhapi/types"
import type { MiscStat } from "../MiscStatGroup"

type ClanMemberProps = {
    member: Clan["clan"][number]
    clan: Clan
}

export const ClanMember = ({ member, clan }: ClanMemberProps) => {
    const memberStats: MiscStat[] = [
        {
            name: "Joined on",
            value: formatUnixTime(member.join_date),
        },
        {
            name: "XP",
            value: `${member.xp} (
                    ${((member.xp / parseInt(clan.clan_xp)) * 100).toFixed(2)}
                    %)`,
        },
    ]

    return (
        <AppLink
            href={`/stats/player/${member.brawlhalla_id}`}
            key={member.brawlhalla_id}
        >
            <Card
                key={member.brawlhalla_id}
                title={`${cleanString(member.name)} (${member.rank})`}
                className="hover:bg-bgVar2"
            >
                <MiscStatGroup
                    className="mt-4 justify-items-center text-center"
                    fit="fit"
                    stats={memberStats}
                />
            </Card>
        </AppLink>
    )
}
