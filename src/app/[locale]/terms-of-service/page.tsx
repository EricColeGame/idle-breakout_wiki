import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p>This site is an independent fan-made guide hub for Idle Breakout. Content is provided for informational and entertainment purposes only.</p>
      <p>Game mechanics, ball upgrades, prestige values, and update details may change without notice. Always verify gameplay information in-game or via official releases.</p>
      <p>By using this site, you agree not to misuse it, attempt unauthorized access, or present this fan wiki as an official Kodiqi property.</p>
      <p>Questions about these terms can be sent to <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
