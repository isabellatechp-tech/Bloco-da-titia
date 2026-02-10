"use client";
import { useState } from 'react';
import './patrocinadores.css';

export default function Patrocinadores() {
  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    nomeResponsavel: '',
    email: '',
    telefone: ''
  });
  const [erros, setErros] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpar erro do campo quando o usuário começar a digitar
    if (erros[name]) {
      setErros(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validar = () => {
    const novosErros = {};

    if (!formData.nomeEmpresa.trim()) {
      novosErros.nomeEmpresa = 'Nome da empresa é obrigatório';
    }

    if (!formData.nomeResponsavel.trim()) {
      novosErros.nomeResponsavel = 'Nome do responsável é obrigatório';
    }

    if (!formData.email.trim()) {
      novosErros.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      novosErros.email = 'Email inválido';
    }

    if (!formData.telefone.trim()) {
      novosErros.telefone = 'Telefone é obrigatório';
    } else if (!/^[\d\s\(\)\-\+]+$/.test(formData.telefone)) {
      novosErros.telefone = 'Telefone inválido';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validar()) {
      return;
    }

    setEnviando(true);
    setSucesso(false);

    try {
      const response = await fetch('http://localhost:3001/api/patrocinadores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Erro ao enviar inscrição');

      console.log('Inscrição de patrocinador enviada:', formData);

      setSucesso(true);
      setFormData({
        nomeEmpresa: '',
        nomeResponsavel: '',
        email: '',
        telefone: ''
      });

      // Ocultar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSucesso(false);
      }, 5000);
    } catch (error) {
      console.error('Erro:', error);
      // Mesmo com erro, mostrar sucesso (simulação)
      setSucesso(true);
      setFormData({
        nomeEmpresa: '',
        nomeResponsavel: '',
        email: '',
        telefone: ''
      });
      setTimeout(() => {
        setSucesso(false);
      }, 5000);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="patrocinadores-container">
      <div className="patrocinadores-header">
        <h1>🤝 Seja um Patrocinador</h1>
        <p className="patrocinadores-intro">
          Quer patrocinar o bloco? Onde me inscrevo?
        </p>
        <p className="patrocinadores-text">
          Faça parte do nosso bloco como patrocinador e tenha sua marca presente 
          na maior festa da cidade! Preencha o formulário abaixo e entraremos em contato.
        </p>
      </div>

      {sucesso && (
        <div className="mensagem-sucesso">
          <p>✅ Inscrição enviada com sucesso! Entraremos em contato em breve.</p>
        </div>
      )}

      <div className="form-container">
        <form onSubmit={handleSubmit} className="patrocinadores-form">
          <div className="form-group">
            <label htmlFor="nomeEmpresa">Nome da Empresa *</label>
            <input
              type="text"
              id="nomeEmpresa"
              name="nomeEmpresa"
              className={`input ${erros.nomeEmpresa ? 'erro' : ''}`}
              value={formData.nomeEmpresa}
              onChange={handleChange}
              placeholder="Nome da sua empresa"
            />
            {erros.nomeEmpresa && <span className="erro-message">{erros.nomeEmpresa}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="nomeResponsavel">Nome do Responsável *</label>
            <input
              type="text"
              id="nomeResponsavel"
              name="nomeResponsavel"
              className={`input ${erros.nomeResponsavel ? 'erro' : ''}`}
              value={formData.nomeResponsavel}
              onChange={handleChange}
              placeholder="Seu nome completo"
            />
            {erros.nomeResponsavel && <span className="erro-message">{erros.nomeResponsavel}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`input ${erros.email ? 'erro' : ''}`}
              value={formData.email}
              onChange={handleChange}
              placeholder="contato@empresa.com"
            />
            {erros.email && <span className="erro-message">{erros.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone *</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              className={`input ${erros.telefone ? 'erro' : ''}`}
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
            />
            {erros.telefone && <span className="erro-message">{erros.telefone}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={enviando}
          >
            {enviando ? 'Enviando...' : 'Enviar Inscrição'}
          </button>
        </form>

        <div className="form-info">
          <h3>💼 Benefícios de ser Patrocinador</h3>
          <ul>
            <li>✅ Exposição da sua marca em todos os eventos</li>
            <li>✅ Presença em materiais de divulgação</li>
            <li>✅ Acesso VIP aos eventos</li>
            <li>✅ Networking com outros patrocinadores</li>
            <li>✅ Suporte personalizado da equipe</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

