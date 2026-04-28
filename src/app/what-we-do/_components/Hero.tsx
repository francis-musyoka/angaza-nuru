import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pattern } from "@/components/ui/Pattern";
import { whatWeDo } from "@/content/what-we-do";

export function Hero() {
    const { hero, index } = whatWeDo;

    return (
        <section
            className="relative overflow-hidden py-14 pb-18"
            style={{
                background:
                    "linear-gradient(180deg, var(--cream-soft), var(--cream) 60%, var(--cream-deep))",
            }}
        >
            <Pattern
                kind="rays"
                opacity={0.4}
                className="-right-25 -top-15 left-auto w-135 h-135"
            />

            <div className="relative mx-auto max-w-300 px-8">
                {/* Breadcrumb */}
                <nav className="relative mb-7 text-[13px] text-charcoal-mute" aria-label="Breadcrumb">
                    <Link
                        href="/"
                        className="text-charcoal-mute no-underline transition-colors hover:text-terracotta-deep"
                    >
                        Home
                    </Link>
                    <span className="mx-2 opacity-50">/</span>
                    <span className="text-charcoal-soft">What we do</span>
                </nav>

                <div className="relative max-w-220">
                    <Eyebrow tone="light">{hero.eyebrow}</Eyebrow>

                    <h1 className="mt-3 mb-7 font-display text-[clamp(48px,6vw,96px)] font-normal leading-[0.98] tracking-tight text-balance text-charcoal">
                        {hero.headline.before}
                        <em className="text-terracotta italic">{hero.headline.em}</em>
                        {hero.headline.after}
                    </h1>

                    <p className="mb-8 max-w-180 font-display text-[clamp(20px,1.9vw,26px)] leading-[1.4] tracking-[-0.005em] text-pretty text-charcoal">
                        {hero.lead.before}
                        <span className="text-charcoal-mute">{hero.lead.muted}</span>
                    </p>
                </div>

                {/* Index rail — 4-col grid of jump links */}
                <div className="mt-14 border-t border-(--border-1)">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {index.map((item, idx) => (
                            <a
                                key={item.num}
                                href={item.href}
                                className={[
                                    "flex flex-col gap-1 py-4.5 pr-5.5 no-underline transition-colors",
                                    "hover:bg-[rgba(255,253,247,0.5)]",
                                    "border-b border-(--border-1)",
                                    "lg:border-b-0",
                                    idx < index.length - 1
                                        ? "lg:border-r lg:border-(--border-1)"
                                        : "",
                                    /* mobile: last item no border-b */
                                    idx === index.length - 1 ? "border-b-0" : "",
                                    /* sm: 2-col — col 1 & 2 items: col 2 no right border */
                                    idx % 2 === 1
                                        ? "sm:border-r-0"
                                        : "sm:border-r sm:border-(--border-1)",
                                    /* sm: bottom border off for last row */
                                    idx >= index.length - 2 ? "sm:border-b-0" : "",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                            >
                                <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-terracotta-deep">
                                    {item.num}
                                </span>
                                <span className="font-display text-[22px] leading-[1.15] tracking-[-0.005em] text-charcoal after:ml-2 after:text-sm after:text-charcoal-mute after:transition-transform after:duration-240 after:content-['↓'] after:inline-block hover:after:translate-y-0.5 hover:after:text-terracotta">
                                    {item.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
