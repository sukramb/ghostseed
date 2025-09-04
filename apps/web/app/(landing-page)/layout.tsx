import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: "Home", href: "/" },
          { title: "Features", href: "/#features" },
          { title: "Pricing", href: "/#pricing" },
          { title: "GitHub", href: "https://github.com/markus/ghostseed", external: true },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="Ghostseed"
        builtByLink="https://ghostseed.app/"
        githubLink="https://github.com/markus/ghostseed"
        twitterLink="https://twitter.com/"
        linkedinLink="https://www.linkedin.com/"
      />
    </div>
  );
}
