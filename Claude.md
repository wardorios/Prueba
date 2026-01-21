# Instrucciones para Claude Code

## Reglas de Trabajo en este Proyecto

### ⚠️ Autorización Obligatoria

**IMPORTANTE**: Antes de ejecutar cualquier cambio en el código, SIEMPRE debes:

1. **Pedir autorización explícita** al usuario antes de:
   - Crear nuevos archivos
   - Modificar archivos existentes
   - Eliminar archivos
   - Hacer commits
   - Hacer push al repositorio
   - Ejecutar comandos que modifiquen el proyecto

2. **Presentar un plan detallado** que incluya:
   - Qué archivos se van a modificar o crear
   - Qué cambios específicos se realizarán
   - Razón de cada cambio
   - Impacto potencial en el proyecto

3. **Esperar confirmación** del usuario con un "sí", "adelante", "confirmo" o similar antes de proceder.

## Flujo de Trabajo Requerido

```
1. Usuario solicita una tarea
2. Claude analiza y presenta un plan detallado
3. Claude pregunta: "¿Deseas que proceda con estos cambios?"
4. Usuario confirma
5. Claude ejecuta los cambios
6. Claude reporta los resultados
```

## Excepciones

Solo se pueden ejecutar sin autorización previa:
- Lectura de archivos (Read, Grep, Glob)
- Comandos de consulta (git status, ls, etc.)
- Búsquedas y análisis del código existente

## Ejemplo de Solicitud de Autorización

```
He analizado tu solicitud y propongo los siguientes cambios:

📝 Archivos a modificar:
- app.js: Agregar función de validación (líneas 45-60)
- styles.css: Actualizar colores del tema (líneas 12-25)

📝 Archivos a crear:
- utils.js: Nueva librería de utilidades

¿Deseas que proceda con estos cambios?
```

## Información del Proyecto

- **Nombre**: Sistema de Monitoreo de Obra - Vivienda Unifamiliar
- **Propietario**: Abel Rios y Alba Velazquez
- **Ubicación**: Condominio Costa Del Lago - Hernandarias
- **Tecnologías**: HTML, CSS, JavaScript (Vanilla)
- **Arquitecto**: Arq. Eduardo Melgarejo

## Estructura del Proyecto

```
/Prueba
├── index.html          # Página principal del aplicativo
├── styles.css          # Estilos y diseño responsive
├── app.js              # Lógica y datos de la obra
├── Claude.md           # Este archivo (instrucciones para Claude)
└── Obra Abel Rios CDL - Certificado de Obra N° 05 2025-12-29 (1).pdf
```

## Notas Adicionales

- Este proyecto es un aplicativo de monitoreo de construcción
- Los datos provienen del certificado de obra N° 05
- El presupuesto total es de ₲1.040.000.000
- Avance actual: 22.85%
- Siempre mantener la integridad de los datos financieros
- Respetar el formato de moneda paraguaya (Guaraníes)

---

**Última actualización**: 2026-01-21
