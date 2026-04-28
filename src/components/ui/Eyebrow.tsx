import type { ReactNode } from "react";

type Tone = "light" | "dark" | "warm";

const toneClass: Record<Tone, string> = {
    light: "text-terracotta-deep",
    dark: "text-sunset",
    warm: "text-cream-soft",
};

export function Eyebrow({
    children,
    tone = "light",
    className = "",
}: {
    children: ReactNode;
    tone?: Tone;
    className?: string;
}) {
    return (
        <span
            className={`text-xs font-semibold uppercase tracking-widest ${toneClass[tone]} ${className}`.trim()}
        >
            {children}
        </span>
    );
}
