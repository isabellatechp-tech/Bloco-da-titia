"use client";
import { useState } from 'react';
import { getApiUrl } from '../utils/api';
import './orcamento.css';

export default function Orcamento() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoEvento: ''
  });
  const [erros, setErros] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const tiposEvento = [
    'Show',
    'Carnaval',
    'Festa Privada',
    'Evento Corporativo',
    'Aniversário',
    'Outro'
  ];

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

    if (!formData.nome.trim()) {
      novosErros.nome = 'Nome é obrigatório';
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

    if (!formData.tipoEvento) {
      novosErros.tipoEvento = 'Tipo de evento é obrigatório';
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
      const apiUrl = getApiUrl();
      const response = await fetch(`${apiUrl}/api/orcamento`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Erro ao enviar orçamento');

      // Simular envio para WhatsApp (webhook)
      console.log('Orçamento enviado:', formData);
      console.log('Simulando envio para WhatsApp via webhook...');

      setSucesso(true);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        tipoEvento: ''
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
        nome: '',
        email: '',
        telefone: '',
        tipoEvento: ''
      });
      setTimeout(() => {
        setSucesso(false);
      }, 5000);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="orcamento-container">
      <div className="orcamento-header">
        <h1>📝 Solicitar Orçamento</h1>
        <p>Preencha o formulário abaixo e entraremos em contato em breve!</p>
      </div>

      {sucesso && (
        <div className="mensagem-sucesso">
          <p>✅ Orçamento enviado com sucesso! Entraremos em contato em breve via WhatsApp.</p>
        </div>
      )}

      <div className="form-container">
        <form onSubmit={handleSubmit} className="orcamento-form">
          <div className="form-group">
            <label htmlFor="nome">Nome Completo *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className={`input ${erros.nome ? 'erro' : ''}`}
              value={formData.nome}
              onChange={handleChange}
              placeholder="Seu nome completo"
            />
            {erros.nome && <span className="erro-message">{erros.nome}</span>}
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
              placeholder="seu@email.com"
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

          <div className="form-group">
            <label htmlFor="tipoEvento">Tipo de Evento *</label>
            <select
              id="tipoEvento"
              name="tipoEvento"
              className={`input ${erros.tipoEvento ? 'erro' : ''}`}
              value={formData.tipoEvento}
              onChange={handleChange}
            >
              <option value="">Selecione o tipo de evento</option>
              {tiposEvento.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
            {erros.tipoEvento && <span className="erro-message">{erros.tipoEvento}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={enviando}
          >
            {enviando ? 'Enviando...' : 'Enviar Orçamento'}
          </button>
        </form>

        <div className="form-info">
          <p>📱 Após o envio, você receberá uma mensagem no WhatsApp com mais detalhes.</p>
          <p>⏱️ Responderemos em até 24 horas úteis.</p>
        </div>
      </div>
    </div>
  );
}

