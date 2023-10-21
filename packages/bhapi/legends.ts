import { arrayToMap } from "common/helpers/arrayToMap"
import type { Legend, PlayerRanked, PlayerStats } from "./types"
import type { Weapon } from "./constants"

export const legends: Legend[] = [
    {
        legend_id: 3,
        legend_name_key: "bodvar",
        bio_name: "B\u00f6dvar",
        bio_aka: "The Unconquered Viking, The Great Bear",
        weapon_one: "Grapple Hammer",
        weapon_two: "Sword",
        strength: "6",
        dexterity: "6",
        defense: "5",
        speed: "5",
    },
    {
        legend_id: 4,
        legend_name_key: "cassidy",
        bio_name: "Cassidy",
        bio_aka: "The Marshal of the Old West",
        weapon_one: "Blasters",
        weapon_two: "Grapple Hammer",
        strength: "6",
        dexterity: "8",
        defense: "4",
        speed: "4",
    },
    {
        legend_id: 5,
        legend_name_key: "orion",
        bio_name: "Orion",
        bio_aka: "The Mysterious Stranger",
        weapon_one: "Rocket Lance",
        weapon_two: "Spear",
        strength: "4",
        dexterity: "6",
        defense: "6",
        speed: "6",
    },
    {
        legend_id: 6,
        legend_name_key: "lord vraxx",
        bio_name: "Lord Vraxx",
        bio_aka: "The Despotic",
        weapon_one: "Rocket Lance",
        weapon_two: "Blasters",
        strength: "4",
        dexterity: "8",
        defense: "4",
        speed: "6",
    },
    {
        legend_id: 7,
        legend_name_key: "gnash",
        bio_name: "Gnash",
        bio_aka: "The First Real Man",
        weapon_one: "Grapple Hammer",
        weapon_two: "Spear",
        strength: "7",
        dexterity: "3",
        defense: "5",
        speed: "7",
    },
    {
        legend_id: 8,
        legend_name_key: "queen nai",
        bio_name: "Queen Nai",
        bio_aka: "The Jaguar Queen",
        weapon_one: "Spear",
        weapon_two: "Katars",
        strength: "7",
        dexterity: "4",
        defense: "8",
        speed: "3",
    },
    {
        legend_id: 10,
        legend_name_key: "hattori",
        bio_name: "Hattori",
        bio_aka: "Demon Bride",
        weapon_one: "Sword",
        weapon_two: "Spear",
        strength: "4",
        dexterity: "6",
        defense: "4",
        speed: "8",
    },
    {
        legend_id: 11,
        legend_name_key: "sir roland",
        bio_name: "Sir Roland",
        bio_aka: "The Scarlet Lion",
        weapon_one: "Rocket Lance",
        weapon_two: "Sword",
        strength: "5",
        dexterity: "5",
        defense: "8",
        speed: "4",
    },
    {
        legend_id: 12,
        legend_name_key: "scarlet",
        bio_name: "Scarlet",
        bio_aka: "Lady Necessity, The daVinci of Steam",
        weapon_one: "Grapple Hammer",
        weapon_two: "Rocket Lance",
        strength: "8",
        dexterity: "5",
        defense: "5",
        speed: "4",
    },
    {
        legend_id: 13,
        legend_name_key: "thatch",
        bio_name: "Thatch",
        bio_aka: "The Madman of Barbados",
        weapon_one: "Sword",
        weapon_two: "Blasters",
        strength: "7",
        dexterity: "5",
        defense: "3",
        speed: "7",
    },
    {
        legend_id: 14,
        legend_name_key: "ada",
        bio_name: "Ada",
        bio_aka: "The Ghost in the Machine",
        weapon_one: "Blasters",
        weapon_two: "Spear",
        strength: "6",
        dexterity: "7",
        defense: "3",
        speed: "6",
    },
    {
        legend_id: 15,
        legend_name_key: "sentinel",
        bio_name: "Sentinel",
        bio_aka: "The Hammer of Justice",
        weapon_one: "Grapple Hammer",
        weapon_two: "Katars",
        strength: "5",
        dexterity: "4",
        defense: "7",
        speed: "6",
    },
    {
        legend_id: 9,
        legend_name_key: "lucien",
        bio_name: "Lucien",
        bio_aka: "The Highwayman",
        weapon_one: "Katars",
        weapon_two: "Blasters",
        strength: "3",
        dexterity: "5",
        defense: "6",
        speed: "8",
    },
    {
        legend_id: 16,
        legend_name_key: "teros",
        bio_name: "Teros",
        bio_aka: "The Minotaur",
        weapon_one: "Axe",
        weapon_two: "Grapple Hammer",
        strength: "8",
        dexterity: "3",
        defense: "6",
        speed: "5",
    },
    {
        legend_id: 19,
        legend_name_key: "brynn",
        bio_name: "Brynn",
        bio_aka: "Chooser of the Slain, Slayer of the Chosen",
        weapon_one: "Axe",
        weapon_two: "Spear",
        strength: "5",
        dexterity: "5",
        defense: "5",
        speed: "7",
    },
    {
        legend_id: 20,
        legend_name_key: "asuri",
        bio_name: "Asuri",
        bio_aka: "The Night Stalker",
        weapon_one: "Katars",
        weapon_two: "Sword",
        strength: "4",
        dexterity: "7",
        defense: "5",
        speed: "6",
    },
    {
        legend_id: 21,
        legend_name_key: "barraza",
        bio_name: "Barraza",
        bio_aka: "Diesel Heart, The Lord of the Waste",
        weapon_one: "Axe",
        weapon_two: "Blasters",
        strength: "6",
        dexterity: "4",
        defense: "8",
        speed: "4",
    },
    {
        legend_id: 18,
        legend_name_key: "ember",
        bio_name: "Ember",
        bio_aka: "The Fangwild's Daughter",
        weapon_one: "Bow",
        weapon_two: "Katars",
        strength: "6",
        dexterity: "6",
        defense: "3",
        speed: "7",
    },
    {
        legend_id: 23,
        legend_name_key: "azoth",
        bio_name: "Azoth",
        bio_aka: "The One-Man Dynasty",
        weapon_one: "Bow",
        weapon_two: "Axe",
        strength: "7",
        dexterity: "5",
        defense: "6",
        speed: "4",
    },
    {
        legend_id: 24,
        legend_name_key: "koji",
        bio_name: "Koji",
        bio_aka: "The Wanderer, Honor's Blade",
        weapon_one: "Bow",
        weapon_two: "Sword",
        strength: "5",
        dexterity: "8",
        defense: "4",
        speed: "5",
    },
    {
        legend_id: 22,
        legend_name_key: "ulgrim",
        bio_name: "Ulgrim",
        bio_aka: "The Unyielding Anvil, Son of Ivaldi",
        weapon_one: "Axe",
        weapon_two: "Rocket Lance",
        strength: "6",
        dexterity: "3",
        defense: "7",
        speed: "6",
    },
    {
        legend_id: 25,
        legend_name_key: "diana",
        bio_name: "Diana",
        bio_aka: "The Monster Hunter",
        weapon_one: "Bow",
        weapon_two: "Blasters",
        strength: "5",
        dexterity: "6",
        defense: "5",
        speed: "6",
    },
    {
        legend_id: 26,
        legend_name_key: "jhala",
        bio_name: "Jhala",
        bio_aka: "The Unbroken",
        weapon_one: "Axe",
        weapon_two: "Sword",
        strength: "7",
        dexterity: "7",
        defense: "3",
        speed: "5",
    },
    {
        legend_id: 28,
        legend_name_key: "kor",
        bio_name: "Kor",
        bio_aka: "The Boulder",
        weapon_one: "Gauntlets",
        weapon_two: "Grapple Hammer",
        strength: "6",
        dexterity: "5",
        defense: "7",
        speed: "4",
    },
    {
        legend_id: 29,
        legend_name_key: "wu shang",
        bio_name: "Wu Shang",
        bio_aka: "The Traveler",
        weapon_one: "Gauntlets",
        weapon_two: "Spear",
        strength: "5",
        dexterity: "7",
        defense: "5",
        speed: "5",
    },
    {
        legend_id: 30,
        legend_name_key: "val",
        bio_name: "Val",
        bio_aka: "The Weapon",
        weapon_one: "Gauntlets",
        weapon_two: "Sword",
        strength: "4",
        dexterity: "5",
        defense: "6",
        speed: "7",
    },
    {
        legend_id: 31,
        legend_name_key: "ragnir",
        bio_name: "Ragnir",
        bio_aka: "The Dragon",
        weapon_one: "Katars",
        weapon_two: "Axe",
        strength: "5",
        dexterity: "6",
        defense: "6",
        speed: "5",
    },
    {
        legend_id: 32,
        legend_name_key: "cross",
        bio_name: "Cross",
        bio_aka: "The Dealmaker",
        weapon_one: "Blasters",
        weapon_two: "Gauntlets",
        strength: "7",
        dexterity: "4",
        defense: "6",
        speed: "5",
    },
    {
        legend_id: 33,
        legend_name_key: "mirage",
        bio_name: "Mirage",
        bio_aka: "The Dune Weaver",
        weapon_one: "Scythe",
        weapon_two: "Spear",
        strength: "7",
        dexterity: "6",
        defense: "4",
        speed: "5",
    },
    {
        legend_id: 34,
        legend_name_key: "nix",
        bio_name: "Nix",
        bio_aka: "Freelance Reaper",
        weapon_one: "Scythe",
        weapon_two: "Blasters",
        strength: "4",
        dexterity: "5",
        defense: "7",
        speed: "6",
    },
    {
        legend_id: 35,
        legend_name_key: "mordex",
        bio_name: "Mordex",
        bio_aka: "The Ravenous",
        weapon_one: "Scythe",
        weapon_two: "Gauntlets",
        strength: "6",
        dexterity: "4",
        defense: "5",
        speed: "7",
    },
    {
        legend_id: 36,
        legend_name_key: "yumiko",
        bio_name: "Yumiko",
        bio_aka: "The Kitsune",
        weapon_one: "Bow",
        weapon_two: "Grapple Hammer",
        strength: "4",
        dexterity: "7",
        defense: "4",
        speed: "7",
    },
    {
        legend_id: 37,
        legend_name_key: "artemis",
        bio_name: "Artemis",
        bio_aka: "The Answer",
        weapon_one: "Rocket Lance",
        weapon_two: "Scythe",
        strength: "5",
        dexterity: "5",
        defense: "4",
        speed: "8",
    },
    {
        legend_id: 38,
        legend_name_key: "caspian",
        bio_name: "Caspian",
        bio_aka: "The Master Thief",
        weapon_one: "Gauntlets",
        weapon_two: "Katars",
        strength: "7",
        dexterity: "5",
        defense: "4",
        speed: "6",
    },
    {
        legend_id: 39,
        legend_name_key: "sidra",
        bio_name: "Sidra",
        bio_aka: "The Corsair Queen",
        weapon_one: "Cannon",
        weapon_two: "Sword",
        strength: "6",
        dexterity: "4",
        defense: "6",
        speed: "6",
    },
    {
        legend_id: 40,
        legend_name_key: "xull",
        bio_name: "Xull",
        bio_aka: "The Iron Commander",
        weapon_one: "Cannon",
        weapon_two: "Axe",
        strength: "9",
        dexterity: "4",
        defense: "5",
        speed: "4",
    },
    {
        legend_id: 42,
        legend_name_key: "kaya",
        bio_name: "Kaya",
        bio_aka: "The Natural",
        weapon_one: "Spear",
        weapon_two: "Bow",
        strength: "4",
        dexterity: "4",
        defense: "7",
        speed: "7",
    },
    {
        legend_id: 41,
        legend_name_key: "isaiah",
        bio_name: "Isaiah",
        bio_aka: "The Specialist",
        weapon_one: "Cannon",
        weapon_two: "Blasters",
        strength: "5",
        dexterity: "6",
        defense: "7",
        speed: "4",
    },
    {
        legend_id: 43,
        legend_name_key: "jiro",
        bio_name: "Jiro",
        bio_aka: "The Shogun's Shadow",
        weapon_one: "Sword",
        weapon_two: "Scythe",
        strength: "5",
        dexterity: "7",
        defense: "3",
        speed: "7",
    },
    {
        legend_id: 44,
        legend_name_key: "lin fei",
        bio_name: "Lin Fei",
        bio_aka: "The Teacher",
        weapon_one: "Katars",
        weapon_two: "Cannon",
        strength: "3",
        dexterity: "8",
        defense: "4",
        speed: "7",
    },
    {
        legend_id: 45,
        legend_name_key: "zariel",
        bio_name: "Zariel",
        bio_aka: "The Celestial",
        weapon_one: "Gauntlets",
        weapon_two: "Bow",
        strength: "7",
        dexterity: "4",
        defense: "7",
        speed: "4",
    },
    {
        legend_id: 46,
        legend_name_key: "rayman",
        bio_name: "Rayman",
        bio_aka: "Champion of the Glade of Dreams",
        weapon_one: "Gauntlets",
        weapon_two: "Axe",
        strength: "5",
        dexterity: "5",
        defense: "6",
        speed: "6",
    },
    {
        legend_id: 47,
        legend_name_key: "dusk",
        bio_name: "Dusk",
        bio_aka: "The Renegade Sorcerer",
        weapon_one: "Spear",
        weapon_two: "Orb",
        strength: "6",
        dexterity: "7",
        defense: "4",
        speed: "5",
    },
    {
        legend_id: 48,
        legend_name_key: "fait",
        bio_name: "Fait",
        bio_aka: "The Star Speaker",
        weapon_one: "Scythe",
        weapon_two: "Orb",
        strength: "7",
        dexterity: "4",
        defense: "4",
        speed: "7",
    },
    {
        legend_id: 49,
        legend_name_key: "thor",
        bio_name: "Thor",
        bio_aka: "The God of Thunder",
        weapon_one: "Grapple Hammer",
        weapon_two: "Orb",
        strength: "6",
        dexterity: "4",
        defense: "7",
        speed: "5",
    },
    {
        legend_id: 50,
        legend_name_key: "petra",
        bio_name: "Petra",
        bio_aka: "The Darkheart",
        weapon_one: "Gauntlets",
        weapon_two: "Orb",
        strength: "8",
        dexterity: "4",
        defense: "4",
        speed: "6",
    },
    {
        legend_id: 51,
        legend_name_key: "vector",
        bio_name: "Vector",
        bio_aka: "The Superbot",
        weapon_one: "Rocket Lance",
        weapon_two: "Bow",
        strength: "5",
        dexterity: "4",
        defense: "6",
        speed: "7",
    },
    {
        legend_id: 52,
        legend_name_key: "volkov",
        bio_name: "Volkov",
        bio_aka: "The Vampire King",
        weapon_one: "Axe",
        weapon_two: "Scythe",
        strength: "4",
        dexterity: "8",
        defense: "6",
        speed: "4",
    },
    {
        legend_id: 53,
        legend_name_key: "onyx",
        bio_name: "Onyx",
        bio_aka: "The Gargoyle",
        weapon_one: "Gauntlets",
        weapon_two: "Cannon",
        strength: "5",
        dexterity: "4",
        defense: "8",
        speed: "5",
    },
    {
        legend_id: 54,
        legend_name_key: "jaeyun",
        bio_name: "Jaeyun",
        bio_aka: "The Sellsword",
        weapon_one: "Sword",
        weapon_two: "Greatsword",
        strength: "6",
        dexterity: "5",
        defense: "5",
        speed: "6",
    },
    {
        legend_id: 55,
        legend_name_key: "mako",
        bio_name: "Mako",
        bio_aka: "The Shark",
        weapon_one: "Katars",
        weapon_two: "Greatsword",
        strength: "6",
        dexterity: "4",
        defense: "4",
        speed: "8",
    },
    {
        legend_id: 56,
        legend_name_key: "magyar",
        bio_name: "Magyar",
        bio_aka: "The Spectral Guardian",
        weapon_one: "Grapple Hammer",
        weapon_two: "Greatsword",
        strength: "5",
        dexterity: "4",
        defense: "9",
        speed: "4",
    },
    {
        legend_id: 57,
        legend_name_key: "reno",
        bio_name: "Reno",
        bio_aka: "The Bounty Hunter",
        weapon_one: "Blasters",
        weapon_two: "Orb",
        strength: "4",
        dexterity: "7",
        defense: "6",
        speed: "5",
    },
    {
        legend_id: 58,
        legend_name_key: "munin",
        bio_name: "Munin",
        bio_aka: "The Raven",
        weapon_one: "Bow",
        weapon_two: "Scythe",
        strength: "5",
        dexterity: "6",
        defense: "4",
        speed: "7",
    },
    {
        legend_id: 59,
        legend_name_key: "arcadia",
        bio_name: "Arcadia",
        bio_aka: "The Faerie Queen",
        weapon_one: "Spear",
        weapon_two: "Greatsword",
        strength: "7",
        dexterity: "7",
        defense: "4",
        speed: "4",
    },
    {
        legend_id: 60,
        legend_name_key: "ezio",
        bio_name: "Ezio",
        bio_aka: "The Master Assassin",
        weapon_one: "Sword",
        weapon_two: "Orb",
        strength: "5",
        dexterity: "7",
        defense: "4",
        speed: "6",
    },
    {
        legend_id: 63,
        legend_name_key: "tezca",
        bio_name: "Tezca",
        bio_aka: "The Luchador",
        weapon_one: "Battle Boots",
        weapon_two: "Gauntlets",
        strength: "7",
        dexterity: "5",
        defense: "5",
        speed: "5",
    },
    {
        legend_id: 62,
        legend_name_key: "thea",
        bio_name: "Thea",
        bio_aka: "The Speedster",
        weapon_one: "Battle Boots",
        weapon_two: "Rocket Lance",
        strength: "4",
        dexterity: "6",
        defense: "3",
        speed: "9",
    },
    {
        legend_id: 17,
        legend_name_key: "redraptor",
        bio_name: "Red Raptor",
        bio_aka: "The Last Sentai",
        weapon_one: "Battle Boots",
        weapon_two: "Orb",
        strength: "6",
        dexterity: "6",
        defense: "4",
        speed: "6",
    },
    {
        legend_id: 27,
        legend_name_key: "loki",
        bio_name: "Loki",
        bio_aka: "The Mastermind",
        weapon_one: "Katars",
        weapon_two: "Scythe",
        strength: "4",
        dexterity: "8",
        defense: "5",
        speed: "5",
    },
]

