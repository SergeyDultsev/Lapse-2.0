import { useCallback, useEffect, useRef } from "react";

export const useDebounce = <T extends unknown[]>(
    fn: (...args: T) => void,
    delay: number = 300
) => {
    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const fnRef = useRef(fn);

    useEffect(() => {
        fnRef.current = fn;
    }, [fn]);

    useEffect(() => {
        return () => {
            if (timeout.current) clearTimeout(timeout.current);
        }
    }, [])

    return useCallback((...args: T) => {
        if (timeout.current) clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            fnRef.current(...args);
        }, delay);
    }, [delay]);
}