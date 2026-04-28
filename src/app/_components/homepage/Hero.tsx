import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StampPill } from "@/components/ui/StampPill";
import { homepage } from "@/content/homepage";

export function Hero() {
    const { hero } = homepage;

    // Split headline so the italic word can be wrapped in <em>.
    // headlineItalic = "Bodoi." so parts = ["A school by the sea, for the children of ", ""]
    const parts = hero.headline.split(hero.headlineItalic);

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-cream-soft via-cream to-cream-deep">
            {/* Decorative rays — top-right, matching HTML */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-10 h-135 w-135"
                style={{
                    backgroundImage: "url(/assets/pattern-rays.svg)",
                    backgroundSize: "84px",
                    opacity: 0.42,
                }}
            />

            <div className="relative mx-auto grid max-w-300 items-start gap-14 px-5 py-20 min-[900px]:grid-cols-[1.15fr_1fr] lg:gap-14 lg:px-8 lg:py-27.5">
                {/* ── Left column: copy ── */}
                <div className="flex flex-col gap-0">
                    <Eyebrow>{hero.eyebrow}</Eyebrow>

                    <h1 className="mt-3.5 mb-5.5 font-display text-[clamp(48px,5.5vw,82px)] font-normal leading-[1.02] tracking-[-0.02em] text-balance text-fg-1">
                        {parts[0]}
                        <em className="italic text-terracotta">{hero.headlineItalic}</em>
                        {parts[1] ?? ""}
                    </h1>

                    <p className="mb-7.5 max-w-135 text-[19px] leading-[1.55] text-fg-2">
                        {hero.lead}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Button as="link" href={hero.ctas.primary.href} variant="primary" size="lg">
                            {hero.ctas.primary.label}
                        </Button>
                        <Button as="link" href={hero.ctas.ghost.href} variant="ghost" size="lg">
                            {hero.ctas.ghost.label}
                        </Button>
                    </div>

                    {/* Meta line — dot + Saturday feeding copy */}
                    <div className="mt-10.5 flex items-center gap-3.5 text-[13px] text-fg-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden="true" />
                        <span>Saturday feeding program · 450 children every weekend</span>
                    </div>
                </div>

                {/* ── Right column: photo + overlays ── */}
                <div className="relative">
                    {/* Main portrait */}
                    <div className="overflow-hidden rounded-xl shadow-3" style={{ aspectRatio: "4/5" }}>
                        <Image
                            src={hero.portrait.src}
                            alt={hero.portrait.alt}
                            width={hero.portrait.width ?? 720}
                            height={hero.portrait.height ?? 900}
                            priority
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Stamp pill — top-right of photo */}
                    {hero.stamp && (
                        <div className="absolute -right-4.5 top-7">
                            <StampPill tone="cream">
                                {/* Sun/rays icon matching HTML */}
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-terracotta"
                                    aria-hidden="true"
                                >
                                    <circle cx="12" cy="12" r="4" />
                                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                                </svg>
                                {hero.stamp}
                            </StampPill>
                        </div>
                    )}

                    {/* Floating stat card — bottom-left of photo */}
                    {hero.floatingCard && (
                        <div className="absolute -left-8 -bottom-7 flex items-center gap-3 rounded-2xl border border-(--border-1) bg-(--bg-raised) px-4.5 py-3 pr-4.5 pl-3.5 shadow-2">
                            {/* Thumbnail */}
                            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-sand-200">
                                <Image
                                    src={hero.floatingCard.photo.src}
                                    alt={hero.floatingCard.photo.alt}
                                    width={48}
                                    height={48}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div>
                                <div className="text-[11px] tracking-[0.02em] text-fg-3">
                                    {hero.floatingCard.label}
                                </div>
                                <div className="mt-0.5 font-display text-base text-fg-1">
                                    {hero.floatingCard.primary}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
