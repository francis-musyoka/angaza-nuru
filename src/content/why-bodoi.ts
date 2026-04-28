import type { DayEntry, Voice } from "./types";

export type NeedleCard = {
    icon: "clock" | "people" | "check";
    title: string;
    body: string;
};

export type RealityCard = {
    value: string;
    label: string;
    body: string;
    source: string;
};

export type MapCoord = {
    label: string;
    value: string;
    sub: string;
};

export type DayEntryFull = DayEntry & {
    title: string;
};

export type VoiceFull = Voice & {
    avatar: string;
    quoteEm: string;
    quoteAfter: string;
};

export const whyBodoi = {
    hero: {
        eyebrow: "Why Bodoi",
        headlineParts: {
            before: "A small village. A long coast. A ",
            em: "real",
            after: " chance to do useful work.",
        },
        leadFirst:
            "Lower Bodoi is one of dozens of fishing and farming villages along the Kilifi coast north of Mombasa.",
        leadSecond:
            " It is not the poorest place in Kenya, and it is not the most photographed. It is, quietly, a place where a few committed neighbours can change a child's whole future for the cost of a uniform.",
    },
    map: {
        coordinates: [
            { label: "County", value: "Kilifi", sub: "South coast region" },
            { label: "Distance from Mombasa", value: "~55 km", sub: "About an hour by matatu" },
            { label: "Village population", value: "~3,200", sub: "Lower Bodoi area" },
            { label: "Languages spoken", value: "Kiswahili, Mijikenda", sub: "English in school" },
        ] satisfies MapCoord[],
    },
    intro: {
        eyebrow: "A coastal village",
        headingParts: {
            before: "Coconut palms, a fishing channel, and one road that ",
            em: "everybody",
            after: " walks.",
        },
        paragraphs: [
            {
                text: "Lower Bodoi is a village of perhaps three thousand people, set back from a tidal creek that opens into the Indian Ocean. The main road is unpaved. The church is the largest building. The school used to meet inside it.",
                isFirst: true,
            },
            {
                text: "Most families here farm small plots — maize, cassava, mangoes — or fish the channel for tilapia and mullet. A few work as casual labour at the bigger farms further inland or commute into Mombasa for the day.",
                strongSuffix: "Income is seasonal.",
                afterStrong:
                    " A good month and a bad month can differ by a factor of three or four.",
                isFirst: false,
            },
            {
                text: "School fees in Kenya are not enormous. For Bodoi families, they are still the difference between a child going and a child staying home. Uniforms, books, the small fees that schools charge for exams — these are the points where bright kids fall out of the system. We work, mostly, on those points.",
                isFirst: false,
            },
            {
                text: "This is not a place defined by hardship. It is a place defined by people who know each other, who take turns watching one another's children, who show up for funerals and weddings and Saturday lunches. Our job is to add to what's already there.",
                isFirst: false,
            },
        ],
    },
    reality: [
        {
            value: "36%",
            label: "Of children on the Kenyan coast face food poverty",
            body: "Higher than the national average. Coastal counties consistently rank among Kenya's most food-insecure — not because the soil is bad, but because rainfall is unreliable and the cash economy is thin.",
            source: "Source · KNBS coastal poverty index, recent years",
        },
        {
            value: "~1 in 3",
            label: "Children in Kilifi County leave primary school before Class 8",
            body: "Most do not drop out for lack of ability. They drop out when the family cannot meet a fee, replace a uniform, or spare a child from work for another year.",
            source: "Source · Kilifi County Education Department",
        },
        {
            value: "KSh 8k",
            label: "A full year of primary school costs about $60 USD",
            body: "Fees, uniform, books, supplies, and exam charges. For most Bodoi families, that figure is one to two months of household income — paid in a single term.",
            source: "Source · Local school administrators, 2025",
        },
        {
            value: "450",
            label: "Children at the Saturday kitchen each weekend",
            body: "For many, it is the largest meal they will eat all week. The kitchen is also the place where teachers spot the children who need a scholarship next.",
            source: "Source · Our weekly attendance log",
        },
        {
            value: "302",
            label: "Students attending school for free, today",
            body: "Across thirty-nine schools. From nursery at the Angaza Nuru School all the way up to boarding secondary in nearby towns.",
            source: "Source · Scholarship program, current term",
        },
        {
            value: "15 yrs",
            label: "The same village, the same families, the same path",
            body: "We have been showing up on Saturdays since 2011. Some of the first children we fed are now teaching their own younger siblings how to read.",
            source: "Source · Founding records, Bodoi ACK",
        },
    ] satisfies RealityCard[],
    day: {
        eyebrow: "A day in Lower Bodoi",
        headingParts: {
            before: "What a Tuesday actually looks like, from the ",
            em: "school gate.",
            after: "",
        },
        lead: "Not a brochure day. A regular one. We wrote this from the headteacher’s logbook for an ordinary week in March.",
        image: {
            src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL26892-3-1920x967.jpg",
            alt: "A school day in Bodoi",
            width: 800,
            height: 1000,
        },
        entries: [
            {
                time: "06:20",
                title: "The kitchen lights come on",
                body: "Mama Asha and Mama Mwende start the porridge. Two big sufurias on charcoal. The smell reaches the path before any child does.",
            },
            {
                time: "07:00",
                title: "First children at the gate",
                body: "The youngest arrive in pairs — older siblings in front, smaller ones a few steps behind. Uniforms ironed on a charcoal flat-iron the night before.",
            },
            {
                time: "07:45",
                title: "Assembly under the mango tree",
                body: "Hymn, the national anthem, a notice or two from Mr. Joseph. Whoever has lost a sweater is reminded, gently, that this is the third time this term.",
            },
            {
                time: "08:00",
                title: "Lessons begin",
                body: "Class 1 is reading. Class 3 is times tables. Class 6 is taking a practice exam. The chickens are loud today.",
            },
            {
                time: "10:30",
                title: "Porridge break",
                body: "Each child gets a tin mug. The ones in nursery hold the mug with both hands. Nobody is in a hurry.",
            },
            {
                time: "13:00",
                title: "Lunch — pilau, mboga, fruit",
                body: "Cooked at the school kitchen. Eaten outside when the rains let us. The older children clear the plates without being asked, mostly.",
            },
            {
                time: "15:30",
                title: "Football, music, the agricultural club",
                body: "Three groups, three corners of the compound. The agricultural club is currently very interested in the new chickens. The football team has a match on Saturday.",
            },
            {
                time: "17:00",
                title: "Walk home",
                body: "Most children walk in groups. The headteacher waits at the gate until the last one is gone. The cooks lock the kitchen. The mango tree gets the place to itself again.",
            },
        ] satisfies DayEntryFull[],
    },
    needle: {
        eyebrow: "Why this place, why this work",
        headingParts: {
            before: "Three reasons we believe a small effort here goes ",
            em: "further",
            after: " than a large effort elsewhere.",
        },
        cards: [
            {
                icon: "clock" as const,
                title: "The cost of a year",
                body: "About sixty dollars buys a child a uniform, books, fees, exam charges, and supplies. Sixty dollars in Bodoi reliably keeps a child in school for the year. It is the most leveraged sixty dollars we have ever seen.",
            },
            {
                icon: "people" as const,
                title: "The team is from here",
                body: "Judy and Joseph were born in Bodoi. The cooks are aunties of the children they feed. The headteacher’s house is two doors down from the school gate. There is no version of this work that vanishes if a foreign donor moves on.",
            },
            {
                icon: "check" as const,
                title: "The path is well-worn",
                body: "Fifteen years of Saturday lunches. A scholarship program with a real graduation rate. A new school with a real timetable. A chicken farm earning real revenue. We are not piloting an idea — we are continuing one that works.",
            },
        ] satisfies NeedleCard[],
    },
    voices: [
        {
            quote: "People ask why we don’t move closer to the city. The city is closer than they think.",
            quoteEm: "This is where my grandmother is buried.",
            quoteAfter: " This is where I want my grandchildren to learn to read.",
            author: "Mama Asha Salim",
            role: "Cook · Saturday kitchen",
            avatar:
                "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL24656-2-scaled.jpg",
        },
        {
            quote: "We were the first family in our lane to send a daughter all the way to Form 4. Now she’s in Mombasa training to be a nurse.",
            quoteEm: "That is a road three more sisters can walk.",
            quoteAfter: "",
            author: "Baba Said Karisa",
            role: "Parent · Lower Bodoi",
            avatar:
                "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL26165-scaled-e1722179065507-960x450.jpg",
        },
        {
            quote: "The ocean is loud, the wind is loud, the goats are loud. The children, when they are reading, are",
            quoteEm: "quiet.",
            quoteAfter: " That is a sound that did not used to exist on this road.",
            author: "Mwalimu Mwende Charo",
            role: "Class 3 teacher",
            avatar:
                "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL26477-scaled.jpg",
        },
        {
            quote: "I was in the first group of scholarship children.",
            quoteEm: "Now I teach the next group.",
            quoteAfter:
                " Bodoi raised me twice — once as a child, and once as a young man who needed a job.",
            author: "Amani Hamisi",
            role: "Teaching assistant · Class 1",
            avatar: "https://friendsofangazanuru.org/wp-content/uploads/2016/06/IMG_3440.jpg",
        },
    ],
    cta: {
        eyebrow: "Be part of it",
        headingParts: {
            before: "Bodoi is a small place doing a serious thing. ",
            em: "Help us keep going.",
            after: "",
        },
        body: "Sponsor a child for the school year, plan a visit, or simply share what you’ve read.",
    },
} as const;
