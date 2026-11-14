import { createFileRoute } from "@tanstack/react-router";

import { Approach } from "@/components/site/Approach";
import { ContactFooter } from "@/components/site/ContactFooter";
import { Hero } from "@/components/site/Hero";
import { Offerings } from "@/components/site/Offerings";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StudioIntro } from "@/components/site/StudioIntro";

const TITLE = "House of Amarah — Thoughtful Gifting Studio";
const DESCRIPTION =
  "Hand-poured candles, literary gifts, custom invitations and bespoke gift hampers — thoughtfully made by House of Amarah.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <StudioIntro />
        <Offerings />
        <Approach />
      </main>
      <ContactFooter />
    </div>
  );
}
