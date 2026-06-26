# 📖 Guía de Estudio y Cuaderno de Trabajo: Área 2 — Diseño de Sistemas de Software
### Preparación de Alto Rendimiento para el EGEL Plus ISOFT

> **Instrucciones:** Lee con atención las **Explicaciones Teóricas** de cada sección. Una vez comprendido el tema, resuelve las **Actividades y Preguntas** completando los espacios indicados con `[ ]`. Al finalizar, guarda el archivo y avísame para revisarlo y darte retroalimentación.

---

## 🧩 Sección 1: Cohesión y Acoplamiento

En el diseño orientado a componentes, buscamos que el software sea fácil de mantener, modificar y reutilizar. Para lograrlo, aplicamos la regla de oro: **Alta Cohesión** y **Bajo Acoplamiento**.

### 💡 Explicación Teórica

#### 1. Cohesión (Medida interna de un módulo)
Representa qué tan estrechamente relacionadas están las responsabilidades e instrucciones dentro de un único módulo o clase. **Queremos que sea ALTA (que el módulo haga una sola cosa y la haga bien).**

*De peor (menor cohesión) a mejor (mayor cohesión):*
1.  **Cohesión Casual (Peor):** Las tareas están en el mismo módulo por puro azar, sin relación alguna. (Ej: Una clase `Cosas` que calcula impuestos y formatea fechas).
2.  **Cohesión Lógica:** El módulo realiza tareas similares pero lógicamente diferentes. Se selecciona cuál ejecutar mediante una bandera o parámetro. (Ej: Un método `imprimir()` con un `switch` para imprimir PDF, Excel o Word).
3.  **Cohesión Temporal:** Las tareas se agrupan solo porque se ejecutan al mismo tiempo. (Ej: Un método `inicializarSistema()` que abre base de datos, carga la pantalla y configura logs).
4.  **Cohesión Procedimental:** Las tareas se ejecutan en una secuencia específica siguiendo un algoritmo, pero no comparten datos. (Ej: Un método que primero valida la sesión y luego escribe en el log de auditoría). 
5.  **Cohesión Comunicacional:** Las tareas se ejecutan sobre los **mismos datos de entrada o salida**. (Ej: Una clase que toma un reporte XML y tiene métodos para validarlo, enviarlo por correo y guardarlo en BD).
6.  **Cohesión Secuencial:** La salida de una parte del módulo es la **entrada obligatoria** de la siguiente. (Ej: Un método que calcula el descuento de un cliente y pasa ese valor a otra función que aplica el IVA).
7.  **Cohesión Funcional (La mejor):** Todos los elementos del módulo cooperan para realizar una **única acción bien definida**. (Ej: Un método `calcularDeduccionISR()`).

#### 2. Acoplamiento (Medida de interdependencia entre módulos)
Representa el grado de conexión y dependencia que hay entre dos o más módulos. Si modificas el Módulo A y eso te obliga a modificar el Módulo B, hay un acoplamiento alto. **Queremos que sea BAJO (módulos independientes).**

*De peor (mayor acoplamiento) a mejor (menor acoplamiento):*
1.  **Acoplamiento por Contenido (Peor):** Un módulo modifica directamente los datos internos, código o estado de otro módulo. (Viola el encapsulamiento).
2.  **Acoplamiento Común:** Múltiples módulos comparten y modifican la misma variable global o zona de memoria compartida.
3.  **Acoplamiento Externo:** Los módulos dependen de un dispositivo de E/S, protocolo o formato de datos externo y específico.
4.  **Acoplamiento de Control:** Un módulo le dice a otro cómo comportarse pasándole una bandera o variable de control (ej. enviando un parámetro `bool ordenarDescendente`).
5.  **Acoplamiento Estampado (Trampa de examen):** Los módulos comparten una estructura de datos compuesta compleja (como un objeto completo o un Struct), pero el módulo receptor solo necesita uno o dos campos de esa estructura.
6.  **Acoplamiento de Datos (El mejor):** Los módulos se comunican pasando únicamente los parámetros simples estrictamente necesarios (ej. enteros, strings).

