## Validación de contratos de adaptadores e interfaces.

* **Propósito**: Gestión de Adaptadores y Secretos.
* **Contenido**: Instrucciones para el manejo de APIs externas (Stripe, Supabase).
* **Regla de Oro**: "Todo adaptador debe implementar una interfaz definida en el Dominio. PROHIBIDO usar credenciales en texto plano; usar siempre variables de entorno".
* **Mejora 1**: Patrón de Adaptador Estricto: Exige que cada clase aquí implemente una "Port Interface" definida en el Dominio. Esto garantiza que puedas cambiar a Claude por Gemini (o Stripe por otro procesador) sin romper el sistema.
* **Mejora 2**: Test de Aislamiento RLS: Obliga al agente a escribir un test de integración que intente acceder a datos de otro tenant_id y verifique que Supabase lo bloquea. Es la "Prueba de Fuego" de tu seguridad multi-tenancy.

## Política de Fallo de Adaptadores

- Si un adaptador externo falla, el dominio no debe romperse.
- Toda falla debe transformarse en un error controlado.
- Nunca propagar excepciones técnicas al dominio.