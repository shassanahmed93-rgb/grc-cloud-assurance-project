# AWS–SOC 2 Evidence Mapping

Author: Hassan Ahmed · Version 1.0 · Assessment cutoff: 2026-11-05

> Portfolio case study. All findings, events and evidence examples are synthetic. No live system assessment was performed.

## Business context

The reference design is a cloud API with federated administration, containers, private data storage and a deployment pipeline. It draws on the architecture style of the Journal API, but this assessment does not inherit its historical verification as new evidence.

## Decision

**Evidence collection pending.** Every live-evidence status remains Not collected. Synthetic examples demonstrate review technique; they establish neither current AWS security nor SOC 2 readiness.

## Executive conclusion

The package is an evidence-ready assessment design. Twelve live evidence requests are open. There is no support for a live operating-effectiveness or compliance conclusion.

## Priority evidence

Collect complete identity and deployment populations, effective storage permissions, actual log delivery and an independently witnessed restore. Single configuration screenshots are insufficient for period-based claims.

## Decision rule

Do not mark a criterion satisfied because one AWS setting is enabled. Review the complete control objective, relevant application processes, exceptions and period evidence.

## Next milestone

Use an authorized sandbox to collect sanitized evidence for C-01, C-04 and C-07 first. Record reviewer conclusions and limitations before expanding scope.

## Methodology

### Engagement boundary

Selected security Common Criteria only; not all CC1–CC9, not a full SOC 2 scope and not Type I or Type II assurance. Criterion themes are original short paraphrases; consult the applicable AICPA edition before real use.

### Provider versus customer

AWS operates underlying services. Northstar remains responsible for its identities, workload permissions, data classification, application authorization, configurations and evidence review. A provider report does not test these customer controls.

### Three evidence levels

Design = what the policy and configuration intend. Implementation = what is actually configured at a specific time. Operation = whether the control worked for a defined population and period. Keep the three separate.

### Collection protocol

Record resource scope, command, collector, UTC collection time, review period, SHA-256 hash and redaction history. Preserve original output privately. Denied or empty output is an evidence gap, not a passing result.

### Safe execution

No cloud commands were executed by this project. Optional collection examples are read-only, scoped and explicitly invoked by the user. They do not create resources or run restore jobs. Review outputs for account identifiers and sensitive configuration before publication.

## Walkthrough for an interviewer

Start with the decision and its limitations. Open one record; explain the criterion, evidence source, observation and next action. Distinguish known facts from missing information. Describe how a future retest could change the conclusion without rewriting assessment history.

## Sources

- A1: [AICPA — 2017 TSC with revised points of focus (2022)](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022) — reviewed 2026-11-05. Reference edition for this educational mapping; no complete criteria text reproduced.
- A2: [AICPA — 2017 TSC, March 2020 edition](https://assets.ctfassets.net/rb9cdnjh59cm/72xv4p67HVXKp6CjWmjkPk/1cdbfa19f6307e2720396b66a6194dc9/trust-services-criteria-updated-copyright.pdf) — reviewed 2026-11-05. Public AICPA-authored document used to check selected criterion identifiers. Review against the engagement-specific edition before reuse.
- W1: [AWS — IAM security practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) — reviewed 2026-11-05. Implementation guidance; not evidence that Northstar implemented a control.
- W2: [AWS — S3 Block Public Access](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html) — reviewed 2026-11-05. Evaluate effective organization/account/bucket/access-point settings together.
- W3: [AWS — CloudTrail security practices](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/best-practices-security.html) — reviewed 2026-11-05. Trail configuration, event selection and event delivery are distinct evidence questions.
- W4: [AWS — Backup restore testing](https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing.html) — reviewed 2026-11-05. Restore testing can create billable resources. This project does not run restores.
- I1: [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) — reviewed 2026-11-05. April 2025 guidance. Exercise stages below are an original facilitation sequence.
