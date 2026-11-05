# Northstar Cloud — assurance case study

Version 1.0 · 5 November 2026 · Author: Hassan Ahmed · Status: portfolio simulation

## Business and scope

Northstar Cloud is a fictional 80-person SaaS company handling customer contact records and support attachments. Its subscription application runs on AWS; GitHub hosts source and deployment workflows. A managed identity service authenticates staff. A support SaaS provider processes customer tickets.

The assessment covers production cloud configuration, engineering deployment, workforce access, backup recovery, incident handling, supplier assurance and use of generative AI in support. Customer endpoints, AWS physical facilities and payment-card processing are excluded. Provider assurance is a dependency, not proof that tenant configurations are secure.

Assumptions: one production AWS account, a private relational database, object storage, container workloads and centralized audit logs. These are fictional architecture choices; this document does not assert they describe Hassan's deployed projects.

## Methodology and appetite

Likelihood and impact each range from 1 to 5. Score = likelihood × impact. Low: 1–4; Moderate: 5–9; High: 10–14; Critical: 15–25. Appetite is a current residual score no greater than 9. Management must approve any above-appetite exception with an owner, expiry and compensating measures.

Likelihood anchors: 1 requires unusual preconditions and strong demonstrated safeguards; 2 is plausible but constrained; 3 is credible under normal operations; 4 has common exposure or known gaps; 5 represents repeated or immediately exploitable exposure. Impact anchors: 1 limited internal inconvenience; 2 contained team disruption; 3 material service or customer impact; 4 major outage or sensitive-data compromise; 5 prolonged critical outage or widespread sensitive-data compromise. Scores are ordinal judgments, not loss probabilities or statistically validated financial estimates.

Inherent exposure assumes no specific safeguards. Current residual exposure reflects controls and available test evidence at this assessment date. Target exposure assumes successful implementation and retesting. A treatment plan alone never changes current residual exposure.

## Accountability

The CTO owns cloud and engineering risk. The Security Lead owns assurance coordination and incident response. The People Lead owns joiner/mover/leaver execution. Procurement owns supplier evidence collection; business owners retain supplier risk. The CEO approves above-appetite acceptance; the assessor cannot accept risk on management's behalf.

## Evidence and test program

All evidence below is synthetic. No audit assurance is offered.

| Test | Procedure and acceptance criterion | Synthetic observation | Limitation |
|---|---|---|---|
| T-01 | Compare all five terminated identities in the simulated monthly HR population with identity disable timestamps; all must be disabled within 24 hours | One of five disabled after 52 hours | One month only; HR population completeness assumed |
| T-02 | Inspect all three fixture storage buckets for public access blocking and encryption; all must meet baseline | Three of three pass | Configuration snapshot; no historical continuity evidence |
| T-03 | Inspect three deployments for approval and immutable image reference; all must pass | One deployment lacks independent approval | Small nonstatistical sample |
| T-04 | Restore a fixture backup into an isolated environment; recovery within four hours and loss within 24 hours | Restore completes in 3h 12m; latest record age 9h | Synthetic tabletop result, not an executed restore |
| T-05 | Inspect logging destination and retention configuration plus a sample event query; both must pass | Retention configured; no query result supplied | Effectiveness cannot be established |
| T-06 | Inspect support vendor assurance review and executed security terms; both current | Assurance review expired; contractual terms present | No direct access to vendor environment |
| T-07 | Review support AI handling rules and ten fixture ticket submissions; no confidential data in unapproved tools | Two submissions contain customer identifiers | Fixture sample cannot establish actual employee behavior |
| T-08 | Tabletop incident escalation using a compromised credential scenario; identify owner and decision log within 30 minutes | Owner identified in 12m; decisions recorded | Tabletop cannot prove production containment capability |

Pass means the stated procedure met its criterion within the synthetic exercise. Fail means observed deviation. Inconclusive means insufficient evidence, not control failure and not success.

## Findings and management decisions

F-01: Leaver access removal exceeded the 24-hour criterion. People Lead must implement daily reconciliation and escalation by 20 November. Retest the full next-month population. Current R-01 remains 15; target 5 is conditional on demonstrated remediation.

F-02: A deployment bypassed independent approval. Engineering must enforce protected deployment environments and exercise a denied unapproved deployment by 22 November. Current R-03 remains 12.

F-03: Logging effectiveness is unverified. Security must supply event search output and an alert delivery test by 15 November. Current R-05 stays at 12 because the missing evidence prevents supporting a lower likelihood estimate.

F-04: Supplier assurance review expired. Procurement must obtain and evaluate current assurance coverage and exceptions by 25 November. A report's existence alone is insufficient: review scope, dates, subservice exclusions and customer responsibilities.

F-05: Customer identifiers reached unapproved AI tools in the fixture. Support must restrict approved processing paths, train staff and repeat a larger sample by 18 November. Do not claim AI governance certification or legal compliance from this exercise.

No risk acceptances are recorded as approved. CEO decisions remain pending. If an exception is proposed, record risk ID, business justification, compensating controls, approver, decision date, expiry and revocation triggers. Expired exceptions automatically return to escalation, never silent renewal.

## Policy baseline

Access: named identities, least privilege, MFA for privileged access, quarterly entitlement review and disablement within 24 hours of termination. Emergency access must be time-bound and reviewed after use.

Change: production releases require recorded independent approval, tested rollback and an immutable build reference. Emergency changes require retrospective review within two business days.

Evidence: retain collection time, collector, source, scope, period, integrity hash where available and review decision. Redact secrets and customer identifiers before publishing portfolio artifacts. Evidence retention in this simulation is 12 months, subject to a real organization's contractual requirements.

Incident response: detect and validate; assign incident commander; contain while preserving evidence; assess impact; recover and verify; complete lessons learned. Legal counsel determines applicable notification duties based on jurisdiction, data and circumstances; no universal notification deadline is assumed here.

AI use: confidential information may enter only approved services after security and privacy review. Human review is mandatory for proposed control mappings and risk decisions. Model-generated text is not evidence of control operation.

## Executive review and next 90 days

First 30 days: resolve access, release and logging gaps; obtain current vendor assurance; constrain AI use. Days 31–60: retest failed procedures and expand samples based on risk. Days 61–90: perform management review, reassess residual exposure, document accepted exceptions and schedule the next assurance cycle.

Report open findings, above-appetite risk count, overdue remediation and inconclusive tests separately. Do not turn selected-control pass rates into organization-wide compliance claims.
