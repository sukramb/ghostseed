# Ghostseed

## 🌱 Overview

Ghostseed is a Pre-Pre-Seed SaaS platform that enables founders to raise ultra-early support and funding through a virtual share + revenue credit model.

Founders can list projects (stealth or public), define Ghostseed Shares, and set revenue-sharing terms.

Supporters can buy shares, receive yearly revenue-based credits, and later cash them out, trade them, or use them for perks.

Ghostseed manages payments, credit distribution, and a secondary marketplace.

The vision: Democratize ultra-early startup funding while keeping it community-driven, low-barrier, and legally simple.

## 🚀 Core Features (MVP)

### For Founders
- Create and manage startup projects (stealth or public)
- Define Ghostseed Shares (price, max amount, revenue-share %)
- Report milestones and revenue updates
- Engage supporters with updates and perks

### For Supporters
- Browse and discover early-stage projects
- Buy Ghostseed Shares via secure checkout
- Earn Credits annually (linked to startup revenue)
- After a 12-month hold period:
  - Cash out credits (Stripe payouts)
  - Trade credits on marketplace
  - Redeem credits for startup perks (discounts, access, memberships)

### Platform Core
- Secure payments and revenue-sharing logic
- Credit engine with hold period enforcement
- Marketplace for secondary credit trading
- Simple compliance layer (virtual shares, not securities)

## 💸 Business Model

- Listing Fee: small one-time fee for founders (e.g. €49)
- Revenue Fee: 5–10% platform fee on revenue-share payouts
- Marketplace Fee: 2–3% per credit trade or cash-out
- Premium: analytics, visibility boosts, investor matching

## 🏗️ Technical Architecture

### Frontend
- Vercel + Next.js
- Landing page
- Founder dashboard (project + share creation)
- Supporter dashboard (portfolio, credits, cash-out)
- Project discovery feed

### Backend
- Railway (Node.js/Express or Python/FastAPI)
- PostgreSQL (structured, microservice-friendly schemas)

#### Services
- Auth Service (Clerk or Firebase Auth)
- Payment Service (Stripe Connect integration)
- Credit Service (annual distribution, hold logic)
- Marketplace Service (secondary trading)

### Database (initial tables)
- users – founders + supporters
- projects – startup details, milestones
- shares – allocations, prices, ownership
- credits – yearly allocations, status, expiry
- transactions – payments, payouts, trades

## 🔑 Payment Provider

- Stripe Connect
  - Handles investor payments and startup payouts
  - Supports SEPA, credit cards, Apple Pay, Google Pay
  - Allows automatic revenue split between founders and supporters
- Alternative EU option: Mollie (for regulatory simplicity)

## 📅 Roadmap (MVP)

- Phase 1 – Landing page + simple project listings
- Phase 2 – Founder project creation + supporter purchase (Stripe)
- Phase 3 – Credit engine (simulate annual allocation)
- Phase 4 – Investor dashboard with credits (locked for hold period)
- Phase 5 – Enable payouts + marketplace after hold period