---

### ✍️ Actividades Sección 1

#### Actividad 1.1: Tabla de Cohesión (De Peor a Mejor)
Completa la columna **"Resumen conceptual"** de acuerdo con la explicación anterior:

| Nivel | Tipo de Cohesión   |    Calidad    | Resumen conceptual (Escribe en el corchete)                                                                          |
| :---: | :----------------- | :-----------: | :------------------------------------------------------------------------------------------------------------------- |
|   1   | **Casual**         |   Peor (❌)    | [Todo a lo loco nada importa jesus sabe porque en el modulo de imprimir esta el de calcular impuestos juntos ]       |
|   2   | **Lógica**         |   Mala (❌)    | [Funcionavilidad parecida logia diferente un modulo de imprimir por que tendria uno de convertir a pdf ]             |
|   3   | **Temporal**       |   Mala (❌)    | [Si un pc arranca al mismo tiiempo al prenderse la base datosy pantalla es ponerlo junto ]                           |
|   4   | **Procedimental**  |  Media (⚠️)   | [el sistema sigue un orden en ejecutr modulos pero esos modulos no comparten informacion solo el orden de arranque ] |
|   5   | **Comunicacional** |  Buena (⚠️)   | [ Con la informacion que entra sale informacion (tuve que checarlo)]                                                 |
|   6   | **Secuencial**     |   Alta (✅)    | [La informacion pasa de uno a otro y asi en cadena ]                                                                 |
|   7   | **Funcional**      | Excelente (✅) | [Cada modulo hace una cosa muy espeficia y bien ]                                                                    |

#### Actividad 1.2: Tabla de Acoplamiento (De Peor a Mejor)
Completa la columna **"Resumen conceptual"** de acuerdo con la explicación anterior:

| Nivel | Tipo de Acoplamiento |    Calidad    | Resumen conceptual (Escribe en el corchete)                                                          |
| :---: | :------------------- | :-----------: | :--------------------------------------------------------------------------------------------------- |
|   1   | **Contenido**        |   Peor (❌)    | [ Un modulo afecta internemente otro ]                                                               |
|   2   | **Común**            |   Mala (❌)    | [Todos comparte una misma variable ]                                                                 |
|   3   | **Externo**          |   Mala (❌)    | [Depende de un hardware externo y que si cambiia se deberia de cambiar la logica de la programaion ] |
|   4   | **Control**          |  Media (⚠️)   | [Un modulo le manda inforamcion para saber como se concotrola otro ]                                 |
|   5   | **Estampado**        |  Media (⚠️)   | [Se la manda todo un chaco de infromacion aun qeu solo ocupe una parte pequeña ]                     |
|   6   | **Datos**            | Excelente (✅) | [ Solo se le manda lo que necesita]                                                                  |

#### Actividad 1.3: Ejercicio de Identificación (Casos Reales)
Escribe qué **tipo de cohesión o acoplamiento** se presenta:

1.  **Caso A:** En una clase `Utilidades`, el método `procesar()` ejecuta primero una lectura de base de datos, luego inicializa una interfaz gráfica y finalmente envía un correo electrónico. No comparten datos entre sí, solo se ejecutan en esa secuencia cronológica.
    *   *Tipo de Cohesión:* **[ ]**
2.  **Caso B:** Un módulo `ModuloA` modifica directamente una variable global `CONFIG_GLOBAL` que también es modificada por otros 5 módulos del sistema.
    *   *Tipo de Acoplamiento:* **[ ]**
3.  **Caso C:** El método `calcularSalarioNeto()` toma como parámetro un objeto completo `Empleado` (que contiene dirección, teléfono, seguro social, salario bruto, etc.), aunque solo necesita el atributo `salarioBruto` para calcular la deducción fiscal.
    *   *Tipo de Acoplamiento:* **[ ]**
