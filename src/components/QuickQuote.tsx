import React, { useState } from 'react';
import { Laptop, Monitor, Smartphone, Printer, Cpu, MessageSquare, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const QuickQuote: React.FC = () => {
  const [deviceType, setDeviceType] = useState('Notebook');
  const [issue, setIssue] = useState('Não liga');
  const [urgency, setUrgency] = useState('Normal (Hoje/Amanhã)');

  const devices = [
    { id: 'Notebook', label: 'Notebook', icon: Laptop },
    { id: 'MacBook', label: 'MacBook / Apple', icon: Cpu },
    { id: 'PC Gamer', label: 'PC Gamer / Desktop', icon: Monitor },
    { id: 'Celular', label: 'Celular / Tablet', icon: Smartphone },
    { id: 'Impressora', label: 'Impressora', icon: Printer }
  ];

  const commonIssues = [
    'Não liga / Sem sinal',
    'Tela quebrada / Display piscando',
    'Muito lento / Travando muito',
    'Esquentando / Desligando sozinho',
    'Caiu líquido / Molhou',
    'Bateria não segura carga',
    'Vírus / Formatação / Limpeza',
    'Outro problema'
  ];

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá FLT Infotech! Gostaria de um orçamento rápido:\n- *Equipamento:* ${deviceType}\n- *Problema:* ${issue}\n- *Urgência:* ${urgency}\n- *Local:* Santos / Baixada Santista\nPodem me passar uma estimativa de prazo e valor?`;
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="simulador" className="py-20 bg-[#060a08] relative border-y border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff01]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#00ff01] uppercase tracking-wider bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/40">
            Orçamento na Hora
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-2 tracking-tight">
            Simulador de Orçamento Sem Compromisso
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Selecione o seu aparelho e o sintoma abaixo. Nossa equipe técnica responde com estimativa em minutos.
          </p>
        </div>

        <form onSubmit={handleSendQuote} className="bg-[#090f0c] border border-[#00ff01]/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,255,1,0.15)]">
          
          {/* Passo 1: Tipo de Dispositivo */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-slate-200 mb-3">
              1. Qual é o seu equipamento?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {devices.map((dev) => {
                const Icon = dev.icon;
                const isSelected = deviceType === dev.id;
                return (
                  <button
                    type="button"
                    key={dev.id}
                    onClick={() => setDeviceType(dev.id)}
                    className={`p-3.5 rounded-2xl flex flex-col items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#00ff01] text-black shadow-[0_0_20px_rgba(0,255,1,0.4)] scale-102 border-transparent'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{dev.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Passo 2: Sintoma Principal */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-slate-200 mb-3">
              2. Qual o principal sintoma ou serviço desejado?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {commonIssues.map((item) => {
                const isSelected = issue === item;
                return (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setIssue(item)}
                    className={`p-3 rounded-xl text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-950/80 text-[#00ff01] border-2 border-[#00ff01] shadow-sm'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                    }`}
                  >
                    <span>{item}</span>
                    {isSelected && <Check className="w-4 h-4 text-[#00ff01]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Passo 3: Urgência */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-slate-200 mb-3">
              3. Nível de prioridade:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: 'Urgente (Trabalho/Estudo)', val: 'Urgente (Hoje)' },
                { label: 'Normal (1 a 2 dias úteis)', val: 'Normal' },
                { label: 'Apenas orçamento prévio', val: 'Apenas cotação' }
              ].map((urg) => {
                const isSelected = urgency === urg.val;
                return (
                  <button
                    type="button"
                    key={urg.val}
                    onClick={() => setUrgency(urg.val)}
                    className={`p-3 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#00ff01]/20 text-[#00ff01] border border-[#00ff01]'
                        : 'bg-white/5 hover:bg-white/10 text-slate-400 border border-white/10'
                    }`}
                  >
                    {urg.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-[#00ff01] hover:bg-[#00dd01] text-black font-black text-base flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,255,1,0.5)] hover:shadow-[0_0_40px_rgba(0,255,1,0.7)] transition-all hover:scale-[1.02] cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-black" />
            <span>Enviar e Receber Orçamento no WhatsApp Agora</span>
          </button>

          <p className="text-center text-xs text-slate-400 mt-4">
            🔒 Seus dados são confidenciais. Orçamento sem compromisso no horário comercial da loja.
          </p>
        </form>

      </div>
    </section>
  );
};
