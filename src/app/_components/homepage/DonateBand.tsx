import { DonateCard } from "@/components/donate/DonateCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pattern } from "@/components/ui/Pattern";
import { homepage } from "@/content/homepage";

export function DonateBand() {
    const { donate } = homepage;

    // Split the headline around the italic phrase
    const { headline, headlineItalic } = donate;
    const italicIdx = headline.lastIndexOf(headlineItalic);
    const headlineBefore = italicIdx > -1 ? headline.slice(0, italicIdx) : headline;

    return (
        <section
            id="donate"
            className="relative overflow-hidden bg-terracotta text-(--fg-on-warm)"
        >
            <Pattern kind="rays" opacity={0.08} />
            <div className="relative mx-auto grid max-w-300 gap-10 px-5 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
                <div className="flex flex-col gap-5">
                    <Eyebrow tone="warm">{donate.eyebrow}</Eyebrow>
                    <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-normal leading-[1.05] tracking-[-0.02em] text-(--fg-on-warm) text-balance">
                        {italicIdx > -1 ? (
                            <>
                                {headlineBefore}
                                <em className="italic text-cream-soft">{headlineItalic}</em>
                            </>
                        ) : (
                            headline
                        )}
                    </h2>
                    <p className="text-lg leading-[1.55] text-cream/90 max-w-120 mb-7">
                        {donate.body}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                        {donate.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2.5 text-[15px] text-cream/92">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mt-0.5 flex-shrink-0 text-cream-soft"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-end">
                    <DonateCard />
                </div>
            </div>
        </section>
    );
}
