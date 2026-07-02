'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EstudioPage() {
  const [activeTab, setActiveTab] = useState('calidad');
  const [flippedCards, setFlippedCards] = useState({});
  const [studyNotes, setStudyNotes] = useState("");
  const [saveStatus, setSaveStatus] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Cargar notas al montar el componente
  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch('/api/load-notes');
        if (response.ok) {
          const data = await response.json();
          if (data && data.notes) {
            setStudyNotes(data.notes);
          }
        }
      } catch (err) {
        console.error("Error al cargar notas de estudio:", err);
      }
    }
    loadNotes();
  }, []);

  // Voltear tarjeta de memoria
  const toggleFlip = (cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // Guardar notas de estudio en el servidor local
  const saveNotes = async () => {
    setIsSaving(true);
    setSaveStatus("Guardando...");

    try {
      const response = await fetch('/api/save-notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          notes: studyNotes,
          lastUpdated: new Date().toISOString()
        })
      });
      if (response.ok) {
        setSaveStatus("✓ Guardado con éxito");
        setTimeout(() => {
          setSaveStatus("");
        }, 3000);
      } else {
        throw new Error();
      }
    } catch (err) {
      console.error(err);
      setSaveStatus("Error al conectar con la API.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      {/* Encabezado de la Guía */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>📚 GUÍA INTERACTIVA DE ESTUDIO</h1>
        <p className="subtitle" style={{ marginBottom: '20px' }}>
          Repasa los conceptos clave y trucos de examen para **UML** y **Atributos de Calidad**. Haz clic en los botones de pestañas y en las tarjetas para interactuar.
        </p>
      </div>

      {/* Menú de Pestañas */}
      <div className="tabs-buttons">
        <button 
          className={`tab-btn ${activeTab === 'calidad' ? 'active' : ''}`} 
          onClick={() => setActiveTab('calidad')}
        >
          Atributos de Calidad (ISO 25010)
        </button>
        <button 
          className={`tab-btn ${activeTab === 'casos' ? 'active' : ''}`} 
          onClick={() => setActiveTab('casos')}
        >
          UML: Casos de Uso
        </button>
        <button 
          className={`tab-btn ${activeTab === 'clases' ? 'active' : ''}`} 
          onClick={() => setActiveTab('clases')}
        >
          UML: Diagrama de Clases
        </button>
        <button 
          className={`tab-btn ${activeTab === 'secuencia' ? 'active' : ''}`} 
          onClick={() => setActiveTab('secuencia')}
        >
          UML: Diagrama de Secuencia
        </button>
      </div>

      {/* CONTENIDOS DE LAS PESTAÑAS */}

      {/* Pestaña 1: Atributos de Calidad */}
      {activeTab === 'calidad' && (
        <div id="tab-calidad" className="tab-content-panel">
          <h2>🔍 Atributos de Calidad de Software</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
            El examen evalúa si puedes asociar restricciones técnicas con sus respectivos atributos de calidad bajo el estándar <strong>ISO/IEC 25010</strong>.
          </p>
          
          <div className="flashcards-grid">
            {/* Card 1: Portabilidad */}
            <div className={`flashcard ${flippedCards['portabilidad'] ? 'flipped' : ''}`} onClick={() => toggleFlip('portabilidad')}>
              <div className="card-face card-front">
                <span>Atributo</span>
                <h3>Portabilidad</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Haz clic para girar</p>
              </div>
              <div className="card-face card-back">
                <h4>Portabilidad</h4>
                <p><strong>Clave CENEVAL:</strong> Ejecutar en diferentes entornos o sistemas operativos.</p>
                <p style={{ marginTop: '8px' }}><strong>Ejemplo:</strong> <em>"El sistema debe ser compatible con navegadores Android, iOS, Chrome y Edge."</em></p>
              </div>
            </div>
            
            {/* Card 2: Mantenibilidad */}
            <div className={`flashcard ${flippedCards['mantenibilidad'] ? 'flipped' : ''}`} onClick={() => toggleFlip('mantenibilidad')}>
              <div className="card-face card-front">
                <span>Atributo</span>
                <h3>Mantenibilidad</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Haz clic para girar</p>
              </div>
              <div className="card-face card-back">
                <h4>Mantenibilidad</h4>
                <p><strong>Clave CENEVAL:</strong> Facilidad para modificar, actualizar o corregir errores.</p>
                <p style={{ marginTop: '8px' }}><strong>Ejemplo:</strong> <em>"El tiempo máximo estimado para corregir un bug crítico no debe exceder las 4 horas."</em></p>
              </div>
            </div>
            
            {/* Card 3: Fiabilidad */}
            <div className={`flashcard ${flippedCards['fiabilidad'] ? 'flipped' : ''}`} onClick={() => toggleFlip('fiabilidad')}>
              <div className="card-face card-front">
                <span>Atributo</span>
                <h3>Fiabilidad</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Haz clic para girar</p>
              </div>
              <div className="card-face card-back">
                <h4>Fiabilidad</h4>
                <p><strong>Clave CENEVAL:</strong> Tolerar fallas y mantener la continuidad operativa.</p>
                <p style={{ marginTop: '8px' }}><strong>Ejemplo:</strong> <em>"Si se cae la red principal, el sistema debe activar la de respaldo en menos de 10s."</em></p>
              </div>
            </div>

            {/* Card 4: Usabilidad */}
            <div className={`flashcard ${flippedCards['usabilidad'] ? 'flipped' : ''}`} onClick={() => toggleFlip('usabilidad')}>
              <div className="card-face card-front">
                <span>Atributo</span>
                <h3>Usabilidad</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Haz clic para girar</p>
              </div>
              <div className="card-face card-back">
                <h4>Usabilidad</h4>
                <p><strong>Clave CENEVAL:</strong> Facilidad de aprendizaje, estética y operatividad del usuario.</p>
                <p style={{ marginTop: '8px' }}><strong>Ejemplo:</strong> <em>"Un usuario sin capacitación debe poder registrar una venta en menos de 2 minutos."</em></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pestaña 2: Casos de Uso */}
      {activeTab === 'casos' && (
        <div id="tab-casos" className="tab-content-panel">
          <h2>📐 UML: Diagrama de Casos de Uso</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
            Los casos de uso representan las funciones del sistema. La duda principal en el examen radica en diferenciar la obligatoriedad de la condicionalidad.
          </p>

          <div className="visual-diagram">
            <h4 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>Esquema de Relaciones</h4>
            
            {/* Caso Include */}
            <div className="diagram-row">
              <div className="diagram-element element-usecase">Transferir Fondos</div>
              <div className="diagram-arrow">
                <span>&lt;&lt;include&gt;&gt;</span>
                <span style={{ fontSize: '1.2rem' }}>➔</span>
              </div>
              <div className="diagram-element element-usecase" style={{ borderColor: 'var(--success)' }}>Validar Token</div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              <strong>Relación de Inclusión (Obligatoria):</strong> El sistema no puede transferir fondos si no valida el token. Ocurre siempre.
            </p>

            <hr style={{ width: '100%', border: 0, borderTop: '1px solid rgba(255,255,255,0.05)', margin: '15px 0' }} />

            {/* Caso Extend */}
            <div className="diagram-row">
              <div className="diagram-element element-usecase">Realizar Compra</div>
              <div className="diagram-arrow">
                <span>&lt;&lt;extend&gt;&gt;</span>
                <span style={{ fontSize: '1.2rem' }}>⤏</span>
              </div>
              <div className="diagram-element element-usecase" style={{ borderColor: 'var(--warning)' }}>Aplicar Cupón</div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              <strong>Relación de Extensión (Opcional):</strong> El usuario puede comprar de forma normal. Solo si tiene un cupón y decide ingresarlo, se extiende el caso de uso.
            </p>
          </div>

          <div className="comparison-card" style={{ background: 'rgba(255, 179, 0, 0.03)', borderColor: 'rgba(255, 179, 0, 0.1)', marginTop: '20px' }}>
            <h4 style={{ color: 'var(--warning)', marginBottom: '8px' }}>💡 Truco de Examen:</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.4 }}>
              Si el reactivo dice <em>"necesita obligatoriamente para completarse..."</em> la respuesta es <strong>&lt;&lt;include&gt;&gt;</strong>. Si el reactivo dice <em>"opcionalmente, en caso de que ocurra X evento..."</em> la respuesta es <strong>&lt;&lt;extend&gt;&gt;</strong>.
            </p>
          </div>
        </div>
      )}

      {/* Pestaña 3: Diagrama de Clases */}
      {activeTab === 'clases' && (
        <div id="tab-clases" className="tab-content-panel">
          <h2>◇ Relación Todo-Parte: Agregación vs Composición ◆</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Ambas representan relaciones donde una clase es "dueña" de otra, pero la diferencia radica en la dependencia del ciclo de vida de la parte respecto al todo.
          </p>

          <div className="comparison-grid">
            
            {/* Agregación */}
            <div className="comparison-card">
              <div className="comparison-header">
                <span style={{ color: 'var(--secondary)', fontSize: '1.5rem' }}>◇</span>
                <h3>Agregación (Relación Débil)</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.4, color: 'var(--text-muted)', marginBottom: '15px' }}>
                El objeto "parte" puede existir y seguir operando por sí solo, incluso si el objeto "todo" es destruido.
              </p>
              <div className="visual-diagram" style={{ padding: '10px', margin: '10px 0' }}>
                <div className="diagram-row" style={{ gap: '10px' }}>
                  <span className="diagram-element">Empresa</span>
                  <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>◇—</span>
                  <span className="diagram-element">Empleado</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.4 }}>
                <strong>Ejemplo:</strong> Si la empresa desaparece, los empleados no dejan de existir, simplemente se quedan sin empleo o se asocian a otra empresa.
              </p>
            </div>

            {/* Composición */}
            <div className="comparison-card" style={{ borderColor: 'rgba(255, 0, 127, 0.2)' }}>
              <div className="comparison-header">
                <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>◆</span>
                <h3>Composición (Relación Fuerte)</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.4, color: 'var(--text-muted)', marginBottom: '15px' }}>
                El objeto "parte" no tiene sentido de existir o se destruye físicamente cuando el objeto "todo" deja de existir.
              </p>
              <div className="visual-diagram" style={{ padding: '10px', margin: '10px 0' }}>
                <div className="diagram-row" style={{ gap: '10px' }}>
                  <span className="diagram-element">Escuela</span>
                  <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>◆—</span>
                  <span className="diagram-element">Aula</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.4 }}>
                <strong>Ejemplo:</strong> Si la escuela se destruye físicamente, las aulas físicas construidas dentro de ella también son destruidas y desaparecen.
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Pestaña 4: Diagrama de Secuencia */}
      {activeTab === 'secuencia' && (
        <div id="tab-secuencia" className="tab-content-panel">
          <h2>⏱️ UML: Diagrama de Secuencia</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
            Se enfoca en modelar la interacción entre los objetos a lo largo del tiempo. Es el diagrama por excelencia para modelar la dinámica de patrones como el MVC.
          </p>

          <div className="visual-diagram" style={{ alignItems: 'stretch', maxWidth: '600px', margin: '0 auto' }}>
            <h4 style={{ color: 'var(--secondary)', textAlign: 'center', marginBottom: '15px' }}>Componentes Críticos</h4>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--secondary)' }}>
                  <th style={{ padding: '8px' }}>Elemento</th>
                  <th style={{ padding: '8px' }}>Representación</th>
                  <th style={{ padding: '8px' }}>¿Qué indica?</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 600 }}>Línea de Vida (Lifeline)</td>
                  <td style={{ padding: '12px 8px', color: 'var(--warning)' }}>Línea punteada vertical</td>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>La existencia del objeto en el tiempo.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 600 }}>Foco de Control / Activación</td>
                  <td style={{ padding: '12px 8px', color: 'var(--warning)' }}>Rectángulo vertical sobre la línea</td>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>El período durante el cual el objeto está realizando una acción.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 600 }}>Llamada de Mensaje</td>
                  <td style={{ padding: '12px 8px', color: 'var(--warning)' }}>Flecha sólida continua (➔)</td>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>Envío de una petición o ejecución de método.</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 8px', fontWeight: 600 }}>Mensaje de Retorno</td>
                  <td style={{ padding: '12px 8px', color: 'var(--warning)' }}>Flecha punteada (⤏)</td>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>Devolución de datos al objeto llamador.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CUADERNO DE ANOTACIONES PERSISTENTES */}
      <div className="study-notepad">
        <div className="notepad-header">
          <h3 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            📝 Mi Libreta de Notas del Área 1
          </h3>
          {saveStatus && (
            <span className="notepad-status" style={{ color: saveStatus.startsWith('✓') ? 'var(--success)' : 'var(--error)' }}>
              {saveStatus}
            </span>
          )}
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '15px' }}>
          Anota definiciones con tus propias palabras, recordatorios o dudas. Tus notas se guardarán automáticamente en el servidor local de persistencia (<code>notas_estudio.json</code>) para que no las pierdas.
        </p>
        <textarea 
          className="styled-textarea" 
          placeholder="Escribe tus notas de estudio aquí..." 
          style={{ minHeight: '180px', fontSize: '1rem', padding: '15px', marginBottom: '20px' }}
          value={studyNotes}
          onChange={(e) => setStudyNotes(e.target.value)}
        />
        
        <div style={{ textAlign: 'right' }}>
          <button onClick={saveNotes} className="btn btn-primary" disabled={isSaving}>
            {isSaving ? "Guardando..." : "💾 Guardar Mis Notas de Estudio"}
          </button>
        </div>
      </div>
    </div>
  );
}
