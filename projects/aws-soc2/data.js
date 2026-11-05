window.LAB = {
  "slug": "aws-soc2",
  "number": "02",
  "accent": "#8ec5ff",
  "label": "CLOUD CONTROL ASSURANCE",
  "title": "From configuration to assurance.",
  "name": "AWS–SOC 2 Evidence Mapping",
  "subtitle": "Twelve selected criterion mappings, collection procedures and transparent evidence gaps for a fictional cloud service.",
  "decision": "Evidence collection pending",
  "decisionText": "Every live-evidence status remains Not collected. Synthetic examples demonstrate review technique; they establish neither current AWS security nor SOC 2 readiness.",
  "recordLabel": "Control workpapers",
  "records": [
    {
      "id": "C-01",
      "group": "Identity",
      "title": "Federated workforce identity",
      "status": "Not collected",
      "criterion": "CC6.1",
      "fixture": "Identity policy requires temporary sessions.",
      "test": "Inspect IdP enforcement and AWS assignment exports; test allowed and denied logins.",
      "evidence": [
        "W1",
        "A2"
      ],
      "observation": "A written policy cannot establish enforcement or complete population coverage.",
      "next": "Collect signed-off identity inventory and time-stamped configuration.",
      "owner": "Cloud Platform Lead",
      "basis": "Collection plan + synthetic example only"
    },
    {
      "id": "C-02",
      "group": "Identity",
      "title": "Joiner and leaver lifecycle",
      "status": "Not collected",
      "criterion": "CC6.2",
      "fixture": "One of five synthetic leavers exceeded 24 hours.",
      "test": "Reconcile the complete HR leaver population with disablement and token revocation records.",
      "evidence": [
        "W1",
        "A2"
      ],
      "observation": "HR completeness and session lifetime are unverified.",
      "next": "Reconcile all leavers and investigate each timing exception.",
      "owner": "Cloud Platform Lead",
      "basis": "Collection plan + synthetic example only"
    },
    {
      "id": "C-03",
      "group": "Identity",
      "title": "Privileged role review",
      "status": "Not collected",
      "criterion": "CC6.3",
      "fixture": "Two privileged roles have documented owners.",
      "test": "Compare role policies, membership and business approvals; examine overbroad privileges.",
      "evidence": [
        "W1",
        "A2"
      ],
      "observation": "Role existence is not proof that effective permission is appropriate.",
      "next": "Inspect resource policies, boundaries and approved entitlements together.",
      "owner": "Cloud Platform Lead",
      "basis": "Collection plan + synthetic example only"
    },
    {
      "id": "C-04",
      "group": "Perimeter",
      "title": "Network and storage exposure",
      "status": "Not collected",
      "criterion": "CC6.6",
      "fixture": "Account public-access flags are enabled in a synthetic snapshot.",
      "test": "Inspect effective account/bucket/access-point policy plus security-group ingress and approved exposure.",
      "evidence": [
        "W2",
        "A2"
      ],
      "observation": "One snapshot cannot prove historical protection or absence of unintended private access.",
      "next": "Collect effective policy and scoped negative-access test results.",
      "owner": "Cloud Platform Lead",
      "basis": "Collection plan + synthetic example only"
    },
    {
      "id": "C-05",
      "group": "Data protection",
      "title": "Protected data transmission",
      "status": "Not collected",
      "criterion": "CC6.7",
      "fixture": "TLS is required by an example application policy.",
      "test": "Review listener and client settings; test approved endpoints without sending sensitive data.",
      "evidence": [
        "A2"
      ],
      "observation": "Encryption configuration alone does not address every data transfer path.",
      "next": "Inventory API, database and third-party transfer paths.",
      "owner": "Cloud Platform Lead",
      "basis": "Collection plan + synthetic example only"
    },
    {
      "id": "C-06",
      "group": "Monitoring",
      "title": "Configuration and vulnerability review",
      "status": "Not collected",
      "criterion": "CC7.1",
      "fixture": "Example configuration gap: an unowned security-group exception.",
      "test": "Compare a time-stamped inventory to the baseline and review vulnerability triage records.",
      "evidence": [
        "A2"
      ],
      "observation": "No actual scan or AWS Config results were collected.",
      "next": "Collect scoped findings and approved exception decisions.",
      "owner": "Cloud Platform Lead",
      "basis": "Collection plan + synthetic example only"
    },
    {
      "id": "C-07",
      "group": "Monitoring",
      "title": "Security event monitoring",
      "status": "Not collected",
      "criterion": "CC7.2",
      "fixture": "Trail is configured; alert receipt evidence is absent.",
      "test": "Review trail scope/status/selectors and a known event from creation through delivery to triage.",
      "evidence": [
        "W3",
        "A2"
      ],
      "observation": "Enabled integrity validation is not the same as executing validation; management events do not cover all data events.",
      "next": "Collect event selectors, a delivery sample and a timed detection test.",
      "owner": "Cloud Platform Lead",
      "basis": "Collection plan + synthetic example only"
    },
    {
      "id": "C-08",
      "group": "Incident handling",
      "title": "Security-event evaluation",
      "status": "Not collected",
      "criterion": "CC7.3",
      "fixture": "An example event is triaged with impact marked uncertain.",
      "test": "Inspect event classification, impacted assets, decision owner and escalation rationale.",
      "evidence": [
        "A2",
        "I1"
      ],
      "observation": "A ticket template does not establish consistent triage operation.",
      "next": "Sample real permitted tickets for the defined review period.",
      "owner": "Cloud Platform Lead",
      "basis": "Collection plan + synthetic example only"
    },
    {
      "id": "C-09",
      "group": "Incident handling",
      "title": "Coordinated incident response",
      "status": "Not collected",
      "criterion": "CC7.4",
      "fixture": "Tabletop decision log assigns an incident commander.",
      "test": "Review plan roles and a completed exercise with containment and communication decisions.",
      "evidence": [
        "A2",
        "I1"
      ],
      "observation": "A tabletop cannot prove technical containment in production.",
      "next": "Conduct an authorized exercise and track improvement actions.",
      "owner": "Cloud Platform Lead",
      "basis": "Collection plan + synthetic example only"
    },
    {
      "id": "C-10",
      "group": "Change management",
      "title": "Production change authorization",
      "status": "Not collected",
      "criterion": "CC8.1",
      "fixture": "One of three synthetic releases lacks independent approval.",
      "test": "Reconcile deployment population with approvals, test results, immutable artifacts and emergency reviews.",
      "evidence": [
        "A2"
      ],
      "observation": "A CI success badge does not demonstrate authorization or full population completeness.",
      "next": "Collect approval rules and complete deployment samples.",
      "owner": "Cloud Platform Lead",
      "basis": "Collection plan + synthetic example only"
    },
    {
      "id": "C-11",
      "group": "Resilience",
      "title": "Business disruption mitigation",
      "status": "Not collected",
      "criterion": "CC9.1",
      "fixture": "A paper restore scenario meets proposed objectives.",
      "test": "Review recovery dependencies and witnessed restore results against business-approved RTO/RPO.",
      "evidence": [
        "W4",
        "A2"
      ],
      "observation": "No restore was executed; service recovery must include application integrity checks.",
      "next": "Obtain an approved recovery test and record actual timings.",
      "owner": "Cloud Platform Lead",
      "basis": "Collection plan + synthetic example only"
    },
    {
      "id": "C-12",
      "group": "Governance",
      "title": "Supplier-risk governance",
      "status": "Not collected",
      "criterion": "CC9.2",
      "fixture": "A supplier assurance report is not yet reviewed.",
      "test": "Inspect assessment, contract, relevant assurance exceptions and approval decision.",
      "evidence": [
        "A2"
      ],
      "observation": "Provider certification does not cover Northstar tenant operation.",
      "next": "Complete the linked vendor review and resolve critical unknowns.",
      "owner": "Security Lead",
      "basis": "Collection plan + synthetic example only"
    }
  ],
  "sourceIds": [
    "A1",
    "A2",
    "W1",
    "W2",
    "W3",
    "W4",
    "I1"
  ],
  "steps": [
    "Define system boundary",
    "Map selected criteria",
    "Specify evidence",
    "Test before concluding"
  ],
  "intro": "The reference design is a cloud API with federated administration, containers, private data storage and a deployment pipeline. It draws on the architecture style of the Journal API, but this assessment does not inherit its historical verification as new evidence.",
  "method": [
    [
      "Engagement boundary",
      "Selected security Common Criteria only; not all CC1–CC9, not a full SOC 2 scope and not Type I or Type II assurance. Criterion themes are original short paraphrases; consult the applicable AICPA edition before real use."
    ],
    [
      "Provider versus customer",
      "AWS operates underlying services. Northstar remains responsible for its identities, workload permissions, data classification, application authorization, configurations and evidence review. A provider report does not test these customer controls."
    ],
    [
      "Three evidence levels",
      "Design = what the policy and configuration intend. Implementation = what is actually configured at a specific time. Operation = whether the control worked for a defined population and period. Keep the three separate."
    ],
    [
      "Collection protocol",
      "Record resource scope, command, collector, UTC collection time, review period, SHA-256 hash and redaction history. Preserve original output privately. Denied or empty output is an evidence gap, not a passing result."
    ],
    [
      "Safe execution",
      "No cloud commands were executed by this project. Optional collection examples are read-only, scoped and explicitly invoked by the user. They do not create resources or run restore jobs. Review outputs for account identifiers and sensitive configuration before publication."
    ]
  ],
  "report": [
    [
      "Executive conclusion",
      "The package is an evidence-ready assessment design. Twelve live evidence requests are open. There is no support for a live operating-effectiveness or compliance conclusion."
    ],
    [
      "Priority evidence",
      "Collect complete identity and deployment populations, effective storage permissions, actual log delivery and an independently witnessed restore. Single configuration screenshots are insufficient for period-based claims."
    ],
    [
      "Decision rule",
      "Do not mark a criterion satisfied because one AWS setting is enabled. Review the complete control objective, relevant application processes, exceptions and period evidence."
    ],
    [
      "Next milestone",
      "Use an authorized sandbox to collect sanitized evidence for C-01, C-04 and C-07 first. Record reviewer conclusions and limitations before expanding scope."
    ]
  ],
  "date": "2026-11-05",
  "author": "Hassan Ahmed",
  "sources": [
    {
      "id": "A1",
      "title": "AICPA — 2017 TSC with revised points of focus (2022)",
      "url": "https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022",
      "note": "Reference edition for this educational mapping; no complete criteria text reproduced.",
      "reviewed": "2026-11-05"
    },
    {
      "id": "A2",
      "title": "AICPA — 2017 TSC, March 2020 edition",
      "url": "https://assets.ctfassets.net/rb9cdnjh59cm/72xv4p67HVXKp6CjWmjkPk/1cdbfa19f6307e2720396b66a6194dc9/trust-services-criteria-updated-copyright.pdf",
      "note": "Public AICPA-authored document used to check selected criterion identifiers. Review against the engagement-specific edition before reuse.",
      "reviewed": "2026-11-05"
    },
    {
      "id": "W1",
      "title": "AWS — IAM security practices",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
      "note": "Implementation guidance; not evidence that Northstar implemented a control.",
      "reviewed": "2026-11-05"
    },
    {
      "id": "W2",
      "title": "AWS — S3 Block Public Access",
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html",
      "note": "Evaluate effective organization/account/bucket/access-point settings together.",
      "reviewed": "2026-11-05"
    },
    {
      "id": "W3",
      "title": "AWS — CloudTrail security practices",
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/best-practices-security.html",
      "note": "Trail configuration, event selection and event delivery are distinct evidence questions.",
      "reviewed": "2026-11-05"
    },
    {
      "id": "W4",
      "title": "AWS — Backup restore testing",
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing.html",
      "note": "Restore testing can create billable resources. This project does not run restores.",
      "reviewed": "2026-11-05"
    },
    {
      "id": "I1",
      "title": "NIST SP 800-61 Rev. 3",
      "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
      "note": "April 2025 guidance. Exercise stages below are an original facilitation sequence.",
      "reviewed": "2026-11-05"
    }
  ],
  "github": "https://github.com/shassanahmed93-rgb/grc-cloud-assurance-project/tree/main/projects/aws-soc2"
};
