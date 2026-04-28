import Image from "next/image";
import Link from "next/link";
import { Pattern } from "@/components/ui/Pattern";

export function Footer() {
    return (
        <footer className="relative overflow-hidden bg-ocean text-cream">
            <Pattern kind="waves" opacity={0.18} />
            <div className="relative mx-auto max-w-300 px-5 py-16 lg:px-8 lg:py-24">
                <div className="mb-12 grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
                    {/* Brand column */}
                    <div>
                        <Image
                            src="/assets/logo-mark.svg"
                            alt="Angaza Nuru"
                            width={64}
                            height={64}
                            className="block h-16 w-auto"
                        />
                        <div className="mt-4.5 font-display text-[26px] tracking-[-0.01em] text-cream">
                            Angaza Nuru
                        </div>
                        <div className="mt-1 font-display italic text-sm text-sunset">
                            light, together.
                        </div>
                        <p className="mb-4.5 mt-3.5 max-w-80 text-sm leading-[1.6] text-cream/78">
                            Friends of Angaza Nuru partners with the families of Bodoi, Kenya, to
                            promote education, address food insecurity, and build relationships.
                        </p>
                    </div>

                    {/* About column */}
                    <div>
                        <div className="mb-4 text-xs font-bold uppercase tracking-widest text-cream/72">
                            About
                        </div>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link
                                    href="/why-bodoi"
                                    className="text-cream/92 no-underline hover:text-sunset"
                                >
                                    Why Bodoi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/what-we-do"
                                    className="text-cream/92 no-underline hover:text-sunset"
                                >
                                    What we do
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/our-story"
                                    className="text-cream/92 no-underline hover:text-sunset"
                                >
                                    Our story
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Get involved column */}
                    <div>
                        <div className="mb-4 text-xs font-bold uppercase tracking-widest text-cream/72">
                            Get involved
                        </div>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link
                                    href="/#donate"
                                    className="text-cream/92 no-underline hover:text-sunset"
                                >
                                    Sponsor a child
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#visit"
                                    className="text-cream/92 no-underline hover:text-sunset"
                                >
                                    Plan a visit
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact column */}
                    <div>
                        <div className="mb-4 text-xs font-bold uppercase tracking-widest text-cream/72">
                            Contact
                        </div>
                        <address className="space-y-2.5 text-sm not-italic text-cream/92">
                            <div>Lower Bodoi, Kilifi County</div>
                            <div>Coast Province, Kenya</div>
                            <div>
                                <a
                                    href="tel:+254728767442"
                                    className="text-cream/92 no-underline hover:text-sunset"
                                >
                                    +254 758 900 845
                                </a>
                            </div>
                            <div>
                                <a
                                    href="mailto:mfrankmusyoka02@gmail.com"
                                    className="text-cream/92 no-underline hover:text-sunset"
                                >
                                    mfrankmusyoka02@gmail.com
                                </a>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="relative border-t border-[rgba(248,241,229,0.18)] pt-5.5">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-cream/65">
                        <span>© 2026 Friends of Angaza Nuru, Inc. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
