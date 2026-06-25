# 🎯 GUÍA DE ESTUDIO COMPLETA — EGEL Plus ISOFT
### Para obtener nivel **SOBRESALIENTE** · Basada 100% en los materiales oficiales del examen

> **¿Qué es el EGEL Plus ISOFT?**
> 203 reactivos totales · 8 horas (2 sesiones de 4 hrs) · Opción múltiple de 3 opciones
> **143 reactivos disciplinares** + **60 reactivos de Lenguaje y Comunicación**
> Solo hay 3 niveles: Aún no satisfactorio · Satisfactorio · **Sobresaliente** ← tu meta

---

## 📊 ESTRUCTURA EXACTA DEL EXAMEN

| Área | Subáreas | Reactivos |
|------|----------|-----------|
| **Área 1** — Análisis de Sistemas de Software | 3 subáreas | ~31 reactivos |
| **Área 2** — Diseño de Sistemas de Software | 4 subáreas | ~38 reactivos |
| **Área 3** — Desarrollo de Sistemas de Software | 4 subáreas | ~37 reactivos |
| **Área 4** — Gestión de Proyectos de Software | 3 subáreas | ~37 reactivos |
| **Área 5** — Comprensión Lectora | — | ~30 reactivos |
| **Área 6** — Redacción Indirecta | — | ~30 reactivos |

> **Nota:** 15% son reactivos piloto (no cuentan para tu calificación). No los puedes identificar.

---
---

# ÁREA 1 — ANÁLISIS DE SISTEMAS DE SOFTWARE
### (~31 reactivos en el examen)

---

## 1.1 TIPOS DE REQUERIMIENTOS ⭐⭐⭐ (12 reactivos — Alta prioridad)

### 🔑 Distinción FUNDAMENTAL que siempre aparece en examen

| Tipo | Definición | Ejemplo |
|------|-----------|---------|
| **Funcional** | Describe **QUÉ** hace el sistema (comportamiento) | "El sistema debe generar reportes mensuales de inventario" |
| **No Funcional** | Describe **CÓMO** lo hace (restricciones de calidad) | "El sistema debe procesar 1,000 transacciones por segundo" |
| **De Dominio** | Restricciones propias del campo o industria | "El sistema debe cumplir la norma NOM-151 de contabilidad" |
| **De Interfaz** | Cómo el sistema interactúa con otros sistemas | "El sistema debe integrarse con SAP vía REST API" |

### 📌 Clasificación de Requerimientos NO Funcionales

| Categoría | Pregunta que responde | Ejemplo clave |
|-----------|----------------------|---------------|
| **Rendimiento** | ¿Qué tan rápido? ¿Cuántas transacciones? | "1,000 TPS, respuesta < 2 segundos" |
| **Disponibilidad** | ¿Qué tan seguido está disponible? | "99.9% del tiempo" |
| **Seguridad** | ¿Cómo protege datos e información? | "Cifrado AES-256, autenticación 2FA" |
| **Portabilidad** | ¿Funciona en distintos sistemas operativos? | "Debe correr en Windows y Linux" |
| **Mantenibilidad** | ¿Qué tan fácil es modificarlo? | "Corrección de bugs < 4 horas" |
| **Usabilidad** | ¿Qué tan fácil es de usar? | "Usuario nuevo completa tarea en < 5 min" |
| **Escalabilidad** | ¿Puede crecer con la demanda? | "Hasta 10,000 usuarios simultáneos" |
| **Fiabilidad** | ¿Qué tan confiable es? | "MTBF > 1,000 horas" |

> **Truco de examen:** Porcentaje de tiempo / velocidad → **disponibilidad/rendimiento**. Sistemas operativos → **portabilidad**. Protección de datos → **seguridad**.

### ⚠️ Características de un BUEN requerimiento (IEEE 830)

- **Verificable** ← aparece mucho en examen. Si no se puede medir, no es válido.
- **No ambiguo** — una sola interpretación posible
- **Completo** — no falta información
- **Consistente** — no contradice a otros
- **Priorizable** — tiene nivel de importancia asignado
- **Rastreable** — puede vincularse a su origen e implementación

> **Reactivo trampa:** "Los colores de la interfaz deben ser agradables" → **MAL requerimiento** porque es subjetivo y **no verificable**.

---

## 1.2 TÉCNICAS DE OBTENCIÓN, PRIORIZACIÓN Y VALIDACIÓN (9 reactivos)

### Técnicas de Elicitación (Obtención)

| Técnica | Cuándo usarla | Ventaja clave |
|---------|--------------|---------------|
| **Entrevista** | Stakeholders específicos | Información profunda y directa |
| **Cuestionario** | Muchos usuarios dispersos | Eficiente para grupos grandes |
| **Observación** | Usuarios que no saben expresarse | Captura el proceso real de trabajo |
| **Prototipado** | Usuarios que no saben qué quieren | Valida necesidades visualmente |
| **Tormenta de Ideas** | Equipo creativo | Generación rápida de ideas |
| **Taller JAD/Workshop** | Múltiples stakeholders en conflicto | Consenso rápido |
| **Análisis de documentos** | Sistema existente a reemplazar | Documentación base disponible |

> **Regla de oro:** "Usuarios no saben expresar sus necesidades" → **Prototipado** u **Observación**.

### Técnicas de Priorización

| Técnica | Descripción |
|---------|------------|
| **MoSCoW** | **M**ust have / **S**hould have / **C**ould have / **W**on't have |
| **100 puntos (Dot Voting)** | Stakeholders reparten 100 puntos entre requerimientos |
| **Análisis Kano** | Clasifica en: básicos, de rendimiento y deleitadores |

### Técnicas de Validación

| Técnica | Descripción |
|---------|------------|
| **Inspección** | Revisión formal por grupo de expertos y stakeholders |
| **Revisión técnica** | Revisión por pares técnicos |
| **Prototipado de validación** | Construir prototipo para verificar el requerimiento |
| **Pruebas de aceptación** | Probar que el sistema satisface el requerimiento |

---

## 1.3 DOCUMENTACIÓN DE REQUERIMIENTOS (10 reactivos)

### Diagramas UML más evaluados

#### Diagrama de Casos de Uso

| Elemento | Símbolo | Descripción |
|----------|---------|-------------|
| **Actor** | Figura de palito | Entidad externa que interactúa con el sistema |
| **Caso de Uso** | Elipse | Función del sistema |
| **`<<include>>`** | Flecha punteada | El caso base **siempre** incluye al otro (obligatorio) |
| **`<<extend>>`** | Flecha punteada | Comportamiento **opcional** bajo ciertas condiciones |
| **Generalización** | Flecha sólida con triángulo | Herencia entre actores o casos de uso |

> **Truco infalible:** `<<include>>` = **siempre ocurre** / `<<extend>>` = **a veces ocurre**.

#### Documentación de un Caso de Uso

| Sección | Descripción |
|---------|-------------|
| **Precondición** | Estado del sistema **ANTES** de que inicie el caso de uso |
| **Postcondición** | Estado del sistema **DESPUÉS** de completarse |
| **Flujo principal** | Pasos normales (happy path) |
| **Flujo alterno** | Variaciones o excepciones |

> **Reactivo frecuente:** "Estado del sistema ANTES de que inicie" → **Precondición**.

#### Diagrama de Clases

| Relación | Símbolo | Significado |
|----------|---------|-------------|
| **Asociación** | Línea sólida | Relación general |
| **Agregación** | Rombo **vacío** ◇ | "Tiene un" — la parte puede existir sin el todo |
| **Composición** | Rombo **relleno** ◆ | "Está formado por" — la parte **no puede existir** sin el todo |
| **Herencia** | Flecha sólida con triángulo | "Es un" — hereda de la clase padre |
| **Dependencia** | Línea punteada con flecha | Usa temporalmente a otra clase |

