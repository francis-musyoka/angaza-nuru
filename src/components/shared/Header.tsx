"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
    { href: "/why-bodoi", label: "Why Bodoi" },
    { href: "/what-we-do", label: "What we do" },
    { href: "/our-story", label: "Our story" },
];

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header
            className="sticky top-0 z-50 border-b border-(--border-1) backdrop-blur-md"
            style={{ backgroundColor: "rgba(251, 247, 238, 0.92)" }}
        >
            <div className="mx-auto flex max-w-300 items-center justify-between gap-4 px-5 py-3 lg:px-8 lg:py-4">
                <Link href="/" className="flex items-center gap-3 no-underline">
                    <Image
                        src="/assets/logo-mark.svg"
                        alt=""
                        width={44}
                        height={44}
                        className="h-9.5 w-auto lg:h-11"
                        priority
                    />
                    <span className="flex flex-col leading-tight">
                        <span className="font-display text-xl text-charcoal">Angaza Nuru</span>
                        <span className="hidden text-xs text-charcoal-mute lg:block">
                            Changing lives in Bodoi, Kenya
                        </span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-7 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-base no-underline transition-colors duration-140 ease-(--ease-out) hover:text-terracotta-deep ${
                                pathname === link.href ? "text-terracotta-deep" : "text-charcoal"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button as="link" href="#donate" variant="primary" size="sm">
                        Sponsor a child →
                    </Button>
                </nav>

                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMenuOpen((v) => !v)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-(--border-1) text-charcoal lg:hidden"
                >
                    {menuOpen ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                d="M5 5l14 14M19 5L5 19"
                            />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                d="M4 7h16M4 12h16M4 17h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            <MobileMenu open={menuOpen} onCloseAction={() => setMenuOpen(false)} />
        </header>
    );
}
