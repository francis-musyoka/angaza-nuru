import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { whyBodoi } from "@/content/why-bodoi";

export function DayInBodoi() {
    const { day } = whyBodoi;

    return (
        <section className="bg-cream py-24">
            <div className="mx-auto max-w-300 px-8">
                {/* Section header */}
                <div className="mb-12 max-w-180">
                    <Eyebrow>{day.eyebrow}</Eyebrow>
                    <h2 className="mt-3 mb-3.5 font-display text-[clamp(34px,3.6vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-charcoal">
                        {day.headingParts.before}
                        <em className="text-terracotta italic">{day.headingParts.em}</em>
                        {day.headingParts.after}
                    </h2>
                    <p className="max-w-145 text-base text-charcoal-soft">{day.lead}</p>
                </div>

                {/* Two-column layout */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Left: sticky photo */}
                    <div
                        className="overflow-hidden rounded-3xl shadow-2 bg-sand-200 lg:sticky lg:top-25"
                        style={{ aspectRatio: "4/5" }}
                    >
                        <Image
                            src={day.image.src}
                            alt={day.image.alt}
                            width={day.image.width ?? 800}
                            height={day.image.height ?? 1000}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Right: timeline entries */}
                    <div>
                        {day.entries.map((entry, i) => (
                            <div
                                key={entry.time}
                                className={`grid grid-cols-[92px_1fr] items-start gap-4.5 py-5.5${i === 0 ? " pt-1" : ""}${i < day.entries.length - 1 ? " border-b border-(--border-1)" : ""}`}
                            >
                                {/* Time — alternates terracotta (odd) / ocean (even index) */}
                                <div
                                    className={`font-display text-[22px] leading-none tracking-[-0.005em] pt-0.5 ${i % 2 === 0 ? "text-terracotta" : "text-ocean"}`}
                                >
                                    {entry.time}
                                </div>
                                <div>
                                    <h4 className="mb-1 font-display text-[19px] font-normal leading-tight tracking-[-0.005em] text-charcoal">
                                        {entry.title}
                                    </h4>
                                    <p className="text-[15px] leading-[1.6] text-charcoal-soft">
                                        {entry.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
