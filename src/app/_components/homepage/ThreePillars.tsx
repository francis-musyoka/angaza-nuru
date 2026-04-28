import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconChip } from "@/components/ui/IconChip";
import { homepage } from "@/content/homepage";

const ICONS: Record<string, React.ReactNode> = {
    education: (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M3 7l9-4 9 4-9 4-9-4z" />
            <path d="M21 10v5" />
            <path d="M7 9.5V14a5 5 0 0010 0v-4.5" />
        </svg>
    ),
    food: (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M4 11h16a4 4 0 01-4 4H8a4 4 0 01-4-4z" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
    ),
    relationships: (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.5-7 10-7 10z" />
        </svg>
    ),
};

export function ThreePillars() {
    return (
        <section className="bg-cream">
            <div className="mx-auto max-w-300 px-5 py-16 lg:px-8 lg:py-24">
                <div className="mb-14 text-center">
                    <Eyebrow>Our three pillars</Eyebrow>
                    <h2 className="mx-auto mt-3 mb-3.5 max-w-190 font-display text-[clamp(36px,3.8vw,52px)] font-normal leading-[1.1] tracking-[-0.02em] text-balance text-charcoal">
                        Education, food security, and relationships —{" "}
                        <em className="text-terracotta">woven together</em>.
                    </h2>
                    <p className="mx-auto max-w-150 text-[17px] text-charcoal-soft">
                        For more than a decade, we&apos;ve worked alongside the families of Lower
                        Bodoi. Three programs, one community — each one holds the others up.
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                {homepage.pillars.map((p) => (
                    <article
                        key={p.title}
                        className="group flex flex-col overflow-hidden rounded-xl bg-cream shadow-1 transition-all duration-240 ease-(--ease-out) hover:-translate-y-0.5 hover:shadow-2"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src={p.image.src}
                                alt={p.image.alt}
                                fill
                                sizes="(min-width:1024px) 33vw, 100vw"
                                className="object-cover transition-transform duration-600 ease-(--ease-out) group-hover:scale-[1.04]"
                            />
                        </div>
                        <div className="flex flex-1 flex-col gap-3 p-6">
                            <IconChip icon={ICONS[p.icon]} tone={p.tone} />
                            <h3 className="font-display text-h3 text-charcoal">{p.title}</h3>
                            <p className="text-base text-charcoal-soft">{p.description}</p>
                            <Link
                                href={p.href}
                                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-terracotta-deep no-underline transition-all duration-240 ease-(--ease-out) group-hover:gap-2.5"
                            >
                                Learn more
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </article>
                ))}
                </div>
            </div>
        </section>
    );
}
