import type { ReactNode } from "react";

type Tone = "cream" | "ocean" | "terracotta";

const toneClass: Record<Tone, string> = {
    cream: "bg-cream-soft text-charcoal border border-(--border-1)",
    ocean: "bg-ocean text-cream",
    terracotta: "bg-terracotta text-(--fg-on-warm)",
};

export function StampPill({
    children,
    tone = "cream",
    className = "",
}: {
    children: ReactNode;
    tone?: Tone;
    className?: string;
}) {
    return (
        <span
            className={`inline-flex items-center gap-2 rounded-pill px-4 py-2 text-sm font-medium shadow-1 ${toneClass[tone]} ${className}`.trim()}
        >
            {children}
        </span>
    );
}
