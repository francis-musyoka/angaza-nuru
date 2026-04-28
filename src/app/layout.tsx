import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { VisitModal } from "@/components/shared/VisitModal";
import { VisitModalProvider } from "@/lib/visit-modal-context";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    variable: "--font-display",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-body",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Angaza Nuru — A school by the sea, for the children of Bodoi",
        template: "%s · Angaza Nuru",
    },
    description:
        "Angaza Nuru runs a small school, Saturday kitchen, and chicken farm in Lower Bodoi, Kilifi County, Kenya.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable}`}>
            <body>
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-cream focus:px-4 focus:py-2 focus:text-charcoal focus:shadow-3"
                >
                    Skip to main content
                </a>
                <VisitModalProvider>
                    <Header />
                    <main id="main">{children}</main>
                    <Footer />
                    <VisitModal />
                </VisitModalProvider>
            </body>
        </html>
    );
}