export const legendsMap = arrayToMap(legends, "legend_id")

export type FullLegend = Legend & {
    stats?: PlayerStats["legends"][number]
    ranked?: PlayerRanked["legends"][number]
}

export const getFullLegends = (
    stats: PlayerStats["legends"],
    ranked?: PlayerRanked["legends"],
    keepUnplayedLegends = true,
) => {
    const statsMap = arrayToMap(stats ?? [], "legend_id")
    const rankedMap = arrayToMap(ranked ?? [], "legend_id")
    const fullLegends = legends.reduce<Record<number, FullLegend>>(
        (acc, legend) => (
            (acc[legend.legend_id] = {
                ...legend,
                stats: statsMap[legend.legend_id],
                ranked: rankedMap[legend.legend_id],
            }),
            acc
        ),
        {},
    )

    return keepUnplayedLegends
        ? Object.values(fullLegends)
        : Object.values(fullLegends).filter((legend) => legend.stats?.games)
}

export const defaultLegendAccumulativeData = {
    matchtime: 0,
    kos: 0,
    falls: 0,
    suicides: 0,
    teamkos: 0,
    damageDealt: 0,
    damageTaken: 0,
}

export const getLegendsAccumulativeData = (fullLegends: FullLegend[]) => {
    return fullLegends.reduce<{
        matchtime: number
        kos: number
        falls: number
        suicides: number
        teamkos: number
        damageDealt: number
        damageTaken: number
    }>((acc, legend) => {
        if (!legend.stats) return acc

        return {
            matchtime: acc.matchtime + legend.stats.matchtime,
            kos: acc.kos + legend.stats.kos,
            falls: acc.falls + legend.stats.falls,
            suicides: acc.suicides + legend.stats.suicides,
            teamkos: acc.teamkos + legend.stats.teamkos,
            damageDealt: acc.damageDealt + parseInt(legend.stats.damagedealt),
            damageTaken: acc.damageTaken + parseInt(legend.stats.damagetaken),
        }
    }, defaultLegendAccumulativeData)
}

