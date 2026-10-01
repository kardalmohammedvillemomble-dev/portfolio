import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#fafaf7",
        }}
      >
        <div style={{ fontSize: 28, color: "#2f6fed" }}>
          Île-de-France · disponible immédiatement
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, color: "#16213a", marginTop: 20 }}>
          Mohammed Kardal
        </div>
        <div style={{ fontSize: 36, color: "#4e5a72", marginTop: 10 }}>
          Ingénieur Études &amp; Développement
        </div>
        <div style={{ fontSize: 26, color: "#4e5a72", marginTop: 50 }}>
          Django · Symfony · Vue.js · React · IBM i
        </div>
      </div>
    ),
    size
  );
}