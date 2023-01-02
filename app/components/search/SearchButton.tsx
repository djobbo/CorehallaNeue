import { Kbd } from "@ch/ui/base/Kbd"
import { SearchIcon } from "@ch/ui/icons"
import { cn } from "@ch/common/helpers/classnames"
import { useDevice } from "@ch/common/hooks/useDevice"
import { useKBar } from "kbar"

type SearchButtonProps = {
    className?: string
    bg?: string
    customWidth?: boolean
}

export const SearchButton = ({
    className,
    bg,
    customWidth,
}: SearchButtonProps) => {
    const { query } = useKBar()
    const device = useDevice()

    return (
        <button
            type="button"
            className={cn(
                className,
                "rounded-xl py-2 px-4 cursor-text text-sm flex items-center justify-between border border-bg text-textVar1 hover:text-text hover:border-textVar1",
                {
                    "w-60": !customWidth,
                },
                bg ?? "bg-bgVar2",
            )}
            onClick={query.toggle}
        >
            <span>Search player...</span>
            {["mac", "pc"].includes(device) && (
                <span className="flex items-center gap-1 text-textVar1">
                    {device === "mac" ? <Kbd>⌘</Kbd> : <Kbd>Ctrl</Kbd>}
                    <Kbd>k</Kbd>
                </span>
            )}
        </button>
    )
}

type SearchButtonIconProps = {
    className?: string
    size?: number
}

export const SearchButtonIcon = ({
    className,
    size,
}: SearchButtonIconProps) => {
    const { query } = useKBar()

    return (
        <button type="button" className={className} onClick={query.toggle}>
            <SearchIcon size={size ?? 20} />
        </button>
    )
}
