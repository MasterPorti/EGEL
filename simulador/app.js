// Banco de preguntas: Módulo 1 - Simulador General del Área 1 (10 Reactivos)
const generalQuestions = [
  {
    id: 1,
    category: "1.1 Tipos de Requerimientos",
    question: "Una empresa requiere que el sistema de facturación electrónica sea capaz de emitir la factura en formato PDF y XML al concluir una venta. ¿A qué tipo de requerimiento corresponde esta especificación?",
    options: [
      { text: "A) Requerimiento Funcional.", isCorrect: true },
      { text: "B) Requerimiento No Funcional de Rendimiento.", isCorrect: false },
      { text: "C) Requerimiento No Funcional de Usabilidad.", isCorrect: false }
    ],
    justification: "Describe una función/acción que el sistema debe realizar (generar archivos PDF/XML como resultado de concluir una venta)."
  },
  {
    id: 2,
    category: "1.1 Tipos de Requerimientos",
    question: "El siguiente requerimiento fue redactado en la especificación de un sistema: 'El módulo de administración debe ser muy fácil de usar para evitar errores del usuario.' De acuerdo con el estándar IEEE 830, ¿cuál es la principal deficiencia de este requerimiento?",
    options: [
      { text: "A) No es completo, le falta especificar el rol exacto del usuario.", isCorrect: false },
      { text: "B) No es verificable debido al uso de términos subjetivos como 'muy fácil de usar'.", isCorrect: true },
      { text: "C) Es contradictorio con otros requerimientos del sistema.", isCorrect: false }
    ],
    justification: "El término 'muy fácil de usar' es subjetivo y no medible. Para ser verificable, debería especificar una métrica observable (ej. 'un usuario capacitado debe completar la tarea en menos de 3 minutos')."
  },
  {
    id: 3,
    category: "1.1 Tipos de Requerimientos",
    question: "Un requerimiento especifica: 'El sistema web debe ser compatible y funcionar correctamente en los navegadores Google Chrome v100+, Mozilla Firefox v98+ y Microsoft Edge v100+.' ¿A qué atributo de calidad corresponde?",
    options: [
      { text: "A) Usabilidad.", isCorrect: false },
      { text: "B) Fiabilidad.", isCorrect: false },
      { text: "C) Portabilidad.", isCorrect: true }
    ],
    justification: "La portabilidad mide la facilidad con la que el software se puede transferir de un entorno de hardware o software a otro (en este caso, diferentes navegadores web)."
  },
  {
    id: 4,
    category: "1.2 Técnicas de Elicitación",
    question: "Se va a desarrollar un sistema para controlar el flujo de equipaje en un aeropuerto. El analista nota que los operadores tienen dificultades para explicar de forma oral la secuencia exacta del proceso de clasificación debido a la rapidez y automatización con la que ocurre. ¿Qué técnica de elicitación es la más adecuada en este escenario?",
    options: [
      { text: "A) Cuestionarios y encuestas de preguntas abiertas.", isCorrect: false },
      { text: "B) Observación en el puesto de trabajo (etnografía).", isCorrect: true },
      { text: "C) Tormenta de ideas con la mesa directiva.", isCorrect: false }
    ],
    justification: "La observación directa en el entorno de trabajo es ideal cuando los usuarios tienen dificultades para verbalizar o detallar sus procesos operativos cotidianos."
  },
  {
    id: 5,
    category: "1.2 Técnicas de Elicitación",
    question: "Los clientes de una startup de servicios médicos no tienen claridad sobre cómo quieren visualizar las citas y su historial médico en la aplicación móvil. ¿Qué técnica de elicitación e ingeniería de requisitos es la más recomendada para ayudarles a definir sus necesidades de manera visual?",
    options: [
      { text: "A) Prototipado rápido.", isCorrect: true },
      { text: "B) Taller JAD (Joint Application Design).", isCorrect: false },
      { text: "C) Análisis de documentación del sistema actual.", isCorrect: false }
    ],
    justification: "El prototipado ayuda a los clientes que no tienen requerimientos claros a visualizar la solución propuesta e identificar lo que realmente necesitan o desean cambiar."
  },
  {
    id: 6,
    category: "1.2 Técnicas de Elicitación",
    question: "Un equipo ágil utiliza una técnica de priorización en la que clasifican los requerimientos en categorías de 'Esencial para la liberación inicial (Must)', 'Importante pero no vital (Should)', 'Podría incluirse si hay recursos (Could)' y 'No se incluirá en esta fase (Won't)'. ¿Cómo se le conoce a esta técnica?",
    options: [
      { text: "A) Análisis Kano.", isCorrect: false },
      { text: "B) Técnica MoSCoW.", isCorrect: true },
      { text: "C) Dot Voting (Votación por puntos).", isCorrect: false }
    ],
    justification: "La técnica MoSCoW clasifica requerimientos en Must have (debe tener), Should have (debería tener), Could have (podría tener) y Won't have (no tendrá por ahora)."
  },
  {
    id: 7,
    category: "1.3 Documentación de Requerimientos (UML)",
    question: "En el modelado de casos de uso de un sistema bancario, la acción de 'Transferir Fondos' requiere obligatoriamente que el sistema ejecute la acción de 'Validar Token de Seguridad'. ¿Qué relación se debe modelar entre ambos casos de uso?",
    options: [
      { text: "A) Relación de extensión (<<extend>>).", isCorrect: false },
      { text: "B) Relación de inclusión (<<include>>).", isCorrect: true },
      { text: "C) Relación de generalización.", isCorrect: false }
    ],
    justification: "Una relación <<include>> indica que el caso de uso origen incluye obligatoriamente el comportamiento del caso de uso destino para poder completarse."
  },
  {
    id: 8,
    category: "1.3 Documentación de Requerimientos (UML)",
    question: "Se está diseñando el modelo de datos orientado a objetos para un sistema escolar. Se tiene la clase 'Escuela' y la clase 'Aula'. Si la escuela se clausura y se destruye, las aulas asociadas a ella también dejan de existir físicamente en el sistema. ¿Qué tipo de relación y representación gráfica UML es la correcta entre Escuela (el todo) y Aula (la parte)?",
    options: [
      { text: "A) Agregación, representada con un rombo vacío (◇) del lado de Escuela.", isCorrect: false },
      { text: "B) Composición, representada con un rombo relleno (◆) del lado de Escuela.", isCorrect: true },
      { text: "C) Asociación simple, representada con una línea sólida y multiplicidad 1..*.", isCorrect: false }
    ],
    justification: "La composición (rombo relleno ◆) representa una relación fuerte 'todo-parte' donde el tiempo de vida de la parte está condicionado al del todo; si el todo se destruye, las partes también."
  },
  {
    id: 9,
    category: "1.3 Documentación de Requerimientos (UML)",
    question: "Estás diseñando una funcionalidad y necesitas representar detalladamente cómo interactúan los objetos (como la vista, el controlador y el modelo) a lo largo del tiempo, mostrando el orden cronológico exacto en que se envían y reciben los mensajes. ¿Qué diagrama UML es el más adecuado?",
    options: [
      { text: "A) Diagrama de Clases.", isCorrect: false },
      { text: "B) Diagrama de Actividades.", isCorrect: false },
      { text: "C) Diagrama de Secuencia.", isCorrect: true }
    ],
    justification: "El diagrama de secuencia muestra la interacción de objetos organizados en una secuencia de tiempo, detallando los mensajes enviados entre ellos y sus líneas de vida."
  },
  {
    id: 10,
    category: "1.3 Documentación de Requerimientos (UML)",
    question: "Al realizar una auditoría de software, se solicita rastrear un requerimiento de negocio específico desde su origen con el cliente, pasando por su diseño, su implementación en código, hasta el caso de prueba unitaria que lo valida. ¿Qué artefacto de ingeniería de requerimientos permite hacer esto de forma directa?",
    options: [
      { text: "A) Matriz de Trazabilidad.", isCorrect: true },
      { text: "B) Diccionario de Datos.", isCorrect: false },
      { text: "C) Especificación de Requisitos de Software (SRS) según IEEE 830.", isCorrect: false }
    ],
    justification: "La matriz de trazabilidad es una tabla que asocia los requerimientos con los artefactos de las etapas posteriores del ciclo de vida (diseño, código, pruebas) para garantizar la cobertura."
  }
];

