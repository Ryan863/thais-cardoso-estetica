export interface Procedure {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  image: string;
  badge: string;
  whatsappMessage: string;
}

export interface UnitLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  details: string;
  mapsUrl?: string;
  isConsultAddress?: boolean;
}

export const SITE_CONFIG = {
  name: "Thaís Cardoso | Estética Facial",
  professionalName: "Thaís Cardoso (Thais Machado)",
  role: "Terapeuta em Cuidados com a Pele & Estética Facial Personalizada",
  tagline: "Resultados reais + cuidado exclusivo",
  phoneDisplay: "+55 (41) 9215-6721",
  phoneRaw: "554192156721",
  instagram: "@thais_cardosoestetica",
  instagramUrl: "https://www.instagram.com/thais_cardosoestetica",
  scheduleHours: "Segunda a Sábado · Atendimento exclusivo com hora marcada (Fechado aos Domingos)",
  defaultWhatsAppMessage: "Olá, Thaís! Vi seu site e gostaria de agendar uma avaliação facial personalizada.",
};

export const PROCEDURES: Procedure[] = [
  {
    id: "melasma",
    number: "01",
    title: "Melasma & Controle de Manchas",
    subtitle: "Clareamento Inteligente & Regeneração",
    description: "Abordagem científica e não agressiva para desacelerar a melanogênese, clarear hipercromias e fortalecer a barreira biológica sem efeito rebote.",
    benefits: ["Clareamento gradual e seguro", "Fortalecimento da barreira cutânea", "Plano home care personalizado", "Prevenção contra efeito rebote"],
    image: "https://images.unsplash.com/photo-1512290900672-1f41634b3e6c?auto=format&fit=crop&w=1000&q=85",
    badge: "Alta Procura",
    whatsappMessage: "Olá Thaís! Gostaria de agendar uma avaliação para controle de Melasma e manchas faciais."
  },
  {
    id: "acne",
    number: "02",
    title: "Tratamento Avançado de Acne",
    subtitle: "Controle Inflamatório & Cicatrização",
    description: "Protocolo direcionado ao controle da microbiota cutânea, regulação sebácea, redução do processo inflamatório e prevenção de manchas pós-acne.",
    benefits: ["Ação antibacteriana e calmante", "Desobstrução folicular profunda", "Uniformização da textura", "Regulação duradoura da oleosidade"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
    badge: "Resultados Rápidos",
    whatsappMessage: "Olá Thaís! Tenho interesse no Tratamento Avançado de Acne. Como funciona a avaliação?"
  },
  {
    id: "rejuvenescimento",
    number: "03",
    title: "Rejuvenescimento & Saúde da Pele",
    subtitle: "Estímulo de Colágeno & Firmeza",
    description: "Recuperação do viço, elasticidade e densidade dérmica com técnicas que preservam a naturalidade e a expressividade única do seu rosto.",
    benefits: ["Estímulo bioativo de colágeno", "Suavização de linhas finas", "Luminosidade instantânea (Glow)", "Aumento da firmeza e sustentação"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
    badge: "Exclusivo",
    whatsappMessage: "Olá Thaís! Gostaria de conhecer os protocolos de Rejuvenescimento Facial e agendar meu horário."
  },
  {
    id: "limpeza-profunda",
    number: "04",
    title: "Limpeza de Pele Profunda",
    subtitle: "Assepsia Minuciosa & Conforto",
    description: "Extração delicada de cravos e impurezas com emoliência de alta precisão, fototerapia bioestimulante e nutrição celular revigorante.",
    benefits: ["Extração cuidadosa e sem traumas", "Assepsia com biossegurança", "Hidratação profunda pós-limpeza", "Pele aveludada e descansada"],
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=85",
    badge: "Essencial",
    whatsappMessage: "Olá Thaís! Desejo agendar uma Limpeza de Pele Profunda e Personalizada."
  },
  {
    id: "terapia-capilar",
    number: "05",
    title: "Terapia Capilar Personalizada",
    subtitle: "Saúde do Couro Cabeludo & Força",
    description: "Diagnóstico e tratamento de disfunções do couro cabeludo, oleosidade excessiva, descamações e estímulo do fortalecimento folicular.",
    benefits: ["Desintoxicação do couro cabeludo", "Estímulo à oxigenação capilar", "Fortalecimento do bulbo piloso", "Equilíbrio microbiótico"],
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=85",
    badge: "Especialidade",
    whatsappMessage: "Olá Thaís! Gostaria de informações sobre os protocolos de Terapia Capilar."
  }
];

export const GALLERY_ITEMS = [
  {
    title: "Controle de Melasma",
    category: "Pele Uniforme",
    image: "https://images.unsplash.com/photo-1512290900672-1f41634b3e6c?auto=format&fit=crop&w=800&q=85",
    description: "Harmonização de tonalidade e viço recuperado com protocolo gradual."
  },
  {
    title: "Glow & Rejuvenescimento",
    category: "Saúde Cutânea",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=85",
    description: "Aumento de hidratação dérmica e textura acetinada sem invasão."
  },
  {
    title: "Recuperação Pós-Acne",
    category: "Textura Renovada",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85",
    description: "Acalmamento de inflamação e regeneração celular balanceada."
  },
  {
    title: "Limpeza & Desintoxicação",
    category: "Pureza Celular",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85",
    description: "Extração criteriosa preservando o manto lipídico natural."
  },
  {
    title: "Viço e Firmeza",
    category: "Anti-Aging Natural",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=85",
    description: "Estímulo de colágeno e sustentação com luminosidade duradoura."
  },
  {
    title: "Nutrição Profunda",
    category: "Vitalidade",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    description: "Recarga de oligoelementos e cosmecêuticos biocompatíveis."
  }
];

export const CLINIC_PILLARS = [
  {
    title: "Atendimento 100% Individualizado",
    description: "Uma cliente por horário. Sem salas cheias ou pressa, com foco exclusivo nas necessidades da sua pele."
  },
  {
    title: "Biossegurança e Higiene Hospitalar",
    description: "Materiais descartáveis, esterilização rigorosa e ambiente assepticamente preparado para cada atendimento."
  },
  {
    title: "Avaliação Facial Criteriosa",
    description: "Análise minuciosa de fototipo, biotipo, histórico e hábitos antes de iniciar qualquer procedimento."
  },
  {
    title: "Cosmecêuticos de Padrão Ouro",
    description: "Trabalhamos exclusivamente com formulações dermatológicas de alta eficácia comprovada."
  },
  {
    title: "Ambiente Acolhedor e Silencioso",
    description: "Uma experiência sensorial pensada para desacelerar a sua rotina enquanto você cuida de si."
  },
  {
    title: "Acompanhamento Pós-Procedimento",
    description: "Suporte direto via WhatsApp para orientar a evolução e o uso correto do home care."
  }
];

export const UNITS: UnitLocation[] = [
  {
    id: "curitiba",
    name: "Unidade Curitiba (Centro)",
    city: "Curitiba - PR",
    address: "Rua Emiliano Perneta, 325 - Centro",
    details: "Edifício executivo de fácil acesso, próximo a estacionamentos e principais vias centrais.",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Rua+Emiliano+Perneta,+325+-+Centro,+Curitiba+-+PR,+80010-050",
    isConsultAddress: false
  },
  {
    id: "piraquara",
    name: "Unidade Piraquara",
    city: "Piraquara - PR",
    address: "Região de Piraquara · Atendimento com Hora Marcada",
    details: "Ambiente reservado e tranquilo para quem busca conforto e comodidade na região.",
    isConsultAddress: true
  }
];

export const FAQ_ITEMS = [
  {
    question: "Como funciona a primeira consulta ou avaliação?",
    answer: "No primeiro encontro realizamos uma análise profunda da sua pele: nível de hidratação, oleosidade, manchas, histórico de tratamentos anteriores e estilo de vida. Com base nisso, montamos o protocolo ideal e direcionamos o plano de cuidados."
  },
  {
    question: "A limpeza de pele profunda costuma doer?",
    answer: "Trabalhamos com produtos emolientes modernos e protocolos delicados que amaciam a pele antes da extração, minimizando consideravelmente qualquer desconforto. Nosso foco é eficácia com total respeito à sensibilidade cutânea."
  },
  {
    question: "O melasma tem cura definitiva?",
    answer: "O melasma é uma condição crônica que não possui 'cura mágica', mas pode ser perfeitamente controlado e clareado. Nossos protocolos visam estabilizar as células produtoras de pigmento e fortalecer a barreira da pele, prevenindo novos episódios."
  },
  {
    question: "Como agendar um horário?",
    answer: "Todos os agendamentos são realizados previamente através do nosso WhatsApp oficial (+55 41 9215-6721). Você pode escolher entre a unidade Curitiba ou Piraquara conforme sua preferência."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos cartões de crédito e débito, Pix e transferência bancária, com opções de parcelamento para pacotes e protocolos contínuos."
  }
];
