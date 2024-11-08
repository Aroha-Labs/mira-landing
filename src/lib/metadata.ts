const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://mira-landing-chi.vercel.app").replace(/\/$/, ''),
  env: process.env.NODE_ENV || "development",
};

export const defaultMetadata = {
  metadataBase: new URL(
    siteConfig.env === "production" ? siteConfig.url : "http://localhost:3000"
  ),
  title: "Mira",
  description:
    "Mira empowers truly reliable AI — by trustlessly verifying outputs and actions at every step.",
  openGraph: {
    title: "Mira",
    description:
      "Mira empowers truly reliable AI — by trustlessly verifying outputs and actions at every step.",
    url: siteConfig.url,
    siteName: "Mira",
    images: [
      {
        url: `${siteConfig.url}/og-default.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mira",
    description:
      "Mira empowers truly reliable AI — by trustlessly verifying outputs and actions at every step.",
    images: [`${siteConfig.url}/og-default.png`],
  },
};
