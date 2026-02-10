"use client";
import Link from 'next/link';
import './page.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Bem-vindo ao Bloco Carnaval! 🎭</h1>
        <p className="welcome-text">
          A festa mais animada e colorida da cidade está chegando! 
          Explore nossos módulos e faça parte dessa celebração única.
        </p>
      </div>

      <div className="modules-grid">
        <Link href="/loja" className="module-card">
          <div className="module-icon">🛒</div>
          <h3>Loja do Bloco</h3>
          <p>Compre produtos exclusivos: garrafinhas, abadás e muito mais!</p>
        </Link>

        <Link href="/agenda" className="module-card">
          <div className="module-icon">📅</div>
          <h3>Agenda de Eventos</h3>
          <p>Confira todos os shows e eventos do nosso bloco</p>
        </Link>

        <Link href="/fotos" className="module-card">
          <div className="module-icon">📸</div>
          <h3>Galeria de Fotos</h3>
          <p>Veja os melhores momentos das nossas festas</p>
        </Link>

        <Link href="/orcamento" className="module-card">
          <div className="module-icon">📝</div>
          <h3>Solicitar Orçamento</h3>
          <p>Peça um orçamento personalizado para seu evento</p>
        </Link>

        <Link href="/patrocinadores" className="module-card">
          <div className="module-icon">🤝</div>
          <h3>Seja um Patrocinador</h3>
          <p>Faça parte do nosso bloco como patrocinador</p>
        </Link>
      </div>

      <div className="info-section">
        <h2>🎉 Sobre o Bloco</h2>
        <p>
          O Bloco Carnaval é uma tradição que une pessoas de todas as idades 
          em uma celebração única de alegria, música e cores. Junte-se a nós 
          nessa festa inesquecível!
        </p>
      </div>
    </div>
  );
}