// Banco de preguntas: Módulo 2 - Especialidad en UML y Atributos de Calidad (5 Reactivos)
const umlCalidadQuestions = [
  {
    id: 1,
    category: "1.1 Atributos de Calidad (ISO 25010)",
    question: "Una empresa requiere que, en caso de detectarse un error crítico en producción, el equipo de desarrollo pueda identificar la causa raíz, corregir el código y liberar un parche en un tiempo máximo de 4 horas. ¿A qué atributo de calidad corresponde esta restricción?",
    options: [
      { text: "A) Portabilidad.", isCorrect: false },
      { text: "B) Mantenibilidad.", isCorrect: true },
      { text: "C) Fiabilidad.", isCorrect: false }
    ],
    justification: "La mantenibilidad mide la facilidad con la que un sistema de software puede ser modificado para corregir errores, mejorar el rendimiento o adaptarse a cambios de entorno."
  },
  {
    id: 2,
    category: "1.1 Atributos de Calidad (ISO 25010)",
    question: "Se especifica que el sistema de monitoreo médico debe continuar operando sin pérdida de datos del paciente incluso si ocurre una caída temporal en la conexión de red principal, conmutando automáticamente a una red de respaldo en menos de 10 segundos. ¿Qué atributo de calidad se está evaluando aquí?",
    options: [
      { text: "A) Fiabilidad (específicamente Tolerancia a Fallos).", isCorrect: true },
      { text: "B) Portabilidad (específicamente Adaptabilidad).", isCorrect: false },
      { text: "C) Usabilidad (específicamente Capacidad de Aprendizaje).", isCorrect: false }
    ],
    justification: "La fiabilidad y la tolerancia a fallos miden la capacidad del sistema para mantener un nivel de rendimiento especificado en caso de fallos de componentes o de interfaces externas."
  },
  {
    id: 3,
    category: "1.3 Documentación de Requerimientos (UML)",
    question: "En el diagrama de casos de uso de un sitio de comercio electrónico, el caso de uso 'Realizar Compra' se completa normalmente ingresando los datos de pago estándar. Opcionalmente, si el usuario posee un código promocional válido, el sistema permite ejecutar la acción de 'Aplicar Descuento'. ¿Cómo se debe modelar esta relación entre los casos de uso?",
    options: [
      { text: "A) 'Realizar Compra' <<include>> 'Aplicar Descuento'.", isCorrect: false },
      { text: "B) 'Realizar Compra' <<extend>> 'Aplicar Descuento' con un punto de extensión.", isCorrect: true },
      { text: "C) 'Aplicar Descuento' es un caso generalizado de 'Realizar Compra'.", isCorrect: false }
    ],
    justification: "La relación <<extend>> modela un comportamiento opcional o condicional que amplía el caso de uso base. Aplicar un descuento solo ocurre si el usuario tiene un código y decide usarlo."
  },
  {
    id: 4,
    category: "1.3 Documentación de Requerimientos (UML)",
    question: "Estás modelando un sistema para un club deportivo. Se define la relación entre las clases 'Equipo' y 'Jugador'. Si el club deportivo decide disolver el equipo, los jugadores continúan afiliados al club y pueden integrarse a otros equipos. ¿Qué tipo de relación y representación UML es la correcta?",
    options: [
      { text: "A) Composición, representada con un rombo relleno (◆) en la clase Equipo.", isCorrect: false },
      { text: "B) Agregación, representada con un rombo vacío (◇) en la clase Equipo.", isCorrect: true },
      { text: "C) Asociación simple, representada con una línea punteada y sin rombo.", isCorrect: false }
    ],
    justification: "Es una agregación (rombo vacío ◇) porque representa una relación 'todo-parte' donde el tiempo de vida de la parte (Jugador) es independiente del todo (Equipo)."
  },
  {
    id: 5,
    category: "1.3 Documentación de Requerimientos (UML)",
    question: "En un diagrama de secuencia UML, ¿qué representan la línea punteada vertical debajo de cada objeto y el rectángulo vertical estrecho que se dibuja sobre ella cuando se envía un mensaje?",
    options: [
      { text: "A) La herencia de la clase y el método que se está sobreescribiendo.", isCorrect: false },
      { text: "B) La línea de vida del objeto y el período de activación (ejecución de un proceso).", isCorrect: true },
      { text: "C) La interfaz implementada y el bloqueo de concurrencia del objeto.", isCorrect: false }
    ],
    justification: "La línea punteada vertical representa la 'línea de vida' (lifeline) del objeto a lo largo del tiempo, y el rectángulo representa el foco de control o activación, indicando que el objeto está realizando una acción."
  }
];

