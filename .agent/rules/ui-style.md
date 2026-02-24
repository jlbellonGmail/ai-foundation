# Guía de Estilo Visual (UI/UX)
 Las reglas de colores, fuentes y estética.
 
**Propósito**: Garantiza que la IA "tenga buen gusto". Define el ADN visual para evitar que el sitio parezca una plantilla genérica.

## **ADN Visual "Quantum SaaS"**

### 1. **El "Vibe" de Marca**
* **Concepto**: "Transparencia Inteligente".
* **Referencia**: Mezcla de la precisión de Linear, la fluidez de Stripe y la profundidad de Vercel.

### 2. **Sistema de Diseño (Tailwind 4)**

#### **2.1. Paleta de Colores (Deep Space)**

* **Primary**: #0A0A0B (Nero Black) - Fondo principal.
* **Accent**: #3B82F6 (Electric Blue) - Botones de acción y estados de IA.
* **Surface**: #18181B (Zinc 900) - Cards y bento grids.
* **Glass**: rgba(255, 255, 255, 0.03) con backdrop-blur-md.

#### **2.2. Tipografía**

* **Headings**: Geist Sans (Modern Tech). Peso: 600-700.
* **Body**: Inter para legibilidad máxima.
* **Code/IA Output**: Geist Mono.

### **3. Patrones de Layout (agregado)**
* **Bento Grids**: Usa rejillas asimétricas para mostrar servicios.
* **Glassmorphism**: Aplica efectos de cristal en el Sidebar y en el AI Chat UI.
* **Micro-interacciones**: Animaciones de entrada suaves (0.3s) usando framer-motion (fade-in, slide-up).

### **4. Componentes Maestro de IA**

* **AI Glow**: Los elementos activados por IA deben tener un sutil resplandor perimetral (ring-glow) en color Accent.
* **Loading State**: Usa esqueletos animados (Skeletons) con gradientes de pulso en lugar de spinners clásicos.

## **5. Accesibilidad (Compliance)**

* Contraste mínimo 4.5:1.
* Soporte total para teclado y lectores de pantalla (WCAG 2.1 AA).