4.  **Caso D:** El método `generarFactura()` calcula los impuestos de una orden, genera el archivo XML de la factura y pasa este XML inmediatamente como parámetro al método `timbrarFactura()`.
    *   *Tipo de Cohesión:* **[ ]**

---
---

## 🛠️ Sección 2: Principios SOLID

### 💡 Explicación Teórica

SOLID son cinco principios básicos de diseño de clases que nos ayudan a evitar código rígido, frágil o difícil de extender:

1.  **S - Single Responsibility Principle (Responsabilidad Única):**
    *   *Regla:* Una clase debe tener **una, y solo una, razón para cambiar**. Es decir, debe realizar una sola función o tener una única responsabilidad.
    *   *Error común:* Una clase que hace cálculos y además escribe en logs y guarda en base de datos.
2.  **O - Open/Closed Principle (Abierto/Cerrado):**
    *   *Regla:* Las entidades de software (clases, módulos) deben estar **abiertas para su extensión, pero cerradas para su modificación**.
    *   *Cómo se logra:* Usando polimorfismo e interfaces. Si quieres añadir un nuevo tipo de descuento, creas una clase nueva que herede de la interfaz `Descuento`, en vez de meter otro `if` en el código existente.
3.  **L - Liskov Substitution Principle (Sustitución de Liskov):**
    *   *Regla:* Si `S` es un subtipo de `T`, los objetos de tipo `T` pueden ser reemplazados por objetos de tipo `S` sin alterar el correcto funcionamiento del programa.
    *   *Error común:* Crear una clase `Pájaro` con el método `volar()`. Si creas la subclase `Pingüino` (que es un pájaro pero no vuela), heredas un método que no puedes usar adecuadamente, rompiendo Liskov.
4.  **I - Interface Segregation Principle (Segregación de Interfaces):**
    *   *Regla:* Es mejor tener **muchas interfaces específicas** que una sola interfaz grande y generalizada. Las clases no deben ser forzadas a depender de métodos de interfaz que no utilizan.
    *   *Error común:* Una interfaz `Impresora` que obliga a todas las clases a implementar `escanear()` y `faxear()`, incluso a impresoras básicas.
5.  **D - Dependency Inversion Principle (Inversión de Dependencias):**
    *   *Regla:* Los módulos de alto nivel no deben depender de módulos de bajo nivel; **ambos deben depender de abstracciones (interfaces)**. Además, las abstracciones no deben depender de los detalles, sino los detalles de las abstracciones.
    *   *Cómo se logra:* En vez de que tu clase `Factura` instancie directamente a `MySQLDatabase db = new MySQLDatabase()`, debe recibir una interfaz `IDatabase` por parámetro (Inyección de Dependencias).

---

### ✍️ Actividades Sección 2

#### Actividad 2.1: Tabla de Correspondencia
Escribe brevemente con tus propias palabras qué busca prevenir cada principio:

| Principio | Significado           | ¿Qué busca prevenir o resolver? (Escribe aquí)                                                     |
| :-------: | :-------------------- | :------------------------------------------------------------------------------------------------- |
|   **S**   | Single Responsibility | [ Una dependendia una sola responsavilidad singleton ] <-- ⚠️ *Nota: "Una sola responsabilidad" es correcto. Sin embargo, no confundas esto con el patrón "Singleton" (que es para limitar la creación de objetos a una sola instancia).* |
|   **O**   | Open/Closed           | [ Abierta exdtencion cerrada al cambio ] <-- ✅ *¡Excelente! Permite agregar funciones nuevas sin modificar el código que ya funciona.* |
|   **L**   | Liskov Substitution   | [ Una clase hija podria sustituri a la padre ] <-- ✅ *¡Muy bien! Si una clase hija no puede hacer lo que la clase padre promete, rompe el diseño.* |
|   **I**   | Interface Segregation | [En lugar de una mega interfaz mejor muchas pequelas por si una se rompe no afectaria a la demas ] <-- ✅ *¡Correcto! Evita interfaces gigantes obligando a clases a implementar métodos que no usan.* |
|   **D**   | Dependency Inversion  | [no le entendia a la ultima ] <-- 💡 *Explicación: En lugar de que tus clases dependan de clases concretas (como MySQL), haz que dependan de una interfaz genérica (como IBaseDatos). Así puedes cambiar la BD sin reescribir la clase principal.* |

