import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pattern } from "@/components/ui/Pattern";
import { whyBodoi } from "@/content/why-bodoi";

export function Hero() {
    const { hero } = whyBodoi;

    return (
        <section className="relative overflow-hidden bg-ocean pb-0 pt-14 text-cream">
            {/* Full-bleed waves overlay */}
            <Pattern
                kind="waves"
                opacity={0.18}
                className="[background-size:180px_90px]"
            />

            {/* Rays pattern — top-right corner */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-30 -top-25 h-135 w-135"
                style={{
                    backgroundImage: "url(/assets/pattern-rays.svg)",
                    backgroundRepeat: "repeat",
                    backgroundSize: "90px",
                    opacity: 0.10,
                }}
            />

            <div className="relative mx-auto max-w-300 px-8">
                {/* Breadcrumb */}
                <nav className="mb-7 text-[13px] text-[rgba(248,241,229,0.65)]" aria-label="Breadcrumb">
                    <Link
                        href="/"
                        className="text-[rgba(248,241,229,0.65)] transition-colors hover:text-sunset"
                    >
                        Home
                    </Link>
                    <span className="mx-2 opacity-50">/</span>
                    <span className="text-[rgba(248,241,229,0.92)]">Why Bodoi</span>
                </nav>

                {/* Two-column grid */}
                <div className="relative grid items-end gap-14 pb-0 lg:grid-cols-[1.1fr_1fr]">
                    {/* Left: copy */}
                    <div className="pb-20">
                        <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>

                        <h1 className="mt-3 mb-6 font-display text-[clamp(48px,5.6vw,92px)] font-normal leading-[1.0] tracking-[-0.02em] text-balance text-cream">
                            {hero.headlineParts.before}
                            <em className="text-sunset italic">{hero.headlineParts.em}</em>
                            {hero.headlineParts.after}
                        </h1>

                        <p className="mb-7 max-w-135 font-display text-[clamp(20px,1.8vw,24px)] leading-[1.45] tracking-[-0.005em] text-pretty text-cream">
                            {hero.leadFirst}
                            <span className="text-[rgba(248,241,229,0.78)]">{hero.leadSecond}</span>
                        </p>

                        {/* Location pin */}
                        <span className="inline-flex items-center gap-2 rounded-pill border border-[rgba(248,241,229,0.18)] bg-[rgba(248,241,229,0.10)] px-3.5 py-[7px] text-[13px] text-[rgba(248,241,229,0.92)]">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-sunset"
                                aria-hidden="true"
                            >
                                <path d="M12 22s7-7 7-13a7 7 0 0 0-14 0c0 6 7 13 7 13Z" />
                                <circle cx="12" cy="9" r="2.5" />
                            </svg>
                            Lower Bodoi · Kilifi County · Kenyan coast
                        </span>
                    </div>

                    {/* Right: photo */}
                    <div
                        className="overflow-hidden rounded-t-xl shadow-3 bg-sand-200"
                        style={{ aspectRatio: "4/5" }}
                    >
                        <Image
                            src="https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL26715-scaled.jpg"
                            alt="The Lower Bodoi coastline"
                            width={720}
                            height={900}
                            priority
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
