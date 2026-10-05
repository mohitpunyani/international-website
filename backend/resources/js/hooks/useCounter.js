import { useEffect, useRef, useState } from 'react';

export default function useCounter(target, duration = 2000, triggered = false) {
    const [value, setValue] = useState(0);
    const startTime = useRef(null);

    useEffect(() => {
        if (!triggered) return;
        startTime.current = null;

        const step = (timestamp) => {
            if (!startTime.current) startTime.current = timestamp;
            const progress = Math.min((timestamp - startTime.current) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [target, duration, triggered]);

    return value;
}