export type FullWeapon = {
    weapon: string
    legends: FullLegend[]
}

export const getFullWeapons = (legends: FullLegend[]): FullWeapon[] => {
    const weaponsMap = legends.reduce(
        (acc, legend) => {
            const legendData = legendsMap[legend.legend_id]
            acc[legendData.weapon_one] = [
                ...(acc[legendData.weapon_one] ?? []),
                legend,
            ]
            acc[legendData.weapon_two] = [
                ...(acc[legendData.weapon_two] ?? []),
                legend,
            ]
            return acc
        },
        {} as Record<Weapon, FullLegend[]>,
    )

    const weapons = Object.entries(weaponsMap).map(([weapon, legends]) => ({
        weapon,
        legends,
    }))

    return weapons
}

export const defaultWeaponlessData = {
    unarmed: {
        kos: 0,
        damageDealt: 0,
        matchtime: 0,
    },
    gadgets: {
        kos: 0,
        damageDealt: 0,
    },
    throws: {
        kos: 0,
        damageDealt: 0,
    },
}

export const getWeaponlessData = (legends: FullLegend[]) => {
    return legends.reduce(
        (acc, legend) => ({
            unarmed: {
                kos: acc.unarmed.kos + (legend.stats?.kounarmed ?? 0),
                damageDealt:
                    acc.unarmed.damageDealt +
                    parseInt(legend.stats?.damageunarmed ?? "0"),
                matchtime:
                    acc.unarmed.matchtime +
                    (legend.stats
                        ? legend.stats.matchtime -
                          legend.stats.timeheldweaponone -
                          legend.stats.timeheldweapontwo
                        : 0),
            },
            gadgets: {
                kos: acc.gadgets.kos + (legend.stats?.kogadgets ?? 0),
                damageDealt:
                    acc.gadgets.damageDealt +
                    parseInt(legend.stats?.damagegadgets ?? "0"),
            },
            throws: {
                kos: acc.throws.kos + (legend.stats?.kothrownitem ?? 0),
                damageDealt:
                    acc.throws.damageDealt +
                    parseInt(legend.stats?.damagethrownitem ?? "0"),
            },
        }),
        defaultWeaponlessData,
    )
}

