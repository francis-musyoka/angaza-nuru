import type { Founder, TimelineEntry } from "./types";

type NarrativeFigure = {
    src: string;
    alt: string;
    caption: string;
};

type NarrativeChapter = {
    num: string;
    label: string;
    title: string;
    titleEmSuffix?: string;
    paragraphs: string[];
    figure?: NarrativeFigure;
};

export const ourStory = {
    hero: {
        eyebrow: "Our story · Lower Bodoi, Mombasa",
        headline: "It started with one Saturday lunch under a mango tree.",
        lede: "A small village church. A pot of pilau. About forty kids the first weekend, sitting cross-legged in the sand. Fifteen years later, the smell of cooking still drifts down the path on Saturday mornings — only now it carries further.",
        pills: ["Bodoi, Mombasa County", "Founded 2011", "8 min read"],
        image: {
            src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL26715-scaled.jpg",
            alt: "A Saturday morning in Lower Bodoi",
            width: 720,
            height: 900,
        },
    },
    swahiliBand: {
        title: "Angaza Nuru",
        gloss: "Kiswahili · verb · noun",
        meaning: "To shine a light. To illuminate the path that's already there, so the next foot can find it.",
    },
    // NOTE: HTML has 5 narrative chapters, not a fixed count in the skeleton
    narrative: [
        {
            num: "01",
            label: "The village",
            title: "Lower Bodoi sits where the Mombasa road bends toward the sea.",
            paragraphs: [
                "It is a coastal village an hour north of Mombasa city — palm groves, sandy lanes, a small fishing channel, and the steady sound of the Indian Ocean somewhere beyond the trees. On Sunday mornings the church bell at Bodoi ACK carries across the rooftops and pulls people in from all directions. On weekday mornings, until recently, the same path that led to the church led, for many children, to nowhere in particular.",
                "School fees in Kenya are not enormous, but for a family bringing in a few hundred shillings a day, a uniform and a school bag are real money. So children stayed home. Parents worked. The bell rang.",
            ],
            figure: {
                src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/Copy-of-_TL25272-1-1920x967.jpg",
                alt: "Bodoi village morning",
                caption: "A Tuesday morning outside the school gate.",
            },
        },
        {
            num: "02",
            label: "The first lunch",
            title: "In 2011, Judy Achieng cooked rice for forty children — and they kept coming back.",
            paragraphs: [
                "Judy had grown up in Bodoi. Her father, Rev. Richard Oyaro, planted the Anglican church there. Her brother, Joseph Oyaro, taught at the parish. After visiting home one rainy season and seeing how many children spent their Saturdays hungry, Judy did the most ordinary thing: she made lunch.",
                "Pilau. Ugali. Mboga and a piece of fruit. Forty plates the first weekend. Fifty the next. By the end of that year there were Bible stories afterward, then songs, then a small chalkboard pulled out from the back of the church so the older kids could practise letters while the younger ones napped on a mat.",
                "What had started as a meal had quietly become a school.",
            ],
        },
        {
            num: "03",
            label: "Scholarships",
            // The em on "Then a hundred more." is rendered in the component
            title: "One sponsor, one student. Then another. Then a hundred more.",
            titleEmSuffix: "Then a hundred more.",
            paragraphs: [
                "By 2012, Joseph had a notebook with names in it — children whose families could not pay for the local primary school, and who he was sure would thrive if they could. The first scholarship came from a friend of the family in Tennessee. Then a small church congregation. Then a few cousins of cousins.",
                "Today, sustaining sponsors from twenty-one U.S. states pay the school fees of more than three hundred children in Lower Bodoi and the surrounding area. Some of those children attend the local public primary. Some attend boarding secondary. A growing number now walk a quarter mile down the lane to a school of our own.",
            ],
            figure: {
                src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL26165-scaled-e1722179065507-960x450.jpg",
                alt: "Students at a partner secondary school",
                caption: "Form 2 students at one of our partner secondary schools, 2024.",
            },
        },
        {
            num: "04",
            label: "The school",
            title: "The classroom outgrew the church. So we built one of our own.",
            paragraphs: [
                "For years, the youngest learners crowded into the back room of Bodoi ACK, classes overlapping with choir practice and choir practice overlapping with classes. It was warm, it was loud, and the children loved it. It was also temporary by any honest measure.",
                "The Angaza Nuru School broke ground a few years ago and now welcomes nursery and lower primary classes year-round. There is a playground. There is a kitchen — a real one, with a tin roof that doesn't leak. There is a small library where, on Friday afternoons, the older kids read aloud to the younger ones. We can hear them from the road.",
            ],
        },
        {
            num: "05",
            label: "The chicken farm",
            title: "Dignity is sustainability. So we're building toward both.",
            paragraphs: [
                "The next chapter is one Bodoi is writing for itself. In 2023, we broke ground on a chicken farm at the edge of the school plot. It is small, by the standards of a chicken farm. It is enormous, by the standards of a place where most of the protein comes in once a week from a market five miles up the road.",
                "The farm sells eggs locally. It feeds the Saturday kitchen. And it teaches the older students agriculture — how to plan, how to raise, how to keep books. It is, slowly, the beginning of a future where Angaza Nuru is funded by Bodoi as much as it is funded for Bodoi.",
            ],
        },
    ] satisfies NarrativeChapter[],
    pullquote: {
        quote: "We were never trying to start a school. We were trying to make sure the children we knew got one warm meal. The school is what happened next.",
        attr: "Judy Achieng, co-founder",
    },
    // NOTE: Timeline has 7 entries: 2011, 2012, 2015, 2019, 2022, 2023, Today — matches spec
    timeline: [
        {
            year: "2011",
            title: "The first Saturday lunch",
            body: "Judy Achieng cooks pilau for around forty children at Bodoi ACK. Word spreads. By December, the lunch has become a weekly tradition.",
        },
        {
            year: "2012",
            title: "The first scholarship",
            body: "Joseph Oyaro lists thirty children whose school fees the program will cover. Priest Lake Presbyterian Church in Tennessee begins funding the weekly meal.",
        },
        {
            year: "2015",
            title: "One hundred meals a Saturday",
            body: "The kitchen expands. Bible study, songs, and an agricultural club join the program. The first cohort of sponsored students sits their primary school exams.",
        },
        {
            year: "2019",
            title: "Nursery classes move out of the church",
            body: "Construction begins on the first dedicated classrooms at what will become the Angaza Nuru School. The choir keeps its room back.",
        },
        {
            year: "2022",
            title: "Friends of Angaza Nuru, Inc. is chartered",
            body: "The U.S. partner organisation forms in September, joining hands with the team in Bodoi to share the work and the load.",
        },
        {
            year: "2023",
            title: "The chicken farm breaks ground",
            body: "Our first sustainability project — eggs for the school kitchen and a path toward Bodoi funding more of its own work.",
        },
        {
            year: "Today",
            title: "Three pillars, one neighbourhood",
            body: "Around 450 children at the Saturday kitchen each weekend. Three hundred-plus students on full scholarship across thirty-nine schools. The bell still rings every weekday morning.",
        },
    ] satisfies TimelineEntry[],
    // NOTE: HTML has 3 founders, not 2 as the skeleton suggested — all 3 preserved
    founders: [
        {
            name: "Judy Achieng",
            role: "Co-founder · Director",
            bio: "Born in Bodoi, raised in the church her father planted. Cooked the first Saturday lunch in 2011 and has been quietly running the kitchen, the rota, and most of the rest ever since.",
            image: {
                src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL24656-2-scaled.jpg",
                alt: "Judy Achieng",
                width: 600,
                height: 750,
            },
        },
        {
            name: "Joseph Oyaro",
            role: "Co-founder · Headteacher",
            bio: "Judy's brother and the man who keeps the scholarship list. Trained as a teacher, called to the work by his father, and now headteacher at the Angaza Nuru School.",
            image: {
                src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL26477-scaled.jpg",
                alt: "Joseph Oyaro",
                width: 600,
                height: 750,
            },
        },
        {
            name: "Rev. Richard Oyaro",
            role: "Founder of Bodoi ACK",
            bio: "Planted the village church four decades ago. Still the first one to arrive on a Saturday and the last to leave — usually with a child or two on his shoulders.",
            image: {
                src: "https://friendsofangazanuru.org/wp-content/uploads/2016/06/IMG_3440.jpg",
                alt: "Rev. Richard Oyaro",
                width: 600,
                height: 750,
            },
        },
    ] satisfies Founder[],
    // NOTE: HTML values are titled "Neighbours, not benefactors", "One child at a time",
    // "Honest with the numbers" — not Dignity/Presence/Long arc as the skeleton suggested
    values: [
        {
            title: "Neighbours, not benefactors",
            body: "The work is led by people who live in Bodoi and have raised their children there. Sponsors are partners; they are not in charge.",
        },
        {
            title: "One child at a time",
            body: "We grow only as fast as we can know each child by name. Quality of relationship before quantity of programs, every time.",
        },
        {
            title: "Honest with the numbers",
            body: "We tell sponsors what we did with the money, what worked, and what didn't. The Saturday lunch has been running for fifteen years because nobody pretended otherwise.",
        },
    ],
    cta: {
        eyebrow: "What's next",
        headline: "The story keeps writing itself.",
        headlineEm: "Want to be in the next chapter?",
        body: "Sponsor a child for the school year, plan a visit to Bodoi, or simply stay in touch.",
    },
} as const;
