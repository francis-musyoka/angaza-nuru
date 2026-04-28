import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "ghost" | "cream";
type Size = "sm" | "md" | "lg";

const base =
    "inline-flex items-center justify-center gap-2 rounded-pill font-medium " +
    "transition-all duration-240 ease-(--ease-out) " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
    "focus-visible:ring-terracotta focus-visible:ring-offset-cream";

const variants: Record<Variant, string> = {
    primary:
        "bg-terracotta text-(--fg-on-warm) shadow-warm " +
        "hover:bg-terracotta-deep hover:-translate-y-px",
    ghost:
        "bg-transparent text-charcoal border-[1.5px] border-charcoal " +
        "hover:bg-charcoal hover:text-cream",
    cream: "bg-cream-soft text-charcoal " + "hover:bg-white",
};

const sizes: Record<Size, string> = {
    sm: "px-4.5 py-[9px] text-sm",
    md: "px-5.5 py-3 text-base",
    lg: "px-7 py-3.5 text-lg",
};

type CommonProps = {
    variant?: Variant;
    size?: Size;
    children: ReactNode;
    className?: string;
};

type ButtonAsButton = CommonProps &
    ComponentPropsWithoutRef<"button"> & {
        as?: "button";
        href?: never;
    };

type ButtonAsLink = CommonProps &
    Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
        as: "link";
        href: string;
    };

type ButtonAsAnchor = CommonProps &
    ComponentPropsWithoutRef<"a"> & {
        as: "a";
        href: string;
    };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export function Button(props: ButtonProps) {
    const { variant = "primary", size = "md", children, className = "", ...rest } = props;
    const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

    if (props.as === "link") {
        const { as: _as, ...linkRest } = rest as ButtonAsLink;
        return (
            <Link className={cls} {...linkRest}>
                {children}
            </Link>
        );
    }
    if (props.as === "a") {
        const { as: _as, ...anchorRest } = rest as ButtonAsAnchor;
        return (
            <a className={cls} {...anchorRest}>
                {children}
            </a>
        );
    }
    const { as: _as, ...buttonRest } = rest as ButtonAsButton;
    return (
        <button className={cls} {...buttonRest}>
            {children}
        </button>
    );
}
