export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Idle Breakout Wiki",
  shortName: "Idle Breakout",
  logoText: "IB",
  tagline: "Balls, Upgrades, Guides & Strategies",
  description: "Complete Idle Breakout Wiki covering balls, upgrades, strategies, progression tips, gameplay guides, and everything players need to break bricks faster.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://idle-breakout.wiki",
  supportEmail: "support@idle-breakout.wiki",
  gameUrl: "https://kodiqi.itch.io/idle-breakout",
  heroVideoId: "FPVG5jOZD68",
  social: {
    discord: "https://kodiqi.itch.io/idle-breakout",
    youtube: "https://www.youtube.com/watch?v=FPVG5jOZD68",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
