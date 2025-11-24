# ghosd — Earn Money While Coding
**Invisible. Fair. Developer-first.**

ghosd is a VS Code extension + backend platform that lets developers
earn money while coding by showing ultra-minimal ads every N AI events.
Developers get paid a revenue-share. Advertisers get guaranteed developer attention.
You (ghosd) never process code or AI-prompts — only command events.

---

# 🧱 ARCHITECTURE OVERVIEW

## 1. Components
- **VS Code Extension (TypeScript)**
  - listens to AI-related commands (`onDidExecuteCommand`)
  - counts AI events
  - every N events → requests ad slot
  - displays ad via WebviewPanel
  - sends events to backend (`/api/events/add`)

- **Backend (Next.js / Node + TypeScript)**
  - `/api/events/add` → logs AI events
  - `/api/ads/fetch` → returns ad creatives
  - `/api/payouts/*` → Stripe Connect payouts
  - `/api/dashboard/*` → stats for devs & advertisers

- **Database (Supabase Postgres)**
  - developers
  - ai_events
  - ad_campaigns
  - ad_impressions
  - payouts

- **Advertiser Dashboard (Next.js Frontend)**
  - create campaigns
  - upload creatives
  - track CPC, CPM, spend
  - stripe payments for advertisers

- **Developer Dashboard**
  - earnings
  - AI-usage stats
  - payout settings (Stripe Connect)
  - ad frequency slider

---

# 🗂 REPOSITORY STRUCTURE

```
/ghosd
│
├── extension/                 # VS Code Extension (TypeScript)
│   ├── src/
│   ├── package.json
│   └── webview/               # HTML/CSS for ad banner
│
├── app/                       # Next.js app (backend + dashboards)
│   ├── app/api/               # API routes
│   ├── app/(dev-dashboard)/
│   ├── app/(advertiser)/
│   ├── components/
│   ├── lib/
│   └── package.json
│
├── infra/
│   ├── supabase-schema.sql
│   └── redis-config.md
│
├── claude.md                  # THIS file
└── README.md
```

---

# 🧩 DATABASE SCHEMA (SUPABASE)

```sql
create table developers (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  stripe_account_id text,
  created_at timestamp default now()
);

create table ai_events (
  id bigserial primary key,
  developer_id uuid references developers(id),
  client text,                 -- "vscode", "cursor", "jetbrains"
  event_type text,             -- "ai.generate", "copilot.explain", etc.
  ts timestamp default now()
);

create table ad_campaigns (
  id bigserial primary key,
  advertiser_id uuid,
  cpm numeric(10,2),
  budget numeric(12,2),
  spent numeric(12,2) default 0,
  targeting jsonb,
  image_url text,
  click_url text,
  headline text,
  active boolean default true,
  created_at timestamp default now()
);

create table ad_impressions (
  id bigserial primary key,
  developer_id uuid references developers(id),
  campaign_id bigint references ad_campaigns(id),
  ts timestamp default now()
);

create table payouts (
  id bigserial primary key,
  developer_id uuid references developers(id),
  amount numeric(10,2),
  status text,
  created_at timestamp default now()
);
```

---

# 🔌 API DESIGN

## POST /api/events/add

```json
{
  "developerId": "uuid",
  "client": "vscode",
  "command": "github.copilot.generate"
}
```

→ stores event
→ increments counters

## GET /api/ads/fetch?developerId=...

response:

```json
{
  "campaignId": 123,
  "imageUrl": "https://...",
  "clickUrl": "https://...",
  "headline": "Try Supabase → 500€ credits"
}
```

## POST /api/payouts/request

`<input developerId>`

→ triggers payout if >= threshold

---

# 🧠 INCENTIVE MODEL (DEVELOPER USP)

- Developers earn real money for every Ad they view.
- Revenue share: 30% paid to developer
- Ads per day per dev ≈ 12
- CPM 20–40€ → dev earnings 1.4–3€/month (realistic)
- Some power users earn 3–6€/month
- Enough to pay ~50% of AI subscription
- Later:
  - boost earnings by allowing more frequent ads
  - referral program (5% lifetime share)

---

# 🧱 VS CODE EXTENSION LOGIC (PSEUDOCODE)

```javascript
const AI_COMMANDS = [
  "github.copilot.generate",
  "github.copilot.explain",
  "cursor.explain",
  "cursor.refactor",
  "cursor.chat",
  "codeium.generate"
];

let counter = 0;

vscode.commands.onDidExecuteCommand((cmd) => {
  if (AI_COMMANDS.includes(cmd.command)) {
    counter++;

    fetch("/api/events/add", { method: "POST", body: { ... } });

    if (counter % 5 === 0) {
      const ad = await fetch("/api/ads/fetch?developerId=xyz").then(r => r.json());
      showWebviewAd(ad);
    }
  }
});
```

---

# 🎨 AD SLOT DESIGN (MINIMAL, NON-INTRUSIVE)

- bottom-right
- 260 × 80 px banner
- shows 2–3 seconds
- fades out
- no sound
- no popup
- no overlay
- user can choose frequency

