export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'apple' | 'notebook' | 'computers' | 'hardware' | 'software' | 'gamer' | 'corporate' | 'mobile' | 'upgrades';
  iconName: string;
  badges: string[];
  features: string[];
  popular?: boolean;
  buttonText?: string;
  imagePath?: string;
}

export interface ReviewItem {
  name: string;
  role?: string;
  stars: number;
  date?: string;
  comment: string;
  verified?: boolean;
  avatarLetter: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const COMPANY_INFO = {
  name: 'FLT INFOTECH',
  tradeName: 'FLT Infotech - Assistência Técnica & Soluções em TI',
  foundedYear: 2005,
  yearsOfExperience: new Date().getFullYear() - 2005,
  primaryColor: '#00ff01',
  tagline: 'Assistência Técnica de Informática Especializada em Santos e Baixada Santista',
  subtagline: 'Laboratório próprio no bairro Macuco. Reparo de notebooks, MacBooks, PCs Gamer, impressoras e celulares com rapidez, transparência e garantia real.',
  address: {
    street: 'R. Luís Gama, 299',
    neighborhood: 'Macuco',
    city: 'Santos',
    state: 'SP',
    zip: '11015-151',
    full: 'R. Luís Gama, 299 - Macuco, Santos - SP, 11015-151',
    mapsUrl: 'https://maps.app.goo.gl/jqmronA4BPCLGcZp6',
    embedMapQuery: 'R.+Lu%C3%ADs+Gama,+299+-+Macuco,+Santos+-+SP,+11015-151'
  },
  phones: {
    whatsapp: '(13) 97416-0655',
    whatsappRaw: '5513974160655',
    landline: '(13) 3222-3059',
    landlineRaw: '551332223059'
  },
  email: 'flt@fltinfotech.com.br',
  hours: {
    weekdays: '09:00 às 18:00',
    saturday: '09:00 às 13:00',
    sunday: 'Fechado'
  },
  social: {
    instagram: 'https://www.instagram.com/fltinfotech/',
    instagramHandle: '@fltinfotech',
    facebook: 'https://www.facebook.com/fltinfotech'
  },
  stats: [
    { value: '+20', label: 'Anos de Tradição', sub: 'Desde 2005 em Santos' },
    { value: '+18.000', label: 'Equipamentos Recuperados', sub: 'Notebooks, PCs e celulares' },
    { value: '5.0 ★', label: 'Avaliação no Google', sub: 'Reputação máxima na Baixada' },
    { value: '100%', label: 'Garantia em Serviços', sub: 'Peças de procedência e nota' }
  ],
  brandsServiced: [
    'Dell', 'Apple / MacBook', 'HP', 'Acer', 'Lenovo', 'Samsung', 'Asus', 'Positivo', 'Sony / Vaio', 'Epson', 'Brother'
  ],
  serviceAreas: [
    'Santos (Macuco, Gonzaga, Boqueirão, Ponta da Praia, Embaré, Centro, Marapé)',
    'São Vicente',
    'Cubatão',
    'Praia Grande',
    'Guarujá'
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'apple',
    title: 'Assistência Técnica Apple',
    shortDesc: 'Seu iPhone, MacBook ou iPad precisa de um especialista? Oferecemos reparos precisos para todos os produtos Apple, com peças de alta qualidade e garantia.',
    fullDesc: 'Assistência técnica especializada em MacBook Air, MacBook Pro, iMac e iPads. Solucionamos problemas de tela retina quebrada, troca de bateria com calibração, teclado, placa-mãe e lentidão.',
    category: 'apple',
    iconName: 'Laptop',
    buttonText: 'Mais sobre Assistência Apple',
    badges: ['Especialista Apple', 'Peças Premium'],
    popular: true,
    features: [
      'Troca de tela Retina original para MacBook e iPad',
      'Troca de bateria com ciclos zerados e garantia',
      'Reparo de placa lógica com microeletrônica avançada',
      'Upgrade de SSD e reinstalação limpa do macOS'
    ]
  },
  {
    id: 'notebooks',
    title: 'Assistência Técnica de Notebooks',
    shortDesc: 'Seu notebook está lento, não liga ou a tela quebrou? Temos a solução. Realizamos desde a troca de componentes até a otimização do sistema com total agilidade.',
    fullDesc: 'Atendimento multimarca em Santos: Dell, HP, Lenovo, Acer, Samsung e Asus. Laboratório completo para reparo em carcaças quebradas, dobradiças duras, telas e teclados.',
    category: 'notebook',
    iconName: 'Laptop',
    buttonText: 'Mais sobre Assistência de Notebooks',
    badges: ['Mais Solicitado', 'Garantia Total'],
    popular: true,
    features: [
      'Troca de telas LED e IPS de alta resolução',
      'Substituição de teclados, coolers e conectores DC Jack',
      'Limpeza térmica preventiva com pasta térmica de alta performance',
      'Restauração de dobradiças e carcaças plásticas ou metálicas'
    ]
  },
  {
    id: 'computers',
    title: 'Assistência Técnica de Computadores',
    shortDesc: 'Seu PC de trabalho ou de casa apresenta defeitos? Nossa equipe resolve problemas de hardware e software, garantindo estabilidade e segurança.',
    fullDesc: 'Diagnóstico minucioso para desktops corporativos e domésticos. Testes de fonte, memória, placa-mãe, eliminação de travamentos e configurações de rede local.',
    category: 'computers',
    iconName: 'Cpu',
    buttonText: 'Mais sobre Assistência de Computadores',
    badges: ['Solução Residencial & B2B', 'Orçamento Claro'],
    features: [
      'Substituição e testes de fontes de alimentação seladas',
      'Troca e expansão de memórias RAM para maior fluidez',
      'Organização interna de cabos e fluxo de refrigeração',
      'Instalação de sistemas operacionais e programas essenciais'
    ]
  },
  {
    id: 'motherboard',
    title: 'Desoxidação e Reparo de Placa-Mãe',
    shortDesc: 'Seu aparelho teve contato com líquido ou parou de funcionar subitamente? Somos especialistas em reparos de placa-mãe e desoxidação química com microscópio.',
    fullDesc: 'Quando outras assistências condenam sua placa, a FLT Infotech recupera. Análise de esquemas elétricos, troca de circuitos integrados SMD e recuperação de trilhas rompidas.',
    category: 'hardware',
    iconName: 'Cpu',
    buttonText: 'Mais sobre Desoxidação e Reparo de Placa-mãe',
    badges: ['Especialidade do Laboratório', 'Economia de até 70%'],
    features: [
      'Banho químico ultrassônico para remoção total de corrosão por maresia ou água',
      'Identificação e reparo de curtos nas linhas primárias e secundárias',
      'Regravação de BIOS e reprogramação de memórias Flash',
      'Troca de conectores USB, HDMI e circuitos de alimentação'
    ]
  },
  {
    id: 'software',
    title: 'Software, Formatação e Otimização',
    shortDesc: 'Seu sistema está lento, travando ou com vírus? Nossos serviços de software incluem formatação com backup seguro, remoção de malwares e SSD ultrarrápido.',
    fullDesc: 'Deixe seu computador até 10 vezes mais rápido. Clonagem transparente sem perder seus arquivos pessoais, remoção completa de spywares e instalação do Windows ou macOS atualizado.',
    category: 'software',
    iconName: 'Zap',
    buttonText: 'Mais sobre Software, Formatação e Otimização',
    badges: ['Pronto com Agilidade', 'Backup 100% Seguro'],
    features: [
      'Formatação com backup integral e restauração de dados',
      'Instalação de drivers oficiais e pacote essencial de produtividade',
      'Remoção de vírus e blindagem básica do sistema',
      'Upgrade de SSD com clonagem de sistema sem perda de programas'
    ]
  },
  {
    id: 'pc-gamer',
    title: 'Manutenção de PC Gamer',
    shortDesc: 'Seu PC Gamer está superaquecendo ou perdendo FPS? Fazemos a manutenção completa, limpeza profunda de componentes e otimização para desempenho máximo.',
    fullDesc: 'Projetos sob medida para gamers e streamers na Baixada Santista. Cable management profissional, substituição de pasta térmica por thermal pads de alta condutividade e testes de estresse.',
    category: 'gamer',
    iconName: 'Gamepad2',
    buttonText: 'Mais sobre Manutenção de PC Gamer',
    badges: ['Alta Performance', 'FPS Máximo'],
    popular: true,
    features: [
      'Limpeza minuciosa de placas de vídeo e water coolers',
      'Aplicação de pasta térmica premium (Artic Silver / Kryonaut)',
      'Otimização de drivers e perfis XMP para latência reduzida',
      'Consultoria e montagem personalizada do seu setup'
    ]
  },
  {
    id: 'printers',
    title: 'Locação & Manutenção de Impressoras',
    shortDesc: 'Solução B2B para empresas, escritórios de advocacia e comércio exterior em Santos. Locação de multifuncionais com suporte e suprimentos inclusos.',
    fullDesc: 'Elimine custos inesperados com impressão. Fornecemos equipamentos modernos, suprimento contínuo de toners e manutenção técnica corretiva e preventiva no Macuco e toda Santos.',
    category: 'corporate',
    iconName: 'Printer',
    buttonText: 'Mais sobre Locação de Impressoras',
    badges: ['Solução Empresarial', 'Atendimento Prioritário'],
    features: [
      'Locação mensal de impressoras e multifuncionais laser de alta velocidade',
      'Conserto mecânico rápido: troca de fusores, correias e roletes',
      'Equipamento reserva para que seu escritório nunca pare de faturar',
      'Fornecimento de toners e consumíveis com entrega inclusa'
    ]
  },
  {
    id: 'mobile',
    title: 'Assistência Técnica de Celulares e Tablets',
    shortDesc: 'Trabalhamos com as principais marcas como Samsung, Motorola, Xiaomi e Apple. Trocamos telas, baterias e conectores para você não ficar desconectado.',
    fullDesc: 'Atendimento ágil para smartphones e tablets no Macuco. Troca de telas com tecnologia touch sensível original, troca de baterias sem autonomia e reparo em conectores de carga Type-C e Lightning.',
    category: 'mobile',
    iconName: 'Smartphone',
    buttonText: 'Mais sobre Manutenção de Celulares e Tablets',
    badges: ['Atendimento Rápido', 'Peças Homologadas'],
    features: [
      'Substituição de telas com preservação de sensibilidade e cores',
      'Troca de baterias de alta densidade com garantia formal',
      'Reparo de conectores de carga e microfones danificados',
      'Recuperação após contato com água e desoxidação de placa'
    ]
  },
  {
    id: 'screen-glass',
    title: 'Troca de Vidro, Telas e Upgrades',
    shortDesc: 'Seu smartphone ou notebook quebrou a tela? Realizamos a troca com peças selecionadas preservando a sensibilidade ao toque e a qualidade de imagem.',
    fullDesc: 'Substituição com equipamentos de precisão para notebooks e celulares. Telas LED/IPS, vidros temperados, teclados retroiluminados e upgrades de memória RAM e SSD NVMe.',
    category: 'upgrades',
    iconName: 'Zap',
    buttonText: 'Mais sobre Troca de Telas e Vidros',
    badges: ['Precisão Óptica', 'Qualidade de Fábrica'],
    features: [
      'Troca de tela mantendo a fidelidade de cores e brilho original',
      'Substituição de teclados para todas as marcas de notebook',
      'Instalação de SSD NVMe PCIe de alta velocidade',
      'Upgrade de memória RAM dual-channel para multitarefas'
    ]
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    name: 'André Fagundes',
    role: 'Cliente Google',
    stars: 5,
    avatarLetter: 'A',
    comment: 'Gostaria de agradecer pelo excelente atendimento e profissionalismo da equipe na manutenção e upgrade do meu computador, realizados com agilidade, competência e transparência.',
    verified: true
  },
  {
    name: 'Priscila Oliveira Lima',
    role: 'Cliente Google',
    stars: 5,
    avatarLetter: 'P',
    comment: 'Equipe da FLT é top, já fizeram reparo no meu note e eu super indico. Nota 10!!!',
    verified: true
  },
  {
    name: 'B&F Assessoria em Comércio Exterior',
    role: 'Cliente Corporativo (Empresa em Santos)',
    stars: 5,
    avatarLetter: 'B',
    comment: 'Fazemos a locação de nossas impressoras com o pessoal da FLT e super indicamos o serviço, atendimento rápido, equipe prestativa e atenciosa.',
    verified: true
  },
  {
    name: 'Silvio Freita',
    role: 'Cliente Google',
    stars: 5,
    avatarLetter: 'S',
    comment: 'Excelente experiência no conserto da minha máquina de xerox do escritório. Super recomendo.',
    verified: true
  },
  {
    name: 'André Maurício Ribeiro',
    role: 'Cliente Corporativo',
    stars: 5,
    avatarLetter: 'A',
    comment: 'FLT faz a manutenção das impressoras e dos notes do meu escritório, trabalho rápido e sempre disponíveis, super recomendo!',
    verified: true
  },
  {
    name: 'Fernanda Centurion',
    role: 'Cliente Google',
    stars: 5,
    avatarLetter: 'F',
    comment: 'Arrumei meu celular com eles e gostei muito do serviço. Bom atendimento e preço justo!',
    verified: true
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'Atendimento & Prazos',
    question: 'Quanto tempo leva para realizar o diagnóstico e orçamento do meu equipamento?',
    answer: 'Na maioria dos casos de computadores, notebooks e celulares, realizamos o diagnóstico inicial entre 24h e 48h úteis. Em casos de upgrades diretos (como instalação de SSD e memória RAM) ou formatação, o serviço pode frequentemente ser concluído no mesmo dia ou em até 24 horas.'
  },
  {
    category: 'Garantia & Confiança',
    question: 'Os serviços da FLT Infotech possuem garantia?',
    answer: 'Sim! Todos os nossos serviços contam com garantia legal e estendida conforme o tipo de reparo e componentes instalados (variando de 90 dias a 1 ano para peças novas como SSDs e memórias). Trabalhamos com total transparência e fornecemos comprovante formal.'
  },
  {
    category: 'Localização & Região',
    question: 'Onde a FLT Infotech está localizada e quais cidades vocês atendem?',
    answer: 'Nossa loja e laboratório físico ficam na R. Luís Gama, 299, no bairro Macuco em Santos - SP (próximo à Av. Afonso Pena e Canal 4). Atendemos clientes de toda a cidade de Santos e também de São Vicente, Cubatão, Praia Grande e Guarujá.'
  },
  {
    category: 'Empresas & Impressoras',
    question: 'Como funciona a locação de impressoras e multifuncionais para empresas?',
    answer: 'Disponibilizamos planos mensais sob medida para empresas, escritórios e comércios da Baixada Santista. O contrato inclui o equipamento moderno (laser monocromático ou colorido), fornecimento de toners, manutenção preventiva e corretiva inclusa, e troca imediata em caso de defeito.'
  },
  {
    category: 'Notebooks & MacBooks',
    question: 'Vocês consertam MacBooks e notebooks que não ligam ou molharam?',
    answer: 'Sim! Somos especialistas em microeletrônica e reparo avançado de placas-mãe. Realizamos desoxidação ultrassônica em placas que tiveram contato com líquidos, reparo de curtos em circuitos integrados e reballing, evitando que você precise descartar o equipamento.'
  },
  {
    category: 'Segurança de Dados',
    question: 'Meus arquivos, fotos e dados pessoais estão seguros durante o reparo?',
    answer: 'Absolutamente. Respeitamos rigorosamente a privacidade e o sigilo de dados dos nossos clientes. Realizamos procedimentos de backup preventivo antes de intervenções no sistema operacional e não acessamos dados pessoais sem autorização expressa.'
  }
];

export const DIFFERENTIALS_LIST = [
  {
    iconName: 'Award',
    title: 'Pioneirismo & 20+ Anos de História',
    description: 'Atendendo Santos e Baixada Santista desde 2005 com reputação ilibada, loja física e milhares de clientes fiéis.'
  },
  {
    iconName: 'Wrench',
    title: 'Laboratório Técnico Próprio',
    description: 'Não terceirizamos seu equipamento. Contamos com bancadas antiestáticas, estações de solda profissional e microscópio no Macuco.'
  },
  {
    iconName: 'ShieldCheck',
    title: 'Peças de Procedência & Garantia Real',
    description: 'Utilizamos apenas componentes testados de alta qualidade de fornecedores certificados, com nota e garantia formal.'
  },
  {
    iconName: 'Clock',
    title: 'Agilidade & Cumprimento de Prazos',
    description: 'Sabemos que seu notebook ou computador é essencial para seu trabalho ou estudos. Priorizamos agilidade sem comprometer o rigor técnico.'
  },
  {
    iconName: 'Building2',
    title: 'Especialistas em B2B & Outsourcing',
    description: 'Atendimento corporativo diferenciado para escritórios, clínicas e despachantes, incluindo locação de multifuncionais e suporte contínuo.'
  },
  {
    iconName: 'BadgePercent',
    title: 'Preço Justo & Transparência Absoluta',
    description: 'Orçamentos claros e sem surpresas. Você só paga pelo que realmente precisa ser consertado, com honestidade comprovada.'
  }
];
