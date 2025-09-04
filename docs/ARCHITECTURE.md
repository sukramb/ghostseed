# Ghostseed Architecture

This document outlines the high-level architecture and repository layout for Ghostseed.

## Monorepo Layout
```
/                     # repository root
apps/
  web/                # frontend (Next.js planned)
services/
  api/                # backend API (Node.js/Express planned)
packages/
  shared/             # shared types, utils, constants
.docs/                # NOTE: placeholder if needed; docs live in /docs
/docs                 # documentation (architecture, decisions, runbooks)
/templates            # environment templates (env examples)
.github/              # CI/CD, templates
```

## Tech Choices (MVP - proposed)
- Frontend: Next.js (App Router) on Vercel
- Backend: Node.js/Express on Railway
- Database: PostgreSQL (managed)
- ORM: Prisma (if Node) or SQLAlchemy (if Python)
- Auth: Clerk (alt: Firebase/Auth0)
- Payments: Stripe Connect (alt: Mollie)
- Email: Resend (alt: Sendgrid)
- Storage: S3-compatible (R2/S3)
- Observability: Sentry + structured logs

## Core Domains
- Projects: founder-created startup listings (public/stealth)
- Shares: virtual allocations with revenue-share % and price
- Credits: annual revenue-based credits, hold period enforcement
- Transactions: payments, payouts, trades
- Marketplace: secondary trading of credits (post hold)

## Data Flow (simplified)
- Supporter purchases share → Payment Service (Stripe) → Transaction recorded
- Annual cycle → Credit Service computes allocations → Credits issued (locked if within hold)
- Post-hold → Cash-out (payouts) or trade on marketplace

## Security & Compliance
- Default-deny CORS, schema validation at boundaries, RBAC/ownership checks
- Idempotency for payment-affecting endpoints
- Webhooks verified and idempotent
- No sensitive data in logs; use env/secret manager

## Environments
- Local: sandbox payment/auth providers, seed data
- Staging: mirrors production with restricted access
- Production: locked-down, observability enabled

## Deployment
- Web on Vercel; API on Railway (containers)
- CI: lint, typecheck, test, build; protected main branch
