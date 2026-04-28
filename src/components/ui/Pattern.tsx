type Kind = "rays" | "waves";

export function Pattern({
    kind,
    opacity = 0.08,
    className = "",
}: {
    kind: Kind;
    opacity?: number;
    className?: string;
}) {
    const url = kind === "rays" ? "/assets/pattern-rays.svg" : "/assets/pattern-waves.svg";
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 ${className}`.trim()}
            style={{
                backgroundImage: `url(${url})`,
                backgroundRepeat: "repeat",
                opacity,
            }}
        />
    );
}
