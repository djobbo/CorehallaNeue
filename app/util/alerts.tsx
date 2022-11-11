import { AppLink } from "ui/base/AppLink"

export const alerts = {
    BH_MAINTENANCE: (
        <span>
            Brawlhalla maintenance ongoing. More info{" "}
            <AppLink
                href="/discord"
                target="_blank"
                className="text-accentAlt font-semibold hover:text-text"
            >
                here
            </AppLink>{" "}
            !
        </span>
    ),
    BH_SERVER_ISSUE: (
        <span>
            Known issues with fetching stats from Brawlhalla{"'"}s servers, don
            {"'"}t panic. Updates{" "}
            <AppLink
                href="/discord"
                target="_blank"
                className="text-accentAlt font-semibold hover:text-text"
            >
                here
            </AppLink>{" "}
            !
        </span>
    ),
} as const
