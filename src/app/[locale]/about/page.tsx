import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>{siteConfig.name} is an independent fan-built guide hub covering the Idle Breakout gameplay loop: purchasing balls, upgrading speed and power, breaking bricks, prestige resets, and progression tips.</p>
      <p>Our goal is to keep ball comparisons, upgrade paths, and beginner strategies organized in one place for both new and returning players.</p>
      <p>We are not affiliated with the developer Kodiqi. Questions or corrections can be sent to <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
