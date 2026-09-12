"use client";

import { useEffect } from "react";

export function RevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    const observe = () => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
        observer.observe(el);
      });
    };

    observe();

    // Re-observe after a tick to catch dynamically rendered elements
    const timer = setTimeout(observe, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return <>{children}</>;
}
