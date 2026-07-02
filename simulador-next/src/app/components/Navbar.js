'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="study-nav">
      <h2 style={{
        fontWeight: 700, 
        fontSize: '1.4rem', 
        background: 'linear-gradient(135deg, #fff 0%, var(--secondary) 100%)', 
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent'
      }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          🎓 EGEL Plus ISOFT
        </Link>
      </h2>
      <div className="study-nav-links">
        <Link href="/simulador" className={`study-nav-link ${pathname === '/simulador' ? 'active' : ''}`}>
          Simulador
        </Link>
        <Link href="/estudio" className={`study-nav-link ${pathname === '/estudio' ? 'active' : ''}`}>
          Guía Interactiva
        </Link>
      </div>
    </div>
  );
}
