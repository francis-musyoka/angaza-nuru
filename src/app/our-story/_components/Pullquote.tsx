import { ourStory } from "@/content/our-story";

export function Pullquote() {
    const { pullquote } = ourStory;

    return (
        <section className="relative overflow-hidden bg-ocean py-24 text-center">
            {/* Waves pattern */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage: "url(/assets/pattern-waves.svg)",
                    backgroundSize: "180px 90px",
                    backgroundRepeat: "repeat",
                }}
            />

            <div className="relative mx-auto max-w-275 px-8">
                {/* Decorative opening mark */}
                <div
                    aria-hidden="true"
                    className="mb-3 font-display text-[88px] leading-[0.6] text-terracotta-soft"
                >
                    &ldquo;
                </div>

                {/* Quote text — "one warm meal" is em-highlighted sunset */}
                <q
                    className="mx-auto block max-w-220 font-display text-[clamp(28px,3.4vw,44px)] font-normal leading-tight tracking-[-0.015em] text-balance text-cream"
                    style={{ quotes: "none" }}
                >
                    We were never trying to start a school. We were trying to make sure the children we knew got{" "}
                    <em className="text-sunset not-italic">one warm meal</em>
                    . The school is what happened next.
                </q>

                {/* Attribution */}
                <p className="mt-7 text-sm uppercase tracking-[0.06em] text-cream/[0.78]">
                    &mdash; {pullquote.attr}
                </p>
            </div>
        </section>
    );
}
