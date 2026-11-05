window.LAB = {
  "slug": "incident-tabletop",
  "number": "03",
  "accent": "#ffc58e",
  "label": "INCIDENT RESPONSE EXERCISE",
  "title": "Clarity under pressure.",
  "name": "Cloud Credential Incident Tabletop",
  "subtitle": "Eight timed injects, explicit decisions and a structured after-action review. A scripted rehearsal—not an incident response claim.",
  "decision": "Three improvement actions open",
  "decisionText": "The authored walkthrough exposes log-coverage, session-revocation and recovery-approval gaps. Sample decisions show expected reasoning; they are not measured team performance.",
  "recordLabel": "Scenario injects",
  "records": [
    {
      "id": "I-01",
      "minute": 0,
      "title": "Unexpected cloud sign-in",
      "group": "Detect",
      "status": "Scripted",
      "observation": "At 09:00 UTC a simulated alert shows an unfamiliar region and a developer session.",
      "test": "Who validates the event, and what evidence is needed before calling it an incident?",
      "decision": "On-call analyst compares identity, location context and approved work; preserve the original alert.",
      "evidence": [
        "IR-E01"
      ],
      "next": "Add regional work context to the triage checklist.",
      "owner": "SOC Analyst",
      "basis": "Authored simulation; no real incident or participants"
    },
    {
      "id": "I-02",
      "minute": 10,
      "title": "Credential exposure confirmed",
      "group": "Analyze",
      "status": "Scripted",
      "observation": "A synthetic repository review finds an exposed credential reference. No actual secret is included.",
      "test": "Who becomes incident commander, and which facts are established?",
      "decision": "Security Lead declares a simulated high-severity incident and assigns cloud and communications leads.",
      "evidence": [
        "IR-E02"
      ],
      "next": "Record the decision basis and unresolved impact questions.",
      "owner": "Security Lead",
      "basis": "Authored simulation; no real incident or participants"
    },
    {
      "id": "I-03",
      "minute": 20,
      "title": "Containment versus availability",
      "group": "Contain",
      "status": "Scripted",
      "observation": "The credential is linked to a job that supports an important customer workflow.",
      "test": "How will the team revoke access while keeping a safe service path?",
      "decision": "Cloud lead proposes revocation and a controlled replacement path; incident commander approves sequencing.",
      "evidence": [
        "IR-E03"
      ],
      "next": "Document the emergency-access path and authorization for disruptive actions.",
      "owner": "Cloud Lead",
      "basis": "Authored simulation; no real incident or participants"
    },
    {
      "id": "I-04",
      "minute": 35,
      "title": "Possible object access",
      "group": "Investigate",
      "status": "Scripted",
      "observation": "Management logs exist, but the sample contains no object-level reads for the affected period.",
      "test": "Can the team conclude that customer objects were not accessed?",
      "decision": "No. Record an evidence gap; preserve available records and investigate alternate data sources.",
      "evidence": [
        "IR-E04"
      ],
      "next": "Expand event coverage after impact analysis; do not infer absence of access.",
      "owner": "Investigation Lead",
      "basis": "Authored simulation; no real incident or participants"
    },
    {
      "id": "I-05",
      "minute": 50,
      "title": "Customer and executive questions",
      "group": "Communicate",
      "status": "Scripted",
      "observation": "A fictional customer asks whether data is safe; impact is still uncertain.",
      "test": "What can be said accurately, by whom, and when is the next update?",
      "decision": "Communications Lead drafts a fact-limited holding statement; incident commander approves a scheduled update.",
      "evidence": [
        "IR-E05"
      ],
      "next": "Keep notification decisions with counsel based on actual facts and obligations.",
      "owner": "Communications Lead",
      "basis": "Authored simulation; no real incident or participants"
    },
    {
      "id": "I-06",
      "minute": 70,
      "title": "Recovery candidate available",
      "group": "Recover",
      "status": "Scripted",
      "observation": "A replacement credential path is prepared in the exercise narrative.",
      "test": "What technical and business checks are required before declaring recovery?",
      "decision": "Require access-denial confirmation, a clean deployment, integrity tests and business-owner approval.",
      "evidence": [
        "IR-E06"
      ],
      "next": "A paper approval is not proof that these checks succeeded.",
      "owner": "Service Owner",
      "basis": "Authored simulation; no real incident or participants"
    },
    {
      "id": "I-07",
      "minute": 90,
      "title": "Second alert after containment",
      "group": "Verify",
      "status": "Scripted",
      "observation": "A scripted follow-up alert uses an old session identifier.",
      "test": "Is this residual telemetry or ongoing access?",
      "decision": "Re-open validation; check event and ingestion times and session revocation behavior before closing.",
      "evidence": [
        "IR-E07"
      ],
      "next": "Test token lifetime and log delay in an authorized sandbox.",
      "owner": "SOC Analyst",
      "basis": "Authored simulation; no real incident or participants"
    },
    {
      "id": "I-08",
      "minute": 120,
      "title": "After-action review",
      "group": "Improve",
      "status": "Scripted",
      "observation": "The authored walkthrough ends with incomplete object-level evidence and ambiguous recovery ownership.",
      "test": "Which actions require an owner, due date and retest before closure?",
      "decision": "Record three improvement actions; retain findings as open until evidence is reviewed.",
      "evidence": [
        "IR-E08"
      ],
      "next": "Track logging coverage, session revocation testing and recovery sign-off.",
      "owner": "Security Lead",
      "basis": "Authored simulation; no real incident or participants"
    }
  ],
  "sourceIds": [
    "I1",
    "I2"
  ],
  "steps": [
    "Detect & analyze",
    "Contain safely",
    "Communicate uncertainty",
    "Recover & improve"
  ],
  "intro": "Northstar discovers a potentially exposed developer credential and unusual cloud activity. Over 120 simulated minutes, reviewers balance service continuity, uncertain impact, evidence preservation and accurate communication.",
  "method": [
    [
      "Facilitator setup",
      "60–90 minute discussion using eight injects on a fictional 120-minute incident clock. Assign commander, analyst, cloud lead, service owner, communications lead and observer. One person may role-play, but record that limitation."
    ],
    [
      "Exercise objectives",
      "Test ownership, evidence reasoning, containment authorization, impact assessment and recovery acceptance. The objectives are discussion-based; technical revocation or restore requires a separate authorized exercise."
    ],
    [
      "Inject handling",
      "Release one inject at a time. Record actual participant choices separately from the supplied model decision. Capture timestamps, facts, assumptions, approver and follow-up. Do not silently replace the scripted sample with claimed participant results."
    ],
    [
      "Evaluation",
      "For each objective record Demonstrated / Partial / Not observed based on participant evidence. No response-speed score or completed-exercise badge is calculated from reading this page."
    ],
    [
      "Standards context",
      "NIST SP 800-61 Rev. 3 provides the current incident-response reference for this case. Stage labels here organize the original scenario and do not claim to reproduce NIST requirements or legal duties."
    ]
  ],
  "report": [
    [
      "Exercise status",
      "Designed and pre-populated with an authored example walkthrough; not facilitated with real participants. No measured response time, recovered system or notification outcome is claimed."
    ],
    [
      "Example after-action observations",
      "Ownership is assigned early in the script. The scenario deliberately leaves object-level access uncertain and raises a stale-session question after proposed containment. These are learning prompts, not real observations."
    ],
    [
      "Improvement plan",
      "IR-A01: Security Lead to define object-level event coverage by 19 November. IR-A02: Cloud Lead to test session-revocation behavior in an authorized sandbox by 22 November. IR-A03: Service Owner to define recovery sign-off and integrity criteria by 20 November. All are proposed and open."
    ],
    [
      "Holding statement — exercise only",
      "We are investigating unusual cloud access. The affected scope and any customer-data impact are not yet established. Our team is validating containment and preserving records. We will provide the next update at the agreed time. This draft has not been sent."
    ],
    [
      "Closure criteria",
      "A named reviewer must accept evidence of each improvement. Notification duties require a separate legal and contractual assessment; this exercise sets no universal deadline."
    ]
  ],
  "date": "2026-11-05",
  "author": "Hassan Ahmed",
  "sources": [
    {
      "id": "I1",
      "title": "NIST SP 800-61 Rev. 3",
      "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
      "note": "April 2025 guidance. Exercise stages below are an original facilitation sequence.",
      "reviewed": "2026-11-05"
    },
    {
      "id": "I2",
      "title": "NIST — Incident response preparation resources",
      "url": "https://csrc.nist.gov/Projects/incident-response/preparation-resources",
      "note": "Directory includes tabletop and after-action resources; no copied exercise package.",
      "reviewed": "2026-11-05"
    }
  ],
  "github": "https://github.com/shassanahmed93-rgb/grc-cloud-assurance-project/tree/main/projects/incident-tabletop"
};
