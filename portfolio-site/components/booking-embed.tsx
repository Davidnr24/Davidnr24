"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef, useState } from "react";

/**
 * Cal.com booking calendar, inline on the page so a visitor picks a slot
 * without leaving. The embed's script and iframe only load once the section
 * scrolls into view, which keeps them off the critical path for everyone who
 * never reaches the bottom.
 */
export function BookingEmbed({
  calLink,
  namespace = "consultation",
}: {
  calLink: string;
  namespace?: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = container.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    (async () => {
      const api = await getCalApi({ namespace });
      if (cancelled) return;
      api("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
    return () => {
      cancelled = true;
    };
  }, [visible, namespace]);

  return (
    <div ref={container} className="min-h-[32rem] w-full">
      {visible ? (
        <Cal
          namespace={namespace}
          calLink={calLink}
          className="w-full"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      ) : (
        <p className="py-24 text-center text-sm text-muted-foreground">
          Loading the calendar…
        </p>
      )}
    </div>
  );
}
