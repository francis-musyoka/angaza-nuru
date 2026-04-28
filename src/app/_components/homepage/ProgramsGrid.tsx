import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { homepage } from "@/content/homepage";

export function ProgramsGrid() {
    return (
        <section className="bg-cream-soft">
            <div className="mx-auto max-w-300 px-5 py-16 lg:px-8 lg:py-24">
                {/* Section header */}
                <div className="mb-11 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
                    <div>
                        <Eyebrow>What we do</Eyebrow>
                        <h2 className="mt-2.5 max-w-180 font-display text-[clamp(36px,3.8vw,52px)] font-normal leading-[1.1] tracking-[-0.02em] text-charcoal">
                            Four programs, one neighbourhood.
                        </h2>
                    </div>
                    <Link
                        href="/what-we-do"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-deep no-underline"
                    >
                        See all programs <span aria-hidden="true">→</span>
                    </Link>
                </div>

                {/* Programs grid */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {homepage.programs.map((p) => (
                        <Link
                            key={p.title}
                            href={p.href}
                            className="group relative block aspect-[4/5] overflow-hidden rounded-3xl no-underline shadow-2 transition-transform duration-240 ease-(--ease-out) hover:-translate-y-[3px] lg:aspect-[16/11]"
                        >
                            <Image
                                src={p.image.src}
                                alt={p.image.alt}
                                fill
                                sizes="(min-width:1024px) 50vw, 100vw"
                                className="object-cover transition-transform duration-600 ease-(--ease-out) group-hover:scale-[1.04]"
                            />
                            {/* Gradient — only bottom 70% so the top-left tag stays clear */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-t from-charcoal/[0.78] from-30% to-transparent"
                            />
                            {/* Top-left tag */}
                            <span className="absolute left-4.5 top-4.5 z-10 inline-flex items-center rounded-pill bg-cream/92 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-terracotta-deep">
                                {p.eyebrow}
                            </span>
                            {/* Bottom content */}
                            <div className="absolute bottom-5.5 left-6.5 right-6.5 flex flex-col gap-2 text-cream">
                                <h3 className="font-display text-3xl font-normal leading-[1.15] tracking-[-0.01em] text-cream">
                                    {p.title}
                                </h3>
                                <p className="max-w-115 text-[14.5px] text-cream/92">
                                    {p.description}
                                </p>
                                <span className="mt-1.5 inline-block w-fit border-b border-cream/50 pb-0.5 text-[13.5px] font-semibold text-cream group-hover:border-cream">
                                    Learn more →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
