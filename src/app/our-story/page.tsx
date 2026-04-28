import type { Metadata } from "next";
import { CtaBand } from "./_components/CtaBand";
import { Founders } from "./_components/Founders";
import { Hero } from "./_components/Hero";
import { Narrative } from "./_components/Narrative";
import { Pullquote } from "./_components/Pullquote";
import { SwahiliBand } from "./_components/SwahiliBand";
import { Timeline } from "./_components/Timeline";
import { ValuesStrip } from "./_components/ValuesStrip";

export const metadata: Metadata = {
    title: "Our story",
    description:
        "How a Saturday kitchen in Lower Bodoi became a school, then a family.",
};

export default function OurStoryPage() {
    return (
        <>
            <Hero />
            <SwahiliBand />
            <Narrative />
            <Pullquote />
            <Timeline />
            <Founders />
            <ValuesStrip />
            <CtaBand />
        </>
    );
}