> **Trampa de examen:** Composición = **Rombo RELLENO** (negro). Agregación = **Rombo VACÍO** (blanco).

#### Otros Diagramas UML

| Diagrama | Cuándo usarlo en el examen |
|----------|--------------------------|
| **Secuencia** | Interacciones entre objetos en el tiempo. Las líneas punteadas verticales = **líneas de vida** |
| **Máquina de Estados** | Ciclo de vida de un objeto (Creado → Pagado → Enviado). Si menciona "estados" o "transiciones" |
| **Actividades** | Flujo de trabajo con decisiones y flujos paralelos. Si menciona "proceso de negocio complejo" |

### Otros Documentos de Documentación

| Documento | Propósito |
|-----------|-----------|
| **SRS / IEEE 830** | Documento formal de especificación de requerimientos |
| **Diccionario de datos** | Define el significado de cada dato en el sistema |
| **Matriz de trazabilidad** | Vincula requerimientos con origen, diseño, código y pruebas |
| **Historia de Usuario** | "Como [rol], quiero [acción] para [beneficio]" — metodologías ágiles |

> **Reactivo frecuente:** "Herramienta para rastrear un requerimiento desde su origen hasta implementación" → **Matriz de Trazabilidad**.

### Pilares de la Orientación a Objetos

| Concepto | Definición clave |
|----------|-----------------|
| **Abstracción** | Modelar solo lo relevante, ignorar detalles innecesarios |
| **Encapsulamiento** | Ocultar los detalles internos (ocultamiento de información) |
| **Herencia** | La clase hija adquiere atributos y métodos de la clase padre |
| **Polimorfismo** | Mismo método, distintos comportamientos según el objeto |

> "El principio de Ocultamiento de información está relacionado con" → **Encapsulamiento**.

---
---

# ÁREA 2 — DISEÑO DE SISTEMAS DE SOFTWARE
### (~38 reactivos en el examen)

---

## 2.1 COHESIÓN Y ACOPLAMIENTO ⭐⭐⭐

| Concepto | Meta | Regla |
|----------|------|-------|
| **Cohesión** | **Alta** (elementos del módulo hacen una sola cosa) | Cuanto mayor, mejor |
| **Acoplamiento** | **Bajo** (módulos independientes entre sí) | Cuanto menor, mejor |

### Tipos de Cohesión (de peor a mejor)

| Tipo | Descripción | Calidad |
|------|------------|---------|
| Casual | Elementos agrupados por azar | ❌ Peor |
| Lógica | Realizan funciones similares | ❌ Mala |
| Temporal | Se ejecutan al mismo tiempo | ❌ Mala |
| Procedimental | Siguen una secuencia de control | ⚠️ Media |
| **Comunicacional** | Operan sobre los **mismos datos** | ⚠️ Media-alta |
| **Secuencial** | La salida de uno es la entrada del siguiente | ✅ Alta |
| **Funcional** | Todos contribuyen a una sola función | ✅✅ Mejor |

> **Reactivo clásico:** "La salida de un elemento sirve como entrada a otro..." → **Cohesión Secuencial**.

### Tipos de Acoplamiento (de peor a mejor)

| Tipo | Descripción | Calidad |
|------|------------|---------|
| Por contenido | Un módulo modifica el interior de otro | ❌ Peor |
| Común | Comparten variables globales | ❌ Mala |
| Externo | Dependen de dispositivo/formato externo | ❌ Mala |
| Control | Un módulo controla la lógica de otro | ⚠️ Media |
| Estampado | Comparten una estructura de datos completa | ⚠️ Media |
| **Datos** | Solo comparten parámetros simples necesarios | ✅ Mejor |

---

## 2.2 PRINCIPIOS SOLID

| Letra | Principio | En una frase |
|-------|----------|--------------|
| **S** | Single Responsibility | Una clase = un solo propósito |
| **O** | Open/Closed | Abierto a extensión, cerrado a modificación |
| **L** | Liskov Substitution | Subclase puede reemplazar a su superclase sin romper el sistema |
| **I** | Interface Segregation | Muchas interfaces específicas > una general |
| **D** | Dependency Inversion | Depender de abstracciones, no de implementaciones concretas |

---

## 2.3 PATRONES DE DISEÑO GOF ⭐⭐⭐

### Patrones Creacionales

| Patrón | Para qué sirve | Clave de reconocimiento |
|--------|---------------|------------------------|
| **Singleton** | Una sola instancia de la clase | "Solo debe existir un objeto de este tipo" |
| **Factory Method** | Crear objetos sin especificar la clase exacta | "Delegas la creación a subclases" |
| **Abstract Factory** | Familias de objetos relacionados | "Familia de productos compatibles" |
| **Builder** | Construir objetos complejos paso a paso | "Construcción separada de la representación" |
| **Prototype** | Clonar objetos existentes | "Crear objeto copiando otro" |

### Patrones Estructurales

| Patrón | Para qué sirve | Clave de reconocimiento |
|--------|---------------|------------------------|
| **Adapter** | Hace compatibles interfaces incompatibles | "Conectar dos sistemas incompatibles" |
| **Decorator** | Agrega responsabilidades dinámicamente | "Envolver un objeto para añadirle funcionalidad" |
| **Facade** | Interfaz simplificada a sistema complejo | "Simplificar una interfaz compleja" |
| **Composite** | Estructuras en árbol (parte-todo) | "Tratar objetos individuales y compuestos igual" |
| **Proxy** | Controla el acceso a un objeto | "Intermediario o representante" |

### Patrones de Comportamiento

| Patrón | Para qué sirve | Clave de reconocimiento |
|--------|---------------|------------------------|
| **Observer** | Notificar a dependientes cuando cambia el estado | "Suscriptor/Editor — notificaciones automáticas" |
| **Strategy** | Algoritmos intercambiables en tiempo de ejecución | "Cambiar algoritmo en tiempo de ejecución" |
| **Command** | Encapsula una acción como objeto | "Deshacer/Rehacer — operaciones encoladas" |
| **Template Method** | Esqueleto de algoritmo en superclase | "Pasos fijos con variaciones en subclases" |
| **Iterator** | Acceder secuencialmente a una colección | "Recorrer colección sin exponer su estructura" |

---

## 2.4 ARQUITECTURA DE SOFTWARE ⭐⭐⭐

### Estilos Arquitectónicos

| Estilo                      | Descripción                            | Cuándo usarlo                                |
| --------------------------- | -------------------------------------- | -------------------------------------------- |
| **Capas**                   | Presentación → Negocio → Datos         | Aplicaciones empresariales                   |
| **Cliente-Servidor**        | Cliente solicita servicios al servidor | Aplicaciones web y de red                    |
| **MVC**                     | Model / View / Controller              | Aplicaciones web con interfaz de usuario     |
| **Microservicios**          | Servicios pequeños e independientes    | Alta escalabilidad, despliegue independiente |
| **SOA**                     | Servicios de negocio reutilizables     | Integración de sistemas empresariales        |
| **Pipe and Filter**         | Datos pasan por secuencia de filtros   | Compiladores, procesamiento de datos         |
| **Repositorio**             | Componentes comparten almacén central  | IDEs, compiladores, CAD                      |
| **Publicación-Suscripción** | Comunicación vía eventos               | Sistemas distribuidos, tiempo real           |

### Modelo 4+1 Vistas de Kruchten

