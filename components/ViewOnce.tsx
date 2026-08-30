"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function ViewOnce({
  event,
  params,
  storageKey,
  children,
}: {
  event: string;
  params?: Record<string, string | number | boolean>;
  storageKey: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const fire = () => {
      try {
        if (sessionStorage.getItem(storageKey)) return;
        sessionStorage.setItem(storageKey, "1");
      } catch {
        /* continue */
      }
      trackEvent(event, params);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          fire();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [event, params, storageKey]);

  return <div ref={ref}>{children}</div>;
}
