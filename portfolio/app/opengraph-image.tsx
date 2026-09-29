import { ImageResponse } from "next/og";

export const alt =
  "David Navarro - Senior DevOps / Platform Engineer. AWS, Kubernetes, Terraform, CI/CD.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#fafafa",
          padding: "80px",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#a1a1aa",
            }}
          >
            david-navarro.dev
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#fafafa",
              color: "#0a0a0a",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            DN
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -3,
            }}
          >
            David Navarro
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 500,
              color: "#d4d4d8",
              letterSpacing: -1,
              lineHeight: 1.1,
            }}
          >
            Senior DevOps / Platform Engineer
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#a1a1aa",
              marginTop: 8,
            }}
          >
            AWS · Kubernetes · Terraform · CI/CD
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 32,
            fontSize: 22,
            color: "#a1a1aa",
          }}
        >
          <div>Charlotte, NC</div>
          <div>·</div>
          <div>Bilingual EN / ES</div>
          <div>·</div>
          <div>AWS SA · CKA · Terraform Associate</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
