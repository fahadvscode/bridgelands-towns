import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#212327",
          color: "#D9603B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 15,
          fontWeight: 700,
          fontFamily: "ui-serif, Georgia, serif",
        }}
      >
        T
      </div>
    ),
    { ...size },
  );
}
