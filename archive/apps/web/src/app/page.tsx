import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero
        capsuleText="Pre‑Pre‑Seed Funding"
        capsuleLink="#how-it-works"
        title="Ghostseed: Ultra‑early Support for Founders"
        subtitle="List your startup, offer virtual shares, and share revenue as yearly credits. Supporters back you early and can later cash out, trade, or redeem perks."
        primaryCtaText="Start investing"
        primaryCtaLink="/signup"
        secondaryCtaText="Raise money"
        secondaryCtaLink="/signup"
        credits={
          <>
            Built for community‑driven, low‑barrier startup funding.
          </>
        }
      />
    </>
  );
}