import { AppLink } from "@ch/ui/base/AppLink"

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
    AUTH_ISSUES: (
        <span>
            Authentication server is down, and so favorites aren{"'"}t
            accessible, sorry for the inconvenience. Updates{" "}
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
    AUTH_ISSUES_RESOLVED: (
        <span>
            Authentication server is back online, you can reconnect! Don{"'"}t
            forget to join our{" "}
            <AppLink
                href="/discord"
                target="_blank"
                className="text-accentAlt font-semibold hover:text-text"
            >
                Discord
            </AppLink>{" "}
            !
        </span>
    ),
} as const
