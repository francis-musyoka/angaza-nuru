import { Eyebrow } from "@/components/ui/Eyebrow";
import { whyBodoi } from "@/content/why-bodoi";

// Alternating num colors per prototype: 1→terracotta, 2→ocean, 3→sunset-deep, 4→ocean, 5→terracotta, 6→sunset-deep
const numColors = [
    "text-terracotta",
    "text-ocean",
    "text-sunset-deep",
    "text-ocean",
    "text-terracotta",
    "text-sunset-deep",
];

export function RealityGrid() {
    const { reality } = whyBodoi;

    return (
        <section className="bg-cream-deep py-24">
            <div className="mx-auto max-w-300 px-8">
                {/* Section header */}
                <div className="mb-14 max-w-180">
                    <Eyebrow>By the numbers</Eyebrow>
                    <h2 className="mt-3 mb-3.5 font-display text-[clamp(34px,3.6vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-charcoal">
                        The case for Bodoi, in{" "}
                        <em className="text-terracotta italic">plain figures.</em>
                    </h2>
                    <p className="max-w-145 text-base text-charcoal-soft">
                        National statistics for the Kenyan coast tell one story; what we see in our
                        own classrooms tells another. Both are real. Both are why we work here.
                    </p>
                </div>

                {/* 6-card grid */}
                <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
                    {reality.map((card, i) => (
                        <div
                            key={card.label}
                            className="flex flex-col rounded-lg border border-(--border-1) bg-(--bg-raised) p-8 shadow-1"
                        >
                            {/* Large display number */}
                            <div
                                className={`font-display text-[56px] font-normal leading-none tracking-[-0.02em] ${numColors[i] ?? "text-terracotta"}`}
                            >
                                {card.value}
                            </div>

                            {/* Card heading */}
                            <div className="mt-3.5 mb-2 font-display text-[20px] leading-tight tracking-[-0.005em] text-charcoal">
                                {card.label}
                            </div>

                            {/* Body copy */}
                            <p className="flex-1 text-[14.5px] leading-[1.55] text-charcoal-soft">
                                {card.body}
                            </p>

                            {/* Source line */}
                            <div className="mt-4 border-t border-(--border-1) pt-3.5 text-[11px] tracking-[0.04em] text-charcoal-mute">
                                {card.source}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
