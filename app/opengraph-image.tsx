import { ImageResponse } from "next/og";

export const alt = "Bridgelands Townhomes — Coming Soon, Woodbridge, Vaughan";
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
          justifyContent: "flex-end",
          background: "linear-gradient(165deg, #212327 0%, #3A3D42 58%, #4A4E55 100%)",
          padding: "64px",
          color: "#FAFAF9",
          fontFamily: "ui-serif, Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 16,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#D9603B",
            marginBottom: 16,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Coming Soon · Woodbridge, Vaughan
        </div>
        <div style={{ fontSize: 52, lineHeight: 1.1, fontWeight: 600, maxWidth: 980 }}>
          Bridgelands Towns
        </div>
        <div
          style={{
            marginTop: 20,
            width: 80,
            height: 3,
            background: "#D9603B",
          }}
        />
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            maxWidth: 880,
            color: "#EFEDEA",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Expected freehold townhome collection near Weston Road & Teston Road, by Arista Homes,
          Deco Homes, and Opus Homes.
        </div>
      </div>
    ),
    { ...size },
  );
}
