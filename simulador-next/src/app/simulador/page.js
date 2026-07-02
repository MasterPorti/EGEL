'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Banco de preguntas personalizado para el ciclo 2 (5 Reales del PDF + 5 de IA - Área 1)
const questions = [
  {
    id: 1,
    category: "1.4 Estimación e Ingeniería (Real PDF)",
    question: "¿Cuál de los siguientes conceptos no se utiliza directamente para medir el tamaño lógico o físico del producto de software?",
    options: [
      { text: "A) KLOC (Líneas de Código).", isCorrect: false },
      { text: "B) Puntos de función.", isCorrect: false },
      { text: "C) Tamaño del módulo.", isCorrect: true }
    ],
    justification: "El volumen físico (líneas de código KLOC) o funcional (Puntos de Función) son métricas para medir el tamaño total del software. El tamaño de un módulo es una métrica de diseño/modularidad, no del tamaño de entrega del producto completo."
  },
  {
    id: 2,
    category: "1.1 Control de Cambios y Requerimientos (Real PDF)",
    question: "¿Qué término describe mejor el siguiente enunciado: 'Derivar información de trazabilidad para maximizar el ocultamiento de información en el diseño'?",
    options: [
      { text: "A) Tiempo de desarrollo subestimado.", isCorrect: false },
      { text: "B) Reestructuración organizacional.", isCorrect: false },
      { text: "C) Cambios de requisitos.", isCorrect: true }
    ],
    justification: "La trazabilidad de requerimientos es vital para gestionar los 'Cambios de Requisitos', permitiendo evaluar el impacto del cambio y cómo este afecta las decisiones de diseño del sistema."
  },
  {
    id: 3,
    category: "1.3 Documentación de Requerimientos (Real PDF)",
    question: "La comprobación cruzada en el diccionario de datos se refiere fundamentalmente a:",
    options: [
      { text: "A) Determinar en qué partes del sistema se utilizan y leen los datos.", isCorrect: true },
      { text: "B) Enlazar documentos mediante hipertexto.", isCorrect: false },
      { text: "C) Definir el formato de despliegue en hardware.", isCorrect: false }
    ],
    justification: "La comprobación cruzada o referencia cruzada permite saber exactamente en qué procesos, pantallas o módulos de código se están leyendo o modificando los objetos de datos definidos."
  },
  {
    id: 4,
    category: "1.1 Análisis de Requerimientos (Real PDF)",
    question: "Completa la afirmación: 'Cuanto más tiempo exista un error o falla en el software sin ser detectado...'",
    options: [
      { text: "A) Es menos probable que se corrija adecuadamente.", isCorrect: false },
      { text: "B) Cuanto más costoso es de detectar y corregir.", isCorrect: true },
      { text: "C) Más rápida se vuelve su eliminación.", isCorrect: false }
    ],
    justification: "Detectar un defecto en etapas tardías (ej. en producción) eleva exponencialmente el costo de corrección en comparación con detectarlo y resolverlo durante la fase de análisis de requerimientos."
  },
  {
    id: 5,
    category: "1.1 Análisis de Requerimientos (Real PDF)",
    question: "¿Cuáles de los siguientes son elementos que componen un sistema basado en computadora en el contexto de la ingeniería de sistemas?",
    options: [
      { text: "A) Solo el hardware y la topología de red.", isCorrect: false },
      { text: "B) Software, hardware, personas, bases de datos, documentación y procedimientos.", isCorrect: true },
      { text: "C) Solo el código fuente y las interfaces gráficas.", isCorrect: false }
    ],
    justification: "Un sistema basado en computadora es una estructura integrada por elementos que colaboran para procesar información: Software, Hardware, Gente (usuarios/operadores), Bases de Datos, Documentación y Procedimientos."
  },
  {
    id: 6,
    category: "1.2 Técnicas de Priorización (IA EGEL)",
    question: "En la priorización de requerimientos con el modelo Kano, un requerimiento que si está presente deleita al cliente, pero si no está presente no causa insatisfacción se clasifica como:",
    options: [
      { text: "A) Requerimiento Básico.", isCorrect: false },
      { text: "B) Requerimiento Deleitador (o Atractivo).", isCorrect: true },
      { text: "C) Requerimiento Lineal (o Unidimensional).", isCorrect: false }
    ],
    justification: "Los requerimientos deleitadores son características sorpresa. Su ausencia no molesta al cliente porque no los esperaba, pero su presencia eleva la satisfacción enormemente."
  },
  {
    id: 7,
    category: "1.3 Documentación - UML (IA EGEL)",
    question: "En un diagrama de secuencia UML, ¿cómo se representa gráficamente la destrucción de un objeto o el fin de su línea de vida?",
    options: [
      { text: "A) Con una gran letra 'X' al final del eje de su línea de vida.", isCorrect: true },
      { text: "B) Con una flecha de retorno doble hacia el objeto llamador.", isCorrect: false },
      { text: "C) Con un rombo negro relleno de destrucción.", isCorrect: false }
    ],
    justification: "La destrucción de un objeto o el cese de su rol en una interacción se denota colocando una gran cruz 'X' en la parte inferior de su línea de vida vertical."
  },
  {
    id: 8,
    category: "1.2 Técnicas de Elicitación (IA EGEL)",
    question: "¿Qué rol dentro de un taller JAD (Joint Application Design) se encarga de liderar las sesiones, mantener el enfoque, evitar debates infinitos y asegurar la participación de todos los stakeholders de forma imparcial?",
    options: [
      { text: "A) El Escribano (Scribe).", isCorrect: false },
      { text: "B) El Facilitador (Moderador).", isCorrect: true },
      { text: "C) El Patrocinador del Proyecto.", isCorrect: false }
    ],
    justification: "El Facilitador es una persona neutral que modera el taller JAD, guiando a los participantes para llegar a acuerdos y documentar requerimientos de manera eficiente."
  },
  {
    id: 9,
    category: "1.1 Atributos de Calidad - RNF (IA EGEL)",
    question: "Se especifica lo siguiente: 'El portal de inscripciones universitarias debe estar en línea y listo para recibir peticiones el 99.9% de las horas hábiles durante el periodo de matrícula.' ¿A qué categoría de requerimiento no funcional corresponde?",
    options: [
      { text: "A) Usabilidad.", isCorrect: false },
      { text: "B) Rendimiento.", isCorrect: false },
      { text: "C) Disponibilidad.", isCorrect: true }
    ],
    justification: "La disponibilidad mide el porcentaje de tiempo en que el sistema está completamente operativo y accesible para realizar sus funciones requeridas."
  },
  {
    id: 10,
    category: "1.1 Tipos de Requerimientos (IA EGEL)",
    question: "Un requerimiento especifica: 'Los cálculos del impuesto al valor agregado (IVA) deben regirse estrictamente según las tasas definidas por el artículo 1 de la Ley del Impuesto al Valor Agregado vigente.' ¿Qué tipo de requerimiento es?",
    options: [
      { text: "A) Requerimiento de Dominio.", isCorrect: true },
      { text: "B) Requerimiento de Interfaz.", isCorrect: false },
      { text: "C) Requerimiento Funcional de Rendimiento.", isCorrect: false }
    ],
    justification: "Los requerimientos de dominio son restricciones u obligaciones operativas derivadas directamente de las regulaciones, leyes o lógica del negocio de la industria en la que corre el software."
  }
];

