# Methodology

## Engagement boundary

Selected security Common Criteria only; not all CC1–CC9, not a full SOC 2 scope and not Type I or Type II assurance. Criterion themes are original short paraphrases; consult the applicable AICPA edition before real use.

## Provider versus customer

AWS operates underlying services. Northstar remains responsible for its identities, workload permissions, data classification, application authorization, configurations and evidence review. A provider report does not test these customer controls.

## Three evidence levels

Design = what the policy and configuration intend. Implementation = what is actually configured at a specific time. Operation = whether the control worked for a defined population and period. Keep the three separate.

## Collection protocol

Record resource scope, command, collector, UTC collection time, review period, SHA-256 hash and redaction history. Preserve original output privately. Denied or empty output is an evidence gap, not a passing result.

## Safe execution

No cloud commands were executed by this project. Optional collection examples are read-only, scoped and explicitly invoked by the user. They do not create resources or run restore jobs. Review outputs for account identifiers and sensitive configuration before publication.
