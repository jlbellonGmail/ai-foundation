# Observability

Observability primitives for runtime safety and service reliability.

Current modules:

* `core/` - error context, error types, handler and retry engine.
* `integration/` - wrapper for error-handled execution.
* `logging/` - incident and logger utilities.
* `strategies/` - retry strategy definitions.
* `tracing/` - OpenTelemetry configuration.
* `enterprise-10-10/` - SLI/SLO/error-budget/metric/alert/dashboard/OTel bindings.

The enterprise observability program is intentionally executable as data:
validators load it and verify that every record has concrete identifiers,
signals and runtime surfaces.
