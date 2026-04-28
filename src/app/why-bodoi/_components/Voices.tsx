import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { whyBodoi } from "@/content/why-bodoi";

export function Voices() {
    const { voices } = whyBodoi;

    return (
        <section className="bg-cream-soft py-24">
            <div className="mx-auto max-w-300 px-8">
                {/* Section header */}
                <div className="mb-12 max-w-180">
                    <Eyebrow>Voices from the village</Eyebrow>
                    <h2 className="mt-3 font-display text-[clamp(34px,3.6vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-charcoal">
                        Bodoi in the words of the people who{" "}
                        <em className="text-terracotta italic">live there.</em>
                    </h2>
                </div>

                {/* 2-column grid */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {voices.map((voice) => (
                        <article
                            key={voice.author}
                            className="flex flex-col rounded-[22px] border border-(--border-1) bg-(--bg-raised) p-8 shadow-1"
                        >
                            {/* Opening quote mark */}
                            <div
                                className="font-display text-[56px] text-terracotta"
                                style={{ lineHeight: 0.4 }}
                            >
                                &ldquo;
                            </div>

                            {/* Quote text */}
                            <q
                                className="mt-4.5 flex-1 font-display text-[22px] font-normal leading-[1.35] tracking-[-0.005em] text-charcoal"
                                style={{ quotes: "none" }}
                            >
                                {voice.quote}{" "}
                                <em className="text-terracotta italic">{voice.quoteEm}</em>
                                {voice.quoteAfter}
                            </q>

                            {/* Byline */}
                            <div className="mt-6 flex items-center gap-3 border-t border-(--border-1) pt-5">
                                <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-sand-300">
                                    <Image
                                        src={voice.avatar}
                                        alt={voice.author}
                                        width={44}
                                        height={44}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="text-[15px] font-semibold text-charcoal">
                                        {voice.author}
                                    </div>
                                    <div className="mt-0.5 text-[13px] text-charcoal-mute">
                                        {voice.role}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
