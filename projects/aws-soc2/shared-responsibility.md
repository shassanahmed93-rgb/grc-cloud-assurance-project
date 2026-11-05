# Shared-responsibility review

| Layer | Provider-side dependency | Northstar responsibility | Required evidence |
|---|---|---|---|
| Cloud foundations | AWS service security and permitted assurance reports | Select services and evaluate relevant customer responsibilities | Scoped report review plus architecture |
| Workforce identity | Identity-provider capabilities | Enforce MFA/SSO, authorize roles, reconcile leavers and session access | IdP policy, membership population and lifecycle tests |
| Storage | S3 security features | Classify data, configure effective access, protect keys and review sharing | Effective settings/policies and scoped access tests |
| Application | Managed service features | Per-user authorization, safe endpoints, secrets and software changes | Application tests, access rules and deployment approvals |
| Monitoring | CloudTrail/CloudWatch capabilities | Select required events, protect records, monitor delivery and triage | Selectors, known-event trace and delivery receipt |
| Recovery | Backup service capabilities | Define business objectives, test restores and verify integrity | Witnessed restore and sign-off |

A public architecture or historical deployment verification cannot close a new evidence request. All twelve requests in this project remain Not collected.
