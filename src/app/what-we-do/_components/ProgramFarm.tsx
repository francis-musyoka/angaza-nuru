import Image from "next/image";
import { whatWeDo } from "@/content/what-we-do";

const CheckIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-terracotta mt-[3px] shrink-0"
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

export function ProgramFarm() {
    const { farm } = whatWeDo;

    return (
        <section id="farm" className="py-24 relative overflow-hidden">
            <div className="mx-auto max-w-300 px-8">
                {/* pb-grid reverse: photo left (1.1fr), content right (1fr) */}
                <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] items-start">
                    {/* Photo — left on desktop, top on mobile */}
                    <div className="relative order-1">
                        <div
                            className="overflow-hidden rounded-xl shadow-3 bg-sand-200"
                            style={{ aspectRatio: "4/5" }}
                        >
                            <Image
                                src={farm.image.src}
                                alt={farm.image.alt}
                                width={farm.image.width}
                                height={farm.image.height}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Figure caption */}
                        <p className="mt-3.5 pl-1 text-[13px] italic text-charcoal-mute">
                            {farm.figcap}
                        </p>

                        {/* Floating overlap card */}
                        <div className="absolute -bottom-7 -right-6 z-10 max-w-65 rounded-[18px] bg-(--bg-raised) p-[16px_18px] shadow-2 border border-(--border-1) max-sm:right-3 max-sm:left-3 max-sm:max-w-none max-sm:-bottom-5">
                            <div className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-terracotta-deep">
                                {farm.card.label}
                            </div>
                            <div className="font-display text-[15.5px] leading-[1.4] tracking-[-0.005em] text-charcoal">
                                {farm.card.quote}
                            </div>
                            <div className="mt-2 text-xs text-charcoal-mute">
                                {farm.card.by}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-2">
                        {/* pb-tag */}
                        <div className="inline-flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-widest text-terracotta-deep">
                            <span className="font-display font-normal text-lg tracking-[-0.01em]">
                                {farm.tag.ix}
                            </span>
                            {farm.tag.rest}
                        </div>

                        <h2 className="mt-4 mb-5.5 font-display text-[clamp(38px,4.4vw,60px)] font-normal leading-[1.04] tracking-[-0.022em] text-balance text-charcoal">
                            {farm.title.before}
                            <em className="text-terracotta italic">{farm.title.em}</em>
                        </h2>

                        {/* scene */}
                        <p className="mb-5.5 max-w-135 font-display italic text-[clamp(20px,2vw,26px)] leading-[1.4] tracking-[-0.005em] text-charcoal border-l-2 border-terracotta pl-4.5">
                            {farm.scene}
                        </p>

                        <p className="mb-4 max-w-140 text-[17px] leading-[1.7] text-charcoal-soft">
                            {farm.body1}
                        </p>
                        <p className="mb-4 max-w-140 text-[17px] leading-[1.7] text-charcoal-soft">
                            {farm.body2}
                        </p>

                        {/* pb-list */}
                        <ul className="mt-5.5 grid gap-3.5 p-0 list-none">
                            {farm.bullets.map((b) => (
                                <li
                                    key={b.bold}
                                    className="grid gap-3 text-[15px] leading-[1.55] text-charcoal-soft items-start"
                                    style={{ gridTemplateColumns: "22px 1fr" }}
                                >
                                    <CheckIcon />
                                    <span>
                                        <b className="text-charcoal font-semibold">{b.bold}</b>
                                        {b.rest}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* pb-stats — plain variant uses terracotta */}
                        <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 border-t border-(--border-1)">
                            {farm.stats.map((stat, idx) => (
                                <div
                                    key={stat.label}
                                    className={[
                                        "pt-4.5 pb-3",
                                        idx < farm.stats.length - 1
                                            ? "sm:border-r sm:border-(--border-1) sm:pr-4"
                                            : "",
                                        idx > 0 ? "sm:pl-4" : "",
                                        "max-sm:border-b max-sm:border-(--border-1) max-sm:pb-3.5 last:max-sm:border-b-0",
                                    ]
                                        .filter(Boolean)
                                        .join(" ")}
                                >
                                    <div className="font-display text-[32px] leading-none tracking-[-0.01em] text-terracotta">
                                        {stat.value}
                                    </div>
                                    <div className="mt-2 text-xs leading-[1.4] text-charcoal-mute">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
