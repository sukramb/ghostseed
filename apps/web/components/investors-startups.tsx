export function InvestorsStartups() {
  return (
    <section id="audience" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Built for Investors and Startups</h2>
        <p className="text-muted-foreground mt-2">Two sides, aligned by revenue—without complex equity paperwork.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 bg-background/60">
            <h3 className="text-xl font-medium">For Investors</h3>
            <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
              <li>Own <strong>Ghostseed Shares</strong> and receive <strong>annual credits</strong> linked to revenue</li>
              <li><strong>Liquidity</strong> options: cash‑out (after hold), <strong>trade</strong>, or <strong>redeem perks</strong></li>
              <li>Downside protection: credits scale with revenue—no debt, no minimums</li>
              <li>Clear <strong>cap/term</strong>: payouts stop at 5 years or 3× return</li>
            </ul>
          </div>

          <div className="rounded-xl border p-6 bg-background/60">
            <h3 className="text-xl font-medium">For Startups</h3>
            <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
              <li>Raise ultra‑early from your community—public or <strong>stealth</strong></li>
              <li>Define price, amount, and revenue‑share % with full control</li>
              <li><strong>No equity required</strong> (optional equity conversion later)</li>
              <li>Automated credits, payouts, and a simple secondary marketplace</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
