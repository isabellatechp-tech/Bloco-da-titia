"use client";
import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';
import './fotos.css';

export default function Fotos() {
  const [fotos, setFotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState('');
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetchFotos();
  }, []);

  const fetchFotos = async () => {
    try {
      setLoading(true);
      const apiUrl = getApiUrl();
      const response = await fetch(`${apiUrl}/api/fotos`);
      if (!response.ok) throw new Error('Erro ao buscar fotos');
      const data = await response.json();
      setFotos(data);
    } catch (error) {
      console.error('Erro:', error);
      setErro('Não foi possível conectar ao backend. Usando dados mockados.');
      // Dados mockados como fallback
      const eventos = ['Abertura', 'Show Principal', 'Encerramento', 'After Party', 'Bloco Infantil'];
      const fotosMockadas = [];
      for (let i = 0; i < 20; i++) {
        fotosMockadas.push({
          id: i + 1,
          evento: eventos[Math.floor(Math.random() * eventos.length)],
          foto: `https://picsum.photos/400/400?random=${i + 1}`
        });
      }
      setFotos(fotosMockadas);
    } finally {
      setLoading(false);
    }
  };

  const eventosUnicos = [...new Set(fotos.map(foto => foto.evento))];

  const fotosFiltradas = fotos.filter(foto =>
    foto.evento.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="fotos-container">
      <div className="fotos-header">
        <h1>📸 Galeria de Fotos</h1>
        <p>Veja os melhores momentos das nossas festas</p>
      </div>

      {loading && (
        <div className="loading">
          <p>Carregando fotos...</p>
        </div>
      )}

      {erro && (
        <div className="erro-message">
          <p>⚠️ {erro}</p>
        </div>
      )}

      {!loading && (
        <>
          {/* Filtros */}
          <div className="filtros-section">
            <div className="filtro-input">
              <input
                type="text"
                className="input"
                placeholder="🔍 Pesquisar por evento..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
              />
            </div>
            
            <div className="filtro-buttons">
              <button
                className={`filtro-btn ${filtro === '' ? 'active' : ''}`}
                onClick={() => setFiltro('')}
              >
                Todos
              </button>
              {eventosUnicos.map((evento) => (
                <button
                  key={evento}
                  className={`filtro-btn ${filtro === evento ? 'active' : ''}`}
                  onClick={() => setFiltro(evento)}
                >
                  {evento}
                </button>
              ))}
            </div>
          </div>

          {/* Galeria */}
          {fotosFiltradas.length === 0 ? (
            <div className="sem-fotos">
              <p>Nenhuma foto encontrada para "{filtro}"</p>
            </div>
          ) : (
            <>
              <div className="fotos-info">
                <p>
                  {fotosFiltradas.length} {fotosFiltradas.length === 1 ? 'foto encontrada' : 'fotos encontradas'}
                  {filtro && ` para "${filtro}"`}
                </p>
              </div>

              <div className="galeria-grid">
                {fotosFiltradas.map((foto) => (
                  <div key={foto.id} className="foto-card card">
                    <div className="foto-imagem">
                      <img src={foto.foto} alt={foto.evento} />
                      <div className="foto-overlay">
                        <span className="foto-evento">{foto.evento}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

