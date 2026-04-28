import { Eyebrow } from "@/components/ui/Eyebrow";
import { ourStory } from "@/content/our-story";

// Prototype SVG icons, one per value (terracotta / ocean / sunset-deep tones)
const valueGlyphs = [
    {
        bg: "rgba(200, 85, 61, 0.10)",
        color: "var(--terracotta-deep)",
        svg: (
            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 21s-7-4.5-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-7 11-7 11h-4Z" />
            </svg>
        ),
    },
    {
        bg: "rgba(30, 58, 95, 0.10)",
        color: "var(--ocean)",
        svg: (
            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 21v-3a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v3" />
                <circle cx="12" cy="8" r="4" />
            </svg>
        ),
    },
    {
        bg: "rgba(232, 168, 124, 0.22)",
        color: "var(--sunset-deep)",
        svg: (
            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M2 12h6l2-3 4 6 2-3h6" />
            </svg>
        ),
    },
];

export function ValuesStrip() {
    const { values } = ourStory;

    return (
        <section className="bg-cream-deep py-24">
            <div className="mx-auto max-w-300 px-8">
                {/* Section heading */}
                <div className="mb-14 text-center">
                    <Eyebrow>How we work</Eyebrow>
                    <h2 className="mx-auto mt-3 max-w-190 font-display text-[clamp(36px,3.8vw,52px)] font-normal leading-[1.1] tracking-[-0.02em] text-charcoal">
                        Three rules we have tried, mostly, to{" "}
                        <em className="text-terracotta">keep.</em>
                    </h2>
                </div>

                {/* 3-column values grid */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {values.map((value, i) => {
                        const glyph = valueGlyphs[i];
                        return (
                            <div key={value.title}>
                                <span
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-[12px]"
                                    style={{ background: glyph.bg, color: glyph.color }}
                                    aria-hidden="true"
                                >
                                    {glyph.svg}
                                </span>
                                <h3 className="mt-4.5 mb-2.5 font-display text-[24px] font-normal leading-tight tracking-[-0.005em] text-charcoal">
                                    {value.title}
                                </h3>
                                <p className="m-0 text-[15px] leading-[1.6] text-charcoal-soft">
                                    {value.body}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
