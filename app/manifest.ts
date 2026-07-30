import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KWAS Technologies — Key Web App Solutions Technologies",
    short_name: "KWAS Tech",
    description:
      "KWAS Technologies (Key Web App Solutions Technologies) builds privacy-first web applications, custom web app solutions, Android tools, and self-hosted software.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0f12",
    theme_color: "#0d0f12",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
