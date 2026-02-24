## Bloqueo de importaciones externas (Pureza)
Aquí es donde se protege el núcleo de tu agencia de IA.

* **Propósito**: Mantenimiento de la "Pureza del Dominio".
* **Contenido**: Debe incluir una restricción explícita de importación.
* **Regla de Oro**: "PROHIBIDO importar dependencias de @/infrastructure o @/application. Solo se permiten tipos primitivos y otros modelos del dominio".

* **Mejora 1**: Bloqueo de Dependencias Externas: Define explícitamente que esta capa es "Agnóstica a la Tecnología". Prohíbe importar cualquier cosa de @/infrastructure o de librerías como Supabase o Stripe. Solo se permiten tipos de TypeScript y otros modelos de dominio.
  
* **Mejora 2**: Reglas de Objetos de Valor: Instruye al agente para que use modelos inmutables y valide los datos en el constructor del dominio, asegurando que la lógica de negocio sea siempre consistente.

## Criterio de Validez del Dominio

- Ninguna entidad de dominio puede existir en estado inválido.
- Toda validación debe ocurrir en el constructor.
- Si un dato no es válido, el dominio debe fallar explícitamente.