| Vista | Qué muestra |
|-------|------------|
| **Lógica** | Estructura estática (clases, objetos) |
| **Desarrollo** | Organización del código (paquetes, módulos) |
| **Proceso** | Comportamiento dinámico (concurrencia) |
| **Física** | Despliegue en hardware (nodos, servidores) |
| **+1 Escenarios** | Casos de uso que integran las 4 vistas |

### Atributos de Calidad (ISO/IEC 25010)

| Atributo | Definición |
|----------|-----------|
| **Funcionalidad** | El software hace lo que debe hacer |
| **Rendimiento** | Uso eficiente de tiempo y recursos |
| **Confiabilidad** | Opera sin fallas bajo condiciones específicas |
| **Usabilidad** | Facilidad de uso para el usuario |
| **Seguridad** | Protege datos (confidencialidad, integridad, disponibilidad) |
| **Mantenibilidad** | Facilidad para modificar o mejorar |
| **Portabilidad** | Puede transferirse a distintos entornos |

---

## 2.5 DISEÑO DE INTERFACES (UX/UI) ⭐⭐

### 10 Heurísticas de Nielsen

1. Visibilidad del estado del sistema
2. Correspondencia entre sistema y mundo real
3. Control y libertad del usuario (deshacer/rehacer)
4. Consistencia y estándares
5. **Prevención de errores**
6. Reconocer antes que recordar
7. Flexibilidad y eficiencia de uso
8. Diseño estético y minimalista
9. Ayudar a recuperarse de errores
10. Ayuda y documentación

### Tipos de Prototipos

| Tipo | Descripción |
|------|------------|
| **Baja fidelidad (Low-fi)** | Bocetos en papel — para explorar ideas rápidamente |
| **Alta fidelidad (High-fi)** | Prototipo interactivo muy parecido al producto final |
| **Desechable** | Se construye para validar y luego se descarta |
| **Evolutivo** | Se refina iterativamente hasta convertirse en el producto |

---
---

# ÁREA 3 — DESARROLLO DE SISTEMAS DE SOFTWARE
### (~37 reactivos en el examen)

---

## 3.1 FUNDAMENTOS DE PROGRAMACIÓN ⭐⭐⭐

### Paradigmas de Programación

| Paradigma | Concepto base | Lenguajes |
|-----------|--------------|-----------|
| **Imperativo/Procedimental** | Secuencia de instrucciones | C, Pascal |
| **Orientado a Objetos** | Objetos con estado y comportamiento | Java, Python, C++ |
| **Funcional** | Funciones puras, inmutabilidad | Haskell, Lisp |
| **Lógico** | Hechos y reglas lógicas | Prolog |
| **Declarativo** | Describe el QUÉ, no el CÓMO | SQL, HTML |

### Tipos de Tipado

| Tipo | Descripción | Ejemplo |
|------|------------|---------|
| **Estático** | Tipos verificados en **tiempo de compilación** | Java, C, C++ |
| **Dinámico** | Tipos verificados en **tiempo de ejecución** | Python, JavaScript |
| **Fuerte** | No permite conversiones implícitas | Python, Java |
| **Débil** | Permite coerción implícita | JavaScript, PHP |

### Compilación vs. Interpretación

| Mecanismo | Descripción | Ejemplo |
|-----------|------------|---------|
| **Compilación** | Traduce **antes** de ejecutar | C, C++, Go |
| **Interpretación** | Traduce y ejecuta línea por línea | Python, Ruby |
| **JIT** | Compila en tiempo de ejecución | Java (JVM), C# (.NET) |

### Gestión de Memoria

