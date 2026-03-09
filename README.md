# AI Project Foundation

Framework para construir proyectos de software diseñados para colaborar con agentes de inteligencia artificial.

Define:

- arquitectura del proyecto
- sistema de prompts
- modelo de agentes
- workflows de desarrollo
- gobernanza de IA
- estructura documental

Este framework permite crear proyectos mantenibles, documentados y comprensibles tanto por humanos como por IA.

---

# Ecosistema del Framework

AI Project Foundation forma parte de un ecosistema de repositorios diseñados para facilitar el desarrollo de proyectos **AI-native**.

El flujo del ecosistema es el siguiente:

```
ai-knowledge
     ↓
ai-project-foundation
     ↓
ai-project-template
     ↓
AI-native projects
``` 


### ai-knowledge
Base de conocimiento compartida del ecosistema.

Contiene:

- skills reutilizables
- estándares técnicos
- prompts compartidos
- prácticas de desarrollo
- patrones de arquitectura

### ai-project-foundation

Este repositorio.

Define el framework que estructura proyectos colaborativos con IA:

- roles de agentes
- workflows
- pipelines
- gobernanza
- sistema documental

### ai-project-template

Plantilla base para iniciar nuevos proyectos utilizando el framework.

Incluye:

- estructura inicial del proyecto
- integración con foundation
- configuración inicial de agentes
- sistema de documentación

### AI-native projects

Proyectos reales construidos utilizando el template y el framework.

---

# Propósito del README

Este documento define el marco conceptual del proyecto.

Cada sección responde explícitamente a:

- qué es el sistema
- por qué existe
- cómo se utiliza o evoluciona

Si una sección no cumple alguno de estos puntos, debe revisarse o eliminarse.

---

# Descripción Ejecutiva

AI Project Foundation es un framework diseñado para facilitar la creación de proyectos de software que colaboran de manera efectiva con agentes de inteligencia artificial.

Proporciona una estructura clara que permite que humanos y agentes trabajen sobre el mismo sistema sin generar caos estructural.

---

# Problema que Resuelve

Los proyectos que utilizan IA suelen enfrentar varios problemas:

- documentación inconsistente
- arquitectura difícil de comprender para agentes
- prompts desorganizados
- falta de gobernanza para agentes

Este framework introduce una estructura que resuelve estos problemas.

---

# Objetivo del Sistema

El objetivo es permitir la construcción de proyectos que sean:

- mantenibles
- comprensibles por humanos
- comprensibles por IA
- bien documentados
- estructuralmente coherentes

---

# Alcance Funcional

El framework define:

- estructura de repositorios
- sistema de roles de agentes
- workflows de desarrollo
- pipelines de entrega
- sistema de prompts
- gobernanza de IA
- arquitectura documental

---

# Fuera de Alcance

Este repositorio **no contiene aplicaciones productivas**.

Las aplicaciones se crean utilizando:

```
 ai-project-template
```


---

# Arquitectura General

El framework promueve principios de arquitectura orientada a dominio:

- separación de responsabilidades
- modularidad
- documentación viva
- diseño mantenible
- colaboración humano-IA

---

## Arquitectura Detallada

Para una descripción completa de la arquitectura del framework ver:

`ARCHITECTURE.md`

# Principios de Diseño

Las decisiones técnicas dentro del framework se rigen por los siguientes principios:

- claridad estructural
- mínima complejidad necesaria
- documentación como parte del sistema
- separación clara entre conocimiento, framework y proyectos
- compatibilidad con agentes de IA

---

# Estructura del Repositorio

```
.ai
.ai-pipelines
.ai-roles
.ai-workflows
.antigravity
prompts
docs
```

### .ai
Contexto e infraestructura para agentes.

### .ai-roles
Definición de roles de agentes.

### .ai-workflows
Flujos de trabajo entre agentes.

### .ai-pipelines
Procesos completos de entrega.

### .antigravity
Reglas de gobernanza para agentes.

### prompts
Sistema de prompts del framework.

### docs
Sistema completo de documentación.

---

# Flujo de Trabajo

El desarrollo sigue un flujo estructurado basado en roles:

1. Product Manager define requisitos
2. Architect diseña la arquitectura
3. Developer implementa
4. Reviewer valida calidad
5. Documentation Agent actualiza documentación

---

# Uso de IA y Agentes

El framework permite que múltiples agentes colaboren en el desarrollo del proyecto.

Los agentes:

- siguen roles definidos
- operan mediante workflows
- respetan reglas de gobernanza
- utilizan prompts controlados

---

# Sistema de Ayuda y Documentación

Este proyecto implementa un **Sistema de Ayuda y Documentación Viva**, diseñado para escalar junto con el producto y ser consumido tanto por usuarios humanos como por agentes de IA.

La documentación forma parte de la arquitectura del sistema y se rige por los siguientes principios:

- Toda funcionalidad visible debe contar con ayuda asociada.
- La ayuda debe ser accesible desde la interfaz.
- La documentación se versiona junto con el código.
- Ninguna feature se considera completa sin documentación.

### Componentes del sistema de ayuda

📘 **Índice general de ayuda**  
`docs/help_index.md`

🧠 **Contrato del sistema de ayuda**  
`docs/explanation/HELP_SYSTEM.md`

🏛️ **Gobernanza de agentes**  
`docs/explanation/AGENT_GOVERNANCE.md`

🧩 **Sistema de Skills**  
`docs/skills/README.md`

---

# Testing y Calidad

El framework promueve buenas prácticas de calidad:

- testing automatizado
- revisión de código
- validación de arquitectura
- documentación obligatoria

---

# Seguridad y Datos

Los agentes no deben:

- exponer claves
- incluir secretos
- modificar configuraciones críticas sin aprobación humana.

---

# Contribución

Las contribuciones deben:

- respetar la arquitectura del framework
- incluir documentación
- mantener coherencia estructural.

---

# Versionado

El framework sigue **Semantic Versioning**.

La versión actual del framework se encuentra en el archivo:

`VERSION`

El historial de cambios puede consultarse en:

`CHANGELOG.md`

