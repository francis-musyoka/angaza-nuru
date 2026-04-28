"use client";

import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { homepage } from "@/content/homepage";
import { useVisitModal } from "@/lib/visit-modal-context";

export function VisitBand() {
    const { visitBand } = homepage;
    const { open } = useVisitModal();

    return (
        <section id="visit" className="bg-cream-deep">
            <div className="mx-auto grid max-w-300 items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
                <div className="flex flex-col gap-6">
                    <Eyebrow>{visitBand.eyebrow}</Eyebrow>
                    <h2 className="font-display text-h1 leading-[1.1]">
                        {visitBand.headline}  <em className="text-terracotta">{visitBand.highlight}</em> {visitBand.after}

                    </h2>
                    <p className="text-lg text-charcoal-soft">{visitBand.body}</p>
                    <div>
                        <button
                            type="button"
                            onClick={open}
                            className="inline-flex items-center gap-2 rounded-pill border-2 border-charcoal bg-transparent px-7 py-3.5 text-base font-medium text-charcoal transition-all duration-240 ease-(--ease-out) hover:bg-charcoal hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream-deep"
                        >
                            Plan a visit →
                        </button>
                    </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-2">
                    <Image
                        src={visitBand.image.src}
                        alt={visitBand.image.alt}
                        fill
                        sizes="(min-width:1024px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
