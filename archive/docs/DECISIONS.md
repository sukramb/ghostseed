# Decisions (ADR Log)

This file tracks Architecture Decision Records (ADRs). New decisions should be appended with date and status.

## ADR-0001: Monorepo with apps/services/packages
- Date: 2025-09-04
- Status: Proposed
- Context: We need to develop web and API with shared code.
- Decision: Use a monorepo with `apps/web`, `services/api`, and `packages/shared`.
- Consequences: Simplifies shared types and utilities; requires tooling for workspaces later.

## ADR-0002: Stripe Connect for payments (tentative)
- Date: 2025-09-04
- Status: Proposed
- Context: Need marketplace payouts and split payments.
- Decision: Use Stripe Connect. Keep Mollie as EU alternative.
- Consequences: Requires Connect account setup and webhook verification.