#### Actividad 2.2: Casos Prácticos de SOLID
Identifica **qué principio SOLID se está violando** y propone la **solución**:

#### Caso 1
> Una interfaz `MultiFunctionPrinter` contiene los métodos `print()`, `scan()`, `fax()` y `staple()`. Una clase `BasicPrinter` implementa esta interfaz pero tiene que arrojar una excepción `NotImplementedException` en los métodos `fax()` y `staple()`.
*   **Principio violado:** **[ Interface Segregation Principle (ISP) ]**
*   **Propuesta de solución:** **[ Separar la mega interfaz en varias interfaces más pequeñas y específicas (ej. `IPrinter`, `IScanner`, `IFaxer`, `IStapler`). Así, `BasicPrinter` solo implementará `IPrinter`. ]** <-- *¡Completado con éxito por el alumno!*

#### Caso 2
> La clase `ReportGenerator` se encarga de formatear el reporte financiero, realizar los cálculos matemáticos de ganancias y conectarse a la base de datos para guardar el reporte.
*   **Principio violado:** **[ Single Responsibility Principle (SRP) ]** <-- *¡Correcto! La clase tiene 3 responsabilidades distintas.*
*   **Propuesta de solución:** **[ Crear tres clases separadas: `ReportCalculator` (para los cálculos), `ReportFormatter` (para dar formato visual) y `ReportRepository` (para guardarlo en base de datos). ]**

#### Caso 3
> En un sistema de facturación, la clase `Facturador` inicializa directamente un objeto concreto mediante `MySQLConnection db = new MySQLConnection()`. Si decides cambiar a PostgreSQL, debes reescribir y volver a compilar la clase `Facturador`.
*   **Principio violado:** **[ Dependency Inversion Principle (DIP) ]** <-- *¡Correcto! Depende de una implementación concreta (`MySQLConnection`) en lugar de una abstracción.*
*   **Propuesta de solución:** **[ Crear una interfaz `IDatabaseConnection` con el método `connect()`. Hacer que `MySQLConnection` y `PostgreSQLConnection` implementen esta interfaz. Finalmente, hacer que `Facturador` reciba `IDatabaseConnection` en su constructor en lugar de instanciarlo él mismo. ]**

---
---

## 🎨 Sección 3: Patrones de Diseño GoF (Gang of Four)

Los patrones de diseño son soluciones probadas a problemas comunes de desarrollo. Se dividen en tres familias:

### 💡 Explicación Teórica

#### 1. Patrones Creacionales (Creación de objetos)
*   **Singleton:** Garantiza que una clase tenga una **única instancia** y proporciona un punto de acceso global a ella. (Ej: Gestor de conexión a BD).
*   **Factory Method:** Define una interfaz para crear un objeto, pero deja que las **subclases decidan qué clase instanciar**. (Ej: Un creador de enemigos que instancie Ogros o Duendes según el nivel).
*   **Abstract Factory:** Proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas. (Ej: Crear temas visuales de UI para Windows, Mac y Linux).
*   **Builder:** Separa la construcción de un objeto complejo de su representación, permitiendo crear diferentes variaciones paso a paso. (Ej: Configurar una PC con diferentes tarjetas de video, RAM y discos).

