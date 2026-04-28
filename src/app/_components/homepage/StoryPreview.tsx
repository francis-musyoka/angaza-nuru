import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { homepage } from "@/content/homepage";

export function StoryPreview() {
    const { storyPreview } = homepage;
    const { quote, byline, image, cta } = storyPreview;

    return (
        <section className="relative overflow-hidden bg-cream py-25 lg:py-24 sm:py-16">
            {/* Decorative rays bottom-left */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-30 -left-30 h-120 w-120 opacity-[0.28]"
                style={{
                    backgroundImage: "url(/assets/pattern-rays.svg)",
                    backgroundSize: "80px",
                    backgroundRepeat: "repeat",
                }}
            />

            <div className="relative mx-auto max-w-275 px-5 lg:px-8">
                <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.15fr]">
                    {/* Photo column */}
                    <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-3">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            sizes="(min-width:1024px) 50vw, 100vw"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Copy column */}
                    <div>
                        <Eyebrow>{storyPreview.eyebrow}</Eyebrow>

                        {/* Pull-quote */}
                        <p className="mb-5.5 mt-3.5 font-display text-[clamp(26px,2.8vw,36px)] font-normal leading-[1.28] tracking-[-0.01em] text-charcoal">
                            <span
                                aria-hidden="true"
                                className="mr-1 font-display text-[1.2em] leading-none text-terracotta"
                            >
                                &#x201C;
                            </span>
                            {quote.before}
                            <em className="text-terracotta">{quote.highlight}</em>
                            {quote.after}
                            <span aria-hidden="true">&#x201D;</span>
                        </p>

                        {/* Byline */}
                        <div className="flex items-center gap-3.5 border-t border-(--border-1) pt-4.5 mt-5.5">
                            <Image
                                src={byline.avatar.src}
                                alt={byline.avatar.alt}
                                width={byline.avatar.width}
                                height={byline.avatar.height}
                                className="h-12 w-12 flex-shrink-0 rounded-full object-cover"
                            />
                            <div>
                                <div className="text-[15px] font-semibold text-charcoal">
                                    {byline.name}
                                </div>
                                <div className="mt-0.5 text-[13px] text-charcoal-mute">
                                    {byline.role}
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-5.5">
                            <Button as="link" href={cta.href} variant="ghost" size="md">
                                {cta.label}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
