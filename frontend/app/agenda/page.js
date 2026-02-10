"use client";
import { useEffect, useState } from 'react';
import './agenda.css';

export default function Agenda() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mesAtual, setMesAtual] = useState(new Date());
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetchEventos();
  }, []);

  const fetchEventos = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3001/api/agenda');
      if (!response.ok) throw new Error('Erro ao buscar eventos');
      const data = await response.json();
      setEventos(data.map(evento => ({
        ...evento,
        data: new Date(evento.data + 'T00:00:00')
      })));
    } catch (error) {
      console.error('Erro:', error);
      setErro('Não foi possível conectar ao backend. Usando dados mockados.');
      // Dados mockados como fallback
      const hoje = new Date();
      setEventos([
        { data: new Date(hoje.getFullYear(), hoje.getMonth(), 13), evento: "Abertura do Bloco", local: "Praça Central" },
        { data: new Date(hoje.getFullYear(), hoje.getMonth(), 14), evento: "Show Principal", local: "Palco Principal" },
        { data: new Date(hoje.getFullYear(), hoje.getMonth(), 15), evento: "Encerramento", local: "Praça Central" },
        { data: new Date(hoje.getFullYear(), hoje.getMonth(), 16), evento: "After Party", local: "Clube Noturno" },
        { data: new Date(hoje.getFullYear(), hoje.getMonth(), 20), evento: "Bloco Infantil", local: "Parque da Cidade" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const mudarMes = (direcao) => {
    setMesAtual(new Date(mesAtual.getFullYear(), mesAtual.getMonth() + direcao, 1));
  };

  const getDiasDoMes = () => {
    const primeiroDia = new Date(mesAtual.getFullYear(), mesAtual.getMonth(), 1);
    const ultimoDia = new Date(mesAtual.getFullYear(), mesAtual.getMonth() + 1, 0);
    const dias = [];
    
    // Adicionar dias vazios do início
    for (let i = 0; i < primeiroDia.getDay(); i++) {
      dias.push(null);
    }
    
    // Adicionar dias do mês
    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
      dias.push(new Date(mesAtual.getFullYear(), mesAtual.getMonth(), dia));
    }
    
    return dias;
  };

  const getEventosDoDia = (data) => {
    if (!data) return [];
    return eventos.filter(evento => {
      return evento.data.getDate() === data.getDate() &&
             evento.data.getMonth() === data.getMonth() &&
             evento.data.getFullYear() === data.getFullYear();
    });
  };

  const eventosOrdenados = [...eventos].sort((a, b) => a.data - b.data);

  return (
    <div className="agenda-container">
      <div className="agenda-header">
        <h1>📅 Agenda de Eventos</h1>
        <p>Confira todos os shows e eventos do nosso bloco</p>
      </div>

      {loading && (
        <div className="loading">
          <p>Carregando eventos...</p>
        </div>
      )}

      {erro && (
        <div className="erro-message">
          <p>⚠️ {erro}</p>
        </div>
      )}

      {!loading && (
        <>
          {/* Calendário */}
          <div className="calendario-section">
            <div className="calendario-header">
              <button className="btn-nav" onClick={() => mudarMes(-1)}>‹</button>
              <h2>{meses[mesAtual.getMonth()]} {mesAtual.getFullYear()}</h2>
              <button className="btn-nav" onClick={() => mudarMes(1)}>›</button>
            </div>

            <div className="calendario-grid">
              {diasSemana.map(dia => (
                <div key={dia} className="calendario-dia-header">{dia}</div>
              ))}
              
              {getDiasDoMes().map((data, index) => {
                const eventosDoDia = getEventosDoDia(data);
                const hoje = new Date();
                const isHoje = data && 
                  data.getDate() === hoje.getDate() &&
                  data.getMonth() === hoje.getMonth() &&
                  data.getFullYear() === hoje.getFullYear();
                
                return (
                  <div
                    key={index}
                    className={`calendario-dia ${!data ? 'vazio' : ''} ${isHoje ? 'hoje' : ''} ${eventosDoDia.length > 0 ? 'com-evento' : ''}`}
                  >
                    {data && (
                      <>
                        <span className="dia-numero">{data.getDate()}</span>
                        {eventosDoDia.length > 0 && (
                          <span className="evento-indicador">{eventosDoDia.length}</span>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lista de Eventos */}
          <div className="eventos-lista">
            <h2>Próximos Eventos</h2>
            {eventosOrdenados.length === 0 ? (
              <p className="sem-eventos">Nenhum evento agendado</p>
            ) : (
              <div className="eventos-grid">
                {eventosOrdenados.map((evento, index) => (
                  <div key={index} className="evento-card card">
                    <div className="evento-data">
                      <span className="dia">{evento.data.getDate()}</span>
                      <span className="mes">{meses[evento.data.getMonth()].substring(0, 3)}</span>
                    </div>
                    <div className="evento-info">
                      <h3>{evento.evento}</h3>
                      <p className="evento-local">📍 {evento.local || 'Local a definir'}</p>
                      <p className="evento-horario">
                        {evento.data.toLocaleDateString('pt-BR', { 
                          weekday: 'long',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