| Concepto | Descripción |
|----------|------------|
| **Stack** | Variables locales — liberación automática (LIFO) |
| **Heap** | Objetos dinámicos — requiere GC o liberación manual |
| **Garbage Collector** | Libera memoria no usada automáticamente (Java, Python, C#) |
| **Memory Leak** | Memoria asignada que nunca se libera |

---

## 3.2 ESTRUCTURAS DE DATOS Y ALGORITMOS ⭐⭐⭐

### Estructuras de Datos

| Estructura | Característica clave | Acceso |
|-----------|---------------------|--------|
| **Arreglo** | Índice numérico, tamaño fijo | O(1) |
| **Lista enlazada** | Nodos con punteros, tamaño dinámico | O(n) |
| **Pila (Stack)** | **LIFO** — push/pop | O(1) |
| **Cola (Queue)** | **FIFO** — enqueue/dequeue | O(1) |
| **Árbol binario** | Máximo 2 hijos por nodo | O(log n) si balanceado |
| **Hash Table** | Acceso por clave con función hash | O(1) promedio |
| **Grafo** | Nodos y aristas (dirigido/no dirigido) | Varía |

### Complejidad Big-O

| Notación | Nombre | Ejemplo |
|----------|--------|---------|
| **O(1)** | Constante | Acceso a arreglo por índice |
| **O(log n)** | Logarítmica | Búsqueda binaria |
| **O(n)** | Lineal | Recorrido de lista |
| **O(n log n)** | Lineal-logarítmica | Merge Sort, Quick Sort |
| **O(n²)** | Cuadrática | Bubble Sort, Selection Sort |

### Algoritmos de Ordenamiento

| Algoritmo | Complejidad | Estable | Nota |
|-----------|------------|---------|------|
| **Bubble Sort** | O(n²) | Sí | El peor en práctica |
| **Insertion Sort** | O(n²) | Sí | Bueno para listas casi ordenadas |
| **Merge Sort** | O(n log n) | Sí | Divide y vencerás |
| **Quick Sort** | O(n log n) prom | No | El más usado en práctica |

---

## 3.3 PRUEBAS DE SOFTWARE ⭐⭐⭐ (TEMA CRÍTICO)

### Caja Negra vs. Caja Blanca

| Tipo | Descripción | Técnicas |
|------|------------|---------|
| **Caja Negra** | Solo entrada/salida, sin ver el código | Análisis de Valor Límite, Partición de Equivalencia, Tabla de decisión |
| **Caja Blanca** | Prueba la estructura interna | Prueba de ruta básica, Cobertura de sentencias, Complejidad ciclomática |
| **Caja Gris** | Combinación de ambas | — |

> **Regla:** Análisis de Valor Límite = **caja negra**. Ruta básica = **caja blanca**.

### Niveles de Prueba

| Nivel | Qué se prueba | Quién |
|-------|--------------|-------|
| **Unitarias** | Un módulo/función aislado | Desarrollador |
| **Integración** | Interacción entre módulos | Desarrollador/QA |
| **Sistema** | El sistema completo | QA |
| **Aceptación (UAT)** | Si cumple requisitos del cliente | Cliente/Usuario |

### Estrategias de Integración

| Estrategia | Descripción |
|-----------|------------|
| **Top-Down** | De módulos altos a bajos (usa **stubs**) |
| **Bottom-Up** | De módulos bajos a altos (usa **drivers**) |
| **Big-Bang** | Todo junto — más arriesgado |
| **Sandwich/Híbrido** | Combina Top-Down y Bottom-Up |

### Tipos de Prueba (por objetivo)

| Prueba | Descripción |
|--------|------------|
| **Regresión** | Verifica que cambios nuevos no rompan lo que ya funcionaba |
| **Rendimiento** | Evalúa velocidad y estabilidad bajo carga |
| **Estrés** | Lleva el sistema más allá de sus límites normales |
| **Seguridad** | El tester actúa como atacante que intenta **penetrar el sistema** |
| **Humo (Smoke Test)** | Verificación rápida de que lo básico funciona tras un build |

### Métricas de Software

| Métrica | Qué mide | Fórmula |
|---------|---------|---------|
| **Complejidad Ciclomática (McCabe)** | Complejidad del código | V(G) = P + 1 / V(G) = E - N + 2 |
| **KLOC** | Tamaño del código (miles de líneas) | — |
| **Puntos de Función (FP)** | Tamaño funcional del software | UFP = Σ(componentes × peso) |
| **MTBF** | Tiempo medio entre fallas | MTBF = MTTF + MTTR |
| **Densidad de defectos** | Defectos por KLOC | Defectos / KLOC |

> **Diferencia clave:** **Pruebas** = planificadas, para encontrar defectos. **Depuración** = reactiva, para corregir defectos ya encontrados.

---

## 3.4 BASES DE DATOS ⭐⭐⭐

### Conceptos Relacionales

| Concepto | Definición |
|----------|-----------|
| **Llave Primaria (PK)** | Identificador único de cada registro |
| **Llave Foránea (FK)** | Referencia a la PK de otra tabla |
| **1FN** | Atributos atómicos (sin grupos repetidos) |
| **2FN** | 1FN + sin dependencias parciales a la PK |
| **3FN** | 2FN + sin dependencias transitivas |

### Propiedades ACID

| Propiedad | Significado |
|-----------|------------|
| **A**tomicidad | La transacción es todo o nada |
| **C**onsistencia | La BD pasa de un estado válido a otro válido |
| **I**solamiento | Transacciones concurrentes no interfieren |
| **D**urabilidad | Cambios confirmados persisten aunque haya falla |

### Bases de Datos NoSQL

| Tipo | Descripción | Ejemplo |
|------|------------|---------|
| **Documento** | Almacena documentos JSON/BSON | MongoDB |
| **Clave-Valor** | Pares simples clave:valor | Redis |
| **Columnar** | Almacena datos por columnas | Cassandra |
| **Grafos** | Nodos y relaciones | Neo4j |

---
---

# ÁREA 4 — GESTIÓN DE PROYECTOS DE SOFTWARE
### (~37 reactivos en el examen)

---

## 4.1 GESTIÓN DEL TIEMPO ⭐⭐⭐

### Técnicas de Estimación

| Técnica | Descripción | Cuándo usarla |
|---------|------------|---------------|
| **Delphi (Juicio de expertos)** | Consenso anónimo de expertos | Sin datos históricos |
| **Analogía** | Basada en proyectos similares | Con datos históricos |
| **COCOMO** | Fórmulas basadas en tamaño (KLOC) | Se conoce el tamaño |
| **Planning Poker** | Estimación ágil con cartas | Equipos Scrum |
| **Story Points** | Estimación relativa de esfuerzo | Scrum, Kanban |
| **Top-Down** | Estimar el total y desglosar | Estimaciones iniciales rápidas |
| **Bottom-Up** | Estimar cada tarea y sumar | Mayor precisión |

### Herramientas de Planificación

| Herramienta | Para qué sirve |
|-------------|---------------|
| **Diagrama de Gantt** | Actividades en línea de tiempo (barras horizontales) |
| **PERT** | Red de actividades con tiempos optimista/probable/pesimista |
| **CPM (Ruta Crítica)** | Secuencia más larga — determina duración mínima del proyecto |
| **WBS (EDT)** | Descompone el proyecto en entregables y tareas |

### Compresión del Cronograma

| Técnica | Descripción | Consecuencia |
|---------|------------|-------------|
| **Fast Tracking** | Actividades en **paralelo** que normalmente son secuenciales | Aumenta riesgo |
| **Crashing** | Agregar más recursos para acelerar | Aumenta costos |

> **Diferencia clave:** Fast Tracking = **paralelizar**. Crashing = **más recursos**.

### Ruta Crítica

- Secuencia de actividades con **holgura = 0**
- Si una actividad de la ruta crítica se retrasa → el proyecto entero se retrasa
- **Holgura (Float)** = tiempo que puede retrasarse una actividad sin afectar la fecha fin

---

## 4.2 GESTIÓN DE COSTOS — EVM ⭐⭐⭐

### Variables del Earned Value Management

| Término | Siglas | Descripción |
|---------|--------|-------------|
| **Valor Planificado** | PV | Lo que se planeó completar (en $) a la fecha |
| **Valor Ganado** | EV | El valor del trabajo **realmente completado** (en $) |
| **Costo Real** | AC | Lo que realmente se gastó |
| **Presupuesto al Concluir** | BAC | El presupuesto total original del proyecto |

### Fórmulas EVM

| Indicador | Fórmula | Interpretación |
|-----------|---------|---------------|
| **CPI** | EV / AC | > 1 = bajo presupuesto · **< 1 = sobrepresupuesto** |
| **SPI** | EV / PV | > 1 = adelantado · **< 1 = retrasado** |
| **CV** | EV - AC | Negativo = sobrepresupuesto |
| **SV** | EV - PV | Negativo = retrasado |
| **EAC** | BAC / CPI | Estimado al Concluir el proyecto |
| **ETC** | EAC - AC | Estimado para Completar |

> **Ejemplo de examen:** EV = $60,000 · AC = $100,000 · BAC = $200,000
> - CPI = 60/100 = **0.6** → proyecto **sobrepresupuestado**
> - EAC = 200,000 / 0.6 = **$333,333** (costo final estimado)

### Ley de Brooks

> **"Añadir personal a un proyecto de software retrasado, lo retrasa más."**
> - Los nuevos miembros necesitan tiempo de capacitación
> - Los canales de comunicación crecen: **n(n-1)/2**

---

## 4.3 GESTIÓN DE RECURSOS HUMANOS ⭐⭐

### Matriz RACI

| Letra | Rol | Descripción |
|-------|-----|------------|
| **R** | Responsible | La persona que **hace** el trabajo |
| **A** | Accountable | La persona **responsable final** — aprueba (solo puede haber UNO) |
| **C** | Consulted | Se le consulta antes de decidir |
| **I** | Informed | Se le informa después de decidir |

> **Reactivo:** "En RACI, ¿qué significa la A?" → **Accountable** (el que aprueba, responsable final).

### Modelos de Motivación

| Modelo | Descripción clave |
|--------|-----------------|
| **Maslow** | Fisiológicas → Seguridad → Sociales → Estima → Autorrealización. Solo motivas con estima si las básicas están cubiertas |
| **Herzberg** | Factores **Higiénicos** (salario, condiciones) = evitan insatisfacción pero NO motivan. Factores **Motivadores** (logro, reconocimiento) = SÍ motivan |
| **McGregor X/Y** | **X** = personas perezosas, necesitan control. **Y** = personas responsables, buscan satisfacción |

---

## 4.4 METODOLOGÍAS DE DESARROLLO ⭐⭐⭐

### Metodologías Tradicionales

| Metodología | Características clave |
|-------------|----------------------|
| **Cascada** | Secuencial y lineal. Fases terminan antes de iniciar la siguiente. Requisitos fijos |
| **Modelo en V** | Cada fase de desarrollo tiene una fase de prueba correspondiente |
| **Incremental** | Se desarrolla por incrementos funcionales |
| **Espiral** | Combina cascada + prototipado. Énfasis en **gestión de riesgos** |
| **RUP** | Iterativo. Orientado a casos de uso. 4 fases: Inicio, Elaboración, Construcción, Transición |

### Manifiesto Ágil — 4 Valores

1. **Individuos e interacciones** sobre procesos y herramientas
2. **Software funcionando** sobre documentación exhaustiva
3. **Colaboración con el cliente** sobre negociación de contratos
4. **Responder al cambio** sobre seguir un plan

### SCRUM (el más evaluado) ⭐⭐⭐⭐⭐

#### Roles

| Rol | Responsabilidad |
|-----|----------------|
| **Product Owner** | Maximizar el valor. Gestiona y prioriza el Product Backlog |
| **Scrum Master** | Facilita el proceso. Elimina impedimentos |
| **Development Team** | Equipo auto-organizado (3-9 personas) que desarrolla el producto |

#### Eventos

| Evento | Duración | Propósito |
|--------|----------|-----------|
| **Sprint** | 1-4 semanas | Ciclo que produce un incremento |
| **Sprint Planning** | Max 8 horas | Define qué y cómo se hará en el Sprint |
| **Daily Scrum** | 15 minutos | Sincronización diaria |
| **Sprint Review** | Max 4 horas | Muestra el **producto** funcionando al cliente |
| **Sprint Retrospectiva** | Max 3 horas | El equipo mejora su **proceso** |

#### Artefactos

| Artefacto | Descripción |
|-----------|------------|
| **Product Backlog** | Lista priorizada de **todo** lo que podría necesitarse |
| **Sprint Backlog** | Subconjunto seleccionado para el Sprint actual |
| **Incremento** | Producto funcional entregable al final del Sprint |

> **Diferencia clave:** Sprint Review = **producto** (para el cliente). Sprint Retrospectiva = **proceso** (para el equipo).

### XP (Extreme Programming)

- **Pair Programming** — dos programadores, una computadora
- **TDD** — escribe la prueba **antes** que el código
- **Refactoring** — mejora el código sin cambiar su comportamiento
- **Integración Continua** — integrar y probar varias veces al día
- **Cliente en el lugar** — el cliente trabaja junto al equipo

### Kanban

- Tablero visual: **Por hacer / En progreso / Hecho**
- **Límite de WIP** — restringe tareas en progreso simultáneamente
- No tiene roles ni sprints definidos (diferencia con Scrum)

### Cuadro Comparativo de Metodologías

| Situación | Metodología recomendada |
|-----------|------------------------|
| Requisitos claros y estables | Cascada |
| Requisitos vagos o cambiantes | Ágil (Scrum, XP) |
| Alto riesgo, sistema crítico | Espiral |
| Gran empresa, procesos formales | RUP |
| Flujo continuo sin entregas fijas | Kanban |

---

## 4.5 GESTIÓN DE RIESGOS ⭐⭐

### Proceso

1. **Identificación** — Lluvia de ideas, análisis causa raíz, revisión de proyectos previos
2. **Análisis Cualitativo** — Matriz probabilidad × impacto
3. **Análisis Cuantitativo** — Impacto numérico (Montecarlo, árboles de decisión)
4. **Planificación de respuestas** — Evitar, Transferir, Mitigar, Aceptar
5. **Monitoreo y control** — Seguimiento continuo

### Estrategias de Respuesta

| Estrategia | Descripción |
|-----------|------------|
| **Evitar** | Cambiar el plan para eliminar el riesgo |
| **Transferir** | Contratar seguros u outsourcing |
| **Mitigar** | Reducir probabilidad o impacto |
| **Aceptar** | Asumir el riesgo (para riesgos de bajo impacto) |

---

## 4.6 CALIDAD DEL SOFTWARE ⭐⭐⭐

### QA vs. QC

| Concepto | Descripción | Enfoque |
|----------|------------|---------|
| **QA** | Actividades **preventivas** — asegurar que los **procesos** sean correctos | Procesos |
| **QC** | Actividades **detectivas** — verificar que el **producto** cumpla especificaciones | Producto |

> **Regla del examen:** QA = **procesos** (previene). QC = **producto** (detecta).

### Normas y Modelos de Calidad

| Norma/Modelo | Enfoque |
|--------------|---------|
| **ISO 9001:2015** | Gestión de calidad organizacional — mejora continua |
| **ISO/IEC 25010 (SQuaRE)** | Calidad del **producto de software** (8 características) |
| **CMMI** | Madurez de procesos (niveles 1 al 5) |

### Niveles CMMI

| Nivel | Nombre | Descripción |
|-------|--------|-------------|
| 1 | **Inicial** | Procesos caóticos, sin definir |
| 2 | **Gestionado** | Procesos básicos, reactivos |
| 3 | **Definido** | Procesos estándar y documentados |
| 4 | **Cuantitativamente gestionado** | Control estadístico |
| 5 | **En optimización** | Mejora continua e innovación |

### Ciclo PHVA / PDCA (Deming)

**Planear → Hacer → Verificar → Actuar**

---
---

# ÁREA 5 Y 6 — LENGUAJE Y COMUNICACIÓN
### (60 reactivos — ¡NO los ignores, son puntos seguros!)

---

## 5. COMPRENSIÓN LECTORA

### Lo que evalúa

- **Idea principal** de un texto
- **Inferencias** — lo que se deduce pero no está dicho explícitamente
- **Propósito del autor** — ¿para qué escribió el texto?
- **Relaciones entre ideas** — causa-efecto, comparación, contraste
- **Significado de palabras en contexto**

### Estrategia

1. Lee el texto completo primero
2. Identifica la idea central de cada párrafo
3. Para inferencias: la respuesta está **implícita**, no copiada textualmente
4. Para vocabulario: reemplaza la palabra por cada opción y elige la que mantiene el sentido
5. Elimina las opciones claramente incorrectas

---

## 6. REDACCIÓN INDIRECTA

### Géneros Textuales (Dimensión Comunicativa)

| Ámbito | Géneros |
|--------|---------|
| **Estudio** | Artículo de divulgación científica, Protocolo de investigación, Reseña |
| **Participación Social** | Editorial de periódico, Convocatoria, Carta de exposición de motivos |

**Clave:** cada género tiene un **registro** (formal/informal) y estructura propios. El protocolo de investigación y el artículo científico usan registro **formal e impersonal**.

### Concordancia (Dimensión Gramatical)

- Sujeto con 2 elementos de **diferente género** → pronombre/adjetivo en **masculino plural**
  - ✅ "La chamarra y el pantalón **los** compraron" (no "las")
  - ✅ "El vestido y las medias son **negros**" (no "negras")
- Concordancia verbal: sujeto y verbo deben coincidir en persona y número

### Cohesión Textual

| Tipo | Descripción |
|------|------------|
| **Gramatical** | Pronombres que refieren al mismo elemento (correferencia) |
| **Léxico-semántica** | Sinónimos y antónimos usados para cohesión |
| **Textual** | Marcadores: sin embargo, por lo tanto, en conclusión, además... |

### Tilde Diacrítica (Ortografía)

| Con tilde | Sin tilde |
|-----------|----------|
| **mí** (pronombre personal) | **mi** (adjetivo posesivo: mi casa) |
| **tú** (pronombre personal) | **tu** (adjetivo posesivo: tu libro) |
| **él** (pronombre personal) | **el** (artículo: el perro) |
| **sé** (verbo saber/ser) | **se** (pronombre reflexivo) |
| **más** (adverbio de cantidad) | **mas** (conjunción = pero) |
| **sí** (afirmación / pronombre) | **si** (condicional: si llueve...) |
| **dé** (verbo dar) | **de** (preposición) |
| **té** (sustancia: bebida) | **te** (pronombre: te digo) |

### Estrategia para Redacción Indirecta

1. Identifica el género textual y su registro (formal vs. coloquial)
2. Para concordancia: ubica el sujeto completo antes de elegir pronombre/adjetivo
3. Para ortografía: aplica la regla de tilde diacrítica
4. Elimina opciones con errores evidentes primero

---
---

# 📐 FÓRMULAS ESENCIALES

| Fórmula | Nombre | Variables |
|---------|--------|-----------|
| **V(G) = P + 1** | Complejidad Ciclomática | P = puntos de decisión (if, while, for, case) |
| **V(G) = E - N + 2** | Complejidad Ciclomática | E = aristas, N = nodos del grafo |
| **CPI = EV / AC** | Índice de Desempeño de Costo | < 1 = sobrepresupuesto |
| **SPI = EV / PV** | Índice de Desempeño de Cronograma | < 1 = retrasado |
| **CV = EV - AC** | Variación de Costo | Negativo = sobrepresupuesto |
| **SV = EV - PV** | Variación de Cronograma | Negativo = retrasado |
| **EAC = BAC / CPI** | Estimado al Concluir | — |
| **ETC = EAC - AC** | Estimado para Completar | — |
| **Canales = n(n-1)/2** | Canales de comunicación | n = número de personas |
| **PERT = (O + 4M + P) / 6** | Tiempo estimado PERT | O=optimista, M=más probable, P=pesimista |

---
---

# 🎯 TOP 10 TEMAS MÁS FRECUENTES EN EL EXAMEN

| # | Tema | Área | Prioridad |
|---|------|------|-----------|
| 1 | Funcional vs. No Funcional (tipos de requerimientos) | Área 1 | ⭐⭐⭐⭐⭐ |
| 2 | `<<include>>` vs. `<<extend>>` en Casos de Uso | Área 1 | ⭐⭐⭐⭐⭐ |
| 3 | Tipos de Cohesión (secuencial, funcional, comunicacional) | Área 2 | ⭐⭐⭐⭐⭐ |
| 4 | EVM: CPI, SPI, EAC — cálculo e interpretación | Área 4 | ⭐⭐⭐⭐⭐ |
| 5 | Scrum: roles, eventos, artefactos | Área 4 | ⭐⭐⭐⭐⭐ |
| 6 | Caja Negra vs. Caja Blanca — técnicas de cada una | Área 3 | ⭐⭐⭐⭐ |
| 7 | Matriz RACI — significado de cada letra, especialmente A | Área 4 | ⭐⭐⭐⭐ |
| 8 | Composición (rombo relleno) vs. Agregación (rombo vacío) | Área 2 | ⭐⭐⭐⭐ |
| 9 | QA vs. QC — diferencia entre proceso y producto | Área 4 | ⭐⭐⭐⭐ |
| 10 | Tilde diacrítica en monosílabos | Área 6 | ⭐⭐⭐⭐ |

---
---

# 📝 BANCO DE REACTIVOS CON RESPUESTAS JUSTIFICADAS

## Área 1 — Análisis

**1.** Los elementos del módulo se agrupan porque la salida de uno es la entrada del siguiente:
- a) Cohesión funcional
- **b) Cohesión secuencial ✅**
- c) Cohesión comunicacional
- d) Cohesión procedimental

