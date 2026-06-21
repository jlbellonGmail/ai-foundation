# Deprecated Content

Content in this folder was moved out of the active product surface during the
ENTERPRISE-10-10 structural realignment on 2026-06-11.

Reasons:

* hidden `.ai-*` folders duplicated active `runtime/`, `roles/` or
  `observability/` product folders
* local tool rules were not part of the clean foundation product surface
* ambiguous legacy material is recoverable here instead of being deleted

Do not consume files from this folder in runtime code.

## W8-T1 Legacy Inventory

W8-T1 records this deprecated surface as retained legacy material. The
inventory is descriptive only: no file is deleted, restored, or promoted to the
active product surface.

Artifacts:

* `legacy-inventory.md` documents the inventory, ownership map, classification
  model, and guardrails for this repository.
* `legacy-inventory.contract.json` provides the machine-readable inventory used
  by `scripts/validate-legacy-inventory.mjs`.

The next eligible roadmap task remains W8-T2. W8-T2 is not opened or closed by
this inventory.
