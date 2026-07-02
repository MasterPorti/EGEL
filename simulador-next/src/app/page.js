import Link from 'next/link';

export default function Home() {
  return (
    <div id="welcome-screen">
      <h1>🎯 SIMULADOR EGEL PLUS</h1>
      <h2>Área 1: Análisis de Sistemas de Software</h2>
      <p className="subtitle">
        Prepárate para obtener el nivel de <strong>Sobresaliente</strong> con este simulador interactivo de 10 reactivos (5 reales obtenidos de tu guía PDF + 5 elaborados por IA) sobre elicitación, requerimientos y modelado UML.
      </p>
      
      <div className="features-grid">
        <div className="feature-card">
          <span className="feature-icon">📋</span>
          <h3>Reactivos del PDF Real</h3>
          <p>Preguntas reales extraídas del material de preparación para el EGEL Plus ISOFT.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🧠</span>
          <h3>Reactivos de IA</h3>
          <p>Preguntas elaboradas por inteligencia artificial estructuradas con formato oficial CENEVAL de 3 opciones.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">💾</span>
          <h3>Libreta de Notas</h3>
          <p>Escribe notas o dudas por pregunta que se guardarán localmente para su posterior análisis.</p>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
        <Link href="/simulador" className="btn btn-primary">
          Iniciar Cuestionario (Área 1: PDF + IA) →
        </Link>
      </div>
    </div>
  );
}
