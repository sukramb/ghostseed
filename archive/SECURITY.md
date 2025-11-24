# Security Policy

We take security seriously. This document outlines how to report vulnerabilities and the practices we follow.

## Reporting a Vulnerability
- Please email `security@yourdomain.tld` with details and proof-of-concept if available.
- Do not create public issues for security reports.
- We aim to acknowledge reports within 3 business days and provide a remediation plan and timeline.

## Supported Versions
- Until the first stable release, only the `main` branch is supported.

## Our Security Practices
- Authentication & Authorization: Centralized auth (e.g., Clerk/Firebase/Auth0). Enforce least privilege and role-based access.
- Secrets Management: No secrets in code or logs; use platform secret managers (Vercel/Railway/etc.). Rotate keys regularly.
- Dependency Hygiene: Automated vulnerability scanning; patch Critical/High promptly.
- Input Validation: Validate and sanitize all untrusted input at boundaries (API, webhooks, jobs).
- Web Security: CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, HSTS in production.
- API Security: Require HTTPS; use idempotency keys for payment-affecting endpoints; apply rate limiting and brute-force protection.
- Data Protection: Encrypt in transit (TLS) and at rest; minimize PII; define retention and deletion policies.
- Logging & Monitoring: Structured logs; no secrets or PII; alerting on auth/financial anomalies.
- Multi-Tenancy: Enforce tenant scoping on every query/path; verify ownership on all operations.
- Payments: Use Stripe Connect/Mollie in sandbox for dev; verify webhooks; never store raw card data.
- SSRF/Deserialization: Avoid server-side fetches to arbitrary hosts; strict allowlists for callbacks and webhooks.

## Handling Vulnerabilities
1. Confirm and triage the report.
2. Reproduce in a controlled environment.
3. Assign severity (Critical/High/Medium/Low) and owner.
4. Patch privately, add tests, and prepare fixed release.
5. Notify reporter and, if appropriate, publish advisories and credits.

## Hardening Checklist
- OWASP Top 10 controls considered and documented.
- Default-deny CORS; allow only required origins/headers/methods.
- Strong session management (httpOnly, secure, SameSite cookies) or short-lived tokens.
- Rate limits for authentication, payments, and sensitive endpoints.
- Regular backups and restoration drills for critical data.
- Disaster recovery and incident response runbooks.

If you need our security contact PGP key or have questions, reach out to `security@yourdomain.tld`.
