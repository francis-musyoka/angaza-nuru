import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ourStory } from "@/content/our-story";

export function Founders() {
    const { founders } = ourStory;

    return (
        <section className="bg-cream py-24">
            <div className="mx-auto max-w-300 px-8">
                {/* Section heading */}
                <div className="mb-12 max-w-180">
                    <Eyebrow>The people of Bodoi</Eyebrow>
                    <h2 className="mt-3 font-display text-[clamp(36px,3.8vw,52px)] font-normal leading-[1.1] tracking-[-0.02em] text-charcoal">
                        The work has always belonged to a few stubborn neighbours.
                    </h2>
                </div>

                {/* 3-up founder cards */}
                <div className="grid gap-7 lg:grid-cols-3">
                    {founders.map((founder) => (
                        <article
                            key={founder.name}
                            className="overflow-hidden rounded-3xl border border-(--border-1) shadow-1"
                            style={{ background: "var(--bg-raised)" }}
                        >
                            {/* Portrait */}
                            <div
                                className="overflow-hidden"
                                style={{ aspectRatio: "4/5", background: "var(--sand-200)" }}
                            >
                                <Image
                                    src={founder.image.src}
                                    alt={founder.image.alt}
                                    width={founder.image.width ?? 600}
                                    height={founder.image.height ?? 750}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Body */}
                            <div className="px-6.5 pt-6 pb-7">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-terracotta-deep">
                                    {founder.role}
                                </p>
                                <h3 className="mt-1.5 mb-2.5 font-display text-[24px] font-normal leading-tight tracking-[-0.01em] text-charcoal">
                                    {founder.name}
                                </h3>
                                <p className="m-0 text-[14.5px] leading-[1.6] text-charcoal-soft">
                                    {founder.bio}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
