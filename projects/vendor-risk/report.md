# Third-Party Risk Assessment

Author: Hassan Ahmed · Version 1.0 · Assessment cutoff: 2026-11-05

> Portfolio case study. Public-source review for a fictional buyer; restricted reports and tenant evidence were not obtained.

## Business context

Northstar wants a workspace for internal runbooks and customer-support notes. Internal-only synthetic content is suitable for a controlled pilot; customer data remains outside the proposed approval until critical evidence is reviewed.

## Decision

**Hold sensitive-data onboarding.** Critical assurance, contract and tenant-configuration questions remain unresolved. This is a decision for the proposed Northstar use case—not a finding that Notion is insecure.

## Executive conclusion

Defer customer-data onboarding. Permit only a proposed internal synthetic-content pilot after business-owner review; this is an analyst recommendation with no actual approval.

## Observed strengths

Public documentation addresses several identity, encryption, logging and assurance capabilities. Capability statements are not test results. Review the linked question records rather than interpreting a high numeric support score as low risk.

## Conditions before approval

Obtain relevant assurance report and review exceptions; agree contractual duties; test SSO/MFA, guest and sharing configuration; establish processing locations, deletion and AI settings; validate notification and recovery needs.

## Residual risk

Undetermined pending evidence. Do not derive residual risk by subtracting a questionnaire percentage from inherent risk. The open critical questions drive the hold recommendation.

## Decision ownership

Procurement coordinates collection. IT tests configuration. Privacy/counsel review contractual suitability. The business owner accepts the documented risk; the portfolio author does not approve on their behalf.

## Methodology

### Scope & tiering

Fictional 80-person SaaS buyer; proposed customer-support content, 80 workforce users and potential external guests. Sensitivity 4 × dependency 3 = 12/25 inherent exposure, using a project-specific ordinal scale.

### Published support, not compliance

Supported = a public source addresses the capability question. Partial = scope, plan or exceptions remain unclear. Unknown = needed evidence was not obtained. No = evidence explicitly contradicts the requirement; none are asserted here.

### Scoring

Evidence coverage = (Supported + Partial + No) / 30. Published-support score = (2 × Supported + Partial) / (2 × answered). Unknown is excluded from the support score and shown separately; it is never treated as a pass or as vendor failure.

### Decision gate

Any critical Unknown, Partial or No blocks sensitive-data approval regardless of score. Approval also requires all gate evidence reviewed, a named owner and an executed agreement. Public information alone cannot satisfy the gate.

### Review & renewal

Assessment cutoff 5 November 2026. Refresh on material feature, subprocessor, contract, use-case or data-classification change; proposed annual renewal. No vendor questionnaire was actually sent.

## Walkthrough for an interviewer

Start with the decision and its limitations. Open one record; explain the criterion, evidence source, observation and next action. Distinguish known facts from missing information. Describe how a future retest could change the conclusion without rewriting assessment history.

## Sources

- N1: [Notion — Security practices](https://www.notion.com/security) — reviewed 2026-11-05. Provider-published capabilities; no independent operating evidence reviewed.
- N2: [Notion — SAML SSO](https://www.notion.com/help/saml-sso-configuration) — reviewed 2026-11-05. Business/Enterprise feature; workspace configuration and guest access require separate review.
- N3: [Notion — Audit log](https://www.notion.com/help/audit-log) — reviewed 2026-11-05. Enterprise feature; availability is not proof of tenant configuration.
- N4: [Notion — Trust Center](https://trust.notion.com/) — reviewed 2026-11-05. Public index only. Restricted assurance reports were not obtained.
