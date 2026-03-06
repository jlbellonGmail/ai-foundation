# Catálogo de Skills

## Propósito

Este documento define el **catálogo oficial de skills disponibles para los agentes de IA** dentro del framework **AI Project Foundation**.

Su objetivo es:

- centralizar las capacidades disponibles
- documentar el origen de cada skill
- indicar cuándo deben utilizarse
- garantizar trazabilidad del conocimiento aplicado por los agentes

Solo las skills registradas en este catálogo pueden utilizarse dentro del proyecto.

---

# Estructura del Catálogo

Cada skill del catálogo debe documentar:

- **Nombre**
- **Categoría**
- **Origen**
- **Propósito**
- **Cuándo utilizarla**
- **Cuándo no utilizarla**
- **Estado de curación**

---

# Tipos de Skills

El sistema distingue dos tipos de skills:

### Skills Curadas
Son habilidades provenientes de repositorios, frameworks o metodologías externas ya validadas e integradas.

Estas pueden ser utilizadas directamente por los agentes.

### Skills en Curación
Son capacidades estratégicas identificadas para el sistema, pero que aún requieren:

- selección de framework
- definición metodológica
- documentación completa

Hasta completar este proceso **no pueden ser utilizadas por los agentes**.

---

# Categorías de Skills

Las skills se agrupan en las siguientes categorías:

- Producto
- Diseño
- Marketing
- Ingeniería
- Estrategia

---

# Skills Disponibles

---

# Superpowers

### Categoría
Ingeniería / Productividad

### Origen
https://github.com/obra/superpowers

### Propósito

Superpowers proporciona heurísticas y patrones que ayudan a los agentes a trabajar con mayor eficiencia, claridad estructural y capacidad analítica.

Estas habilidades están orientadas a:

- descomposición de problemas
- estructuración de soluciones
- pensamiento sistemático
- optimización de prompts

### Cuándo utilizarla

Cuando el agente necesita:

- estructurar soluciones complejas
- organizar información extensa
- mejorar claridad de razonamiento
- dividir un problema en subproblemas

### Cuándo no utilizarla

No es necesaria cuando la tarea es simple o puramente informativa.

### Estado

Curada e integrada en el sistema de skills.

---

# Frontend Design

### Categoría
Diseño / UX

### Origen
https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design

### Propósito

Proporciona heurísticas y patrones para el diseño de interfaces modernas y profesionales.

Permite a los agentes:

- generar layouts coherentes
- mejorar experiencia de usuario
- aplicar principios modernos de UI
- estructurar componentes visuales

### Cuándo utilizarla

Cuando el agente trabaja en:

- diseño de interfaces
- diseño de dashboards
- sistemas de diseño
- componentes visuales

### Cuándo no utilizarla

No se requiere en tareas puramente backend o análisis de datos.

### Estado

Curada e integrada en el sistema de skills.

---

# Marketing Skills

### Categoría
Marketing / Comunicación

### Origen
https://github.com/coreyhaines31/marketingskills

### Propósito

Proporciona marcos de trabajo para:

- posicionamiento de producto
- comunicación efectiva
- marketing digital
- generación de valor percibido

Permite que los agentes produzcan:

- textos orientados a conversión
- mensajes claros de valor
- contenido alineado con objetivos comerciales

### Cuándo utilizarla

Cuando el agente trabaja en:

- landing pages
- contenido de marketing
- copywriting
- estrategia de posicionamiento

### Cuándo no utilizarla

No es necesaria para tareas puramente técnicas o de ingeniería.

### Estado

Curada e integrada en el sistema de skills.

---

# Skills en Curación

Las siguientes capacidades han sido identificadas como estratégicas
para el crecimiento del framework, pero aún se encuentran en proceso
de análisis y curación.

No deben utilizarse hasta completar su definición formal.

---

# Product Discovery

### Categoría
Producto / Estrategia

### Propósito

Permitir que los agentes ayuden a:

- validar problemas de negocio
- identificar oportunidades de producto
- estructurar discovery antes del desarrollo
- definir hipótesis y experimentos

### Estado

Propuesta

---

# UX Research

### Categoría
Diseño / Producto

### Propósito

Capacidad para ayudar a realizar:

- análisis de experiencia de usuario
- identificación de fricciones
- validación de flujos de usuario
- mejora de usabilidad

### Estado

Propuesta

---

# Software Architecture Patterns

### Categoría
Ingeniería

### Propósito

Permitir que los agentes utilicen patrones arquitectónicos reconocidos
para estructurar soluciones robustas.

Ejemplos:

- Hexagonal Architecture
- Clean Architecture
- Modular Monolith
- Event Driven Architecture

### Estado

Propuesta

---

# AI Prompt Engineering

### Categoría
Ingeniería / IA

### Propósito

Optimizar el uso de modelos de lenguaje mediante:

- diseño avanzado de prompts
- estructuración de instrucciones
- control de contexto
- evaluación de respuestas

### Estado

Propuesta

---

# Growth Engineering

### Categoría
Producto / Marketing

### Propósito

Capacidad para optimizar productos digitales mediante:

- análisis de métricas de crecimiento
- experimentación
- optimización de conversión
- análisis de funnels

### Estado

Propuesta

# Expansión del Catálogo

El catálogo de skills se expandirá con nuevas capacidades:

Cada nueva skill deberá pasar por un proceso de:

1. análisis
2. curación
3. documentación
4. incorporación al catálogo

---

# Gobernanza del Catálogo

Toda incorporación o modificación de skills debe cumplir con las siguientes reglas:

- documentarse en este catálogo
- registrar su origen
- indicar propósito y límites
- versionarse junto con el proyecto

Esto garantiza que los agentes utilicen únicamente **capacidades auditadas y controladas**.

---

# Regla Fundamental

Los agentes del proyecto **solo pueden utilizar skills incluidas en este catálogo**.