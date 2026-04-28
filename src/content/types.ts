export type ImageRef = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

export type Pillar = {
    title: string;
    description: string;
    icon: "education" | "food" | "relationships";
    tone: "terracotta" | "ocean" | "sunset";
    href: string;
    image: ImageRef;
};

export type Stat = {
    value: string;
    label: string;
    tone: "terracotta-soft" | "sunset";
};

export type ProgramCard = {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    image: ImageRef;
};

export type Voice = {
    quote: string;
    author: string;
    role: string;
};

export type DayEntry = {
    time: string;
    body: string;
};

export type TimelineEntry = {
    year: string;
    title: string;
    body: string;
};

export type Founder = {
    name: string;
    role: string;
    bio: string;
    image: ImageRef;
};
