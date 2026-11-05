# Evidence collection guide

No collection was performed for this deliverable. No AWS credentials are requested or embedded.

## Offline first

Run `node collect-evidence.mjs --dry-run` to inspect the planned command list. This makes no network call.

## Explicit read-only collection

In an authorized environment with AWS CLI installed and an existing read-only profile, run:

`node collect-evidence.mjs --collect --profile YOUR_PROFILE --region YOUR_REGION --account YOUR_12_DIGIT_ACCOUNT --bucket YOUR_BUCKET --trail YOUR_TRAIL_NAME`

The script first compares caller identity with the expected account. On mismatch it stops. It reads IAM summary, S3 public-access/encryption settings and CloudTrail configuration only. It does not create, change or delete cloud resources, run restore jobs or inspect object contents. No command output is uploaded anywhere.

Outputs go to an ignored private-evidence timestamp directory. A manifest records scope, command, UTC times, exit status and SHA-256 hashes. Missing permissions are recorded as collection errors, never as passing tests. Resources absent from the environment are not evidence of compliance.

The IAM summary does not establish IdP enforcement, individual permissions or offboarding. Bucket-only inspection cannot establish effective protection across every policy layer. Trail status does not establish event delivery or correct selectors. Manual review and further evidence remain necessary.

## Publication

Keep originals private. Redact account IDs, names, topology and customer data with approval. Retain original and redacted hashes separately; record who approved publication. Never commit private-evidence. This directory contains only authored synthetic fixtures.

## Cost

The static demos run without cloud resources. Collection calls use existing services and permissions; verify any applicable service/API charges. Restore tests are intentionally excluded because they can provision billable resources. No cost-free cloud execution is promised.
