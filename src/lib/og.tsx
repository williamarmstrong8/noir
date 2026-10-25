import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cacheLife } from "next/cache";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = `${site.name}: ${site.positioning}`;

async function font(file: string) {
  "use cache";
  cacheLife("max");
  const data = await readFile(join(process.cwd(), "src/assets/fonts", file));
  return new Uint8Array(data).buffer;
}

export async function renderOgImage() {
  const [bold, mono] = await Promise.all([
    font("Geist-Bold.ttf"),
    font("GeistMono-Regular.ttf"),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#000000",
        color: "#fafafa",
        fontFamily: "Geist",
      }}
    >
      <div
        style={{
          display: "flex",
          fontFamily: "Geist Mono",
          fontSize: 20,
          letterSpacing: 1.6,
          color: "#a1a1a1",
        }}
      >
        WEB DESIGN & DEVELOPMENT
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 84,
          lineHeight: 0.98,
          letterSpacing: -3.4,
          maxWidth: 940,
        }}
      >
        {site.positioning}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: 28,
          fontSize: 26,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 4,
              background: "#ff6b2c",
            }}
          />
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Geist Mono",
            fontSize: 20,
            color: "#a1a1a1",
          }}
        >
          {site.promise}
        </div>
      </div>
    </div>,
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: bold, weight: 700, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}

export async function renderIcon(size: number) {
  const bold = await font("Geist-Bold.ttf");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ff6b2c",
        borderRadius: size * 0.22,
        color: "#000000",
        fontFamily: "Geist",
        fontSize: size * 0.68,
        letterSpacing: -size * 0.03,
      }}
    >
      {site.name.charAt(0)}
    </div>,
    {
      width: size,
      height: size,
      fonts: [{ name: "Geist", data: bold, weight: 700, style: "normal" }],
    },
  );
}
