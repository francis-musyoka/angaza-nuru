import type { ReactNode } from "react";

type Tone = "terracotta" | "ocean" | "sunset";

const toneClass: Record<Tone, string> = {
    terracotta: "bg-terracotta text-(--fg-on-warm)",
    ocean: "bg-ocean text-cream",
    sunset: "bg-sunset-deep text-(--fg-on-warm)",
};

export function IconChip({
    icon,
    tone = "terracotta",
    className = "",
}: {
    icon: ReactNode;
    tone?: Tone;
    className?: string;
}) {
    return (
        <span
            className={`inline-flex h-12 w-12 items-center justify-center rounded-md ${toneClass[tone]} ${className}`.trim()}
            aria-hidden="true"
        >
            {icon}
        </span>
    );
}
