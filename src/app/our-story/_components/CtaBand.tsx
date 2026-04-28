import Link from "next/link";
import { Pattern } from "@/components/ui/Pattern";
import { ourStory } from "@/content/our-story";

export function CtaBand() {
    const { cta } = ourStory;

    return (
        <section
            className="relative overflow-hidden bg-terracotta py-24 text-center"
            style={{ color: "#FBF7EE" }}
        >
            <Pattern kind="rays" opacity={0.18} className="[background-size:96px]" />

            <div className="relative mx-auto max-w-275 px-8">
                {/* Eyebrow — cream-soft color on terracotta bg */}
                <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--cream-soft)" }}
                >
                    {cta.eyebrow}
                </span>

                <h2
                    className="mx-auto mt-3 mb-4 max-w-190 font-display text-[clamp(36px,4.2vw,60px)] font-normal leading-[1.05] tracking-[-0.02em] text-balance"
                    style={{ color: "#FBF7EE" }}
                >
                    {cta.headline}{" "}
                    <em className="text-cream-soft">{cta.headlineEm}</em>
                </h2>

                <p
                    className="mx-auto mb-7 max-w-140 text-lg"
                    style={{ color: "rgba(251, 247, 238, 0.92)" }}
                >
                    {cta.body}
                </p>

                <div className="inline-flex flex-wrap justify-center gap-3">
                    {/* Primary: cream button */}
                    <Link
                        href="/#donate"
                        className="inline-flex items-center gap-2 rounded-pill px-7 py-4 text-base font-semibold transition-all duration-240 no-underline"
                        style={{
                            background: "var(--cream-soft)",
                            color: "var(--charcoal)",
                        }}
                    >
                        Sponsor a child &rarr;
                    </Link>

                    {/* Secondary: outline-cream button */}
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 rounded-pill px-7 py-4 text-base font-semibold transition-all duration-240 no-underline"
                        style={{
                            background: "transparent",
                            color: "var(--cream)",
                            border: "1.5px solid rgba(251,247,238,0.6)",
                        }}
                    >
                        Plan a visit
                    </Link>
                </div>
            </div>
        </section>
    );
}
