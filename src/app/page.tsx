import { DonateBand } from "./_components/homepage/DonateBand";
import { Hero } from "./_components/homepage/Hero";
import { ProgramsGrid } from "./_components/homepage/ProgramsGrid";
import { StatsBand } from "./_components/homepage/StatsBand";
import { StoryPreview } from "./_components/homepage/StoryPreview";
import { ThreePillars } from "./_components/homepage/ThreePillars";
import { VisitBand } from "./_components/homepage/VisitBand";

export default function HomePage() {
    return (
        <>
            <Hero />
            <ThreePillars />
            <StatsBand />
            <ProgramsGrid />
            <StoryPreview />
            <VisitBand />
            <DonateBand />
        </>
    );
}
