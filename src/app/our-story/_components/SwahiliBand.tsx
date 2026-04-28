import { ourStory } from "@/content/our-story";

export function SwahiliBand() {
    const { swahiliBand } = ourStory;

    return (
        <section className="relative overflow-hidden bg-cream-deep py-22 text-center">
            <div className="mx-auto max-w-220 px-8">
                {/* Big display word */}
                <p className="m-0 font-display text-[clamp(72px,8vw,132px)] font-normal leading-none tracking-[-0.03em] text-terracotta">
                    Angaza{" "}
                    <em className="text-ocean">Nuru.</em>
                </p>

                {/* Gloss line */}
                <p className="mt-4.5 text-sm font-semibold uppercase tracking-[0.12em] text-charcoal-mute">
                    {swahiliBand.gloss}
                </p>

                {/* Meaning */}
                <p className="mt-6 mx-auto max-w-140 font-display text-[22px] leading-[1.4] tracking-[-0.005em] text-charcoal">
                    {swahiliBand.meaning}
                </p>
            </div>
        </section>
    );
}
