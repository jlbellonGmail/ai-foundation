# Nombre del proyecto

**Propósito del README**

Este documento define el marco conceptual del proyecto.
Cada sección responde explícitamente a:
- qué es el sistema
- por qué existe
- cómo se utiliza o evoluciona

Si una sección no cumple alguno de estos puntos, debe revisarse o eliminarse.

---

## Flujo de Trabajo y Calidad

El proyecto utiliza GitHub Actions como sistema de control de calidad.
Actualmente se define un pipeline base orientado a establecer disciplina
de trabajo y buenas prácticas.

Los controles de testing, linting, build y despliegue serán incorporados
progresivamente a medida que se defina el stack técnico y el producto
avance hacia su MVP.

El objetivo es garantizar:
- coherencia técnica
- trazabilidad de cambios
- estabilidad evolutiva del sistema

---

## Descripción Ejecutiva
Resumen claro y breve del sistema y su propósito.

## Problema que Resuelve
Qué problema real aborda el proyecto.

## Objetivo del Sistema
Qué busca lograr el producto a nivel funcional y estratégico.

## Alcance Funcional
Qué incluye el sistema.

## Fuera de Alcance
Qué NO incluye explícitamente.

## Arquitectura General
Descripción de la arquitectura (hexagonal, capas, principios).

## Principios de Diseño
Reglas que gobiernan decisiones técnicas y de producto.

## Estructura del Repositorio
Explicación de carpetas clave y su propósito.

## Flujo de Trabajo
Cómo se desarrolla, prueba y documenta el proyecto.

## Uso de IA y Agentes
Cómo participan los agentes, límites y reglas.

## Sistema de Ayuda y Documentación

Este proyecto implementa un **Sistema de Ayuda y Documentación Viva**, diseñado para
escalar junto con el producto y ser consumido tanto por usuarios humanos como por
agentes de IA.

La documentación forma parte de la arquitectura del sistema y se rige por los
siguientes principios obligatorios:

- Toda funcionalidad visible debe contar con ayuda asociada.
- La ayuda debe ser accesible desde la UI, sin salir del producto.
- La documentación técnica y funcional se versiona junto con el código.
- Ninguna feature puede considerarse completa sin su documentación correspondiente.

### Componentes del sistema de ayuda

El sistema se organiza en los siguientes documentos y carpetas clave:

- 📘 **Índice general de ayuda**  
  Punto de entrada único para toda la ayuda funcional y técnica.  
  Ver [`docs/help_index.md`](docs/help_index.md)

- 🧠 **Definición del sistema de ayuda y reglas de documentación**  
  Establece cómo debe crearse, mantenerse y versionarse la ayuda.  
  Ver [`docs/explanation/HELP_SYSTEM.md`](docs/explanation/HELP_SYSTEM.md)

- 🏛️ **Gobernanza de agentes de IA**  
  Define límites, responsabilidades y reglas de operación de los agentes.  
  Ver [`docs/explanation/AGENT_GOVERNANCE.md`](docs/explanation/AGENT_GOVERNANCE.md)

- 🧩 **Sistema de Skills (habilidades reutilizables)**  
  Describe las habilidades que los agentes pueden utilizar y sus restricciones.  
  Ver [`docs/skills/README.md`](docs/skills/README.md)

Este sistema garantiza que el conocimiento del producto:
- no quede disperso,
- no dependa de personas,
- y evolucione de forma controlada junto con el código.

### Punto de Entrada Único

El índice central del sistema de ayuda se encuentra en:

📄 **`docs/help_index.md`**

Este archivo define:
- Qué tipo de documentación existe.
- Dónde vive cada tipo de ayuda.
- Qué documentación corresponde a usuarios, desarrolladores y agentes.
- Cómo debe mantenerse la coherencia documental del proyecto.

### Documentación Estratégica Relacionada

El sistema de ayuda se apoya y complementa con:
- `docs/explanation/HELP_SYSTEM.md` – Contrato del sistema de ayuda.
- `docs/explanation/PRD.md` – Qué debe ser el producto.
- `docs/explanation/MVP.md` – Alcance mínimo validado.

📌 **Regla clave:**  
Si una funcionalidad no puede ser explicada correctamente mediante este sistema de ayuda, entonces no está lista para producción.

## Testing y Calidad
Estrategia de testing y estándares mínimos.

## Seguridad y Datos
Cómo se protegen datos y accesos.

## Instalación y Arranque
Pasos básicos para iniciar el proyecto.

## Contribución
Cómo colaborar sin romper el sistema.

## Versionado
Cómo se versiona el proyecto y la plantilla.

## Estado del Proyecto
Estado actual (plantilla / en desarrollo / productivo).
