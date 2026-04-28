import { Eyebrow } from "@/components/ui/Eyebrow";
import { ourStory } from "@/content/our-story";

export function Timeline() {
    const { timeline } = ourStory;

    return (
        <section className="bg-cream-soft py-24">
            <div className="mx-auto max-w-275 px-8">
                {/* Section heading */}
                <div className="mb-14 max-w-180">
                    <Eyebrow>A short history</Eyebrow>
                    <h2 className="mt-3 mb-3.5 font-display text-[clamp(36px,3.8vw,52px)] font-normal leading-[1.1] tracking-[-0.02em] text-charcoal">
                        Fifteen years, told in <em className="text-terracotta">small steps</em>.
                    </h2>
                </div>

                {/* Timeline list — vertical line runs through col-2 */}
                <div className="relative">
                    {/* Vertical hairline: left: 100px = year col width */}
                    <div
                        aria-hidden="true"
                        className="absolute w-px bg-(--border-1)"
                        style={{ left: "100px", top: "16px", bottom: "16px" }}
                    />

                    {timeline.map((entry, i) => (
                        <div
                            key={i}
                            className="grid items-start gap-6 py-4.5"
                            style={{ gridTemplateColumns: "100px 32px 1fr" }}
                        >
                            {/* Year */}
                            <div className="font-display text-[26px] font-normal leading-none tracking-[-0.01em] text-terracotta">
                                {entry.year}
                            </div>

                            {/* Dot — centred in the 32px column, on top of the line */}
                            <div
                                className="relative z-[1] mt-1.5 ml-[9px] h-3.5 w-3.5 rounded-full"
                                style={{
                                    background: i % 2 === 0 ? "var(--terracotta)" : "var(--ocean)",
                                    boxShadow: "0 0 0 4px var(--cream-soft)",
                                }}
                            />

                            {/* Body */}
                            <div>
                                <h4 className="mb-1.5 font-display text-[22px] font-normal leading-tight tracking-[-0.005em] text-charcoal">
                                    {entry.title}
                                </h4>
                                <p className="m-0 max-w-155 text-[15px] leading-[1.55] text-charcoal-soft">
                                    {entry.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
