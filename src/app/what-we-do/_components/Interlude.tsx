import { whatWeDo } from "@/content/what-we-do";

type Props = {
    which: "interlude1" | "interlude2";
};

export function Interlude({ which }: Props) {
    const data = whatWeDo[which];

    const renderQuote = () => {
        if (which === "interlude1") {
            const q = data.quote as typeof whatWeDo.interlude1.quote;
            return (
                <>
                    {q.before}
                    <em className="text-terracotta">{q.em}</em>
                </>
            );
        }
        const q = data.quote as typeof whatWeDo.interlude2.quote;
        return (
            <>
                {q.before}
                <em className="text-terracotta">{q.em}</em>
                {q.after}
            </>
        );
    };

    return (
        <section
            className="bg-cream-deep py-20 text-center relative overflow-hidden"
            aria-hidden="true"
        >
            <div className="mx-auto max-w-220 px-8">
                <p className="font-display italic text-[clamp(28px,3vw,40px)] font-normal leading-[1.35] tracking-[-0.01em] text-balance text-charcoal">
                    {renderQuote()}
                </p>
                <p className="mt-6 text-[13px] uppercase tracking-[0.06em] text-charcoal-mute">
                    {data.by}
                </p>
            </div>
        </section>
    );
}
