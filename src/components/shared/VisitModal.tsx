"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useVisitModal } from "@/lib/visit-modal-context";

const OSM_URL =
    "https://www.openstreetmap.org/export/embed.html?bbox=39.55%2C-3.65%2C39.85%2C-3.45&layer=mapnik&marker=-3.55%2C39.7";

export function VisitModal() {
    const { isOpen, close } = useVisitModal();
    const dialogRef = useRef<HTMLDivElement>(null);
    const previouslyFocused = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;
        previouslyFocused.current = document.activeElement as HTMLElement;
        const dialog = dialogRef.current;
        const focusables = dialog?.querySelectorAll<HTMLElement>(
            'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        focusables?.[0]?.focus();

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                close();
            } else if (e.key === "Tab" && focusables && focusables.length > 0) {
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("keydown", onKey);
            previouslyFocused.current?.focus?.();
        };
    }, [isOpen, close]);

    if (!isOpen || typeof document === "undefined") return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/55 p-0 min-[600px]:p-6 min-[900px]:p-10"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) close();
            }}
            aria-hidden={false}
        >
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="visit-modal-title"
                className="relative h-full w-full overflow-hidden bg-cream min-[600px]:h-auto min-[600px]:max-h-[96vh] min-[600px]:rounded-3xl min-[600px]:shadow-3 min-[900px]:max-h-[88vh] min-[900px]:max-w-250 min-[900px]:rounded-xl"
            >
                <button
                    type="button"
                    onClick={close}
                    aria-label="Close"
                    className="absolute right-2.5 top-2.5 z-20 inline-flex h-10 w-10 items-center justify-center rounded-md border border-(--border-1) bg-cream text-charcoal shadow-1 hover:bg-cream-deep min-[600px]:right-4 min-[600px]:top-4"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            d="M5 5l14 14M19 5L5 19"
                        />
                    </svg>
                </button>

                <div className="grid h-full w-full grid-cols-1 overflow-y-auto overscroll-contain min-[900px]:grid-cols-[1.05fr_1fr] min-[900px]:overflow-hidden">
                    <div className="flex flex-col bg-cream min-[900px]:overflow-y-auto">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(
                                    new FormData(e.currentTarget).entries(),
                                );
                                console.log("[visit-form] submit", data);
                                alert("Thanks — we usually reply within 2 days.");
                                close();
                            }}
                            className="flex flex-col gap-3 px-5 py-6 min-[600px]:gap-4 min-[600px]:p-6 min-[900px]:p-9"
                        >
                            <div>
                                <Eyebrow>Plan a visit</Eyebrow>
                                <h2
                                    id="visit-modal-title"
                                    className="mt-2 font-display text-[24px] font-normal leading-[1.15] tracking-[-0.015em] text-charcoal text-balance min-[600px]:text-3xl min-[600px]:leading-[1.1]"
                                >
                                    Tell us roughly when you&apos;d like to come.{" "}
                                    <em className="italic text-terracotta">We&apos;ll write back.</em>
                                </h2>
                                <p className="mt-3 text-sm leading-[1.6] text-charcoal-soft min-[600px]:text-[15px]">
                                    Lower Bodoi is about an hour north of Mombasa. Most visitors come for a
                                    Saturday at the kitchen or stay a week with the school. We&apos;ll help
                                    you find a place to stay and plan around school terms.
                                </p>
                            </div>

                            <div className="grid gap-3 min-[900px]:grid-cols-2">
                                <label className="flex flex-col gap-1.5">
                                    <span className="text-[11px] font-semibold uppercase tracking-widest text-charcoal-mute">
                                        Your name
                                    </span>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        placeholder="Jane Doe"
                                        className="rounded-md border border-(--border-1) bg-white px-3 py-2 text-base text-charcoal placeholder:text-charcoal-mute focus:outline-none focus:ring-2 focus:ring-terracotta"
                                    />
                                </label>
                                <label className="flex flex-col gap-1.5">
                                    <span className="text-[11px] font-semibold uppercase tracking-widest text-charcoal-mute">
                                        Email
                                    </span>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="rounded-md border border-(--border-1) bg-white px-3 py-2 text-base text-charcoal placeholder:text-charcoal-mute focus:outline-none focus:ring-2 focus:ring-terracotta"
                                    />
                                </label>
                            </div>

                            <label className="flex flex-col gap-1.5">
                                <span className="text-[11px] font-semibold uppercase tracking-widest text-charcoal-mute">
                                    What would you like to do?
                                </span>
                                <select
                                    name="purpose"
                                    defaultValue="Plan a visit"
                                    className="rounded-md border border-(--border-1) bg-white px-3 py-2 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta"
                                >
                                    <option>Plan a visit</option>
                                    <option>Visit the school</option>
                                    <option>Volunteer for a week</option>
                                    <option>Sponsor in person</option>
                                    <option>Just learn more</option>
                                </select>
                            </label>

                            <label className="flex flex-col gap-1.5">
                                <span className="text-[11px] font-semibold uppercase tracking-widest text-charcoal-mute">
                                    Tell us a little
                                </span>
                                <textarea
                                    name="timing"
                                    rows={3}
                                    placeholder="Roughly when you'd like to come, how long you can stay, anything we should know."
                                    className="resize-none rounded-md border border-(--border-1) bg-white px-3 py-2 text-base leading-normal text-charcoal placeholder:text-charcoal-mute focus:outline-none focus:ring-2 focus:ring-terracotta"
                                />
                            </label>

                            <div className="mt-1 flex flex-col items-stretch gap-3 min-[600px]:flex-row min-[600px]:flex-wrap min-[600px]:items-center min-[600px]:justify-between">
                                <span className="text-center text-xs text-charcoal-mute min-[600px]:text-left">
                                </span>
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-terracotta px-5.5 py-3 text-[15px] font-semibold text-(--fg-on-warm) shadow-warm transition hover:bg-terracotta-deep min-[600px]:w-auto"
                                >
                                    Send →
                                </button>
                            </div>
                        </form>

                        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-(--border-1) px-5 py-4 text-[13.5px] text-charcoal-mute min-[600px]:px-6 min-[900px]:px-9">
                            <span>Or just call us —</span>
                            <a
                                href="tel:+254728767442"
                                className="font-semibold text-charcoal hover:text-terracotta-deep"
                            >
                                +254 758 900 845
                            </a>
                        </div>
                    </div>

                    <div className="sticky bottom-0 z-10 flex h-55 flex-col bg-ocean shadow-[0_-12px_28px_rgba(0,0,0,0.20)] min-[600px]:h-70 min-[900px]:static min-[900px]:z-auto min-[900px]:h-auto min-[900px]:min-h-0 min-[900px]:shadow-none">
                        <iframe
                            src={OSM_URL}
                            title="Map of Lower Bodoi, Kilifi County, Kenya"
                            className="h-full w-full flex-1 border-0"
                            loading="lazy"
                        />
                        <div className="flex flex-wrap items-center justify-between gap-3 bg-charcoal px-4 py-3 text-xs text-cream min-[600px]:px-5.5 min-[600px]:py-4 min-[600px]:text-[13px]">
                            <span className="inline-flex items-center gap-2.5">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                    className="text-sunset"
                                >
                                    <path d="M12 22s7-7 7-13a7 7 0 0 0-14 0c0 6 7 13 7 13Z" />
                                    <circle cx="12" cy="9" r="2.5" />
                                </svg>
                                <span>
                                    <strong className="font-semibold">Lower Bodoi</strong> · Kilifi County, Kenya
                                </span>
                            </span>
                            <a
                                href="https://www.openstreetmap.org/?mlat=-3.55&mlon=39.7#map=11/-3.55/39.7"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="border-b border-sunset/50 pb-px font-semibold text-sunset hover:border-sunset"
                            >
                                Open in maps →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body,
    );
}
