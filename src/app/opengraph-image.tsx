import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Arti Yoga Studio — Yoga Classes & Personal Sessions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "#FAFAF7",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Accent blob */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, #C4956A22 0%, transparent 70%)",
          }}
        />

        {/* Top label */}
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#4A7C59",
          }}
        >
          <div style={{ width: 20, height: 2, background: "#4A7C59" }} />
          Yoga with Arti
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#1C1C1A",
            lineHeight: 1.05,
            marginBottom: 24,
            maxWidth: 700,
          }}
        >
          Yoga that fits into your life.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: "#6B6B67",
            lineHeight: 1.5,
            maxWidth: 580,
            marginBottom: 48,
          }}
        >
          Group classes & personal home-visit sessions. Beginner friendly.
        </div>

        {/* Badges */}
        <div style={{ display: "flex", gap: 12 }}>
          {["4+ Years Experience", "Group Classes", "Home Visits", "All Levels"].map((badge) => (
            <div
              key={badge}
              style={{
                padding: "8px 18px",
                background: "#F5F2EC",
                border: "1px solid #E8E4DC",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                color: "#4A7C59",
              }}
            >
              {badge}
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 16,
            color: "#9B9B96",
            letterSpacing: "0.05em",
          }}
        >
          artiyogastudio.com
        </div>

        {/* Right accent bar */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 8,
            background: "#4A7C59",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
