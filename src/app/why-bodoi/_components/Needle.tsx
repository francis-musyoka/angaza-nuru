import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pattern } from "@/components/ui/Pattern";
import { whyBodoi } from "@/content/why-bodoi";

function ClockIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
        </svg>
    );
}

function PeopleIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M3 21v-3a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v3" />
            <circle cx="12" cy="8" r="4" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M4 12 9 17l11-11" />
        </svg>
    );
}

const iconMap = {
    clock: ClockIcon,
    people: PeopleIcon,
    check: CheckIcon,
};

export function Needle() {
    const { needle } = whyBodoi;

    return (
        <section className="relative overflow-hidden bg-ocean py-24 text-cream">
            <Pattern
                kind="waves"
                opacity={0.18}
                className="[background-size:180px_90px]"
            />

            <div className="relative mx-auto max-w-300 px-8">
                {/* Section header */}
                <div className="mb-14 max-w-180">
                    <Eyebrow tone="dark">{needle.eyebrow}</Eyebrow>
                    <h2 className="mt-3 font-display text-[clamp(34px,3.6vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-cream">
                        {needle.headingParts.before}
                        <em className="text-sunset italic">{needle.headingParts.em}</em>
                        {needle.headingParts.after}
                    </h2>
                </div>

                {/* 3-card grid */}
                <div className="grid gap-7 lg:grid-cols-3">
                    {needle.cards.map((card) => {
                        const Icon = iconMap[card.icon];
                        return (
                            <article
                                key={card.title}
                                className="rounded-lg border border-[rgba(248,241,229,0.14)] bg-[rgba(248,241,229,0.06)] p-7"
                            >
                                {/* Glyph */}
                                <span className="mb-4.5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(232,168,124,0.15)] text-sunset">
                                    <Icon />
                                </span>

                                <h3 className="mb-2.5 font-display text-[22px] font-normal leading-tight tracking-[-0.005em] text-cream">
                                    {card.title}
                                </h3>
                                <p className="text-[15px] leading-[1.6] text-[rgba(248,241,229,0.82)]">
                                    {card.body}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