export const getWeaponsAccumulativeData = (weapons: FullWeapon[]) => {
    return weapons.map((weapon) => {
        const data = weapon.legends.reduce(
            (acc, legend) => {
                const isWeaponOne = legend.weapon_one === weapon.weapon
                return {
                    games: acc.games + (legend.stats?.games ?? 0),
                    wins: acc.wins + (legend.stats?.wins ?? 0),
                    kos:
                        acc.kos +
                        ((isWeaponOne
                            ? legend.stats?.koweaponone
                            : legend.stats?.koweapontwo) ?? 0),
                    damageDealt:
                        acc.damageDealt +
                        parseInt(
                            (isWeaponOne
                                ? legend.stats?.damageweapontwo
                                : legend.stats?.damageweapontwo) ?? "0",
                        ),
                    matchtime:
                        acc.matchtime +
                        ((isWeaponOne
                            ? legend.stats?.timeheldweaponone
                            : legend.stats?.timeheldweapontwo) ?? 0),
                    level: acc.level + (legend.stats?.level ?? 0),
                    xp: acc.xp + (legend.stats?.xp ?? 0),
                }
            },
            {
                games: 0,
                wins: 0,
                kos: 0,
                damageDealt: 0,
                matchtime: 0,
                level: 0,
                xp: 0,
            },
        )
        return {
            ...weapon,
            ...data,
        }
    })
}
