/* Elementos de layout partilhados por todas as páginas. Sem dependências externas. */
(function () {
  'use strict';
  const root = document.body.dataset.root || '';
  const page = document.body.dataset.page || 'inicio';
  const url = (path) => root + path;
  const ico = (name, size=20) => {
    const d = {
      arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
      arrowUp:'<path d="m7 17 10-10M7 7h10v10"/>',
      check:'<path d="m5 12 4 4L19 6"/>',
      shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
      award:'<circle cx="12" cy="8" r="6"/><path d="m8.21 13.89-1 8.11L12 19l4.79 3-1-8.11"/>',
      map:'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
      clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
      phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.2 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.81a2 2 0 0 1-.45 2.11L8.1 9.86a16 16 0 0 0 6 6l1.22-1.22a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.69A2 2 0 0 1 22 16.92Z"/>',
      mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/>',
      book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
      users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
      heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
      building:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 11h.01M16 11h.01"/>',
      globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>'
    };
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d[name]||d.arrow}</svg>`;
  };
  window.GTIcon = ico;
  const navLinks = [
    ['inicio','Início','index.html'],
    ['sobre','Sobre Nós','sobre.html'],
    ['certificacoes','Certificações','certificacoes.html'],
    ['projetos','Projetos Financiados','projetos.html'],
    ['contactos','Contactos','contactos.html']
  ];
  const link = (item) => `<a class="nav-link${page===item[0]?' is-current':''}" href="${url(item[2])}" ${page===item[0]?'aria-current="page"':''}>${item[1]}</a>`;
  const header = document.getElementById('site-header');
  if (header) header.innerHTML = `
  <a class="skip-link" href="#conteudo">Saltar para o conteúdo</a>
  <div class="utility-bar"><div class="container utility-inner"><span>${ico('map',14)} Formação com atuação nacional</span><a href="tel:+351910919728">${ico('phone',14)} +351 910 919 728</a></div></div>
  <header class="site-header" id="site-header-inner"><div class="container header-inner">
    <a class="brand" href="${url('index.html')}" aria-label="Geração Transversal — Início"><img src="${url('assets/images/marca/simbolo-geracao-transversal.webp')}" width="76" height="68" alt="Logótipo Geração Transversal"><span class="brand-text"><strong>Geração <span>Transversal</span></strong><small>FORMAÇÃO PROFISSIONAL</small></span></a>
    <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Abrir menu" aria-controls="main-nav" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="main-nav" id="main-nav" aria-label="Navegação principal">
      ${link(navLinks[0])}${link(navLinks[1])}
      <div class="nav-dropdown"><button class="nav-link dropdown-toggle ${page==='formacoes'?'is-current':''}" type="button" aria-expanded="false" aria-controls="training-dropdown">Formações <span class="chevron" aria-hidden="true"></span></button><div class="dropdown-menu" id="training-dropdown"><a href="${url('formacoes.html')}">Todas as formações</a><a href="${url('formacoes/inem.html')}">Formação INEM</a><a href="${url('formacoes/dgert.html')}">Formação DGERT</a><a href="${url('formacoes/cursos-dgert.html')}">Cursos DGERT e UFCD</a><a href="${url('formacoes/financiada.html')}">Formação Financiada</a></div></div>
      ${link(navLinks[2])}${link(navLinks[3])}${link(navLinks[4])}
      <a class="btn btn-primary nav-cta" href="${url('contactos.html')}">Pedir informações ${ico('arrow',17)}</a>
    </nav>
  </div></header>`;
  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = `
    <footer class="site-footer"><div class="container"><div class="footer-grid">
      <div class="footer-about"><a href="${url('index.html')}" class="footer-brand"><img src="${url('assets/images/marca/logo-geracao-transversal.webp')}" alt="Geração Transversal" width="92" height="82"></a><p>Formação profissional que valoriza pessoas, desenvolve competências e responde aos desafios de organizações em todo o país.</p><div class="footer-social"><a href="${GT.company.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Geração Transversal">Instagram ${ico('arrowUp',15)}</a></div></div>
      <div><h3>Explorar</h3><ul><li><a href="${url('sobre.html')}">Sobre Nós</a></li><li><a href="${url('formacoes.html')}">Formações</a></li><li><a href="${url('certificacoes.html')}">Certificações</a></li><li><a href="${url('projetos.html')}">Projetos Financiados</a></li></ul></div>
      <div><h3>Formações</h3><ul><li><a href="${url('formacoes/inem.html')}">Formação INEM</a></li><li><a href="${url('formacoes/dgert.html')}">Formação DGERT</a><a href="${url('formacoes/cursos-dgert.html')}">Cursos DGERT e UFCD</a></li><li><a href="${url('formacoes/financiada.html')}">Formação Financiada</a></li><li><a href="${url('contactos.html')}">Inscrições e informações</a></li></ul></div>
      <div><h3>Fale connosco</h3><ul class="footer-contact"><li>${ico('phone',17)} <a href="tel:${GT.company.phoneLink}">${GT.company.phone}</a></li><li>${ico('mail',17)} <a href="mailto:${GT.company.email}">${GT.company.email}</a></li><li>${ico('map',17)} <span>${GT.company.address}</span></li></ul></div>
    </div><div class="footer-bottom"><span>© 2026 Geração Transversal – Todos os direitos reservados</span><span class="footer-credit">Crafted by <strong>Bruno Pinto</strong></span><a class="footer-privacy" href="${url('privacidade.html')}">Privacidade</a></div></div></footer>`;

  // Canal direto de contacto, disponível em todas as páginas.
  const whatsappUrl = `https://wa.me/${GT.company.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de obter informações sobre as formações da Geração Transversal.')}`;
  const whatsapp = document.createElement('a');
  whatsapp.className = 'whatsapp-float';
  whatsapp.href = whatsappUrl;
  whatsapp.target = '_blank';
  whatsapp.rel = 'noopener noreferrer';
  whatsapp.setAttribute('aria-label', 'Contactar a Geração Transversal através do WhatsApp (abre nova janela)');
  whatsapp.innerHTML = `<svg viewBox="0 0 32 32" width="25" height="25" fill="currentColor" aria-hidden="true"><path d="M16 2.5A13.4 13.4 0 0 0 4.4 22.6L2.5 29.5l7-1.8A13.5 13.5 0 1 0 16 2.5Zm0 24.4c-2.2 0-4.3-.6-6.1-1.8l-.4-.2-4.1 1.1 1.1-4-.3-.4a11 11 0 1 1 9.8 5.3Zm6.1-8.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1a9 9 0 0 1-4.4-3.9c-.3-.5.3-.5.9-1.8.1-.2 0-.5-.1-.7l-1-2.4c-.3-.7-.5-.6-.7-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.3 3.2 1.5 3.4a12.3 12.3 0 0 0 5.5 4.9 4.9 0 0 0 4 .3c1.2-.5 2.1-1.7 2.3-2.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.4Z"/></svg><span>Fale connosco</span>`;
  document.body.appendChild(whatsapp);
})();
