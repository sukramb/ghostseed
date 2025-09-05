import { FeatureGrid } from "@/components/features";
import { Hero } from "@/components/hero";
import { PricingGrid } from "@/components/pricing";
import { HowItWorks } from "@/components/how-it-works";
import { InvestorsStartups } from "@/components/investors-startups";
import { ComparisonTable } from "@/components/comparison-table";
import { ComponentIcon, Users } from "lucide-react";

export default async function IndexPage() {
  return (
    <>
      <Hero
        capsuleText="Pre‑Pre‑Seed Funding"
        capsuleLink="#how-it-works"
        title="Ghostseed: Ultra‑early Support for Founders"
        subtitle="List your startup, offer virtual shares, and share revenue as yearly credits. Supporters back you early and can later cash out, trade, or redeem perks."
        primaryCtaText="Start investing"
        primaryCtaLink="/dashboard"
        secondaryCtaText="Raise money"
        secondaryCtaLink="/dashboard"
        credits={
          <>
            Built for community‑driven, low‑barrier startup funding.
          </>
        }
      />

      <div id="features" />
      <FeatureGrid
        title="Why Ghostseed"
        subtitle="A simple way to raise ultra‑early and include your community."
        items={[
          {
            icon: (
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.23-.296c.096-.05.13-.054.5-.054z" />
              </svg>
            ),
            title: "For Founders",
            description:
              "Create public or stealth listings, define Ghostseed Shares (price, amount, revenue‑share %), and engage supporters with updates and perks.",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-12 w-12 fill-current"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22"></line>
                <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22"></line>
              </svg>
            ),
            title: "For Supporters",
            description:
              "Buy shares via secure checkout, earn annual credits linked to revenue, and after 12 months: cash out, trade, or redeem for perks.",
          },
          {
            icon: (
              <svg
                width="201"
                height="242"
                viewBox="0 0 201 242"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 fill-current"
              >
                <path d="M104.004 1.78785C101.751 0.662376 99.1002 0.663161 96.8483 1.78998L4.9201 47.7892C2.21103 49.1448 0.5 51.9143 0.5 54.9436V130.526C0.5 133.556 2.2123 136.327 4.92292 137.682L96.9204 183.67C99.1725 184.796 101.823 184.796 104.075 183.67L168.922 151.246C174.242 148.587 180.5 152.455 180.5 158.402V168.855C180.5 171.885 178.788 174.655 176.078 176.01L104.077 212.011C101.825 213.137 99.1745 213.137 96.9224 212.012L12.0771 169.598C6.75791 166.939 0.5 170.807 0.5 176.754V187.048C0.5 190.083 2.21689 192.856 4.93309 194.209L97.0051 240.072C99.2529 241.191 101.896 241.191 104.143 240.07L196.071 194.21C198.785 192.857 200.5 190.084 200.5 187.052V119.487C200.5 113.54 194.242 109.672 188.922 112.332L132.078 140.754C126.758 143.414 120.5 139.546 120.5 133.599V123.145C120.5 120.115 122.212 117.345 124.922 115.99L196.078 80.4124C198.788 79.0573 200.5 76.2872 200.5 73.257V54.9468C200.5 51.9158 198.787 49.1451 196.076 47.7904L104.004 1.78785Z" />
              </svg>
            ),
            title: "Platform Core",
            description: "Payments, credit engine (with hold period), and a simple marketplace for secondary trading.",
          },
        ]}
      />

      <InvestorsStartups />
      <HowItWorks />
      <ComparisonTable />

      <div id="pricing" />
      <PricingGrid
        title="Simple, transparent fees"
        subtitle="Pay as you grow. No subscription required."
        items={[
          {
            title: "Listing",
            price: "€49",
            description: "One‑time fee to list your project (founders).",
            features: [
              "Public or stealth project",
              "Set up Ghostseed Shares",
              "Engage supporters",
            ],
            buttonText: "List your startup",
            buttonHref: "/dashboard",
          },
          {
            title: "Revenue Share",
            price: "5–10%",
            description: "Platform fee on revenue‑share payouts.",
            features: [
              "Automatic credit distribution",
              "Hold period enforcement",
              "Payouts via Stripe",
            ],
            buttonText: "Learn more",
            buttonHref: "/#features",
            isPopular: true,
          },
          {
            title: "Marketplace",
            price: "2–3%",
            description: "Per credit trade or cash‑out (supporters).",
            features: [
              "Trade credits",
              "Cash out after 12 months",
              "Redeem perks",
            ],
            buttonText: "Get started",
            buttonHref: "/dashboard",
          },
        ]}
      />
    </>
  );
}
