import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ourStory } from "@/content/our-story";

export function Hero() {
    const { hero } = ourStory;

    return (
        <section className="relative overflow-hidden pt-14" style={{ background: "linear-gradient(180deg, var(--cream-soft), var(--cream))" }}>
            {/* Rays pattern — top-right */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-115 w-115 opacity-[0.32]"
                style={{
                    backgroundImage: "url(/assets/pattern-rays.svg)",
                    backgroundSize: "80px",
                    backgroundRepeat: "repeat",
                }}
            />

            <div className="relative mx-auto max-w-300 px-8">
                {/* Breadcrumb */}
                <nav className="relative mb-7 text-[13px] text-charcoal-mute" aria-label="Breadcrumb">
                    <Link href="/" className="text-charcoal-mute transition-colors hover:text-terracotta-deep no-underline">
                        Home
                    </Link>
                    <span className="mx-2 opacity-50">/</span>
                    <span className="text-charcoal-soft">Our story</span>
                </nav>

                {/* Two-column grid — both columns top-align so the text starts at the
                    same level as the photo top (matches the why-bodoi hero pattern). */}
                <div className="relative grid items-start gap-14 pb-16 min-[900px]:grid-cols-[1.1fr_1fr]">
                    {/* Left: copy */}
                    <div>
                        <Eyebrow>{hero.eyebrow}</Eyebrow>

                        <h1 className="mt-3 mb-5.5 font-display text-[clamp(48px,5.5vw,88px)] font-normal leading-[1.0] tracking-[-0.02em] text-balance text-charcoal">
                            It started with one Saturday lunch under a{" "}
                            <em className="italic text-terracotta">mango tree.</em>
                        </h1>

                        <p className="font-display text-[clamp(20px,1.8vw,24px)] font-normal leading-[1.45] tracking-[-0.005em] text-charcoal max-w-140 m-0 mb-1.5">
                            {hero.lede}
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-5.5 text-[13px] text-charcoal-mute">
                            {hero.pills.map((pill) => (
                                <span
                                    key={pill}
                                    className="rounded-pill border border-(--border-1) px-3 py-1.5 text-charcoal-soft"
                                    style={{ background: "var(--bg-raised)" }}
                                >
                                    {pill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: portrait */}
                    <div
                        className="overflow-hidden rounded-xl"
                        style={{
                            aspectRatio: "4/5",
                            boxShadow: "var(--shadow-3)",
                            background: "var(--sand-200)",
                        }}
                    >
                        <Image
                            src={hero.image.src}
                            alt={hero.image.alt}
                            width={hero.image.width}
                            height={hero.image.height}
                            priority
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
