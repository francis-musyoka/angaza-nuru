import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { whatWeDo } from "@/content/what-we-do";

/* Per prototype CSS:
   knit-step .num default → terracotta
   knit-step:nth-child(3) .num → ocean    (2nd step card, because arrows are nth-child 2,4,6)
   knit-step:nth-child(5) .num → sunset-deep
   knit-step:nth-child(7) .num → terracotta
   With 4 steps + 3 arrows the step cards are at positions 1, 3, 5, 7 (1-indexed).
   So step index 0 = terracotta, 1 = ocean, 2 = sunset-deep, 3 = terracotta
*/
const stepNumColors = [
    "text-terracotta",
    "text-ocean",
    "text-sunset-deep",
    "text-terracotta",
];

export function KnitTogether() {
    const { knit } = whatWeDo;

    return (
        <section className="bg-cream py-24">
            <div className="mx-auto max-w-300 px-8">
                {/* knit-head */}
                <div className="mx-auto mb-14 max-w-180 text-center">
                    <Eyebrow tone="light">How the four pieces hold each other up</Eyebrow>
                    <h2 className="mt-3 mb-3.5 font-display text-[clamp(34px,3.6vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-charcoal">
                        One program is a{" "}
                        <em className="text-terracotta italic">kindness.</em> Four programs is a
                        future.
                    </h2>
                    <p className="text-[17px] text-charcoal-soft">
                        The reason any of this works is that the four programs feed each other —
                        literally, in the case of the chickens.
                    </p>
                </div>

                {/* knit-row: 4 steps + 3 arrows */}
                <div className="grid grid-cols-1 gap-4.5 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
                    {knit.map((step, idx) => (
                        <React.Fragment key={step.num}>
                            {/* knit-step */}
                            <div className="rounded-[18px] bg-(--bg-raised) border border-(--border-1) p-5.5 text-center shadow-1">
                                <div
                                    className={`font-display text-4xl leading-none tracking-[-0.01em] ${stepNumColors[idx]}`}
                                >
                                    {step.num}
                                </div>
                                <h4 className="mt-3 mb-1.5 font-display text-lg leading-tight tracking-[-0.005em] text-charcoal">
                                    {step.title}
                                </h4>
                                <p className="m-0 text-[13.5px] leading-normal text-charcoal-soft">
                                    {step.body}
                                </p>
                            </div>

                            {/* knit-arrow — hidden on mobile */}
                            {idx < knit.length - 1 && (
                                <span
                                    aria-hidden="true"
                                    className="hidden text-charcoal-mute lg:flex lg:items-center lg:justify-center"
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