#### 2. Patrones Estructurales (Composición de clases y objetos)
*   **Adapter:** Convierte la interfaz de una clase en otra interfaz que el cliente espera. Permite que clases incompatibles trabajen juntas. (Ej: Un adaptador de enchufe europeo a americano, o integrar un sistema externo).
*   **Decorator:** Añade responsabilidades a un objeto de manera **dinámica y en tiempo de ejecución**, envolviendo el objeto original. Es una alternativa flexible a la herencia. (Ej: Añadir ingredientes extra a un café, o encriptación a un flujo de datos).
*   **Facade:** Proporciona una interfaz unificada y simplificada para un conjunto de interfaces en un subsistema complejo. (Ej: Un botón "Comprar en 1 click" que coordina inventario, pago y envío por detrás).
*   **Proxy:** Proporciona un sustituto o intermediario para controlar el acceso a otro objeto. (Ej: Controlar el acceso a un objeto pesado cargándolo solo cuando se necesite, o añadir control de seguridad).

#### 3. Patrones de Comportamiento (Interacción y algoritmos)
*   **Observer:** Define una relación de dependencia de uno a muchos, de modo que cuando un objeto cambia de estado, todos sus dependientes son notificados automáticamente. (Ej: El modelo de Suscriptor/Notificaciones de YouTube).
*   **Strategy:** Define una familia de algoritmos, encapsula cada uno de ellos y los hace intercambiables. Permite que el algoritmo varíe independientemente de los clientes que lo usan. (Ej: Cambiar el método de pago entre PayPal, Tarjeta o Efectivo en el checkout).

---

### ✍️ Actividades Sección 3

#### Actividad 3.1: Emparejamiento de Patrones
Escribe el nombre del **Patrón GoF Correspondiente** según la descripción:

| Descripción del problema en el Examen | Patrón GoF Correspondiente |
| :--- | :--- |
| Se requiere asegurar que una clase tenga únicamente una instancia en todo el ciclo de vida del sistema y proveer un punto de acceso global a ella. | **[ ]** |
| Se necesita notificar automáticamente a múltiples objetos suscriptores sobre los cambios de estado de un objeto editor. | **[ ]** |
| Se desea intercambiar algoritmos de ordenamiento o cálculo en tiempo de ejecución de manera transparente para el cliente sin usar sentencias `if/else` masivas. | **[ ]** |
| Dos sistemas antiguos no pueden comunicarse porque sus firmas de interfaz no coinciden; se requiere un intermediario que traduzca las llamadas. | **[ ]** |
| Se busca simplificar el acceso a un subsistema complejo mediante una clase única que exponga una interfaz amigable. | **[ ]** |
| Se requiere construir un objeto complejo paso a paso, separando su construcción de su representación. | **[ ]** |

*Opciones:* `Singleton` | `Factory Method` | `Builder` | `Adapter` | `Facade` | `Observer` | `Strategy` | `Decorator`

#### Actividad 3.2: Preguntas de Opción Múltiple (Estilo EGEL)
*Elige la respuesta correcta (A, B o C) y justifica tu respuesta basándote en la teoría expuesta.*

**Pregunta 1:** Una empresa de videojuegos está diseñando un sistema donde los enemigos (ogros, duendes, dragones) se crean dinámicamente en tiempo de ejecución. El programador principal decide delegar la lógica de instanciación de estos objetos a subclases específicas según el nivel actual del juego. ¿Qué patrón creacional es el adecuado?
*   A) Abstract Factory
*   B) Factory Method
*   C) Builder
*   *Tu respuesta:* **[ ]**
*   *Justificación:* **[ ]**

**Pregunta 2:** Tienes un objeto `Reporte` y necesitas agregarle funcionalidades dinámicamente en tiempo de ejecución (como agregarle un borde decorativo, una firma digital o compresión zip) sin alterar el código de la clase original ni usar herencia masiva. ¿Qué patrón estructural soluciona esto?
*   A) Proxy
*   B) Adapter
*   C) Decorator
*   *Tu respuesta:* **[ ]**
*   *Justificación:* **[ ]**

