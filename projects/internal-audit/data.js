window.LAB = {
  "slug": "internal-audit",
  "number": "04",
  "accent": "#c2b0ff",
  "label": "INTERNAL AUDIT SIMULATION",
  "title": "Challenge the conclusion.",
  "name": "Cloud Controls Mock Internal Audit",
  "subtitle": "Ten traceable workpapers with criteria, populations, evidence, exceptions and a corrective-action follow-up plan.",
  "decision": "Limited assurance evidence",
  "decisionText": "Five failures, three inconclusive procedures and two scoped passes in synthetic fixtures. These results are not an independent audit opinion or an organization-wide compliance score.",
  "recordLabel": "Audit workpapers",
  "records": [
    {
      "id": "A-01",
      "title": "Leaver access removal",
      "group": "Identity",
      "status": "Fail",
      "risk": "R-01",
      "control": "C-01",
      "population": "5 leavers in October fixture",
      "sample": "5 of 5",
      "test": "All terminated identities disabled within 24 hours.",
      "observation": "One record shows 52 hours; 4 meet the criterion.",
      "finding": "F-01",
      "owner": "People Lead",
      "due": "2026-11-20",
      "retest": "Reconcile the full next-month population, including active sessions.",
      "evidence": [
        "E-A-01"
      ],
      "basis": "Synthetic workpaper; not an independent audit",
      "next": "Implement correction and supply an independently reviewed retest."
    },
    {
      "id": "A-02",
      "title": "Private object storage",
      "group": "Data protection",
      "status": "Pass",
      "risk": "R-02",
      "control": "C-02",
      "population": "3 fixture buckets",
      "sample": "3 of 3",
      "test": "All effective public-access flags enabled and encryption described in scoped fixture.",
      "observation": "All three fixture records meet the stated criterion.",
      "finding": "None",
      "owner": "CTO",
      "due": "2026-12-05",
      "retest": "Reinspect effective policies after material changes; no history assurance.",
      "evidence": [
        "E-A-02"
      ],
      "basis": "Synthetic workpaper; not an independent audit",
      "next": "Retain evidence and review on material change."
    },
    {
      "id": "A-03",
      "title": "Independent release approval",
      "group": "Change management",
      "status": "Fail",
      "risk": "R-03",
      "control": "C-03",
      "population": "3 fixture releases",
      "sample": "3 of 3",
      "test": "Every production release has approval by someone other than the author.",
      "observation": "REL-03 has no independent approval.",
      "finding": "F-02",
      "owner": "Engineering Lead",
      "due": "2026-11-22",
      "retest": "Inspect enforced rule and attempt a denied unapproved release in a sandbox.",
      "evidence": [
        "E-A-03"
      ],
      "basis": "Synthetic workpaper; not an independent audit",
      "next": "Implement correction and supply an independently reviewed retest."
    },
    {
      "id": "A-04",
      "title": "Recovery operation",
      "group": "Resilience",
      "status": "Inconclusive",
      "risk": "R-04",
      "control": "C-04",
      "population": "1 paper recovery scenario",
      "sample": "1 of 1",
      "test": "Witnessed technical restore meets four-hour RTO and 24-hour RPO with integrity checks.",
      "observation": "Only tabletop timings exist; no technical restore record.",
      "finding": "F-06",
      "owner": "CTO",
      "due": "2026-11-27",
      "retest": "Observe a permitted restore and validate business data consistency.",
      "evidence": [
        "E-A-04"
      ],
      "basis": "Synthetic workpaper; not an independent audit",
      "next": "Obtain sufficient evidence before concluding."
    },
    {
      "id": "A-05",
      "title": "Log query and alert delivery",
      "group": "Monitoring",
      "status": "Inconclusive",
      "risk": "R-05",
      "control": "C-05",
      "population": "1 logging configuration fixture",
      "sample": "1 of 1",
      "test": "Trace a known event into a query result and delivered alert.",
      "observation": "Retention setting exists; event query and receipt evidence are missing.",
      "finding": "F-03",
      "owner": "Security Lead",
      "due": "2026-11-15",
      "retest": "Execute a known-event delivery exercise and retain timestamps.",
      "evidence": [
        "E-A-05"
      ],
      "basis": "Synthetic workpaper; not an independent audit",
      "next": "Obtain sufficient evidence before concluding."
    },
    {
      "id": "A-06",
      "title": "Supplier assurance currency",
      "group": "Third party",
      "status": "Fail",
      "risk": "R-06",
      "control": "C-06",
      "population": "1 critical support supplier",
      "sample": "1 of 1",
      "test": "Review current assurance coverage and customer responsibilities before approval.",
      "observation": "Review expired before the assessment cutoff.",
      "finding": "F-04",
      "owner": "Procurement Lead",
      "due": "2026-11-25",
      "retest": "Inspect current report review and owner decision; existence alone is insufficient.",
      "evidence": [
        "E-A-06"
      ],
      "basis": "Synthetic workpaper; not an independent audit",
      "next": "Implement correction and supply an independently reviewed retest."
    },
    {
      "id": "A-07",
      "title": "Approved AI processing",
      "group": "Data protection",
      "status": "Fail",
      "risk": "R-07",
      "control": "C-07",
      "population": "10 fixture support submissions",
      "sample": "10 of 10",
      "test": "Customer identifiers appear only in approved processing paths.",
      "observation": "Two authored examples contain identifiers in an unapproved path.",
      "finding": "F-05",
      "owner": "Support Lead",
      "due": "2026-11-18",
      "retest": "Inspect configuration and a larger approved sample after corrective action.",
      "evidence": [
        "E-A-07"
      ],
      "basis": "Synthetic workpaper; not an independent audit",
      "next": "Implement correction and supply an independently reviewed retest."
    },
    {
      "id": "A-08",
      "title": "Incident escalation ownership",
      "group": "Incident handling",
      "status": "Pass",
      "risk": "R-08",
      "control": "C-08",
      "population": "1 scripted tabletop",
      "sample": "1 of 1",
      "test": "Name a commander and record a decision within 30 minutes in the exercise.",
      "observation": "The synthetic log names the owner at minute 12.",
      "finding": "None",
      "owner": "Security Lead",
      "due": "2026-12-05",
      "retest": "Repeat with different participants; no production-response conclusion.",
      "evidence": [
        "E-A-08"
      ],
      "basis": "Synthetic workpaper; not an independent audit",
      "next": "Retain evidence and review on material change."
    },
    {
      "id": "A-09",
      "title": "Risk exception authorization",
      "group": "Governance",
      "status": "Inconclusive",
      "risk": "R-01",
      "control": "C-01",
      "population": "5 above-appetite risks",
      "sample": "5 of 5",
      "test": "An acceptance requires named approval, compensating measures and expiry.",
      "observation": "No approvals are recorded; no completed approval workflow can be tested.",
      "finding": "F-07",
      "owner": "CEO",
      "due": "2026-11-21",
      "retest": "Track as pending treatment; inspect an actual approved exception if one occurs.",
      "evidence": [
        "E-A-09"
      ],
      "basis": "Synthetic workpaper; not an independent audit",
      "next": "Obtain sufficient evidence before concluding."
    },
    {
      "id": "A-10",
      "title": "Corrective-action closure",
      "group": "Governance",
      "status": "Fail",
      "risk": "R-03",
      "control": "C-03",
      "population": "5 original findings",
      "sample": "5 of 5",
      "test": "Each corrective action has a defined retest and closure authority.",
      "observation": "Original finding log has deadlines but no formal closure-authority field.",
      "finding": "F-08",
      "owner": "Security Lead",
      "due": "2026-11-19",
      "retest": "Review revised tracker and a completed evidence-based closure example.",
      "evidence": [
        "E-A-10"
      ],
      "basis": "Synthetic workpaper; not an independent audit",
      "next": "Implement correction and supply an independently reviewed retest."
    }
  ],
  "sourceIds": [
    "A1",
    "A2",
    "I1"
  ],
  "steps": [
    "Scope & plan",
    "Inspect the evidence",
    "Report exceptions",
    "Retest before closure"
  ],
  "intro": "This extends Cloud Assurance Lab into a formal mock audit. It deliberately challenges a paper recovery result: a tabletop timing cannot substantiate a technical restore, so A-04 remains inconclusive.",
  "method": [
    [
      "Mandate & independence",
      "Portfolio self-assessment of fictional Northstar controls at 5 November 2026. No actual client, assurance engagement or independent auditor. The author designed the scenario and therefore cannot claim independence."
    ],
    [
      "Criteria",
      "Use original Northstar policy criteria stated in each workpaper. Selected SOC 2 identifiers are contextual references, not a full standards audit. An unmet internal criterion is an exception; no formal ISO major/minor classification is asserted."
    ],
    [
      "Sampling",
      "For the supplied fixture populations use 100% testing: 5 leavers, 3 buckets, 3 releases, 1 recovery scenario, 1 logging configuration, 1 supplier, 10 AI submissions, 1 tabletop and the complete 5-risk/5-finding lists. These small authored populations are not statistically representative of a real business."
    ],
    [
      "Conclusion discipline",
      "Pass = supplied evidence meets that specific criterion. Fail = an observed exception. Inconclusive = insufficient evidence. Policy wording alone cannot prove operation. A recovery tabletop does not meet the witnessed-restore criterion."
    ],
    [
      "Severity & follow-up",
      "High = credible sensitive-data exposure or inability to constrain access. Moderate = material process/evidence weakness. Low = limited documentation issue. These are internal prioritization judgments. Original findings stay open until a distinct retest and closure authorization are recorded."
    ]
  ],
  "report": [
    [
      "Audit objective and scope",
      "Review identity, storage, change, recovery, monitoring, supplier, AI, incident and governance controls. Period is the October fixture set plus the 5 November assessment cutoff. No live systems or staff were examined."
    ],
    [
      "Summary of results",
      "Of ten procedures, two pass within their limited fixture scope, five fail and three are inconclusive. Do not convert these counts into a compliance percentage."
    ],
    [
      "Material exceptions",
      "Leaver delay, unauthorized release and unapproved AI use are High-priority fictional findings. Expired supplier review, missing closure authority, insufficient recovery evidence, unproven log delivery and untested exception authorization require follow-up."
    ],
    [
      "Correction to prior interpretation",
      "Cloud Assurance described a paper recovery scenario as a synthetic pass. This mock audit applies a stronger technical criterion: witnessed restore and integrity evidence. That conclusion is inconclusive. The earlier document is preserved as assessment history."
    ],
    [
      "Management response — proposed",
      "Named role owners receive proposed deadlines in the action log. No signatures or actual acceptance are invented. All findings remain open; the retest plan identifies the evidence needed for closure."
    ],
    [
      "Follow-up",
      "Illustrative closure example: a failed release approval control could pass a later sandbox denial test. This example is prospective and never changes A-03 or F-02 until a real permitted retest record exists."
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
      "id": "I1",
      "title": "NIST SP 800-61 Rev. 3",
      "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
      "note": "April 2025 guidance. Exercise stages below are an original facilitation sequence.",
      "reviewed": "2026-11-05"
    }
  ],
  "github": "https://github.com/shassanahmed93-rgb/grc-cloud-assurance-project/tree/main/projects/internal-audit"
};
