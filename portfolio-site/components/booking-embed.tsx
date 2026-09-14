"use client";

import { useEffect, useRef, useState } from "react";

const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";
const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";

type CalendlyGlobal = {
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement;
  }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyGlobal;
  }
}

/** Loads a tag once, even if two embeds mount, and resolves when it is ready. */
function loadOnce(tag: "script" | "link", href: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const selector =
      tag === "script" ? `script[src="${href}"]` : `link[href="${href}"]`;
    const existing = document.querySelector<HTMLElement>(selector);
    if (existing) {
      if (existing.dataset.loaded === "true" || tag === "link") return resolve();
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(), { once: true });
      return;
    }
    const el = document.createElement(tag);
    if (tag === "script") {
      (el as HTMLScriptElement).src = href;
      (el as HTMLScriptElement).async = true;
    } else {
      (el as HTMLLinkElement).rel = "stylesheet";
      (el as HTMLLinkElement).href = href;
    }
    el.addEventListener(
      "load",
      () => {
        el.dataset.loaded = "true";
        resolve();
      },
      { once: true }
    );
    el.addEventListener("error", () => reject(), { once: true });
    document.head.appendChild(el);
  });
}

/** Site styling and a quieter booking page, passed to Calendly as URL params. */
function withParams(raw: string): string {
  try {
    const url = new URL(raw);
    url.searchParams.set("hide_gdpr_banner", "1");
    url.searchParams.set("hide_landing_page_details", "1");
    url.searchParams.set("primary_color", "ff9900");
    return url.toString();
  } catch {
    return raw;
  }
}

/**
 * Calendly booking calendar, inline so a visitor picks a slot without leaving
 * the page. Script, stylesheet and iframe only load once the section scrolls
 * into view, so they stay off the critical path for anyone who never gets
 * that far.
 */
export function BookingEmbed({ url }: { url: string }) {
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<HTMLDivElement>(null);
  const initialised = useRef(false);
  // False on both server and client, so hydration matches.
  const [visible, setVisible] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const node = container.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
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
    if (!visible || initialised.current) return;
    let cancelled = false;

    (async () => {
      try {
        await Promise.all([
          loadOnce("link", WIDGET_CSS),
          loadOnce("script", WIDGET_JS),
        ]);
        if (cancelled || !widget.current || !window.Calendly) return;
        initialised.current = true;
        window.Calendly.initInlineWidget({
          url: withParams(url),
          parentElement: widget.current,
        });
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [visible, url]);

  return (
    <div ref={container} className="w-full">
      {failed ? (
        <p className="py-16 text-center text-sm text-muted-foreground">
          The calendar could not load.{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mark-text underline-offset-4 hover:underline"
          >
            Open it on Calendly instead.
          </a>
        </p>
      ) : (
        <>
          <div
            ref={widget}
            className="min-w-[20rem]"
            style={{ height: "44rem" }}
          />
          {!visible ? (
            <p className="py-16 text-center text-sm text-muted-foreground">
              Loading the calendar…
            </p>
          ) : null}
        </>
      )}
    </div>
  );
}
