# Antigravity Rules — AI Project Foundation

Este archivo define las reglas operativas que deben seguir los agentes de IA que trabajan dentro de este repositorio.

Su objetivo es garantizar que cualquier agente respete:

* la arquitectura del proyecto
* la documentación oficial
* el sistema de ayuda
* el sistema de skills
* las políticas de gobernanza
* las reglas de calidad del desarrollo

---

# 1. Lectura Obligatoria Inicial

Antes de realizar cualquier tarea, el agente debe revisar los siguientes documentos:

1. README.md
2. docs/MVP.md
3. docs/PRD.md
4. docs/explanation/HELP_SYSTEM.md
5. docs/skills/catalog.md
6. docs/skills/policies.md

Estos documentos definen:

* propósito del proyecto
* alcance funcional
* arquitectura
* sistema de ayuda
* habilidades disponibles
* políticas de calidad

---

# 2. Principios de Trabajo del Agente

El agente debe seguir estos principios:

1. No implementar funcionalidades fuera del alcance definido en el MVP.
2. No modificar arquitectura sin justificación explícita.
3. No crear features sin documentación asociada.
4. Mantener coherencia con la arquitectura del repositorio.
5. Priorizar claridad, simplicidad y mantenibilidad.

---

# 3. Arquitectura del Proyecto

El proyecto sigue principios de:

* separación de responsabilidades
* modularidad
* documentación viva
* diseño orientado a dominio

Estructura principal:

src/
application/
domain/
infrastructure/

El agente no debe romper esta separación.

---

# 4. Sistema de Ayuda

El proyecto implementa un sistema de **ayuda viva**.

Reglas:

* toda funcionalidad visible debe tener ayuda asociada
* la ayuda debe estar accesible desde la interfaz
* la documentación debe mantenerse en:

docs/tutorials/ui_help/
docs/tutorials/dev_help/

Definición completa:

docs/explanation/HELP_SYSTEM.md

---

# 5. Sistema de Skills

Las habilidades disponibles para los agentes se encuentran en:

docs/skills/catalog.md

Estados posibles de una skill:

* proposed
* in_evaluation
* curated
* deprecated

Solo las skills **curadas** pueden usarse automáticamente.

La evolución del sistema se define en:

docs/skills/roadmap.md

Las reglas de calidad se encuentran en:

docs/skills/policies.md

---

# 6. Sistema de Prompts

Los prompts oficiales del proyecto se encuentran en:

prompts/

Estructura:

prompts/
system/
domain/
guardrails/

Prioridad de uso:

1. system prompts
2. domain prompts
3. guardrails

Los agentes deben consultar estos prompts antes de generar código o respuestas.

---

# 7. Fuentes de Skills Externas

El proyecto puede utilizar habilidades provenientes de repositorios externos.

Las fuentes autorizadas se registran en:

docs/skills/external_sources.md

Las skills externas deben:

* evaluarse antes de usarse
* adaptarse a la arquitectura del proyecto
* no ejecutarse automáticamente sin revisión

---

# 8. Documentación Obligatoria

Cada nueva funcionalidad debe incluir:

* código
* documentación técnica
* ayuda para usuario (si aplica)

Una feature no se considera completa sin documentación.

---

# 9. Flujo de Trabajo del Agente

El flujo recomendado es:

1. Leer documentación relevante
2. Analizar el problema
3. Proponer solución en Markdown
4. Evaluar riesgos
5. Implementar cambios
6. Actualizar documentación

---

# 10. Seguridad

El agente nunca debe:

* exponer API keys
* incluir secretos en el repositorio
* modificar configuraciones críticas sin aprobación

---

# 11. Gobernanza Humana

Las siguientes decisiones requieren aprobación humana:

* cambios de arquitectura
* migraciones de base de datos
* cambios en autenticación
* despliegues productivos

---

# 12. Objetivo del Sistema

El objetivo del agente es contribuir a construir:

software mantenible, documentado, seguro y alineado con el propósito del proyecto.