---

# 🧮 ADVERTISER TARGETING (SIMPLE)

- IDE used
- OS
- general region
- time of day
- AI usage intensity

**NO:** prompts, code, filenames, private data.

---

# 🇪🇺 LEGAL & SECURITY

- Stripe Connect → payouts
- No code scanned → no privacy risk
- No prompts read → no compliance issues
- Impression fraud detection:
  - hash(webview-load + dev-id + campaign-id + timestamp minute)
  - server-side validation
  - rate limit per IP

---

# 🚀 GO-TO-MARKET FOR ADVERTISERS (HOW TO GET THEM)

## START WITH THESE 30 COMPANIES

They ALL advertise to Developers:

### Cloud / DevOps
- Vercel
- Supabase
- Render
- Fly.io
- Linode
- DigitalOcean
- Cloudflare
- Railway

### Monitoring / Logging
- Datadog
- Elastic
- Sentry
- New Relic
- Grafana

### AI/DevTools
- Cursor
- Replit
- HuggingFace
- JetBrains
- Tabnine
- Codeium
- GitHub (Copilot)

### Security / Compliance
- Snyk
- Wiz
- Palo Alto
- Crowdstrike
- Aikido
- Aqua Security
- Orca Security

### B2B Developer SaaS
- Stripe
- Clerk
- Auth0
- Posthog
- MongoDB
- Prisma

**ALL** of these companies spend millions on developer-targeted ads.

---

# 🎯 HOW TO GET ADVERTISERS (REALISTICALLY)

## 1. Direct Outreach via LinkedIn

Target: „Head of Developer Marketing", „Growth", „DevRel Lead".

## 2. DevRel Slack Communities

They LOVE new ad channels.

## 3. Offer first 10 companies: 50% discount

This gets you filled inventory.

## 4. Create a media kit
- monthly active developers
- ad slot preview
- CPM pricing
- sample campaigns
- screenshots

## 5. YouTube Outreach

Influencers like:
- Fireship
- ThePrimeagen
- Theo.t3.gg
- Matt Pocock
- Ben Awad

One shout-out = 20k installs.

---

# 💸 AD PRICING

- Developer CPM: 20 – 40 €
- Startup offer: 15 €
- Premium targeting: 50 € CPM
- Monthly budget typical: 5k – 50k per advertiser
- Platform keeps 70%
- Developer gets 30%

---

# 🔥 MVP ROADMAP (30 DAYS)

## WEEK 1
- VS Code Extension skeleton
- Supabase tables
- API routes basic
- Event logging works
- Ad fetch returns mock banners

## WEEK 2
- Webview Ad rendering
- Developer Dashboard basic
- Advertiser Dashboard basic
- Stripe Connect integration
- Payout table

## WEEK 3
- Real campaign creation
- Real ad rotation logic
- Fraud prevention
- Rate limiting
- Referrals

## WEEK 4
- Landing page
- First 10 advertisers closed
- Launch on VS Code Marketplace
- Launch on Product Hunt
- Launch on Reddit (r/vscode, r/programming, r/cursor)

---

# 🎨 BRANDING NOTES

**Name:** ghosd
**Why?** invisible layer → ghost → runs silently

**Taglines:**
- „Earn money while coding."
- „Your AI costs? Covered."
- „The invisible layer that pays you back."

---

# 🟢 NEXT STEPS FOR CLAUDE/CURSOR

Use this prompt inside Cloud Code/Cursor:

> Build the /extension folder according to claude.md.
> Create:
> - AI command listener
> - counter logic
> - ad fetcher
> - Webview banner
> - config panel for frequency
> Use TypeScript and vscode API.

---

# 🧠 HOW TO REACH COMPANIES

There are **3 ways** that ALWAYS work in the Developer-Ad market:

## **1) Direct Deals** (beste CPMs)

**Zielpersonen:**
- Head of Developer Marketing
- VP Growth
- DevRel Director

**Plattformen:**
- LinkedIn
- E-Mail
- DevRel Slack Groups

These people are ALWAYS looking for new channels.

---

## **2) Partner with DevTools that your target audience loves**

**Examples:**
- Vercel
- Supabase
- Posthog
- Prisma
- Codeium
- Cursor
- Replit
- Snyk
- Aikido

**Template message:**

> "We have a new advertising space directly in the coding flow
> for VS Code users. CPM 20€. Would you like to be among the first?"

They love this.

---

## **3) Dev-Advertising Networks** (backup, but good for starting)

- Carbon Ads
- EthicalAds
- CodeFund (inactive, but good inspiration)

These pay CPM 5–15€ (worse),
but perfect for **filling** your ad inventory.

---

# 📧 ADDITIONAL RESOURCES AVAILABLE

If needed, we can create:

- Complete **LinkedIn-Outreach-Message**
- **Email templates for Advertisers**
- **Media Kit**
- **Landing Page for Advertisers**
- **Developer Landing Page**
- **Pitch Deck**
- **15-second Elevator Pitch version**
