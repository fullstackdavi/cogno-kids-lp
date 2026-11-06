import { Testimonial, FAQItem, BenefitItem, BonusItem } from '../types';

export const LANDING_COPY = {
  headerNotice: "🔥 OFERTA DE LANÇAMENTO: 76% DE DESCONTO + 3 BÔNUS EXCLUSIVOS HOJE!",
  hero: {
    badge: "⚡ TECNOLOGIA EDUCATIVA INFANTIL SEM MENSALIDADES",
    headline: "Jogos que treinam a mente do seu filho",
    headlineHighlight: "em 10 minutos por dia.",
    variations: {
      A: {
        headline: "Jogos que treinam a mente do seu filho",
        headlineHighlight: "em 10 minutos por dia.",
        label: "Versão Principal (A)"
      },
      B: {
        headline: "Troque o vídeo sem fim por",
        headlineHighlight: "10 minutos de jogo que faz o seu filho pensar.",
        label: "Variação B (A/B Test)"
      },
      C: {
        headline: "Dez minutos de tela por dia que o seu filho joga com atenção,",
        headlineHighlight: "e você sem culpa.",
        label: "Variação C (A/B Test)"
      }
    },
    subheadline: "Troque o ciclo passivo e hipnótico dos vídeos curtos por desafios interativos com início, meio e fim que desenvolvem o raciocínio, foco e coordenação do seu filho sem frustração.",
    ctaText: "Quero o Cogno Kids ® para meu filho agora",
    ctaSubtext: "⚡ Acesso Imediato • 2x de R$ 5,96 ou R$ 10,99 à vista • Sem Mensalidade",
    socialProofBadge: "Mais de 12.840 famílias já transformaram a rotina dos seus filhos nesta semana",
  },
  pasProblem: {
    tag: "O DILEMA PARENTAL MODERNO",
    title: "A 'Cultura do Algoritmo' está sugando a atenção e a criatividade das crianças",
    subtitle: "Você tenta tirar o celular do seu filho, mas ele chora? Você sente culpa por deixar ele na tela enquanto precisa trabalhar?",
    bullets: [
      {
        title: "Vídeos hiper-estimulantes",
        desc: "Desenhos rápidos e vídeos curtos acostumam o cérebro da criança com 'dopamina barata', reduzindo drasticamente o tempo de atenção na escola e nas tarefas diárias.",
      },
      {
        title: "Passividade e ausência de raciocínio",
        desc: "Ficar apenas assistindo não exercita a coordenação motora nem o raciocínio crítico. A criança vira apenas uma consumidora passiva de luz.",
      },
      {
        title: "A culpa de não saber como estimular",
        desc: "Comprar livros caros que ficam pegando poeira no armário ou tentar inventar brincadeiras sem tempo na rotina gera frustração em qualquer pai ou mãe.",
      }
    ]
  },
  pasAgitation: {
    tag: "A JANELA DE OURO DO DESENVOLVIMENTO",
    title: "A infância passa em um piscar de olhos. O que seu filho está absorvendo hoje?",
    text: "Entre os 2 e os 10 anos de idade, o cérebro infantil passa pela sua fase de maior plasticidade neural. É a 'Janela de Ouro' para construir circuitos de foco, controle inibitório e raciocínio lógico. Cada hora gasta em conteúdo passivo e agitado é uma oportunidade preciosa perdida para sempre.",
    comparison: {
      passive: {
        title: "TELA PASSIVA (ZUMBI)",
        items: [
          "Vídeos curtos agitados sem propósito pedagógico",
          "Atenção picotada de menos de 5 segundos",
          "Irritabilidade extrema ao desligar a tela",
          "Zero desenvolvimento motor ou criativo"
        ]
      },
      active: {
        title: "TELA ATIVA COGNO KIDS®",
        items: [
          "Jogos e ilustrações ativas de foco e lógica",
          "Concentração prolongada e calma consciente",
          "Satisfação real ao resolver desafios pedagógicos",
          "Estímulo à coordenação fina, cores e formas"
        ]
      }
    }
  },
  solution: {
    tag: "CONHEÇA O COGNO KIDS®",
    title: "Uma ponte inteligente entre o mundo digital e o aprendizado ativo",
    description: "O Cogno Kids® foi desenvolvido para ser o 'parque de diversões do cérebro'. Uma coleção expansiva de atividades interativas e arquivos para imprimir que encantam as crianças enquanto fortalecem conexões neurais fundamentais.",
    features: [
      {
        icon: "palette",
        title: "Ilustrações para Colorir Interativas",
        desc: "Paleta inteligente de cores que desenvolve sensibilidade estética e foco no preenchimento espacial."
      },
      {
        icon: "brain",
        title: "Desafios de Raciocínio & Lógica",
        desc: "Labirintos, ligar-pontos, associação de formas e quebra-cabeças progressivos por faixa etária."
      },
      {
        icon: "printer",
        title: "Packs de Atividades Imprimíveis",
        desc: "Quer seu filho longe do tablet? Imprima em 1 clique centenas de páginas em alta resolução."
      },
      {
        icon: "device",
        title: "Acesso em Qualquer Dispositivo",
        desc: "Funciona em celulares, tablets e computadores sem precisar ocupar memória com instalação."
      }
    ]
  },
  benefits: [
    {
      id: "b1",
      title: "Foco e Concentração Prolongados",
      description: "Treina a atenção sustentada da criança, permitindo que ela permaneça concentrada em uma única atividade por 20 a 40 minutos seguidos.",
      iconName: "target",
      badge: "Atenção Sustentada",
      color: "#00F0FF"
    },
    {
      id: "b2",
      title: "Coordenação Motora Fina & Pré-Escrita",
      description: "Exercita os músculos da mão e a precisão do traço, preparando crianças menores para o domínio do lápis e da escrita escolar.",
      iconName: "pencil",
      badge: "Coordenação Fina",
      color: "#3B6FFF"
    },
    {
      id: "b3",
      title: "Redução da Ansiedade de Tela",
      description: "Substitui os picos de dopamina do YouTube/TikTok por conquistas graduais e calmas, acalmando o sistema nervoso da criança.",
      iconName: "shield-check",
      badge: "Saúde Emocional",
      color: "#8B3FFF"
    },
    {
      id: "b4",
      title: "Autonomia & Resolução de Problemas",
      description: "A criança aprende a pensar de forma estruturada: identificar o desafio, testar hipóteses e sentir orgulho da conquista por conta própria.",
      iconName: "sparkles",
      badge: "Confiança Infantil",
      color: "#00F0FF"
    },
    {
      id: "b5",
      title: "Momentos de Conexão em Família",
      description: "Perfeito para dias chuvosos ou noites em família: imprima as folhas e pinte/resolva junto com seu filho fortalecendo laços afetuosos.",
      iconName: "heart",
      badge: "União Familiar",
      color: "#8B3FFF"
    }
  ] as BenefitItem[],

  howItWorks: {
    tag: "SIMPLES E INSTANTÂNEO",
    title: "Como funciona o Cogno Kids® em 3 passos simples",
    steps: [
      {
        num: "01",
        title: "Acesso Imediato no E-mail & WhatsApp",
        desc: "Após a confirmação do pagamento único, você recebe seus dados de login instantaneamente. Sem esperas."
      },
      {
        num: "02",
        title: "Escolha o Nível ou Imprima em 1 Clique",
        desc: "Filtre as atividades pela idade do seu filho (2 a 4 anos, 5 a 7 anos, 8 a 10 anos) e escolha entre jogar online ou imprimir."
      },
      {
        num: "03",
        title: "Transformação Diária com 15 Minutos",
        desc: "Apenas 15 minutos de atividade diária no Cogno Kids® geram resultados visíveis de calma, foco e raciocínio em poucas semanas."
      }
    ]
  },

  socialProofs: [
    {
      id: "sp1",
      title: "Depoimento de pais 1",
      imageUrl: "https://i.postimg.cc/sxZPKV45/image.png"
    },
    {
      id: "sp2",
      title: "Depoimento de pais 2",
      imageUrl: "https://i.postimg.cc/W4bH8kFm/image.png"
    },
    {
      id: "sp3",
      title: "Depoimento de pais 3",
      imageUrl: "https://i.postimg.cc/fTnqFFtH/image.png"
    },
    {
      id: "sp4",
      title: "Depoimento de pais 4",
      imageUrl: "https://i.postimg.cc/TYJ0sPXk/image.png"
    }
  ],

  testimonials: [
    {
      id: "t1",
      name: "Juliana Mendes",
      role: "Mãe do Theo (4 anos)",
      childAge: "4 anos",
      city: "São Paulo, SP",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      text: "Meu filho chorava sem parar se eu tirasse o tablet com desenhos repetitivos. Quando apresentei as atividades do Cogno Kids, ele ficou 35 minutos concentrado pintando e fazendo o labirinto! Hoje a rotina em casa é muito mais tranquila.",
      stars: 5,
      highlight: "Trocou o choro por 35 min de concentração"
    },
    {
      id: "t2",
      name: "Rodrigo Alencar",
      role: "Pai da Sofia (6 anos)",
      childAge: "6 anos",
      city: "Curitiba, PR",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      text: "Excelente investimento. O melhor é que é pagamento único! Imprimo os pcks de raciocínio no fim de semana e sentamos juntos para resolver. A professora da escola até elogiou a evolução da coordenação motora dela.",
      stars: 5,
      highlight: "Elogio até da professora na escola"
    },
    {
      id: "t3",
      name: "Patrícia Viana",
      role: "Mãe do Lucas (3 anos) e Marina (7 anos)",
      childAge: "3 e 7 anos",
      city: "Belo Horizonte, MG",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      text: "Tenho dois filhos com idades diferentes e o Cogno Kids atende os dois perfeitamente! O Lucas adora as atividades de cores grandes no tablet e a Marina devora os jogos de lógica. Recomendo de olhos fechados!",
      stars: 5,
      highlight: "Perfeito para idades diferentes"
    }
  ] as Testimonial[],

  pricing: {
    tag: "OFERTA DE LANÇAMENTO EXCLUSIVA",
    title: "Invista na mente do seu filho pelo preço de um lanche",
    comparison: [
      {
        item: "Brinquedo de plástico comum",
        cost: "R$ 150,00 - R$ 250,00",
        note: "Quebra em 1 semana e vira entulho"
      },
      {
        item: "Aulas / Cursos particulares",
        cost: "R$ 350,00 / mês",
        note: "Mensalidade pesada recorrente"
      },
      {
        item: "Cogno Kids® Acesso Vitalício",
        cost: "2x de R$ 5,96 ou R$ 10,99 à vista",
        note: "Acesso ilimitado, todos os bônus e zero mensalidades",
        isHighlight: true
      }
    ],
    originalPrice: "R$ 197,00",
    salePrice: "R$ 10,99",
    installments: "ou 2x de R$ 5,96 no cartão",
    bonuses: [
      {
        id: "bon1",
        title: "BÔNUS #1: Pack Imprimível Desafios de Lógica & Labirintos",
        value: "R$ 47,00",
        description: "Mais de 100 páginas em alta resolução prontas para imprimir com exercícios desafiadores de estímulo ao raciocínio.",
        tag: "GRÁTIS HOJE"
      },
      {
        id: "bon2",
        title: "BÔNUS #2: Guia do Sono Infantil e Rotina Desconectada",
        value: "R$ 37,00",
        description: "E-book prático para pais com estratégias comprovadas para desacelerar a mente das crianças antes de dormir.",
        tag: "GRÁTIS HOJE"
      },
      {
        id: "bon3",
        title: "BÔNUS #3: Atualizações Mensais Gratuitas de Novos Desenhos",
        value: "R$ 67,00",
        description: "Todo mês novas coleções temáticas de desenhos e jogos serão adicionadas ao seu painel sem cobrar nada a mais.",
        tag: "GRÁTIS HOJE"
      }
    ] as BonusItem[]
  },

  guarantee: {
    title: "Garantia Incondicional de 7 Dias • Risco Zero para Você",
    text: "Temos tanta certeza do impacto positivo do Cogno Kids® na rotina da sua família que oferecemos uma garantia blindada. Experimente por 7 dias inteiros. Se seu filho não amar ou você achar que não valeu cada centavo, basta enviar um único e-mail e devolveremos 100% do seu dinheiro, sem burocracia ou perguntas.",
    badge: "100% Satisfação Garantida"
  },

  faqs: [
    {
      id: "faq-1",
      question: "Para qual faixa etária o Cogno Kids® é recomendado?",
      answer: "O Cogno Kids® foi desenvolvido especificamente para crianças de 2 a 10 anos de idade. As atividades são categorizadas por níveis de dificuldade para acompanhar cada etapa do desenvolvimento infantil (2-4 anos: cores e formas básicas; 5-7 anos: coordenação motora e números; 8-10 anos: raciocínio lógico avançado)."
    },
    {
      id: "faq-2",
      question: "O produto possui alguma cobrança mensal?",
      answer: "NÃO! O Cogno Kids® é de PAGAMENTO ÚNICO. Você paga apenas 2x de R$ 5,96 ou R$ 10,99 à vista e garante acesso vitalício a todo o conteúdo, incluindo todas as atualizações futuras e os bônus exclusivos. Nenhuma mensalidade será cobrada."
    },
    {
      id: "faq-3",
      question: "Como recebo o meu acesso após a compra?",
      answer: "O envio é 100% automático e imediato. Logo após a aprovação do pagamento (Pix ou Cartão de Crédito é liberado na hora), você receberá no seu e-mail e no WhatsApp cadastrado os dados para acessar a plataforma do Cogno Kids®."
    },
    {
      id: "faq-4",
      question: "Posso imprimir as atividades para meu filho fazer no papel?",
      answer: "Sim! Além de poder usar interativamente no tablet, celular ou computador, a plataforma conta com uma biblioteca completa de Packs de Atividades Imprimíveis em formato PDF de altíssima qualidade para imprimir em casa."
    },
    {
      id: "faq-5",
      question: "Preciso baixar ou instalar algum aplicativo pesado?",
      answer: "Não! O Cogno Kids® é uma plataforma Web otimizada (Web App). Você pode acessar direto pelo navegador do seu celular, tablet, computador ou Smart TV sem ocupar memória do aparelho."
    },
    {
      id: "faq-6",
      question: "E se meu filho não gostar ou não se adaptar?",
      answer: "Você está totalmente coberto pela nossa Garantia de Satisfação de 7 dias. Se por qualquer motivo seu filho não se encantar com as atividades, basta enviar uma mensagem para nosso suporte que estornamos 100% do valor pago sem enrolação."
    }
  ] as FAQItem[],

  footer: {
    brand: "Cogno Kids®",
    agencyCredit: "Desenvolvido com excelência por DS Company",
    disclaimer: "Isenção de Responsabilidade Médica: O Cogno Kids® é uma plataforma educativa e lúdica voltada para estímulo cognitivo e entretenimento infantil sadio. O conteúdo não constitui nem substitui diagnósticos, tratamentos médicos, neurológicos ou acompanhamento terapêutico especializado.",
    copyright: "© 2026 Cogno Kids® por DS Company. Todos os direitos reservados."
  }
};
