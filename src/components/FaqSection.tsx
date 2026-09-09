import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_DATA, FaqItem } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const modelFaqs = [
    {
      question: 'Meu aparelho caiu na água ou pegou umidade da praia, ainda tem conserto?',
      answer: 'Sim! Realizamos desoxidação química profissional com cuba ultrassônica e secagem técnica. Quanto mais rápido você trouxer o aparelho à nossa loja no Macuco (e sem tentar ligar ou colocar na tomada), maiores são as chances de recuperação total.'
    },
    {
      question: 'Qual a garantia dos serviços prestados pela FLT Infotech?',
      answer: 'Todos os nossos reparos e peças contam com garantia legal e estendida conforme o serviço realizado. Trabalhamos com transparência e fornecemos ordem de serviço detalhada para sua total tranquilidade.'
    },
    {
      question: 'Vocês consertam a placa-mãe ou só trocam por uma nova?',
      answer: 'Temos laboratório próprio especializado em microeletrônica! Na grande maioria das assistências, quando uma placa tem curto ou componente queimado, eles apenas condenam a placa e dizem que precisa trocar tudo. Nós reparamos as trilhas, circuitos de carga, regravamos BIOS e trocamos apenas o componente danificado, economizando até 70% do custo.'
    },
    {
      question: 'O orçamento para o conserto do meu aparelho é cobrado?',
      answer: 'Não cobramos para avaliar a maioria dos problemas de bancada em nossa loja no Macuco. Se houver necessidade de desmontagem profunda ou diagnóstico complexo, o cliente é informado previamente antes de qualquer custo. Você só aprova o conserto se estiver 100% de acordo com o valor.'
    },
    {
      question: 'Quanto tempo em média demora para o conserto de um notebook ou computador?',
      answer: 'Reparos rápidos como formatação com backup, troca de SSD, troca de tela ou teclado costumam ficar prontos em 24 a 48 horas úteis. Serviços em placa-mãe ou que demandem peças sob encomenda são diagnosticados e comunicados com prazo exato.'
    },
    {
      question: 'Vocês atendem apenas a marca Apple ou outras marcas também?',
      answer: 'Atendemos todas as principais marcas do mercado: Apple (MacBook, iMac, iPad, iPhone), Dell, HP, Lenovo, Acer, Asus, Samsung, Positivo, além de computadores montados e PCs Gamer.'
    },
    {
      question: 'Como funciona a locação de impressoras para empresas e escritórios?',
      answer: 'Oferecemos planos corporativos sob medida para empresas em Santos e região. A mensalidade inclui a multifuncional moderna, instalação na rede, manutenção preventiva e corretiva sem custo adicional e reposição de toners.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#f8fafc] text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Tire suas dúvidas mais comuns sobre nossos serviços. Se sua pergunta não estiver aqui, entre em contato conosco agora mesmo. Estamos prontos.
          </p>
        </div>

        {/* Accordion List (exact clean look from reference model) */}
        <div className="space-y-3">
          {modelFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-800 hover:text-black transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">▾</span>
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-slate-400">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
