import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Simulador EGEL Plus - Área 1: Análisis de Sistemas",
  description: "Preparación de alto rendimiento para el examen CENEVAL EGEL Plus ISOFT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="app-container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
