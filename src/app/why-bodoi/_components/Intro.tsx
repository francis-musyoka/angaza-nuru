import { Eyebrow } from "@/components/ui/Eyebrow";
import { whyBodoi } from "@/content/why-bodoi";

export function Intro() {
    const { intro } = whyBodoi;

    return (
        <section className="bg-cream py-24 pb-20">
            <div className="mx-auto grid max-w-300 items-start gap-16 px-8 lg:grid-cols-[1fr_1.4fr]">
                {/* Left: heading */}
                <div>
                    <Eyebrow>{intro.eyebrow}</Eyebrow>
                    <h2 className="mt-3 font-display text-[clamp(34px,3.6vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-balance text-charcoal">
                        {intro.headingParts.before}
                        <em className="text-terracotta italic">{intro.headingParts.em}</em>
                        {intro.headingParts.after}
                    </h2>
                </div>

                {/* Right: paragraphs */}
                <div>
                    {intro.paragraphs.map((para, i) => {
                        if ("strongSuffix" in para && para.strongSuffix) {
                            return (
                                <p
                                    key={i}
                                    className="mb-4.5 max-w-155 text-[17px] leading-[1.7] text-charcoal-soft"
                                >
                                    {para.text}{" "}
                                    <strong className="text-charcoal font-semibold">
                                        {para.strongSuffix}
                                    </strong>
                                    {para.afterStrong}
                                </p>
                            );
                        }
                        return (
                            <p
                                key={i}
                                className={`mb-4.5 max-w-155 text-[17px] leading-[1.7] text-charcoal-soft${para.isFirst ? " [&::first-letter]:float-left [&::first-letter]:pr-3 [&::first-letter]:pt-1.5 [&::first-letter]:font-display [&::first-letter]:text-[64px] [&::first-letter]:leading-[0.9] [&::first-letter]:text-terracotta" : ""}`}
                            >
                                {para.text}
                            </p>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
