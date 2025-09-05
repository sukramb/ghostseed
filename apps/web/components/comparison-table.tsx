export function ComparisonTable() {
  const rows: { feature: string; ghostseed: string; kickstarter: string; equity: string }[] = [
    { feature: "Payout basis", ghostseed: "Revenue-linked credits", kickstarter: "One-time rewards", equity: "Equity/ownership" },
    { feature: "Investor liquidity", ghostseed: "Cash-out (after hold), trade, perks", kickstarter: "No", equity: "Possible via SPV/secondary (complex)" },
    { feature: "Founder dilution", ghostseed: "None (optional later)", kickstarter: "None", equity: "Yes" },
    { feature: "Ongoing alignment", ghostseed: "Yes, revenue share for up to 5y or 3×", kickstarter: "No", equity: "Yes (long-term)" },
    { feature: "Compliance surface", ghostseed: "Simplified (virtual credits)", kickstarter: "Simplest", equity: "High (securities)" },
    { feature: "Community engagement", ghostseed: "Shares + credits + perks", kickstarter: "Rewards only", equity: "Investor relations" },
  ];

  return (
    <section id="compare" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Why Ghostseed vs Kickstarter & Equity CF</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 text-left">
                <th className="p-4">Feature</th>
                <th className="p-4">Ghostseed</th>
                <th className="p-4">Kickstarter</th>
                <th className="p-4">Equity CF</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4 font-medium">{r.feature}</td>
                  <td className="p-4">{r.ghostseed}</td>
                  <td className="p-4">{r.kickstarter}</td>
                  <td className="p-4">{r.equity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
