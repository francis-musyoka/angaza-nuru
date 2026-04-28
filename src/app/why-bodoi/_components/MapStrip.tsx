import { whyBodoi } from "@/content/why-bodoi";

export function MapStrip() {
    const { coordinates } = whyBodoi.map;

    return (
        <section className="border-b border-(--border-1) bg-cream-soft py-10">
            <div className="mx-auto grid max-w-300 items-center gap-9 px-8 lg:grid-cols-[auto_1fr] lg:gap-9">
                {/* Left: inline coast-of-Kenya SVG */}
                <div
                    className="w-full shrink-0 overflow-hidden rounded-2xl border border-(--border-1) lg:h-50 lg:w-80"
                    style={{
                        background: "linear-gradient(180deg, #DCE9EF 0%, #BFD4DD 100%)",
                    }}
                    aria-hidden="true"
                >
                    <svg
                        viewBox="0 0 320 200"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <defs>
                            <linearGradient id="wb-water" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3E5C84" />
                                <stop offset="100%" stopColor="#1E3A5F" />
                            </linearGradient>
                            <linearGradient id="wb-land" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#F4ECDC" />
                                <stop offset="100%" stopColor="#E8DCC1" />
                            </linearGradient>
                        </defs>
                        <rect width="320" height="200" fill="url(#wb-water)" />
                        {/* coastline land mass */}
                        <path
                            d="M0 0 L0 200 L160 200 Q175 165 168 130 Q160 100 178 78 Q200 50 195 22 Q190 0 175 0 Z"
                            fill="url(#wb-land)"
                        />
                        {/* inlet */}
                        <path
                            d="M168 130 Q150 122 138 138 Q132 152 152 158 Q170 158 168 130 Z"
                            fill="url(#wb-water)"
                            opacity="0.7"
                        />
                        {/* subtle wave lines */}
                        <path
                            d="M210 40 q15 -6 30 0 t30 0"
                            stroke="rgba(248,241,229,0.2)"
                            strokeWidth="1"
                            fill="none"
                        />
                        <path
                            d="M220 60 q15 -6 30 0 t30 0"
                            stroke="rgba(248,241,229,0.18)"
                            strokeWidth="1"
                            fill="none"
                        />
                        <path
                            d="M225 90 q15 -6 30 0 t30 0"
                            stroke="rgba(248,241,229,0.16)"
                            strokeWidth="1"
                            fill="none"
                        />
                        {/* Mombasa label dot */}
                        <circle cx="120" cy="172" r="3" fill="#7A6E5C" />
                        <text
                            x="128"
                            y="176"
                            fontFamily="Inter, sans-serif"
                            fontSize="9"
                            fill="#4A3F30"
                        >
                            Mombasa
                        </text>
                        {/* Bodoi marker */}
                        <circle cx="158" cy="105" r="6" fill="#C8553D" />
                        <circle
                            cx="158"
                            cy="105"
                            r="11"
                            fill="none"
                            stroke="#C8553D"
                            strokeWidth="1"
                            opacity="0.6"
                        />
                        <circle
                            cx="158"
                            cy="105"
                            r="17"
                            fill="none"
                            stroke="#C8553D"
                            strokeWidth="1"
                            opacity="0.3"
                        />
                        <text
                            x="100"
                            y="98"
                            fontFamily="DM Serif Display, serif"
                            fontSize="15"
                            fill="#2C2419"
                        >
                            Bodoi
                        </text>
                        {/* compass */}
                        <g transform="translate(286 24)">
                            <circle
                                r="14"
                                fill="rgba(255,253,247,0.7)"
                                stroke="rgba(44,36,25,0.18)"
                            />
                            <path d="M0 -9 L3 0 L0 -2 L-3 0 Z" fill="#2C2419" />
                            <text
                                y="14"
                                textAnchor="middle"
                                fontFamily="Inter, sans-serif"
                                fontSize="7"
                                fill="#2C2419"
                                fontWeight="700"
                            >
                                N
                            </text>
                        </g>
                        {/* ocean label */}
                        <text
                            x="252"
                            y="120"
                            fontFamily="DM Serif Display, serif"
                            fontSize="13"
                            fill="rgba(248,241,229,0.7)"
                            fontStyle="italic"
                        >
                            Indian Ocean
                        </text>
                    </svg>
                </div>

                {/* Right: 4-column coordinate items */}
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                    {coordinates.map((coord) => (
                        <div key={coord.label}>
                            <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-charcoal-mute">
                                {coord.label}
                            </div>
                            <div className="font-display text-[22px] leading-[1.15] tracking-[-0.005em] text-charcoal">
                                {coord.value}
                                <small className="mt-1 block font-body text-xs font-normal leading-normal text-charcoal-mute">
                                    {coord.sub}
                                </small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
