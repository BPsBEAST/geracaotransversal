/* Conteúdo centralizado: atualize aqui os cursos apresentados em todo o website. */
window.GT = {
  company: {
    name: 'Geração Transversal',
    phone: '+351 910 919 728',
    phoneLink: '+351910919728',
    email: 'geracao.transversal@gmail.com',
    secretary: 'secretaria.geracaotransversal1@gmail.com',
    address: 'Rua Manuel Ribeiro da Mota, n.º 256, 4620-408 Nespereira, Lousada',
    instagram: 'https://www.instagram.com/geracao_transversal/',
    whatsapp: '351910919728'
  },
  courses: [
    { id:'sbv', short:'SBV', title:'Suporte Básico de Vida', duration:'4 horas', category:'inem', image:'sbv.webp', summary:'Competências essenciais para reconhecer uma emergência e iniciar manobras de suporte básico de vida.' },
    { id:'sbvdae', short:'SBVDAE', title:'Suporte Básico de Vida com DAE', duration:'7 horas', category:'inem', image:'sbvdae.webp', summary:'Abordagem prática ao suporte básico de vida e à utilização de um desfibrilhador automático externo.' },
    { id:'sbvp', short:'SBVP', title:'Suporte Básico de Vida Pediátrico', duration:'4 horas', category:'inem', image:'sbvp.webp', summary:'Intervenção em situações de emergência com bebés e crianças.' },
    { id:'tat', short:'TAT', title:'Tripulante de Ambulância de Transporte', duration:'50 horas', category:'inem', image:'tat.webp', summary:'Formação orientada para a atuação em transporte de doentes.' },
    { id:'tas', short:'TAS', title:'Tripulante de Ambulância de Socorro', duration:'200 horas', category:'inem', image:'tas.webp', summary:'Formação especializada para intervenção de tripulantes de ambulância de socorro.' },
    { id:'rtas', short:'RTAS', title:'Recertificação TAS', duration:'35 horas', category:'inem', image:'rtas.webp', summary:'Atualização e revalidação de competências associadas à formação TAS.' },
    { id:'rtat', short:'RTAT', title:'Recertificação TAT', duration:'25 horas', category:'inem', image:'rtat.webp', summary:'Atualização e revalidação de competências associadas à formação TAT.' }
  ],
  // Catálogo DGERT — cursos completos e UFCD individuais.
  // Dados confirmados pelos materiais fornecidos. Os preços, datas, modalidade
  // e carga horária não foram fornecidos: não publicar valores presumidos.
  dgertCatalog: [
    {
      id: 'tecnico-auxiliar-saude',
      type: 'completo',
      title: 'Técnico Auxiliar de Saúde',
      label: 'Curso completo',
      code: '',
      summary: 'Percurso formativo estruturado em unidades de formação, com estágio incluído.',
      features: ['Formação modular integrada', 'Estágio incluído'],
      stage: true
    },
    { id: 'ufcd-3550', type: 'ufcd', code: '3550', title: 'Alimentação da pessoa idosa em lares e centros de dia', summary: 'Competências relacionadas com a alimentação de pessoas idosas em lares e centros de dia.' },
    { id: 'ufcd-6575', type: 'ufcd', code: '6575', title: 'Cuidados na alimentação e hidratação', summary: 'Cuidados e apoio nas rotinas de alimentação e hidratação.' },
    { id: 'ufcd-6574', type: 'ufcd', code: '6574', title: 'Cuidados na higiene, conforto e eliminação', summary: 'Cuidados essenciais de higiene, conforto e eliminação.' },
    { id: 'ufcd-3549', type: 'ufcd', code: '3549', title: 'Higiene corporal da pessoa idosa', summary: 'Cuidados de higiene corporal dirigidos à pessoa idosa.' },
    { id: 'ufcd-3564', type: 'ufcd', code: '3564', title: 'Primeiros Socorros', summary: 'Conhecimentos de intervenção inicial em situações que exigem primeiros socorros.' },
    { id: 'ufcd-3538', type: 'ufcd', code: '3538', title: 'Saúde da pessoa idosa — cuidados básicos', summary: 'Noções de cuidados básicos de saúde da pessoa idosa.' },
    { id: 'ufcd-6571', type: 'ufcd', code: '6571', title: 'Técnicas de posicionamento, mobilização, transferência e transporte', summary: 'Técnicas de posicionamento, mobilização, transferência e transporte.' }
  ],
  financed: [
    { title:'Organização Pessoal e Gestão do Tempo', code:'UFCD 0404', duration:'25 horas' },
    { title:'Ambiente, Segurança, Higiene e Saúde no Trabalho', code:'UFCD 0349', duration:'25 horas' },
    { title:'Saúde Mental na 3.ª Idade', code:'UFCD 3553', duration:'25 horas' }
  ],
  faq: [
    { question:'Que formações posso encontrar na Geração Transversal?', answer:'Disponibilizamos formação nas áreas de Saúde, Trabalho Social e Orientação, e Proteção de Pessoas e Bens. Na área INEM, a oferta apresentada inclui SBV, SBVDAE, SBVP, TAT, TAS e ações de recertificação.' },
    { question:'A Geração Transversal é uma entidade certificada?', answer:'A Geração Transversal possui certificação DGERT nas áreas 729, 762 e 861 e apresenta acreditação INEM para formação em emergência médica. Pode consultar mais informações na página de Certificações.' },
    { question:'Onde decorrem as ações de formação?', answer:'A Geração Transversal tem capacidade de intervenção em todo o território nacional. Os locais e datas dependem da ação de formação e são confirmados pela equipa.' },
    { question:'Como posso inscrever-me numa formação?', answer:'Preencha o formulário da página Contactos, indicando a formação pretendida. A equipa entrará em contacto para esclarecer condições, disponibilidade e próximos passos.' },
    { question:'Organizam formação para empresas e organizações?', answer:'Sim. Desenvolvemos soluções formativas adaptadas aos objetivos e características de empresas e organizações. Pode solicitar informações e apresentar as necessidades da sua equipa.' },
    { question:'As formações financiadas estão sempre disponíveis?', answer:'A oferta financiada depende dos projetos em execução, vagas e requisitos aplicáveis. Contacte-nos para confirmar as ações e condições de acesso.' }
  ],
  // TESTEMUNHOS: edite apenas os 7 objetos abaixo (name, role, rating e quote).
  // IMPORTANTE: opiniões e nomes são exemplos inventados. Substitua por avaliações reais
  // e autorizadas antes de publicar. Para ocultar toda a secção: testimonials: [].
  // demo:true indica que o conteúdo é provisório no código (não altera o aspeto).
  testimonials: [
    { name:'Ana Martins', role:'Formação SBV', rating:5, demo:true, quote:'Uma experiência muito positiva. Os conteúdos foram explicados de forma clara e as atividades práticas ajudaram a consolidar a aprendizagem.' },
    { name:'Ricardo Silva', role:'Formação SBVDAE', rating:5, demo:true, quote:'Gostei especialmente da componente prática e da disponibilidade dos formadores para esclarecer dúvidas ao longo da formação.' },
    { name:'Sofia Ferreira', role:'Formação TAT', rating:5, demo:true, quote:'Formação bem organizada, com conteúdos úteis e um ambiente de aprendizagem muito profissional. Recomendo a experiência.' },
    { name:'João Pereira', role:'Formação TAS', rating:5, demo:true, quote:'A formação foi bastante prática, com exercícios que ajudaram a ganhar confiança na resposta a situações de emergência.' },
    { name:'Marta Costa', role:'Formação SBVP', rating:5, demo:true, quote:'Os exemplos e simulações facilitaram muito a compreensão. Uma experiência enriquecedora e muito bem acompanhada.' },
    { name:'Pedro Almeida', role:'Recertificação RTAT', rating:5, demo:true, quote:'Uma excelente oportunidade para atualizar conhecimentos e rever procedimentos essenciais com apoio dos formadores.' },
    { name:'Inês Rodrigues', role:'Formação SBVDAE', rating:5, demo:true, quote:'Gostei da organização, do ritmo da formação e da atenção dada a cada participante durante os exercícios práticos.' }
  ]
};
