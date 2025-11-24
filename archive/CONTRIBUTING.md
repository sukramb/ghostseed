# Contributing to Ghostseed

This document defines our development rules based on industry, SaaS, and security best practices. Keep changes small, tested, and reviewed.

## Principles
- Ship small, reversible changes behind feature flags.
- Prefer clarity over cleverness; optimize for readability and maintainability.
- Security and privacy by default; never commit secrets.
- Automate quality checks (lint, test, type check, build) in CI.

## Branching & Workflow
- Default branch: `main` (protected)
- Create feature branches from `main` using the pattern: `feature/<short-topic>` or `fix/<short-topic>`
- Use Conventional Commits for messages: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `build:`, `ci:`, `revert:`
- Open PRs early (drafts welcome). One logical change per PR.

## Pull Requests
Every PR must:
- Include a clear description of the problem and solution.
- Include tests for any new logic or bug fixes.
- Pass lint, type checks, tests, and build locally and in CI.
- Update docs (`README.md`, `docs/`, API references) when behavior changes.
- Consider security impact (authz, input validation, secrets, logging, data exposure).

## Code Style & Tooling
- Use `.editorconfig` for base formatting.
- JavaScript/TypeScript: ESLint + Prettier; aim for strict TypeScript when applicable.
- Python: Ruff + Black; type hints with MyPy/pyright where possible.
- Keep functions short and cohesive; prefer pure functions and dependency injection.
- Avoid global state; isolate side effects.

## Testing
- Pyramid strategy: unit > integration > e2e; aim for meaningful coverage.
- Tests should be deterministic, independent, and fast.
- Name tests clearly and assert observable behavior, not implementation details.
- For payments and external APIs, use sandbox environments and fakes/mocks.

## API & Contracts
- Validate all inputs at boundaries (HTTP, queues, jobs) with schemas (e.g., Zod/Pydantic).
- Define and publish OpenAPI/JSON Schema for public endpoints.
- Use idempotency keys for payment-affecting or retryable requests.
- Version APIs; avoid breaking changes without migration path.

## Data & Migrations
- Use transactional, forward-only, reversible migrations.
- Zero-downtime mindset: add columns before backfilling; deploy code that can handle both states.
- Never delete user data permanently without retention policy; soft delete when appropriate.

## Secrets & Config
- Never commit secrets; use environment variables and platform secret managers.
- Provide `.env.example` for local development with placeholders only.
- Rotate credentials regularly; least-privilege for all keys and roles.

## Dependencies
- Pin versions with lockfiles; avoid `latest`.
- Run automated vulnerability scans; patch critical/high promptly.
- Prefer well-maintained libraries; remove unused deps.

## Logging, Observability & Privacy
- Structured logs with correlation/request IDs; no sensitive data (PII, secrets, tokens).
- Emit metrics for key flows (auth, payments, credit allocations, marketplace trades).
- Add tracing where supported.
- Respect privacy and data minimization; document data flows.

## Frontend Guidelines
- Escape/encode all user-controlled output; treat HTML as unsafe.
- Use CSP, SRI, and avoid `unsafe-inline` when feasible.
- Avoid storing sensitive data in the browser; prefer httpOnly cookies.

## Security Checklist (per change)
- Inputs validated? Authn/authz enforced? Rate limits applied where needed?
- Secrets handled via env/secret manager only?
- No sensitive info in logs or errors?
- Dependencies audited and up to date?

Thank you for contributing!
