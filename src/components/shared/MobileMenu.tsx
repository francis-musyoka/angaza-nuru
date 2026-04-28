"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useVisitModal } from "@/lib/visit-modal-context";

// `onCloseAction` is a regular client-side callback — the `Action` suffix is
// required by Next 16's "use client" prop-naming rule, not because this is a
// Server Action.
type Props = {
    open: boolean;
    onCloseAction: () => void;
};

const NAV_LINKS = [
    { href: "/why-bodoi", label: "Why Bodoi" },
    { href: "/what-we-do", label: "What we do" },
    { href: "/our-story", label: "Our story" },
];

export function MobileMenu({ open, onCloseAction }: Props) {
    const pathname = usePathname();
    const { open: openVisitModal } = useVisitModal();

    useEffect(() => {
        if (open) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
        return () => document.body.classList.remove("menu-open");
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onCloseAction();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onCloseAction]);

    if (!open) return null;

    return (
        <div
            id="mobile-menu"
            className="fixed inset-x-0 top-19 z-40 border-t border-(--border-1) bg-cream shadow-3 lg:hidden"
        >
            <nav className="flex flex-col">
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={onCloseAction}
                        className={`border-b border-(--border-1) px-5 py-4 text-lg ${
                            pathname === link.href ? "text-terracotta-deep" : "text-charcoal"
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
                <button
                    type="button"
                    onClick={() => {
                        onCloseAction();
                        openVisitModal();
                    }}
                    className="border-b border-(--border-1) px-5 py-4 text-left text-lg text-charcoal"
                >
                    Plan a visit
                </button>
                <Link
                    href="#donate"
                    onClick={onCloseAction}
                    className="px-5 py-4 text-lg font-medium text-terracotta-deep"
                >
                    Sponsor a child →
                </Link>
            </nav>
        </div>
    );
}
