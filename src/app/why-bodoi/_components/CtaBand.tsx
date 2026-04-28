import { Button } from "@/components/ui/Button";
import { Pattern } from "@/components/ui/Pattern";
import { whyBodoi } from "@/content/why-bodoi";

export function CtaBand() {
    const { cta } = whyBodoi;

    return (
        <section className="relative overflow-hidden bg-terracotta py-24 text-center text-cream">
            <Pattern
                kind="rays"
                opacity={0.18}
                className="[background-size:96px]"
            />

            <div className="relative mx-auto max-w-275 px-8">
                {/* Eyebrow — cream-soft on warm bg */}
                <span className="text-xs font-semibold uppercase tracking-widest text-cream-soft">
                    {cta.eyebrow}
                </span>

                <h2 className="mx-auto mt-3 mb-4 max-w-190 font-display text-[clamp(36px,4.2vw,60px)] font-normal leading-[1.05] tracking-[-0.02em] text-balance text-cream">
                    {cta.headingParts.before}
                    <em className="text-cream-soft italic">{cta.headingParts.em}</em>
                    {cta.headingParts.after}
                </h2>

                <p className="mx-auto mb-7 max-w-140 text-lg text-[rgba(251,247,238,0.92)]">
                    {cta.body}
                </p>

                <div className="inline-flex flex-wrap justify-center gap-3">
                    <Button as="link" href="/#donate" variant="cream" size="lg">
                        Sponsor a child →
                    </Button>
                    <Button
                        as="link"
                        href="/our-story"
                        variant="ghost"
                        size="lg"
                        className="border-[rgba(251,247,238,0.6)] text-cream hover:bg-[rgba(251,247,238,0.12)] hover:text-cream"
                    >
                        Read our story
                    </Button>
                </div>
            </div>
        </section>
    );
}