*La cohesión secuencial se define exactamente así: salida de uno = entrada del siguiente.*

---

**2.** "El sistema debe estar disponible el 99.9% del tiempo." ¿Qué tipo de requerimiento es?
- a) Mantenibilidad
- **b) Disponibilidad ✅**
- c) Escalabilidad
- d) Portabilidad

*El porcentaje de tiempo operativo es el indicador clásico de disponibilidad.*

---

**3.** En UML, ¿qué símbolo representa composición (la parte no puede existir sin el todo)?
- a) Rombo vacío
- **b) Rombo relleno (negro) ✅**
- c) Flecha punteada
- d) Línea sólida

*Composición = Rombo RELLENO. Agregación = Rombo VACÍO.*

---

**4.** ¿Qué relación en Casos de Uso representa un comportamiento OPCIONAL bajo ciertas condiciones?
- a) `<<include>>`
- **b) `<<extend>>` ✅**
- c) Generalización
- d) Asociación simple

*<<extend>> = opcional y condicional. <<include>> = siempre ocurre.*

---

**5.** "Los colores de la interfaz deben ser agradables" es un mal requerimiento porque:
- a) Es muy largo
- b) No es funcional
- **c) Es subjetivo y no verificable ✅**
- d) No especifica el lenguaje

*Un buen requerimiento debe ser VERIFICABLE. "Agradable" no tiene criterio de medición objetivo.*

