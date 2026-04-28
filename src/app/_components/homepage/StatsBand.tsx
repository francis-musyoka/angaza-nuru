import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pattern } from "@/components/ui/Pattern";
import { homepage } from "@/content/homepage";

const toneClass: Record<string, string> = {
    "terracotta-soft": "text-terracotta-soft",
    sunset: "text-sunset",
};

export function StatsBand() {
    return (
        <section className="relative overflow-hidden bg-ocean text-cream">
            <Pattern kind="waves" opacity={0.22} />
            <div className="relative mx-auto max-w-300 px-5 py-16 lg:px-8 lg:py-24">
                {/* Section header */}
                <div className="relative mb-12 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
                    <div>
                        <Eyebrow tone="dark">Our impact, in numbers</Eyebrow>
                        <h2 className="mt-2.5 max-w-160 font-display text-[clamp(34px,3.6vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-cream">
                            Fifteen years of partnership with the families of Lower Bodoi.
                        </h2>
                    </div>
                    <div className="text-[13px] tracking-[0.02em] text-cream/70">
                        Reporting period · Jan 2011 – Dec 2025
                    </div>
                </div>

                {/* Stats grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {homepage.stats.map((s) => (
                        <div
                            key={s.label}
                            className="flex flex-col gap-2.5 border-t border-[rgba(248,241,229,0.22)] pt-5.5"
                        >
                            <span
                                className={`font-display text-[clamp(48px,5vw,72px)] font-normal leading-none tracking-[-0.02em] ${toneClass[s.tone]}`}
                            >
                                {s.value}
                            </span>
                            <span className="mt-2.5 max-w-55 text-sm leading-normal text-cream/85">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
