import type { Pillar, ProgramCard, Stat } from "./types";

export const homepage = {
    hero: {
        eyebrow: "Bodoi · Mombasa · since 2011",
        headline: "A school by the sea, for the children of Bodoi.",
        headlineItalic: "Bodoi.",
        lead: "We partner with the families of Bodoi, Kenya, to promote education, address food insecurity, and build relationships that last a lifetime. Angaza Nuru is Kiswahili for \"to illuminate.\"",
        ctas: {
            primary: { label: "Sponsor a child →", href: "#donate" },
            ghost: { label: "Our story", href: "/our-story" },
        },
        portrait: {
            src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/Copy-of-_TL25272-1-1920x967.jpg",
            alt: "A young student at the Angaza Nuru School in Bodoi",
            width: 720,
            height: 900,
        },
        floatingCard: {
            label: "Now sponsoring",
            primary: "students at school",
            photo: {
                src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL26165-scaled-e1722179065507-960x450.jpg",
                alt: "",
            },
        },
        stamp: "Mornings in Bodoi",
    },
    pillars: [
        {
            title: "Promoting Education",
            description: "Higher education was once a dim possibility for the children of Bodoi. Today, hundreds attend school every year — many graduating to secondary school and beyond.",
            icon: "education",
            tone: "terracotta",
            href: "/what-we-do#school",
            image: {
                src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL26892-3-1920x967.jpg",
                alt: "Children learning at Angaza Nuru School",
            },
        },
        {
            title: "Alleviating Hunger",
            description: "A weekly feeding program that began with one Saturday lunch in 2011 now welcomes 450 children each week — with Bible study, sports, and an agricultural club.",
            icon: "food",
            tone: "ocean",
            href: "/what-we-do#kitchen",
            image: {
                src: "https://friendsofangazanuru.org/wp-content/uploads/2016/06/cropped-IMG_9293.jpg",
                alt: "The Saturday feeding program in Bodoi",
            },
        },
        {
            title: "Building Relationships",
            description: "We partner with the families of Bodoi as neighbours, not benefactors. Sports, music, agriculture, and afternoons under the mango tree — friendship is the work.",
            icon: "relationships",
            tone: "sunset",
            href: "/our-story",
            image: {
                src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL26715-scaled.jpg",
                alt: "Community gathering at Bodoi",
            },
        },
    ] satisfies Pillar[],
    stats: [
        { value: "1,000", label: "Meals shared at our weekly Saturday feeding program", tone: "terracotta-soft" },
        { value: "302", label: "Students attending school for free, thanks to our sponsors", tone: "sunset" },
        { value: "39", label: "Different schools our scholarship students attend", tone: "terracotta-soft" },
        { value: "21", label: "U.S. states our sustaining sponsors call home", tone: "sunset" },
    ] satisfies Stat[],
    programs: [
        {
            eyebrow: "Education · Since 2012",
            title: "Scholarship Program",
            description: "Our main focus. Since 2012, we've worked to ensure that every child in Bodoi has access to school — uniforms, fees, meals, and a sponsor who writes back.",
            href: "/what-we-do#scholarship",
            image: {
                src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL26165-scaled-e1722179065507-960x450.jpg",
                alt: "Students at Kilifi County School",
            },
        },
        {
            eyebrow: "Education · Foundation",
            title: "Angaza Nuru School",
            description: "What began as classes in the local church building is now a school of our own — a place where Bodoi's youngest learners read, write, sing, and play.",
            href: "/what-we-do#school",
            image: {
                src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/Angaza-Nuru-School-Landing-Page-scaled-e1722051089833-960x450.jpeg",
                alt: "The Angaza Nuru School",
            },
        },
        {
            eyebrow: "Food security · Weekly",
            title: "Feeding Program",
            description: "Every Saturday, around 450 children gather at Bodoi ACK. There is singing, dancing, a hot meal, Bible study, and sports — and nobody goes home hungry.",
            href: "/what-we-do#feeding",
            image: {
                src: "https://friendsofangazanuru.org/wp-content/uploads/2016/06/ANFeeding-e1722051353311-960x450.jpg",
                alt: "Saturday feeding program",
            },
        },
        {
            eyebrow: "Sustainability · New",
            title: "Chicken Farm",
            description: "Broke ground in 2023. The farm is designed to bring revenue into the ministry while teaching agriculture — a step toward Bodoi sustaining itself.",
            href: "/what-we-do#farm",
            image: {
                src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/IMG-20240726-WA0004-960x450.jpg",
                alt: "The Angaza Nuru chicken farm",
            },
        },
    ] satisfies ProgramCard[],
    storyPreview: {
        eyebrow: "Our story",
        // Pull-quote text. The quote markers are added in JSX. The phrase to highlight in terracotta:
        quote: {
            // We render: openQuote + before + <em>highlight</em> + after + closeQuote
            before:
                "It started with one Saturday lunch under the mango tree at Bodoi ACK. Fifteen years on, the bell still rings every morning  and now there are ",
            highlight: "three hundred and two",
            after: " reasons to keep ringing it.",
        },
        image: {
            src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL24656-2-scaled.jpg",
            alt: "A moment from Bodoi",
            width: 720,
            height: 900,
        },
        byline: {
            name: "Judy Achieng & Joseph Oyaro",
            role: "Co-founders, Lower Bodoi",
            avatar: {
                src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL26477-scaled.jpg",
                alt: "",
                width: 48,
                height: 48,
            },
        },
        cta: { label: "Read the full story →", href: "/our-story" },
    },
    visitBand: {
        eyebrow: "Come and see for yourself",
        headline: "You are",
        highlight: "welcome in Bodoi.",
        after: "Our door is the church gate.",
        body: "A handful of supporters travel to Lower Bodoi each year, to spend a Saturday at the kitchen, sit in on a class, or stay a week and help out. There's no programme to sign up for. Write to us and we'll plan a visit that fits.",
        image: {
            src: "https://friendsofangazanuru.org/wp-content/uploads/2024/07/TL26715-scaled.jpg",
            alt: "The Bodoi coastline near the church",
            width: 720,
            height: 720,
        },
    },
    donate: {
        eyebrow: "Sponsor a child",
        headline: "School fees. Uniform. Two meals. A friend who writes back.",
        headlineItalic: "A friend who writes back.",
        body: "Sustaining sponsors give monthly so a child in Bodoi can attend school for the full year. You'll receive letters from your sponsored student each term.",
        bullets: [
            "School fees, uniform, books and supplies",
            "A place at our weekly Saturday feeding program",
            "Termly letters and photos from your sponsored student",
        ],
        amounts: [25, 50, 100, 250],
    },
} as const;