// Estado global de la aplicación
let state = {
  currentModuleName: "",
  activeQuestions: [],
  currentQuestionIndex: 0,
  selectedAnswers: [], // Almacena el índice de la opción seleccionada (0, 1, 2)
  questionNotes: [],     // Notas individuales por pregunta
  generalNotes: "",                                    // Notas/Dudas generales
  isSubmitted: false
};

// Elementos del DOM
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

const startGeneralBtn = document.getElementById("start-general-btn");
const startUmlBtn = document.getElementById("start-uml-btn");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const saveBtn = document.getElementById("save-btn");

const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const questionCategory = document.getElementById("question-category");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const noteInput = document.getElementById("note-input");
const generalNotesInput = document.getElementById("general-notes-input");

const scoreTitle = document.getElementById("score-title");
const scorePercentage = document.getElementById("score-percentage");
const detailedResults = document.getElementById("detailed-results");
const statusMessage = document.getElementById("status-message");

// Inicializar eventos
window.addEventListener("DOMContentLoaded", () => {
  startGeneralBtn.addEventListener("click", () => startQuiz("general"));
  startUmlBtn.addEventListener("click", () => startQuiz("uml"));
  
  prevBtn.addEventListener("click", prevQuestion);
  nextBtn.addEventListener("click", nextQuestion);
  submitBtn.addEventListener("click", submitQuiz);
  restartBtn.addEventListener("click", restartQuiz);
  saveBtn.addEventListener("click", saveResultsToServer);

  // Escuchar cambios en las notas para guardarlas en tiempo real
  noteInput.addEventListener("input", (e) => {
    state.questionNotes[state.currentQuestionIndex] = e.target.value;
  });

  generalNotesInput.addEventListener("input", (e) => {
    state.generalNotes = e.target.value;
  });
});

