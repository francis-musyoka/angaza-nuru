import type { Metadata } from "next";
import { CtaBand } from "./_components/CtaBand";
import { DayInBodoi } from "./_components/DayInBodoi";
import { Hero } from "./_components/Hero";
import { Intro } from "./_components/Intro";
import { MapStrip } from "./_components/MapStrip";
import { Needle } from "./_components/Needle";
import { RealityGrid } from "./_components/RealityGrid";
import { Voices } from "./_components/Voices";

export const metadata: Metadata = {
    title: "Why Bodoi",
    description:
        "Lower Bodoi is one of dozens of fishing and farming villages along the Kilifi coast north of Mombasa. A place where a few committed neighbours can change a child's whole future.",
};

export default function WhyBodoiPage() {
    return (
        <>
            <Hero />
            <MapStrip />
            <Intro />
            <RealityGrid />
            <DayInBodoi />
            <Needle />
            <Voices />
            <CtaBand />
        </>
    );
}
