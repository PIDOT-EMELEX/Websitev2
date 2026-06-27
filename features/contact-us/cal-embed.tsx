"use client";

import { useEffect, useRef } from "react";

const CAL_LINK = "pi-dot/30min";

export default function CalEmbed() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Official Cal.com embed snippet (IIFE) — queues calls until embed.js loads
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (function (C: any, A: string, L: string) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function (...args: any[]) {
          const cal = C.Cal;
          const ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const api: any = function (...a: any[]) {
              p(api, a);
            };
            const namespace = ar[1];
            api.q = api.q || ([] as any[]);
            if (typeof namespace === "string") {
              cal.ns[namespace] = api;
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Cal = (window as any).Cal;

    Cal("init", { origin: "https://cal.com" });

    Cal("inline", {
      elementOrSelector: "#cal-inline-embed",
      calLink: CAL_LINK,
      layout: "month_view",
    });

    Cal("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
      styles: {
        branding: { brandColor: "#f69507" },
        body: { background: "transparent" },
      },
      cssVarsPerTheme: {
        dark: {
          "cal-border-booker": "0px solid transparent",
          "cal-bg": "transparent",
          "cal-bg-muted": "transparent",
        },
      },
    });
  }, []);

  return (
    <div
      id="cal-inline-embed"
      style={{
        width: "100%",
        height: "100%",
        minHeight: "980px",
        overflow: "hidden",
      }}
    />
  );
}