// Iniciar examen
function startQuiz(moduleType) {
  welcomeScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  
  if (moduleType === "uml") {
    state.activeQuestions = umlCalidadQuestions;
    state.currentModuleName = "Especialidad: UML y Atributos de Calidad";
  } else {
    state.activeQuestions = generalQuestions;
    state.currentModuleName = "Simulador General - Área 1";
  }
  
  // Reestablecer buffers
  state.selectedAnswers = Array(state.activeQuestions.length).fill(null);
  state.questionNotes = Array(state.activeQuestions.length).fill("");
  state.currentQuestionIndex = 0;
  state.generalNotes = "";
  state.isSubmitted = false;
  
  renderQuestion();
}

// Renderizar pregunta actual
function renderQuestion() {
  const q = state.activeQuestions[state.currentQuestionIndex];
  
  // Categoría y texto de la pregunta
  questionCategory.textContent = `Pregunta ${state.currentQuestionIndex + 1} de ${state.activeQuestions.length} | ${q.category} (${state.currentModuleName})`;
  questionText.textContent = q.question;
  
  // Limpiar y renderizar opciones
  optionsContainer.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.text;
    
    // Si ya fue seleccionada esta opción
    if (state.selectedAnswers[state.currentQuestionIndex] === idx) {
      btn.classList.add("selected");
    }
    
    // Al hacer click, seleccionar opción
    btn.addEventListener("click", () => selectOption(idx));
    optionsContainer.appendChild(btn);
  });
  
  // Cargar notas específicas de la pregunta
  noteInput.value = state.questionNotes[state.currentQuestionIndex] || "";
  
  // Actualizar barra de progreso
  const progressPercent = ((state.currentQuestionIndex + 1) / state.activeQuestions.length) * 100;
  progressFill.style.width = `${progressPercent}%`;
  progressText.textContent = `${Math.round(progressPercent)}% completado`;
  
  // Manejo de botones de navegación
  if (state.currentQuestionIndex === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-flex";
  }
  
  if (state.currentQuestionIndex === state.activeQuestions.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.className = "btn btn-accent";
  } else {
    nextBtn.style.display = "inline-flex";
    submitBtn.className = "btn btn-secondary";
  }
  submitBtn.style.display = "inline-flex";
}

