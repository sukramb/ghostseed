export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How it works (with real numbers)</h2>
        <p className="text-muted-foreground mt-2">A concrete walkthrough for founders and supporters.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-medium">Example setup</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Startup commits <strong>5% of annual revenue</strong> to the Ghostseed pool</li>
              <li>• Platform fee: <strong>7%</strong> on the pool</li>
              <li>• Your buy: <strong>€200</strong> in Ghostseed Shares</li>
              <li>• Total raise: <strong>€20,000</strong> (<strong>1.0%</strong> of shares)</li>
              <li>• Hold period: <strong>12 months</strong></li>
              <li>• Payout window: <strong>5 years</strong> or <strong>3× cap</strong> (whichever comes first)</li>
            </ul>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <div className="font-medium">Year 1 (Conservative)</div>
                <div>Revenue: €500,000</div>
                <div>5% to pool: €25,000</div>
                <div>Fee (7%): €1,750</div>
                <div>Net to investors: €23,250</div>
                <div>Your share (1.0%): <strong>€232.50</strong> in Credits</div>
              </div>
              <div>
                <div className="font-medium">Year 2 (Growth)</div>
                <div>Revenue: €1,000,000</div>
                <div>5% to pool: €50,000</div>
                <div>Fee (7%): €3,500</div>
                <div>Net: €46,500</div>
                <div>Your share (1.0%): <strong>€465.00</strong> in Credits</div>
              </div>
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              <p>
                After hold (12 months): Redeem Credits for cash-out, trade them on the marketplace,
                or use them for perks.
              </p>
              <p className="mt-2">
                Return cap: Payouts stop after 5 years or when you’ve received <strong>€600</strong> (3× your €200) — whichever comes first.
              </p>
            </div>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-medium">Quick math (why this can work)</h3>
            <div className="mt-4 text-sm space-y-3">
              <p>
                If revenue averages <strong>€750k/year</strong> over 3 years → pooled <strong>€37.5k/year</strong>,
                net ~<strong>€34.9k</strong> → your ~<strong>€349/year</strong> (1.0%).
              </p>
              <p>
                Break-even on €200: typically within <strong>Year 1–2</strong> in this scenario.
              </p>
              <p>
                Upside: Optional equity conversion if the startup raises a priced round.
              </p>
            </div>

            <h4 className="mt-6 font-medium">FAQs</h4>
            <ul className="mt-2 text-sm space-y-2">
              <li>
                <strong>What if revenue is lower?</strong> Credits scale down automatically. No debt, no minimums.
              </li>
              <li>
                <strong>Who pays the fee?</strong> The platform retains 7% of the pool before investor allocation.
              </li>
              <li>
                <strong>Can I cash out?</strong> Yes, after 12 months via payout; trading and perks are also available.
              </li>
              <li>
                <strong>Is this equity?</strong> No. These are revenue-linked credits with an optional equity conversion if a later round happens.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
