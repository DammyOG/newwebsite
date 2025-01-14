import { useEffect, useState, RefObject } from "react";

export function useInView(ref: RefObject<HTMLElement | null>): boolean {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                threshold: 0.1, // Adjust this value as needed
            }
        );

        const element = ref.current;
        if (!element) return;

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [ref]);

    return isInView;
}