---

**6.** ¿Qué herramienta se usa para rastrear un requerimiento desde su origen hasta su implementación y prueba?
- a) Diccionario de datos
- **b) Matriz de trazabilidad ✅**
- c) Diagrama de Gantt
- d) Modelo Entidad-Relación

---

**7.** Un sistema debe ejecutarse en Windows y Linux. ¿A qué requerimiento no funcional corresponde?
- a) Interoperabilidad
- **b) Portabilidad ✅**
- c) Fiabilidad
- d) Eficiencia

---

## Área 3 — Desarrollo

**8.** ¿Cuál de las siguientes es una prueba de CAJA NEGRA?
- a) Prueba de ruta básica
- **b) Análisis del valor límite ✅**
- c) Cobertura de sentencias
- d) Complejidad ciclomática

*Análisis de valor límite = caja negra. Ruta básica = caja blanca.*

---

**9.** Durante las pruebas de seguridad, el tester actúa como:
- a) Un auditor externo
- **b) Una persona que intenta penetrar el sistema ✅**
- c) Un desarrollador
- d) El cliente

---

**10.** La depuración de software se puede planificar por adelantado. Esto es:
- a) Cierto
- **b) Falso ✅**
- c) Depende del proyecto

*Las PRUEBAS se planifican. La DEPURACIÓN es reactiva — ocurre cuando se encuentra un defecto.*

---

**11.** ¿Cuál NO se usa para medir el tamaño del software?
- a) KLOC
- b) Puntos de Función
- **c) Tamaño del módulo ✅**
- d) Ninguno de los mencionados

---

## Área 4 — Gestión

**12.** Si EV = $60,000 y AC = $100,000, el CPI es:
- a) 1.67
- **b) 0.6 ✅**
- c) 0.4
- d) 1.0

*CPI = 60,000 / 100,000 = 0.6. Menor a 1 → sobrepresupuestado.*

---

**13.** ¿Qué evento de Scrum permite al equipo analizar el PROCESO y proponer mejoras?
- a) Sprint Review
- **b) Sprint Retrospectiva ✅**
- c) Sprint Planning
- d) Daily Scrum

*Sprint Review = revisar el PRODUCTO con el cliente. Sprint Retrospectiva = mejorar el PROCESO del equipo.*

---

**14.** En la Matriz RACI, ¿qué significa la "A"?
- a) Autor del código
- **b) Accountable (Responsable final / el que aprueba) ✅**
- c) Asistente
- d) Analista

---

**15.** La técnica de compresión del cronograma que consiste en realizar actividades en paralelo es:
- a) Crashing
- **b) Fast Tracking ✅**
- c) Nivelación de recursos
- d) Outsourcing

*Fast Tracking = paralelizar. Crashing = más recursos.*

---

**16.** ¿Cuál es la diferencia entre QA y QC?
- a) Son exactamente lo mismo
- **b) QA se enfoca en los procesos; QC se enfoca en el producto final (detección de defectos) ✅**
- c) QA es para el cliente y QC es para los programadores
- d) QA se hace al final y QC al principio

---

**17.** ¿Qué es el Product Backlog en Scrum?
- **a) Una lista priorizada de todo lo que podría ser necesario en el producto ✅**
- b) El diagrama de clases del sistema
- c) El manual de instalación
- d) La lista de errores reportados

---

**18.** "Añadir personal a un proyecto retrasado lo retrasa más." Esto corresponde a:
- a) La Ley de Parkinson
- **b) La Ley de Brooks ✅**
- c) El Triángulo de Hierro
- d) El principio de Murphy

