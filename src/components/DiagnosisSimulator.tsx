import React, { useState } from 'react';
import { 
  Wrench, 
  Laptop, 
  Cpu, 
  Gamepad2, 
  Printer, 
  Smartphone, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface EquipmentOption {
  id: string;
  name: string;
  icon: string;
}

interface IssueOption {
  id: string;
  label: string;
  hint: string;
}

export const DiagnosisSimulator: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<string>('notebook');
  const [selectedIssue, setSelectedIssue] = useState<string>('lento');
  const [brand, setBrand] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');

  const devices: EquipmentOption[] = [
    { id: 'notebook', name: 'Notebook', icon: 'Laptop' },
    { id: 'macbook', name: 'MacBook (Apple)', icon: 'Laptop' },
    { id: 'pc', name: 'PC Desktop / Escritório', icon: 'Cpu' },
    { id: 'pcgamer', name: 'PC Gamer', icon: 'Gamepad2' },
    { id: 'printer', name: 'Impressora / Copiadora', icon: 'Printer' },
    { id: 'mobile', name: 'Celular ou Tablet', icon: 'Smartphone' },
  ];

  const issues: IssueOption[] = [
    { id: 'lento', label: 'Muito lento, travando ou com vírus', hint: 'Upgrade de SSD + Memória ou formatação rápida com backup.' },
    { id: 'nao-liga', label: 'Não liga, desliga sozinho ou sem vídeo', hint: 'Diagnóstico em circuito elétrico, fonte ou placa-mãe no Macuco.' },
    { id: 'tela', label: 'Tela quebrada, piscando ou com linhas', hint: 'Substituição com tela de reposição de qualidade e garantia.' },
    { id: 'aquecimento', label: 'Superaquecimento / Cooler muito barulhento', hint: 'Limpeza térmica profunda e troca de pasta de alta condutividade.' },
    { id: 'teclado-bateria', label: 'Bateria descarrega rápido / Teclado falha', hint: 'Troca de bateria com células novas e teclado padrão ABNT2.' },
    { id: 'placa-mae', label: 'Condenaram a placa-mãe em outra assistência', hint: 'Especialidade FLT: reparo em micro-solda sem trocar a placa inteira.' },
    { id: 'locacao', label: 'Locação de impressora / Outsourcing corporativo', hint: 'Planos completos com insumos e manutenção para empresas em Santos.' },
    { id: 'outro', label: 'Outro problema específico', hint: 'Fale diretamente com nosso técnico para uma avaliação sob medida.' },
  ];

  const getDeviceName = (id: string) => devices.find(d => d.id === id)?.name || id;
  const getIssueLabel = (id: string) => issues.find(i => i.id === id)?.label || id;

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const deviceName = getDeviceName(selectedDevice);
    const issueText = getIssueLabel(selectedIssue);
    const brandText = brand.trim() ? `Marca/Modelo: ${brand.trim()}` : '';
    const nameText = customerName.trim() ? `Meu nome é ${customerName.trim()}` : 'Olá';
    const locationText = neighborhood.trim() ? `Estou em: ${neighborhood.trim()}` : 'Santos/Baixada Santista';

    const message = `${nameText}. Gostaria de um orçamento na FLT Infotech:
• Equipamento: ${deviceName}
${brandText ? `• ${brandText}\n` : ''}• Sintoma/Necessidade: ${issueText}
• Localização: ${locationText}

Poderiam me informar sobre a disponibilidade e previsão de orçamento?`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="simulador" className="py-20 bg-gradient-to-b from-[#080c0a] via-[#0d1611] to-[#080c0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-[#00ff01]">
            <Zap className="w-3.5 h-3.5" />
            Atendimento Rápido e Sem Compromisso
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Simulador de Diagnóstico & Orçamento Rápido
          </h2>
          <p className="text-base text-slate-300">
            Selecione seu aparelho e o problema identificado para receber uma prévia de atendimento no WhatsApp em minutos.
          </p>
        </div>

        {/* Interactive Simulator Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950/90 border border-emerald-500/30 p-6 sm:p-10 shadow-2xl shadow-emerald-950/40 relative">
          
          <form onSubmit={handleSendToWhatsApp} className="space-y-8">
            
            {/* Step 1: Device Selection */}
            <div>
              <label className="block text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#00ff01] text-black text-xs font-black flex items-center justify-center">1</span>
                Qual é o seu equipamento?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {devices.map((device) => {
                  const isSelected = selectedDevice === device.id;
                  return (
                    <button
                      type="button"
                      key={device.id}
                      onClick={() => setSelectedDevice(device.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-950/70 border-[#00ff01] shadow-[0_0_15px_rgba(0,255,1,0.25)] text-white'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        {device.id === 'notebook' || device.id === 'macbook' ? (
                          <Laptop className={`w-5 h-5 ${isSelected ? 'text-[#00ff01]' : 'text-slate-400'}`} />
                        ) : device.id === 'pcgamer' ? (
                          <Gamepad2 className={`w-5 h-5 ${isSelected ? 'text-[#00ff01]' : 'text-slate-400'}`} />
                        ) : device.id === 'printer' ? (
                          <Printer className={`w-5 h-5 ${isSelected ? 'text-[#00ff01]' : 'text-slate-400'}`} />
                        ) : device.id === 'mobile' ? (
                          <Smartphone className={`w-5 h-5 ${isSelected ? 'text-[#00ff01]' : 'text-slate-400'}`} />
                        ) : (
                          <Cpu className={`w-5 h-5 ${isSelected ? 'text-[#00ff01]' : 'text-slate-400'}`} />
                        )}
                        {isSelected && <span className="w-2 h-2 rounded-full bg-[#00ff01]"></span>}
                      </div>
                      <span className="text-xs sm:text-sm font-bold">{device.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Issue Selection */}
            <div>
              <label className="block text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#00ff01] text-black text-xs font-black flex items-center justify-center">2</span>
                O que está acontecendo com o aparelho?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {issues.map((issue) => {
                  const isSelected = selectedIssue === issue.id;
                  return (
                    <button
                      type="button"
                      key={issue.id}
                      onClick={() => setSelectedIssue(issue.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-950/70 border-[#00ff01] text-white shadow-[0_0_15px_rgba(0,255,1,0.2)]'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold mb-1 flex items-center justify-between">
                        <span>{issue.label}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#00ff01] shrink-0 ml-1" />}
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight">{issue.hint}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Optional Quick Details */}
            <div className="pt-2 border-t border-slate-800">
              <label className="block text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#00ff01] text-black text-xs font-black flex items-center justify-center">3</span>
                Seus dados para agilizar o contato (Opcional):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <input
                    type="text"
                    placeholder="Seu Nome"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00ff01] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Marca/Modelo (Ex: Dell Inspiron)"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00ff01] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Seu Bairro / Cidade (Ex: Macuco, Santos)"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00ff01] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Diagnostic Guarantee Box */}
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00ff01] shrink-0" />
                <span>
                  <strong className="text-white">Garantia Formal FLT:</strong> Sem custo para análise inicial na bancada. Orçamento com valor e prazo exatos antes de qualquer serviço.
                </span>
              </div>
              <span className="shrink-0 text-emerald-400 font-bold bg-black/60 px-2.5 py-1 rounded border border-emerald-500/30">
                Segurança 100%
              </span>
            </div>

            {/* Submit CTA Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#00ff01] hover:bg-[#1eff20] active:scale-[0.99] text-black text-base font-bold shadow-[0_0_25px_rgba(0,255,1,0.4)] hover:shadow-[0_0_35px_rgba(0,255,1,0.6)] transition-all flex items-center justify-center gap-3 cursor-pointer"
                id="simulator-submit-btn"
              >
                <MessageSquare className="w-5 h-5 fill-black" />
                <span>Enviar Diagnóstico e Receber Orçamento no WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Resposta rápida no horário comercial • Atendimento direto com nossos técnicos
              </p>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
