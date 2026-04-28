"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type VisitModalContextValue = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

const VisitModalContext = createContext<VisitModalContextValue | null>(null);

export function VisitModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    // Close on route change. Using a functional setter avoids depending on
    // `isOpen` here; the lint rule still flags any setState-in-effect, so we
    // disable it for this legitimate "external event → state sync" case.
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen((prev) => (prev ? false : prev));
    }, [pathname]);

    // Lock body scroll while open.
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
        return () => document.body.classList.remove("modal-open");
    }, [isOpen]);

    const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

    return <VisitModalContext.Provider value={value}>{children}</VisitModalContext.Provider>;
}

export function useVisitModal(): VisitModalContextValue {
    const ctx = useContext(VisitModalContext);
    if (!ctx) {
        throw new Error("useVisitModal must be used inside <VisitModalProvider>");
    }
    return ctx;
}
