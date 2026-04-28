import Image from "next/image";
import { Pattern } from "@/components/ui/Pattern";
import { whatWeDo } from "@/content/what-we-do";

const CheckIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-sunset mt-[3px] shrink-0"
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

export function ProgramKitchen() {
    const { kitchen } = whatWeDo;

    return (
        <section
            id="feeding"
            className="bg-ocean text-cream py-24 relative overflow-hidden"
        >
            <Pattern kind="waves" opacity={0.18} />

            <div className="relative mx-auto max-w-300 px-8">
                {/* pb-grid: content left (1fr), photo right (1.1fr) */}
                <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] items-start">
                    {/* Content */}
                    <div>
                        {/* pb-tag — dark variant uses sunset */}
                        <div className="inline-flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-widest text-sunset">
                            <span className="font-display font-normal text-lg tracking-[-0.01em]">
                                {kitchen.tag.ix}
                            </span>
                            {kitchen.tag.rest}
                        </div>

                        <h2 className="mt-4 mb-5.5 font-display text-[clamp(38px,4.4vw,60px)] font-normal leading-[1.04] tracking-[-0.022em] text-balance text-cream">
                            {kitchen.title.before}
                            <em className="text-sunset italic">{kitchen.title.em}</em>
                        </h2>

                        {/* scene — dark variant */}
                        <p className="mb-5.5 max-w-135 font-display italic text-[clamp(20px,2vw,26px)] leading-[1.4] tracking-[-0.005em] text-cream border-l-2 border-sunset pl-4.5">
                            {kitchen.scene}
                        </p>

                        <p className="mb-4 max-w-140 text-[17px] leading-[1.7] text-[rgba(248,241,229,0.86)]">
                            {kitchen.body1}
                        </p>
                        <p className="mb-4 max-w-140 text-[17px] leading-[1.7] text-[rgba(248,241,229,0.86)]">
                            {kitchen.body2}
                        </p>

                        {/* pb-list — dark */}
                        <ul className="mt-5.5 grid gap-3.5 p-0 list-none">
                            {kitchen.bullets.map((b) => (
                                <li
                                    key={b.bold}
                                    className="grid gap-3 text-[15px] leading-[1.55] text-[rgba(248,241,229,0.86)] items-start"
                                    style={{ gridTemplateColumns: "22px 1fr" }}
                                >
                                    <CheckIcon />
                                    <span>
                                        <b className="text-cream font-semibold">{b.bold}</b>
                                        {b.rest}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* pb-stats — dark variant */}
                        <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 border-t border-[rgba(248,241,229,0.2)]">
                            {kitchen.stats.map((stat, idx) => (
                                <div
                                    key={stat.label}
                                    className={[
                                        "pt-4.5 pb-3",
                                        idx < kitchen.stats.length - 1
                                            ? "sm:border-r sm:border-[rgba(248,241,229,0.2)] sm:pr-4"
                                            : "",
                                        idx > 0 ? "sm:pl-4" : "",
                                        "max-sm:border-b max-sm:border-[rgba(248,241,229,0.2)] max-sm:pb-3.5 last:max-sm:border-b-0",
                                    ]
                                        .filter(Boolean)
                                        .join(" ")}
                                >
                                    <div className="font-display text-[32px] leading-none tracking-[-0.01em] text-sunset">
                                        {stat.value}
                                    </div>
                                    <div className="mt-2 text-xs leading-[1.4] text-[rgba(248,241,229,0.7)]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="relative">
                        <div
                            className="overflow-hidden rounded-xl shadow-3 bg-sand-200"
                            style={{ aspectRatio: "4/5" }}
                        >
                            <Image
                                src={kitchen.image.src}
                                alt={kitchen.image.alt}
                                width={kitchen.image.width}
                                height={kitchen.image.height}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Figure caption — dark */}
                        <p className="mt-3.5 pl-1 text-[13px] italic text-[rgba(248,241,229,0.7)]">
                            {kitchen.figcap}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