---

## Área 6 — Redacción Indirecta

**19.** ¿Cuál de las siguientes oraciones tiene concordancia correcta?
- **a) "La chamarra y el pantalón los compraron en una tienda deportiva" ✅**
- b) "El zapato y la blusa blanca se dañaron y las tuvieron que reparar"
- c) "El vestido y las medias son negras; lucen elegantes"

*Sujeto con dos elementos de diferente género → pronombre en masculino plural.*

---

**20.** ¿Cuál de las siguientes opciones tiene la acentuación correcta?
- a) "Traje mi computadora para trabajar en tú casa"
- **b) "En mi humilde opinión, no sé si estás listo para dirigir el equipo" ✅**
- c) "Mí jefe se olvidó de el"

*"mi" = adjetivo posesivo (sin tilde). "sé" = verbo saber (con tilde). "él" = pronombre (con tilde).*

---
---

# ⏱️ PLAN DE ESTUDIO — 4 SEMANAS PARA SOBRESALIENTE

## Semana 1 — Análisis y Diseño (Áreas 1 y 2)
- Días 1-2: Tipos de requerimientos, características IEEE 830, elicitación y validación
- Días 3-4: UML — Casos de uso, Clases, Secuencia, Máquina de Estados
- Días 5-6: Cohesión, Acoplamiento, Principios SOLID, Patrones GOF
- Día 7: Arquitectura (estilos, 4+1, ISO 25010) + reactivos de práctica

## Semana 2 — Desarrollo (Área 3)
- Días 1-2: Paradigmas, tipado, compilación vs. interpretación, gestión de memoria
- Días 3-4: Estructuras de datos, algoritmos, Big-O
- Días 5-6: Pruebas (caja negra, blanca, niveles, estrategias de integración)
- Día 7: Bases de datos (SQL, ACID, NoSQL, normalización) + reactivos

## Semana 3 — Gestión (Área 4)
- Días 1-2: EVM completo — practica cálculos de CPI, SPI, EAC con ejemplos
- Días 3-4: Scrum completo (roles, eventos, artefactos) + XP + Kanban
- Días 5-6: RACI, riesgos, calidad (QA/QC, ISO, CMMI, PHVA)
- Día 7: Estimación (COCOMO, Delphi, Story Points) + Ley de Brooks + reactivos

## Semana 4 — Lenguaje, Simulacros y Refuerzo
- Días 1-2: Comprensión lectora — practica con textos variados
- Días 3-4: Redacción indirecta — concordancia, cohesión, tilde diacrítica
- Días 5-6: Simulacro completo (203 reactivos, 8 horas cronometradas)
- Día 7: Revisión de errores del simulacro + refuerzo de temas débiles

---

# 💡 CONSEJOS PARA EL DÍA DEL EXAMEN

1. **Lee TODAS las opciones** antes de responder — el EGEL usa distractores muy bien diseñados
2. **Elimina primero** las opciones claramente incorrectas
3. **No dejes en blanco** — no hay penalización por respuesta incorrecta
4. **Gestiona el tiempo:** 203 reactivos / 8 horas ≈ 2.4 minutos por reactivo
5. **Los 60 reactivos de Lenguaje** son puntos seguros — prepáralos bien
6. **El 15% son reactivos piloto** (no cuentan) — si no sabes uno, no te desesperes
7. **Confía en el contexto** — el EGEL evalúa comprensión, no memorización de definiciones exactas
8. **Descansa bien** la noche anterior — el examen dura 8 horas

---

*Guía elaborada con base en: Guía Oficial EGEL Plus ISOFT (Ceneval), Guía de Estudio EGEL Plus ISOFT (176 páginas) y Banco de Reactivos EGEL Plus ISOFT III — 100% basada en los materiales del examen real.*


---
---

# 🌐 INVESTIGACIÓN EN INTERNET — INFORMACIÓN ADICIONAL Y VALIDADA
### Datos recabados de Ceneval oficial, Reddit, foros de sustentantes y plataformas de estudio

---

## 🏆 SISTEMA DE CALIFICACIÓN Y PREMIO CENEVAL

### Escala de puntuación: Índice Ceneval (700–1,300 puntos)

| Nivel de desempeño | Puntaje requerido | Significado |
|--------------------|-------------------|-------------|
| **Aún no satisfactorio** | < 1,000 puntos | No acredita |
| **Satisfactorio** | 1,000 – 1,149 puntos | Acredita el examen |
| **Sobresaliente** | ≥ **1,150 puntos** | Nivel de excelencia |

### 🥇 Premio Ceneval al Desempeño de Excelencia-EGEL

Para ganar el **Premio Ceneval** (el reconocimiento más alto) debes cumplir TODO lo siguiente:

| Requisito | Detalle |
|-----------|---------|
| **Sobresaliente en TODAS las áreas** | No solo en promedio — cada área individualmente ≥ 1,150 |
| **Primer intento** | No aplica si ya presentaste el examen antes |
| **Máximo 1 año de egresado** | Al momento de presentar el examen |

> ⚠️ **Importante:** Obtener Sobresaliente en 5 áreas pero Satisfactorio en 1 = **NO hay premio**. Debes ser excelente en absolutamente todas.

---

## 📋 DETALLES OFICIALES CONFIRMADOS POR CENEVAL

### Formatos de reactivos que aparecen en el examen

> ✅ **CONFIRMADO por la Guía Oficial:** Todos los reactivos son de **opción múltiple con 3 opciones (A, B, C)**. Sin importar el subtipo, siempre respondes eligiendo A, B o C.

El examen tiene 3 subtipos de reactivo, pero **todos se responden con A, B o C**:

| Subtipo | Cómo se presenta | Ejemplo real del examen oficial |
|---------|-----------------|--------------------------------|
| **Cuestionamiento directo** | Pregunta directa → elige la respuesta correcta | "¿Qué arquitectura permite autonomía en cada sitio y fragmentación de datos?" A) Distribuida B) Cliente-servidor C) En capas |
| **Completamiento** | Frase incompleta → elige qué va en el espacio | "El mecanismo de control por utilizar es el cálculo de… A) CV B) CPI C) AC" |
| **Ordenamiento** | Te dan pasos desordenados → elige el orden correcto | "Ordena: 1.Capacitación 2.Instalación 3.Prueba 4.Verificación — A) 2,3,4,1 B) 4,1,2,3 C) 4,2,3,1" |

Además existe el formato **Multirreactivo**: se presenta un texto largo (por ejemplo un caso o historia) y luego vienen **3 preguntas** sobre ese mismo texto, cada una con A, B, C. Este formato es común en la sección de **Comprensión Lectora**.

### Desglose exacto de Comprensión Lectora (30 reactivos)

| Ámbito | Reactivos | Qué evalúa |
|--------|-----------|-----------|
| **Estudio** | 12 | Textos académicos, científicos, técnicos |
| **Literario** | 12 | Textos narrativos, poéticos, dramáticos |
| **Participación Social** | 6 | Editoriales, artículos de opinión, convocatorias |

**Procesos evaluados:**
- **Identificación** — Localizar información explícita en el texto
- **Interpretación** — Inferir significados implícitos
- **Evaluación** — Juzgar la forma y el contenido del texto

### Desglose exacto de Redacción Indirecta (30 reactivos)

| Ámbito | Reactivos |
|--------|-----------|
| **Estudio** | 15 |
| **Participación Social** | 15 |

---

## 🎯 LO QUE DICEN LOS ESTUDIANTES QUE LO APROBARON (Reddit 2024)

