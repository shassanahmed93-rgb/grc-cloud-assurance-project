# Evidence-led GRC Assurance Suite

Four connected, inspectable portfolio case studies by Hassan Ahmed. Each begins with a decision, exposes the underlying workpapers and makes evidence limitations explicit.

| Case study | Interactive page | Supporting artifacts |
|---|---|---|
| Third-party risk | [Vendor review](https://shassanahmed.space/projects/vendor-risk/) | [Questionnaire and decision record](projects/vendor-risk/) |
| Cloud controls | [AWS–SOC 2](https://shassanahmed.space/projects/aws-soc2/) | [Mappings and collection guide](projects/aws-soc2/) |
| Incident readiness | [Credential tabletop](https://shassanahmed.space/projects/incident-tabletop/) | [Facilitator and observer materials](projects/incident-tabletop/) |
| Internal assurance | [Mock audit](https://shassanahmed.space/projects/internal-audit/) | [Workpapers and corrective actions](projects/internal-audit/) |

## Evidence provenance

The vendor review evaluates public documentation for a fictional buyer; restricted reports and tenant operation were not inspected. Other cases use synthetic fixtures and authored scenario responses. No actual audit client, independent assurance opinion, completed participant exercise, management signature or live AWS collection is claimed.

The work was developed with AI assistance. Portfolio ownership does not establish that the author personally executed the modeled cloud tests. The exercises are ready for a separately documented hands-on run.

## Verify locally

Requires Node.js. No third-party packages.

```sh
node suite-tests.mjs
```

Checks validate source references, asset paths, questionnaire scoring, audit conclusions derived from fixtures, corrective-action links, live-evidence status and the offline collection path. These checks validate the project data, not real-world control effectiveness.

To view the pages, serve the repository root using any static server, for example `python -m http.server 8000`, then open `/projects/vendor-risk/`. The source repository preserves the original Cloud Assurance demo at its root.

## Recruiter walkthrough

1. Read the decision brief and its evidence boundary.
2. Open a workpaper and follow its source or fixture reference.
3. Explain the gap and what would be needed to change the conclusion.
4. Download the report or CSV to inspect the reasoning outside the interface.

## Security and privacy

No external app connection, login or cloud credential is needed for the public pages. Search/filter state is browser-local and transient. Downloads are generated locally or served as static files. No personal data is collected by the case study code. Optional fonts are requested from Google Fonts. The explicit AWS collection script stores output locally in ignored `private-evidence/`; never publish it without review and redaction approval.
