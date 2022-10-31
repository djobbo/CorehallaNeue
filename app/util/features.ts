import type { AuthContext } from "@ctx/auth/AuthProvider"

export type FeatureFlags = keyof ReturnType<typeof getFeatureFlags>

const __DEV = process.env.NODE_ENV === "development"

export const getFeatureFlags = ({
    authContext,
}: {
    authContext?: AuthContext
}) => {
    const isSSR = typeof window === "undefined"
    const isProductionWebsite =
        process.env.NEXT_PUBLIC_FORCE_PRODUCTION_WEBSITE ||
        (!isSSR && window.location.hostname === "corehalla.com")

    console.log("TODO: fix hydration error caused by feature flags")
    return {
        // shouldUseVercelImageOptimization: false,
        shouldShowDummyFavorites: false && __DEV && !authContext?.isLoggedIn,
        shouldShowBackToTop: !isProductionWebsite && true, // TODO: Add setting to toggle this
        shouldShowInfoTooltips: true, // TODO: Add setting to toggle this
        shouldShowAds: !isProductionWebsite, // TODO: premium??
    } as const
}
