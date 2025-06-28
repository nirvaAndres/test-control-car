# 🚗 Angular Demo – Propuesta de Mejora para Flujo de Cotización en Taller Automotriz

> **Versión Angular CLI**: `20.1.0-next.3`  
> ⚠️ Esta versión corresponde a una *release candidate* no estable. Se ha utilizado intencionalmente dado que fue parte del requerimiento inicial, aunque no es recomendable para entornos productivos en este momento.

---

## 🧩 Propósito del Proyecto

Este demo tiene como objetivo ilustrar una propuesta de mejora para el flujo actual de cotización de mantención o reparación de vehículos en una plataforma existente. Surge como respuesta a una solicitud de análisis sobre la experiencia del usuario y la arquitectura funcional de un sistema previamente observado en un video suministrado.

---

## 🧠 Observaciones del Sistema Actual

Durante el análisis del video, se identificaron los siguientes puntos críticos:

- Uso excesivo del **chat** como eje central de múltiples funcionalidades (cotización, agendamiento, manejo de stock, etc.), lo que genera un producto difícil de usar, mantener y escalar.
- El **chat permite conversaciones internas entre colegas que son visibles por el cliente**, lo que representa una falla de experiencia y privacidad.
- El sistema presenta una arquitectura fuertemente acoplada, lo cual puede derivar en un producto monolítico, poco predecible y con una curva de aprendizaje alta para nuevos usuarios.

---

## ✅ Recomendaciones Generales

1. **Definir el producto claramente**:  
   Determinar si se busca crear un **chat**, una **plataforma web de cotizaciones**, una **PWA**, o una combinación estructurada de estos.

2. **Arquitectura Front-End**:
   - Adoptar un enfoque **modular**, separando las funcionalidades en módulos independientes.
   - Evaluar la implementación de **Micro Frontends** para facilitar la escalabilidad y mantenibilidad.

3. **Arquitectura Back-End**:
   - Emplear **microservicios** o **Backends For Frontends (BFF)** para desacoplar responsabilidades y reducir la complejidad.

---

## 🧪 Qué se implementó en este demo

Este demo es una prueba conceptual centrada en segmentar funcionalidades en **secciones modulares**, con el objetivo de facilitar el mantenimiento y los ciclos de despliegue.

### Flujo propuesto para cotización de reparación:

1. **Solicitud de cotización**
2. **Cotización pendiente de aprobación**
3. **Cotización aprobada e ingreso del vehículo al taller**
4. **Gestión de inventario o stock** (en módulo independiente)

> **Nota**: En este prototipo, solo se crearon componentes, pero la intención es evolucionarlos hacia módulos funcionales y aislables.

### Características adicionales:

- Soporte para múltiples talleres, cada uno especializado en distintos tipos de vehículos o reparaciones.
- Módulo separado para comunicación ATC (**Atención al Cliente**) mediante un chat validado por roles y áreas.

---

## 📉 Análisis Crítico de Interfaz (Anexo 1)

### Errores identificados:

- El **usuario cliente** tiene acceso a **conversaciones internas** que no le corresponden, lo cual compromete la privacidad y genera confusión.

### Propuesta de mejora:

- Separar la aplicación en **dos módulos de Angular distintos**:
  - Uno para **áreas internas** (gestión, mecánicos, etc.)
  - Otro exclusivo para **ATC y comunicación con clientes**, con validación adecuada según roles y permisos.

---

## 📱 Consideraciones finales

- Este demo no contempla versiones móviles debido a limitaciones de tiempo.
- La intención fue establecer una base de exploración modular que pueda escalar en futuras fases de desarrollo.

---

## 🛠️ Instalación y ejecución

```bash
npm install
ng serve
