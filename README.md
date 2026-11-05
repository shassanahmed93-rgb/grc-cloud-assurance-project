# Cloud Assurance Lab

**A traceable GRC case study by Hassan Ahmed.**

This portfolio follows a fictional B2B cloud service, Northstar Cloud, from risk identification through control testing, remediation and management review. All records are synthetic. This is a learning project, not a certification, independent audit or claim of professional client delivery.

## New: Evidence-led GRC Assurance Suite

Four recruiter-facing case studies with inspectable workpapers and explicit evidence boundaries:

| Project | Live case study | Source |
|---|---|---|
| Third-party risk assessment | [Open](https://shassanahmed.space/projects/vendor-risk/) | [Questionnaire & decision record](projects/vendor-risk/) |
| AWS–SOC 2 evidence mapping | [Open](https://shassanahmed.space/projects/aws-soc2/) | [Mappings & collection guide](projects/aws-soc2/) |
| Cloud credential tabletop | [Open](https://shassanahmed.space/projects/incident-tabletop/) | [Facilitator & scenario materials](projects/incident-tabletop/) |
| Mock internal audit | [Open](https://shassanahmed.space/projects/internal-audit/) | [Workpapers & corrective actions](projects/internal-audit/) |

Read [the suite guide](README-suite.md). Verify with `node suite-tests.mjs` (Node.js; no packages). Public-source vendor research is separated from synthetic scenarios and uncollected live evidence. Developed with AI assistance; no completed real-world audit or cloud test is claimed.

## Start here

1. Read [the case study](docs/case-study.md) for scope, business decisions and limitations.
2. Inspect [the risk register](data/risks.csv), including current and target exposure.
3. Follow risk IDs into [controls](data/controls.csv), then [test results](data/tests.csv).
4. Review [findings](data/findings.csv) and the management decision log.
5. Run `node validate.mjs` to check referential integrity and scoring.
6. Open `index.html` for an interactive executive review; no installation required.

## What this demonstrates

Risk assessment; control design versus operating effectiveness; evidence evaluation; third-party assurance; cloud shared responsibility; exception governance; management reporting; and honest reporting of assurance limits.

## Repository structure

| Path | Purpose |
|---|---|
| docs/case-study.md | Scope, methodology, test procedures, findings and board decisions |
| data/risks.csv | Inherent, current residual and target scores |
| data/controls.csv | Original control objectives and accountable owners |
| data/tests.csv | Reproducible test criteria and synthetic outcomes |
| data/findings.csv | Prioritized corrective actions |
| index.html | Interactive risk analysis and executive briefing |
| validate.mjs | Data consistency checks using Node built-ins |

## Interview walkthrough

“I assessed a fictional cloud SaaS environment and built a traceable assurance package. One access-control sample failed, so I retained current residual exposure above appetite rather than claiming that a planned fix reduced risk. Every finding links to a test, control and risk. A clean report is not my objective; a defensible decision is.”

## Boundaries

The control library is a selected original baseline, not a complete ISO Statement of Applicability. No certification readiness percentage is claimed. Framework alignment would require review against licensed/current source requirements. Synthetic evidence labels describe fixtures, not actual AWS observations. No live scanning or cloud integration is included.