---
---

## 🏗️ Sección 4: Arquitectura de Software

La arquitectura define la estructura de alto nivel de un sistema de software y las restricciones tecnológicas.

### 💡 Explicación Teórica

#### 1. Estilos Arquitectónicos
*   **Capas (Layered):** Divide el sistema en capas de responsabilidad (ej. Presentación -> Lógica de negocio -> Acceso a Datos). Cada capa solo puede comunicarse con la capa inmediatamente inferior.
    *   *Ventaja:* Modularidad, fácil mantenimiento.
    *   *Desventaja:* Impacto en rendimiento (el flujo de datos debe cruzar todas las capas).
*   **Model-View-Controller (MVC):** Separa los datos de la aplicación (Modelo), la interfaz de usuario (Vista) y la lógica de control que responde a eventos (Controlador). Muy útil en desarrollo Web.
*   **Microservicios:** Divide la aplicación en servicios pequeños, independientes e intercomunicados mediante protocolos ligeros (APIs REST, colas de mensajería). Cada microservicio tiene su propio despliegue y su propia base de datos.
    *   *Ventaja:* Escalabilidad horizontal masiva, despliegues independientes.
    *   *Desventaja:* Alta complejidad de red, consistencia eventual de datos.
*   **Pipes and Filters (Tuberías y Filtros):** Los datos fluyen de forma secuencial a través de un canal (Pipe) y son procesados o transformados por componentes (Filters) independientes de manera sucesiva. (Ej: Un compilador de código).

#### 2. Modelo 4+1 Vistas de Kruchten
Define cómo modelar la arquitectura usando diagramas de acuerdo con el stakeholder de interés:
*   **Vista Lógica (Clases):** Diseñada para los desarrolladores. Describe la funcionalidad del sistema usando diagramas de clases, paquetes y objetos.
*   **Vista de Desarrollo/Implementación:** Muestra la organización física de los archivos de código fuente, bibliotecas y componentes en el entorno de desarrollo.
*   **Vista de Proceso:** Enfocada en la concurrencia, rendimiento y escalabilidad. Describe hilos, procesos y sincronizaciones del sistema.
*   **Vista Física/Despliegue:** Enfocada en ingenieros de sistemas o DevOps. Muestra cómo se mapean los componentes en el hardware real (servidores, redes y nodos físicos).
*   **Escenarios (El +1):** Une todas las vistas usando los casos de uso principales.

---

### ✍️ Actividades Sección 4

#### Actividad 4.1: Tabla de Estilos Arquitectónicos
Escribe en el corchete una **ventaja clave** y una **desventaja/riesgo** de usar cada estilo:

| Estilo Arquitectónico | Ventaja Clave | Desventaja / Riesgo |
| :--- | :--- | :--- |
| **Capas (Layered)** | [ ] | [ ] |
| **Model-View-Controller (MVC)** | [ ] | [ ] |
| **Microservicios** | [ ] | [ ] |
| **Pipes and Filters** | [ ] | [ ] |

#### Actividad 4.2: Modelo de 4+1 Vistas de Kruchten
Asocia la vista correcta (`Lógica`, `Desarrollo`, `Proceso`, `Física` o `Escenarios`) a la descripción:

1.  Muestra la distribución de los componentes del software en los servidores físicos, redes y nodos de ejecución: **[ ]**
2.  Representa el comportamiento dinámico, la concurrencia, los hilos de ejecución y el rendimiento del sistema: **[ ]**
3.  Utiliza diagramas de clases y objetos para representar las abstracciones y funcionalidades del negocio: **[ ]**
4.  Organiza los módulos de código, paquetes y archivos fuentes en el entorno de desarrollo: **[ ]**

---
---

## 🖥️ Sección 5: Diseño de Interfaces y UX (Heurísticas de Nielsen)