// Seleccionar opción
function selectOption(optionIndex) {
  state.selectedAnswers[state.currentQuestionIndex] = optionIndex;
  
  // Actualizar visualización de las opciones
  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach((btn, idx) => {
    if (idx === optionIndex) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
}

// Navegar a la siguiente pregunta
function nextQuestion() {
  if (state.currentQuestionIndex < state.activeQuestions.length - 1) {
    state.currentQuestionIndex++;
    renderQuestion();
  }
}

// Navegar a la pregunta anterior
function prevQuestion() {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex--;
    renderQuestion();
  }
}

// Enviar examen y calcular resultados
function submitQuiz() {
  const unansweredCount = state.selectedAnswers.filter(ans => ans === null).length;
  if (unansweredCount > 0) {
    const confirmSubmit = confirm(`Te faltan ${unansweredCount} preguntas por responder. ¿Estás seguro de que quieres finalizar el examen?`);
    if (!confirmSubmit) return;
  }
  
  state.isSubmitted = true;
  quizScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");
  
  calculateAndRenderResults();
}

// Calcular puntaje e imprimir reporte detallado
function calculateAndRenderResults() {
  let correctCount = 0;
  
  detailedResults.innerHTML = "";
  
  state.activeQuestions.forEach((q, idx) => {
    const selectedIdx = state.selectedAnswers[idx];
    const isCorrect = selectedIdx !== null && q.options[selectedIdx].isCorrect;
    
    if (isCorrect) correctCount++;
    
    // Crear bloque de resultados detallado
    const resultItem = document.createElement("div");
    resultItem.className = `result-item ${isCorrect ? "correct-card" : "incorrect-card"}`;
    
    let selectedText = selectedIdx !== null ? q.options[selectedIdx].text : "Sin respuesta";
    let correctText = q.options.find(opt => opt.isCorrect).text;
    
    resultItem.innerHTML = `
      <div class="result-header">
        <span class="result-badge ${isCorrect ? "badge-success" : "badge-danger"}">
          ${isCorrect ? "✓ Correcta" : "✗ Incorrecta"}
        </span>
        <span class="result-category">${q.category}</span>
      </div>
      <p class="result-q-text"><strong>Pregunta ${idx + 1}:</strong> ${q.question}</p>
      <div class="result-answers">
        <p><strong>Tu respuesta:</strong> <span class="${isCorrect ? "text-success" : "text-danger"}">${selectedText}</span></p>
        ${!isCorrect ? `<p><strong>Respuesta correcta:</strong> <span class="text-success">${correctText}</span></p>` : ""}
      </div>
      <div class="result-justification">
        <strong>Justificación:</strong> ${q.justification}
      </div>
      ${state.questionNotes[idx] ? `
        <div class="result-user-notes">
          <strong>Tus notas de esta pregunta:</strong> <em>"${state.questionNotes[idx]}"</em>
        </div>
      ` : ""}
    `;
    
    detailedResults.appendChild(resultItem);
  });
  
  const percentage = Math.round((correctCount / state.activeQuestions.length) * 100);
  scoreTitle.textContent = `Aciertos: ${correctCount} de ${state.activeQuestions.length}`;
  scorePercentage.textContent = `${percentage}%`;
  
  // Mensaje de desempeño según CENEVAL
  let performance = "";
  if (percentage >= 80) {
    performance = "¡Desempeño Sobresaliente! Estás listo para el examen.";
    scorePercentage.className = "score-number outstanding";
  } else if (percentage >= 60) {
    performance = "Desempeño Satisfactorio. Te sugerimos revisar las preguntas incorrectas.";
    scorePercentage.className = "score-number satisfactory";
  } else {
    performance = "Aún no Satisfactorio. Requiere estudio enfocado.";
    scorePercentage.className = "score-number not-satisfactory";
  }
  
  // Agregar notas generales al reporte
  if (state.generalNotes) {
    const genNotesBox = document.createElement("div");
    genNotesBox.className = "general-notes-report";
    genNotesBox.innerHTML = `
      <h3>📝 Notas y Dudas Generales Registradas:</h3>
      <p><em>"${state.generalNotes}"</em></p>
    `;
    detailedResults.insertBefore(genNotesBox, detailedResults.firstChild);
  }
  
  statusMessage.textContent = performance;
}

// Reiniciar simulador
function restartQuiz() {
  state.currentModuleName = "";
  state.activeQuestions = [];
  state.selectedAnswers = [];
  state.questionNotes = [];
  state.currentQuestionIndex = 0;
  state.generalNotes = "";
  state.isSubmitted = false;
  
  generalNotesInput.value = "";
  noteInput.value = "";
  
  resultsScreen.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");
  statusMessage.className = "status-info";
  statusMessage.textContent = "";
}

// Guardar los resultados en el servidor (resultados.json)
async function saveResultsToServer() {
  // Construir payload estructurado
  const resultsData = {
    timestamp: new Date().toISOString(),
    module: state.currentModuleName,
    score: {
      correct: state.selectedAnswers.reduce((acc, selectedIdx, idx) => {
        return acc + (selectedIdx !== null && state.activeQuestions[idx].options[selectedIdx].isCorrect ? 1 : 0);
      }, 0),
      total: state.activeQuestions.length,
      percentage: Math.round((state.selectedAnswers.reduce((acc, selectedIdx, idx) => {
        return acc + (selectedIdx !== null && state.activeQuestions[idx].options[selectedIdx].isCorrect ? 1 : 0);
      }, 0) / state.activeQuestions.length) * 100)
    },
    generalNotes: state.generalNotes,
    answers: state.activeQuestions.map((q, idx) => {
      const selectedIdx = state.selectedAnswers[idx];
      return {
        questionId: q.id,
        category: q.category,
        questionText: q.question,
        selectedAnswerIndex: selectedIdx,
        selectedText: selectedIdx !== null ? q.options[selectedIdx].text : "Sin responder",
        isCorrect: selectedIdx !== null && q.options[selectedIdx].isCorrect,
        correctText: q.options.find(opt => opt.isCorrect).text,
        justification: q.justification,
        userNote: state.questionNotes[idx] || ""
      };
    })
  };

  try {
    saveBtn.disabled = true;
    saveBtn.textContent = "Guardando...";
    
    const response = await fetch('/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resultsData)
    });
    
    if (response.ok) {
      statusMessage.className = "status-info success-msg";
      statusMessage.innerHTML = "<strong>✓ ¡Resultados guardados localmente!</strong> Puedes cerrar esta pestaña y regresar a Antigravity para que analice tus respuestas en <code>resultados.json</code>.";
      saveBtn.textContent = "¡Guardado con éxito!";
    } else {
      throw new Error("Error en la respuesta del servidor");
    }
  } catch (error) {
    console.error("Error al guardar:", error);
    statusMessage.className = "status-info error-msg";
    statusMessage.textContent = "Error al conectar con el servidor local. Asegúrate de estar ejecutando server.py y que tu navegador acceda por http://localhost:8000.";
    saveBtn.disabled = false;
    saveBtn.textContent = "Intentar Guardar de Nuevo";
  }
}