Basado en experiencias reales de sustentantes que obtuvieron Sobresaliente:

### ✅ Lo que SÍ funciona

1. **Comprensión sobre memorización** — El 90% de los reactivos son casos aplicados, no definiciones puras. El examen pregunta "¿Qué harías en esta situación?" no "¿Cuál es la definición de X?"

2. **Alinearse al vocabulario de Ceneval** — Usar los términos exactos de la guía oficial. Por ejemplo, el examen dice "Earned Value Management" no "gestión del valor ganado" (aunque ambos son correctos, la guía usa uno específico).

3. **SQL es recurrente** — Varios usuarios confirman que SQL aparece con cierta frecuencia. Practica SELECT con JOIN, GROUP BY y HAVING.

4. **Gestión del tiempo en el examen** — Si un reactivo te toma más de 2 minutos, márcalo y continúa. Regresa al final. No hay beneficio en quedarte atascado.

5. **Técnica del descarte** — Generalmente hay 1 opción obviamente incorrecta, 1 que busca confundir y 2 razonables. Concéntrate en discriminar las 2 últimas.

### ❌ Lo que NO funciona

- Memorizar definiciones sin entender el concepto
- Estudiar solo una semana antes
- Ignorar la sección de Lenguaje y Comunicación (¡son 60 reactivos!)
- Confiar solo en guías de terceros sin contrastar con la guía oficial de Ceneval
- Estudiar intensamente la noche anterior (el cansancio afecta el rendimiento en 8 horas de examen)

---

## 🔍 TEMAS CONFIRMADOS POR MÚLTIPLES FUENTES COMO MUY FRECUENTES

### Área 1 — Análisis (confirmados en internet)
- ✅ Requerimientos funcionales vs. no funcionales — **siempre aparece**
- ✅ UML: casos de uso, clases, secuencia, actividades, máquina de estados
- ✅ `<<include>>` vs. `<<extend>>` — aparece en casi todos los exámenes
- ✅ Técnicas de elicitación según el escenario dado (especialmente prototipado y observación)
- ✅ Características de un buen requerimiento (verificable, no ambiguo, completo)
- ✅ Matriz de trazabilidad de requerimientos

### Área 2 — Diseño (confirmados en internet)
- ✅ Cohesión y acoplamiento — tipos y cuál es mejor/peor
- ✅ Patrones GOF: Singleton, Factory, Observer, Strategy, Adapter, Facade, Decorator
- ✅ Estilos arquitectónicos: Capas, MVC, Microservicios, Pipe and Filter
- ✅ Evaluación de trade-offs arquitectónicos (cuándo usar cada estilo)
- ✅ Composición vs. Agregación en UML (rombo relleno vs. vacío)
- ✅ Principios SOLID — especialmente S y O

### Área 3 — Desarrollo (confirmados en internet)
- ✅ Caja negra vs. blanca y sus técnicas
- ✅ SQL — consultas con JOIN, GROUP BY, funciones de agregación
- ✅ Niveles de prueba (unitarias → integración → sistema → aceptación)
- ✅ Paradigmas de programación (cuándo usar OOP vs. funcional vs. procedimental)
- ✅ Complejidad ciclomática (V(G) = P+1)
- ✅ Estrategias de integración (Top-Down usa stubs, Bottom-Up usa drivers)
- ✅ Propiedades ACID de bases de datos

### Área 4 — Gestión (confirmados en internet)
- ✅ EVM completo: CPI, SPI, CV, SV, EAC — **siempre hay cálculos**
- ✅ Scrum completo: roles (PO, SM, Dev Team), eventos (Sprint, Daily, Review, Retro), artefactos
- ✅ Diferencia Sprint Review vs. Sprint Retrospectiva
- ✅ Matriz RACI — qué significa cada letra
- ✅ QA vs. QC — proceso vs. producto
- ✅ Fast Tracking vs. Crashing
- ✅ Ley de Brooks
- ✅ Modelos de motivación: Maslow, Herzberg, McGregor

### Áreas 5 y 6 — Lenguaje (confirmados en internet)
- ✅ Concordancia nominal con sujetos de distinto género (→ masculino plural)
- ✅ Tilde diacrítica en monosílabos (mí/mi, tú/tu, él/el, sé/se...)
- ✅ Marcadores textuales (cohesión textual)
- ✅ Registro formal en géneros académicos (protocolo de investigación, artículo científico)
- ✅ Inferencias en textos (lo que se deduce, no lo que está dicho explícitamente)

---

## 📚 BIBLIOGRAFÍA OFICIAL DE CENEVAL (confirmada en línea)

Estos son los libros en los que Ceneval basa sus reactivos. No necesitas leerlos completos, pero son la fuente:

### Área 1 — Análisis
- Sommerville, I. (2015). *Software Engineering* (10a ed.) — Pearson
- Pressman, R. (2020). *Software Engineering: A Practitioner's Approach* (9a ed.)
- Booch, Rumbaugh & Jacobson. *The Unified Modeling Language User Guide*
- Wiegers, K. *Software Requirements*

### Área 2 — Diseño
- Bass, L., Clements, P. & Kazman, R. (2021). *Software Architecture in Practice* (4a ed.)
- Gamma, E. et al. *Design Patterns: Elements of Reusable Object-Oriented Software* (GOF)
- Cervantes, H. & Velasco-Elizondo, P. *Arquitectura de Software: Conceptos y Ciclo de Desarrollo*

### Área 3 — Desarrollo
- Silberschatz, A. (2014). *Fundamentos de Bases de Datos* (6a ed.)
- Schildt, H. *Java: The Complete Reference*
- Meier, A. *SQL & NoSQL Databases*

### Área 4 — Gestión
- Schwaber, K. & Sutherland, J. (2020). *La Guía de Scrum* — **GRATUITA en scrumguides.org**
- PMI. *PMBOK Guide* (para EVM y gestión clásica)
- Garita, G. & Lizano, F. *Estimación de costo de software: COCOMO*

---

## 🚨 ERRORES COMUNES QUE HACEN REPROBAR (según sustentantes reales)

| Error | Por qué ocurre | Cómo evitarlo |
|-------|---------------|---------------|
| Confundir Sprint Review con Sprint Retro | Ambos son al final del Sprint | Review = producto / Retro = proceso |
| Poner "Cohesión funcional" cuando la respuesta correcta es "secuencial" | Son similares pero distintas | Secuencial = salida→entrada. Funcional = una sola función |
| `<<include>>` cuando la pregunta pide el opcional | Las opciones son muy parecidas | Include = siempre / Extend = a veces |
| No calcular bien CPI | Invertir EV y AC | CPI = EV ÷ AC (EV es el numerador) |
| Poner "QA detecta defectos" | Es al revés | QA previene / QC detecta |
| Ignorar las preguntas de lenguaje | "Soy de sistemas, no de letras" | Son 60 reactivos — el 30% del examen |

---

## 🛠️ RECURSOS GRATUITOS RECOMENDADOS POR LA COMUNIDAD

| Recurso | URL | Para qué sirve |
|---------|-----|----------------|
| Guía oficial Ceneval ISOFT | guias-egel.ceneval.edu.mx | La fuente oficial — descarga OBLIGATORIA |
| Guía Scrum oficial | scrumguides.org | Roles, eventos y artefactos de Scrum (gratis) |
| Portal Ceneval | ceneval.edu.mx | Registro, fechas y resultados |

---

*Investigación realizada el 25 de junio de 2026 · Fuentes: Ceneval.edu.mx (oficial), Reddit r/mexico y r/ingenieria, foros de sustentantes, guiascontestadas.com, tuexamen.mx*