### 💡 Explicación Teórica

Jakob Nielsen definió 10 reglas generales para el diseño de interfaces de usuario (heurísticas de usabilidad):

1.  **Visibilidad del estado del sistema:** El sistema siempre debe mantener informados a los usuarios de lo que está ocurriendo, mediante retroalimentación adecuada y oportuna (ej. barras de progreso, iconos de carga).
2.  **Relación entre el sistema y el mundo real:** El sistema debe hablar el lenguaje del usuario, con palabras y conceptos familiares en lugar de términos técnicos del sistema.
3.  **Control y libertad del usuario:** Los usuarios a menudo eligen funciones por error y necesitan una "salida de emergencia" claramente marcada para salir del estado no deseado (ej. botones "Deshacer" y "Cancelar").
4.  **Consistencia y estándares:** El usuario no debería tener que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo. Se deben seguir las convenciones de la plataforma (ej. que el menú de ajustes tenga el icono de engranaje).
5.  **Prevención de errores:** Es mejor diseñar una interfaz que prevenga los errores antes de que ocurran que diseñar buenos mensajes de error (ej. deshabilitar el botón "Enviar" si los campos no están completos).
6.  **Reconocimiento antes que recuerdo:** Minimizar la carga de memoria del usuario haciendo visibles los objetos, acciones y opciones (ej. mostrar las últimas búsquedas o sugerencias en vez de obligar a escribir todo).
7.  **Flexibilidad y eficiencia de uso:** La interfaz debe tener atajos o aceleradores (invisibles para usuarios novatos) que agilicen la interacción para los usuarios experimentados (ej. atajos de teclado como `Ctrl + C` o `Ctrl + V`).
8.  **Diseño estético y minimalista:** Los diálogos no deben contener información irrelevante o redundante. Cada unidad de información adicional en un diálogo compite con las unidades de información relevante.
9.  **Ayuda al usuario a reconocer, diagnosticar y recuperarse de errores:** Los mensajes de error deben redactarse en lenguaje claro (sin códigos técnicos), indicar el problema exacto y sugerir constructivamente una solución.
10. **Ayuda y documentación:** Aunque es mejor que el sistema se pueda usar sin documentación, puede ser necesario proveer ayuda fácil de buscar y enfocada en las tareas del usuario.

---

### ✍️ Actividades Sección 5

#### Actividad 5.1: Asociación de Heurísticas
Escribe el **número de la heurística de Nielsen** (del 1 al 10) que mejor aplique a cada caso:

| Situación de Interfaz | Heurística Relacionada (Escribe el número del 1 al 10) |
| :--- | :---: |
| Al hacer clic en "Guardar", aparece una barra de progreso que dice *"Guardando archivo... 45%"*. | **[ ]** |
| En lugar de pedirle al usuario que escriba de memoria el código de aeropuerto, el sistema le muestra un buscador predictivo con una lista visual. | **[ ]** |
| El sistema incluye botones consistentes de "Deshacer" (`Ctrl + Z`) y "Rehacer" en caso de que el usuario borre un bloque de texto por accidente. | **[ ]** |
| Cuando un usuario introduce un formato de correo inválido, el sistema muestra un mensaje claro en rojo: *"El correo debe contener un símbolo @ y un dominio válido (ej. usuario@dominio.com)"* en vez de un código de error críptico como *Error 0x44F*. | **[ ]** |
| Las opciones del menú y los iconos se colocan en lugares estándar que corresponden a las convenciones de la mayoría de las páginas web (ej. el carrito de compras arriba a la derecha). | **[ ]** |

---

### Guardado y Envío
> **¡Listo!** Ahora tienes toda la información teórica que necesitas en este mismo archivo. Cuando termines de rellenar los espacios `[ ]`, guarda este archivo con el editor y escribe un mensaje en el chat diciendo: **"Terminé de llenar el cuaderno del Área 2"** para que proceda con tu revisión completa.
