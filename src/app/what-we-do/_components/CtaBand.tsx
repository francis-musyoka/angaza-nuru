import Link from "next/link";
import { Pattern } from "@/components/ui/Pattern";
import { whatWeDo } from "@/content/what-we-do";

export function CtaBand() {
    const { cta } = whatWeDo;

    return (
        <section className="relative overflow-hidden bg-terracotta py-24 text-center text-cream">
            <Pattern kind="rays" opacity={0.18} />

            <div className="relative mx-auto max-w-275 px-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-cream-soft">
                    {cta.eyebrow}
                </span>
                <h2 className="mt-3 mb-4 mx-auto max-w-190 font-display text-[clamp(36px,4.2vw,60px)] font-normal leading-[1.05] tracking-[-0.02em] text-balance text-cream">
                    {cta.headline.before}
                    <em className="text-cream-soft italic">{cta.headline.em}</em>
                </h2>
                <p className="mx-auto mb-7 max-w-140 text-lg text-[rgba(251,247,238,0.92)]">
                    {cta.body}
                </p>

                <div className="inline-flex flex-wrap justify-center gap-3">
                    {/* btn-cream */}
                    <Link
                        href="/#donate"
                        className="inline-flex items-center gap-2 rounded-pill bg-cream-soft text-charcoal font-body font-semibold px-7 py-4 text-base no-underline transition-all duration-240 hover:bg-white"
                    >
                        Sponsor a child →
                    </Link>
                    {/* btn-outline-cream */}
                    <Link
                        href="/why-bodoi"
                        className="inline-flex items-center gap-2 rounded-pill bg-transparent text-cream border-[1.5px] border-[rgba(251,247,238,0.6)] font-body font-semibold px-7 py-4 text-base no-underline transition-all duration-240 hover:bg-[rgba(251,247,238,0.12)]"
                    >
                        Why Bodoi
                    </Link>
                </div>
            </div>
        </section>
    );
}
