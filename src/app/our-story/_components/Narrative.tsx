import Image from "next/image";
import { ourStory } from "@/content/our-story";

type NarrativeChapter = (typeof ourStory.narrative)[number] & {
    titleEmSuffix?: string;
};

export function Narrative() {
    const narrative = ourStory.narrative as unknown as NarrativeChapter[];

    return (
        <section className="bg-cream py-24 pb-22">
            <div className="mx-auto max-w-275 px-8">
                {narrative.map((c, idx) => (
                    <article
                        key={c.num}
                        className={[
                            "grid gap-12 lg:grid-cols-[200px_1fr]",
                            "py-14 border-t border-(--border-1)",
                            idx === 0 ? "border-t-0 pt-0" : "",
                        ]
                            .filter(Boolean)
                            .join(" ")}
                    >
                        {/* Left rail: large chapter number + small label */}
                        <div className="flex flex-col">
                            <span className="font-display text-[64px] font-normal leading-none tracking-[-0.02em] text-terracotta">
                                {c.num}
                            </span>
                            <small className="mt-3.5 block font-body text-xs font-semibold uppercase tracking-widest text-charcoal-mute not-italic">
                                {c.label}
                            </small>
                        </div>

                        {/* Right column: title + paragraphs + optional figure */}
                        <div>
                            <h2 className="mb-5 max-w-145 font-display text-[clamp(30px,3vw,42px)] font-normal leading-[1.12] tracking-[-0.02em] text-charcoal">
                                {c.titleEmSuffix ? (
                                    <>
                                        {c.title.slice(0, c.title.length - c.titleEmSuffix.length)}
                                        <em className="text-terracotta">{c.titleEmSuffix}</em>
                                    </>
                                ) : (
                                    c.title
                                )}
                            </h2>

                            {c.paragraphs.map((p, i) => (
                                <p
                                    key={i}
                                    className="mb-4 max-w-155 text-[17px] leading-[1.65] text-charcoal-soft last:mb-0"
                                >
                                    {p}
                                </p>
                            ))}

                            {c.figure && (
                                <>
                                    <div
                                        className="mt-7 mb-2 max-w-180 overflow-hidden rounded-lg"
                                        style={{
                                            aspectRatio: "16/10",
                                            background: "var(--sand-200)",
                                            boxShadow: "var(--shadow-2)",
                                        }}
                                    >
                                        <Image
                                            src={c.figure.src}
                                            alt={c.figure.alt}
                                            width={1440}
                                            height={900}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <p className="mt-2.5 max-w-180 text-[13px] italic text-charcoal-mute">
                                        {c.figure.caption}
                                    </p>
                                </>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
