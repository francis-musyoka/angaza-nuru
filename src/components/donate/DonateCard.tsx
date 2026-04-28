"use client";

import { useState } from "react";
import { homepage } from "@/content/homepage";

export function DonateCard() {
    const amounts = homepage.donate.amounts;
    const [amount, setAmount] = useState<number | null>(amounts[1] ?? null);
    const [customAmount, setCustomAmount] = useState("");

    const effective = customAmount ? Number(customAmount) || null : amount;

    return (
        <div className="w-full max-w-md rounded-xl bg-cream-soft p-8 shadow-3">
            {/* Card head */}
            <div className="mb-4.5 flex items-baseline justify-between">
                <h3 className="m-0 font-display  font-normal tracking-[-0.01em] text-charcoal">
                    Become a sustaining partner
                </h3>
                {/* <span className="text-sm text-charcoal-mute">Secure · Cancel anytime</span> */}
            </div>

            {/* Amount buttons — 1 row of 4 */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const payload = { amount: effective };
                    console.log("[donate-form] submit", payload);
                    alert(
                        `Thanks! Demo submission: ${effective ? `$${effective}` : "no amount"
                        } / month.`,
                    );
                }}
            >
                <div className="mb-3.5 grid grid-cols-4 gap-2">
                    {amounts.map((a) => {
                        const active = !customAmount && amount === a;
                        return (
                            <button
                                key={a}
                                type="button"
                                onClick={() => {
                                    setAmount(a);
                                    setCustomAmount("");
                                }}
                                className={`rounded-md border-[1.5px] px-1 py-3.5 font-display text-[20px] transition-colors duration-200 ${active
                                    ? "border-terracotta bg-terracotta text-(--fg-on-warm)"
                                    : "border-(--border-1) bg-transparent text-charcoal hover:border-(--border-2)"
                                    }`}
                            >
                                ${a}
                            </button>
                        );
                    })}
                </div>

                {/* Custom amount */}
                <div className="mb-4 flex items-center gap-1.5 rounded-md border-[1.5px] border-(--border-1) px-3.5 py-3">
                    <span className="font-semibold text-charcoal-mute">$</span>
                    <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Other amount"
                        value={customAmount}
                        onChange={(e) => {
                            setCustomAmount(e.target.value.replace(/[^0-9]/g, ""));
                            setAmount(null);
                        }}
                        className="w-full border-none bg-transparent text-[15px] text-charcoal outline-none placeholder:text-charcoal-mute"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-terracotta px-6 py-3.5 text-base font-semibold text-(--fg-on-warm) shadow-warm transition hover:bg-terracotta-deep"
                >
                    {effective ? `Sponsor for $${effective} / month →` : "Sponsor →"}
                </button>

                {/* Helper text */}
                <p className="mt-3 text-center text-xs leading-normal text-charcoal-mute">
                    Your gift goes directly to Bodoi.{" "}
                    <a href="#" className="text-terracotta-deep">
                        See our financials
                    </a>
                    .
                </p>
            </form>
        </div>
    );
}