export default function SimuladorPage() {
  const router = useRouter();

  // Estados locales de React
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(() => Array(questions.length).fill(null));
  const [questionNotes, setQuestionNotes] = useState(() => Array(questions.length).fill(""));
  const [generalNotes, setGeneralNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const selectOption = (optIdx) => {
    setSelectedAnswers(prev => {
      const copy = [...prev];
      copy[currentIdx] = optIdx;
      return copy;
    });
  };

  const handleNoteChange = (text) => {
    setQuestionNotes(prev => {
      const copy = [...prev];
      copy[currentIdx] = text;
      return copy;
    });
  };

  const nextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  const submitQuiz = () => {
    const unansweredCount = selectedAnswers.filter(ans => ans === null).length;
    if (unansweredCount > 0) {
      const confirmSubmit = window.confirm(`Te faltan ${unansweredCount} preguntas por responder. ¿Estás seguro de que quieres finalizar el examen?`);
      if (!confirmSubmit) return;
    }
    setIsSubmitted(true);
  };

  const restartQuiz = () => {
    router.push('/');
  };

  const saveResultsToServer = async () => {
    setIsSaving(true);
    setSaveStatus("Guardando...");

    const resultsData = {
      timestamp: new Date().toISOString(),
      module: "Simulador Personalizado: Área 1 (PDF + IA) - Ciclo 2",
      score: {
        correct: selectedAnswers.reduce((acc, selectedIdx, idx) => {
          return acc + (selectedIdx !== null && questions[idx].options[selectedIdx].isCorrect ? 1 : 0);
        }, 0),
        total: questions.length,
        percentage: Math.round((selectedAnswers.reduce((acc, selectedIdx, idx) => {
          return acc + (selectedIdx !== null && questions[idx].options[selectedIdx].isCorrect ? 1 : 0);
        }, 0) / questions.length) * 100)
      },
      generalNotes: generalNotes,
      answers: questions.map((q, idx) => {
        const selectedIdx = selectedAnswers[idx];
        return {
          questionId: q.id,
          category: q.category,
          questionText: q.question,
          selectedAnswerIndex: selectedIdx,
          selectedText: selectedIdx !== null ? q.options[selectedIdx].text : "Sin responder",
          isCorrect: selectedIdx !== null && q.options[selectedIdx].isCorrect,
          correctText: q.options.find(opt => opt.isCorrect).text,
          justification: q.justification,
          userNote: questionNotes[idx] || ""
        };
      })
    };

    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resultsData)
      });
      if (response.ok) {
        setSaveStatus("✓ ¡Resultados guardados! Avisa a Antigravity en el chat.");
      } else {
        throw new Error("Error en servidor");
      }
    } catch (err) {
      console.error(err);
      setSaveStatus("Error al conectar con la API.");
    } finally {
      setIsSaving(false);
    }
  };

  // Renderizado Condicional: Resultados
  if (isSubmitted) {
    const correctCount = selectedAnswers.reduce((acc, selectedIdx, idx) => {
      return acc + (selectedIdx !== null && questions[idx].options[selectedIdx].isCorrect ? 1 : 0);
    }, 0);
    const percentage = Math.round((correctCount / questions.length) * 100);

    let performanceClass = "score-number not-satisfactory";
    let performanceText = "Aún no Satisfactorio. Requiere estudio enfocado.";
    if (percentage >= 80) {
      performanceClass = "score-number outstanding";
      performanceText = "¡Desempeño Sobresaliente! Estás listo para el examen.";
    } else if (percentage >= 60) {
      performanceClass = "score-number satisfactory";
      performanceText = "Desempeño Satisfactorio. Te sugerimos revisar las preguntas incorrectas.";
    }

    return (
      <div id="results-screen">
        <div className="results-header-container">
          <h1>📊 Resultado del Simulador (Ciclo 2)</h1>
          <div className="score-circle-outer">
            <span className={performanceClass}>{percentage}%</span>
          </div>
          <h2>Aciertos: {correctCount} de {questions.length}</h2>
          <div className="status-info">{performanceText}</div>
        </div>

        {saveStatus && (
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span className={saveStatus.startsWith('✓') ? 'success-msg' : 'error-msg'}>
              {saveStatus}
            </span>
          </div>
        )}

        <h2 className="results-details-title">Retroalimentación y Cuaderno de Estudio</h2>
        <div id="detailed-results">
          {generalNotes && (
            <div className="general-notes-report">
              <h3>📝 Notas y Dudas Generales Registradas:</h3>
              <p><em>"{generalNotes}"</em></p>
            </div>
          )}

          {questions.map((q, idx) => {
            const selectedIdx = selectedAnswers[idx];
            const isCorrect = selectedIdx !== null && q.options[selectedIdx].isCorrect;
            const selectedText = selectedIdx !== null ? q.options[selectedIdx].text : "Sin respuesta";
            const correctText = q.options.find(opt => opt.isCorrect).text;

            return (
              <div key={idx} className={`result-item ${isCorrect ? 'correct-card' : 'incorrect-card'}`}>
                <div className="result-header">
                  <span className={`result-badge ${isCorrect ? 'badge-success' : 'badge-danger'}`}>
                    {isCorrect ? "✓ Correcta" : "✗ Incorrecta"}
                  </span>
                  <span className="result-category">{q.category}</span>
                </div>
                <p className="result-q-text"><strong>Pregunta {idx + 1}:</strong> {q.question}</p>
                <div className="result-answers">
                  <p><strong>Tu respuesta:</strong> <span className={isCorrect ? 'text-success' : 'text-danger'}>{selectedText}</span></p>
                  {!isCorrect && <p><strong>Respuesta correcta:</strong> <span className="text-success">{correctText}</span></p>}
                </div>
                <div className="result-justification">
                  <strong>Justificación:</strong> {q.justification}
                </div>
                {questionNotes[idx] && (
                  <div className="result-user-notes">
                    <strong>Tus notas de esta pregunta:</strong> <em>"{questionNotes[idx]}"</em>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="action-buttons">
          <button onClick={saveResultsToServer} className="btn btn-primary" disabled={isSaving}>
            {isSaving ? "Guardando..." : "💾 Guardar Resultados y Terminar"}
          </button>
          <button onClick={restartQuiz} className="btn btn-secondary">
            🔄 Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  // Renderizado: Preguntas e Interfaces del simulador
  const currentQuestion = questions[currentIdx];
  const progressPercent = ((currentIdx + 1) / questions.length) * 100;

  return (
    <div id="quiz-screen">
      <div className="progress-container">
        <div className="progress-bar-bg">
          <div id="progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <div id="progress-text">{Math.round(progressPercent)}% completado</div>
      </div>

      <div className="quiz-layout">
        {/* Panel Izquierdo: Pregunta y Opciones */}
        <div className="question-panel">
          <div id="question-category">
            Pregunta {currentIdx + 1} de {questions.length} | {currentQuestion.category}
          </div>
          <h2 id="question-text">{currentQuestion.question}</h2>
          <div id="options-container">
            {currentQuestion.options.map((opt, idx) => (
              <button 
                key={idx}
                className={`option-btn ${selectedAnswers[currentIdx] === idx ? 'selected' : ''}`}
                onClick={() => selectOption(idx)}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>

        {/* Panel Derecho: Notas */}
        <div className="sidebar-panel">
          <div className="note-box-card">
            <h4>✍️ Notas sobre esta pregunta</h4>
            <p>Escribe tus observaciones o dudas sobre este reactivo:</p>
            <textarea
              className="styled-textarea"
              placeholder="Escribe tus observaciones..."
              value={questionNotes[currentIdx] || ""}
              onChange={(e) => handleNoteChange(e.target.value)}
            />
          </div>

          <div className="note-box-card">
            <h4>💡 Dudas generales del Área 1</h4>
            <p>Anota los conceptos teóricos que sientas débiles:</p>
            <textarea
              className="styled-textarea"
              placeholder="Escribe tus dudas generales..."
              value={generalNotes}
              onChange={(e) => setGeneralNotes(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Navegación Inferior */}
      <div className="navigation-bar">
        <button 
          onClick={prevQuestion} 
          className="btn btn-secondary"
          style={{ display: currentIdx === 0 ? 'none' : 'inline-flex' }}
        >
          ← Anterior
        </button>
        
        {/* Botón de Terminar siempre visible */}
        <button 
          onClick={submitQuiz}
          className={`btn ${currentIdx === questions.length - 1 ? 'btn-accent' : 'btn-secondary'}`}
        >
          Terminar Examen ✓
        </button>

        <button 
          onClick={nextQuestion} 
          className="btn btn-primary"
          style={{ display: currentIdx === questions.length - 1 ? 'none' : 'inline-flex' }}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}
