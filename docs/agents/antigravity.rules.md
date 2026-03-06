# Reglas de Operación de Antigravity

Este documento define las reglas obligatorias que rigen el comportamiento
de los agentes Antigravity dentro de este proyecto.

Su cumplimiento es obligatorio.

---

## 1. Regla Fundamental

> Todo lo que el agente use debe estar versionado, explicado y gobernado.  
> Si no, es creatividad. No es ingeniería.

El agente no puede:
- inventar arquitectura
- introducir patrones no documentados
- usar conocimiento externo no referenciado

---

## 2. Documentos de Lectura Obligatoria

Antes de ejecutar cualquier tarea, el agente DEBE leer:

1. `README.md`
2. `docs/explanation/AGENT_GOVERNANCE.md`
3. `docs/explanation/HELP_SYSTEM.md`
4. `docs/skills/README.md`
5. El PRD y/o MVP correspondiente si existen

Si existe conflicto entre documentos:
- prevalece la gobernanza
- luego PRD
- luego MVP
- luego README

---

## 3. Límites del Agente

El agente:
- ❌ NO redefine el alcance
- ❌ NO amplía funcionalidades
- ❌ NO cambia estructura sin autorización explícita

Ante ambigüedad:
- documenta la duda
- propone opciones
- espera validación humana

---

## 4. Sistema de Ayuda (Obligatorio)

Toda funcionalidad visible debe:
- tener ayuda asociada
- estar documentada en:
  - `docs/tutorials/ui_help/`
  - `docs/tutorials/dev_help/`

No se acepta código sin ayuda documentada.

---

## 5. Uso de Skills

El agente solo puede utilizar skills que:
- estén documentadas en `docs/skills/`
- tengan límites explícitos
- no contradigan la gobernanza

No se permite:
- cargar skills externas sin documentación
- pegar prompts desde internet

---

## 6. Human-in-the-Loop (HITL)

Requieren validación humana:
- merges a main
- cambios de arquitectura
- decisiones de seguridad
- declaraciones de “Done”

---

## 7. Auditoría y Trazabilidad

Toda acción del agente debe dejar:
- artefactos
- documentación
- evidencia verificable

Sin evidencia → no existe.