import type { Metadata } from "next";
import { CtaBand } from "./_components/CtaBand";
import { Hero } from "./_components/Hero";
import { Interlude } from "./_components/Interlude";
import { KnitTogether } from "./_components/KnitTogether";
import { ProgramFarm } from "./_components/ProgramFarm";
import { ProgramKitchen } from "./_components/ProgramKitchen";
import { ProgramScholarship } from "./_components/ProgramScholarship";
import { ProgramSchool } from "./_components/ProgramSchool";

export const metadata: Metadata = {
    title: "What we do",
    description:
        "Four programs in Bodoi — a scholarship register, a school, a Saturday kitchen, and a small chicken farm — each one done well for fifteen years.",
};

export default function WhatWeDoPage() {
    return (
        <>
            <Hero />
            <ProgramScholarship />
            <Interlude which="interlude1" />
            <ProgramSchool />
            <ProgramKitchen />
            <Interlude which="interlude2" />
            <ProgramFarm />
            <KnitTogether />
            <CtaBand />
        </>
    );
}
