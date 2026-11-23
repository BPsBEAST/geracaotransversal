/* Funcionalidade global. JavaScript nativo para evitar dependências desnecessárias. */
(function () {
  'use strict';
  const root = document.body.dataset.root || '';
  const ico = window.GTIcon;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const header = document.getElementById('site-header-inner');
  const nav = document.getElementById('main-nav');
  const menuBtn = document.getElementById('menu-toggle');
  const dropdownBtn = document.querySelector('.dropdown-toggle');
  const drop = document.querySelector('.nav-dropdown');

  const scrollHeader = () => header && header.classList.toggle('is-scrolled', window.scrollY > 24);
  window.addEventListener('scroll', scrollHeader, { passive: true });
  scrollHeader();

  const closeMenu = () => {
    if (!nav || !menuBtn) return;
    nav.classList.remove('is-open');
    menuBtn.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Abrir menu');
  };
  menuBtn?.addEventListener('click', () => {
    const opening = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', opening);
    menuBtn.classList.toggle('is-open', opening);
    menuBtn.setAttribute('aria-expanded', String(opening));
    menuBtn.setAttribute('aria-label', opening ? 'Fechar menu' : 'Abrir menu');
  });
  dropdownBtn?.addEventListener('click', () => {
    const opening = !drop.classList.contains('is-open');
    drop.classList.toggle('is-open', opening);
    dropdownBtn.setAttribute('aria-expanded', String(opening));
  });
  document.addEventListener('click', e => {
    if (drop && !drop.contains(e.target)) {
      drop.classList.remove('is-open');
      dropdownBtn?.setAttribute('aria-expanded', 'false');
    }
    if (nav && menuBtn && !nav.contains(e.target) && !menuBtn.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeMenu(); drop?.classList.remove('is-open'); dropdownBtn?.setAttribute('aria-expanded', 'false'); }
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  const card = (course) => {
    const contactHref = `${root}contactos.html?formacao=${encodeURIComponent(course.short)}`;
    return `<article class="course-card reveal"><a class="course-visual" href="${contactHref}" aria-label="Pedir informações sobre ${course.title}"><img loading="lazy" src="${root}assets/images/formacoes/${course.image}" alt="Formação ${course.short} — Geração Transversal" width="420" height="300"><span class="course-duration">${ico('clock',15)} ${course.duration}</span></a><div class="course-body"><div class="course-kicker">FORMAÇÃO INEM <span>•</span> ${course.short}</div><h3>${course.title}</h3><p>${course.summary}</p><a class="text-link" href="${contactHref}">Saber mais ${ico('arrow',17)}</a></div></article>`;
  };
  const courses = window.GT.courses;
  document.querySelectorAll('[data-course-grid]').forEach(grid => {
    const type = grid.dataset.courseGrid;
    const shown = type === 'featured' ? courses.filter(c => ['sbv','sbvdae','tat'].includes(c.id)) : courses;
    grid.innerHTML = shown.map(card).join('');
  });

  const search = document.getElementById('course-search');
  const count = document.getElementById('course-count');
  if (search) {
    const allCards = [...document.querySelectorAll('.course-card')];
    const update = () => {
      const q = search.value.trim().toLocaleLowerCase('pt-PT');
      let visible = 0;
      allCards.forEach((el, i) => {
        const course = courses[i];
        const show = [course.short, course.title, course.summary].join(' ').toLocaleLowerCase('pt-PT').includes(q);
        el.hidden = !show;
        if (show) visible++;
      });
      if(count) count.textContent = `${visible} ${visible === 1?'formação encontrada':'formações encontradas'}`;
      const empty = document.getElementById('empty-courses');
      if(empty) empty.hidden = visible > 0;
    };
    search.addEventListener('input', update);
    update();
  }

  // A página deve ficar visível mesmo se as animações forem desativadas.
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 35px 0px' });
    targets.forEach(el => observer.observe(el));
    document.documentElement.classList.add('motion-ready');
  }

  // A lista de opções de contacto e de módulos utiliza os mesmos dados do catálogo.
  const financedList = document.querySelector('[data-financed-list]');
  if (financedList) {
    financedList.innerHTML = GT.financed.map(item => `<li><div><small>${item.code}</small><strong>${item.title}</strong></div><span>${item.duration}</span></li>`).join('');
  }

  const trainingSelect = document.getElementById('training-select');
  if (trainingSelect) {
    const options = GT.courses.map(item => new Option(`${item.title} (${item.short})`, item.short));
    options.push(...(GT.dgertCatalog || []).map(item => new Option(
      `${item.title}${item.code ? ` (UFCD ${item.code})` : ' (curso completo)'}`,
      item.id
    )));
    options.push(new Option('Formação Financiada','Formação Financiada'), new Option('Formação DGERT','Formação DGERT'), new Option('Outra','Outra'));
    trainingSelect.append(...options);
    const params = new URLSearchParams(window.location.search);
    const selected = params.get('formacao');
    if(selected && [...trainingSelect.options].some(option => option.value === selected)) trainingSelect.value = selected;
  }
  // FAQ usa <details>: acessível por teclado mesmo sem JavaScript.
  document.querySelectorAll('[data-faq]').forEach(container => {
    const faqItems = window.GT.faq;
    faqItems.forEach((item, index) => {
      const details = document.createElement('details');
      details.className = 'faq-item';
      const summary = document.createElement('summary');
      const question = document.createElement('span');
      question.textContent = item.question;
      summary.appendChild(question);
      const answer = document.createElement('p');
      answer.textContent = item.answer;
      details.append(summary, answer);
      container.appendChild(details);
      if(index === 0) details.open = true;
    });
  });

  // Carrossel de testemunhos: uma única fonte de dados e cópia visual para ciclo contínuo.
  // Os registos demo:true são amostras para desenvolvimento, não avaliações verificadas.
  const testimonials = document.getElementById('testimonials-section');
  if (testimonials && Array.isArray(window.GT.testimonials) && window.GT.testimonials.length) {
    const track = testimonials.querySelector('[data-testimonials]');

    const records = window.GT.testimonials.filter(item => item.name && item.quote);

    const createCard = item => {
      const card = document.createElement('figure');
      card.className = 'testimonial-card';
      const stars = document.createElement('div');
      stars.className = 'testimonial-stars';
      const rating = Math.max(0, Math.min(5, Number(item.rating) || 0));
      stars.textContent = '★'.repeat(rating) + '☆'.repeat(5 - rating);
      stars.setAttribute('role', 'img');
      stars.setAttribute('aria-label', `${rating} de 5 estrelas`);
      const quote = document.createElement('blockquote');
      quote.textContent = item.quote;
      const caption = document.createElement('figcaption');
      const name = document.createElement('strong');
      name.textContent = item.name;
      caption.appendChild(name);
      if (item.role) {
        const role = document.createElement('span');
        role.textContent = item.role;
        caption.appendChild(role);
      }
      card.append(stars, quote, caption);
      return card;
    };

    if (records.length) {
      const group = document.createElement('div');
      group.className = 'testimonial-group';
      records.forEach(item => group.appendChild(createCard(item)));
      track.appendChild(group);

      // A segunda sequência serve apenas para continuidade visual; leitores de ecrã ignoram-na.
      const duplicate = group.cloneNode(true);
      duplicate.setAttribute('aria-hidden', 'true');
      duplicate.setAttribute('inert', '');
      track.appendChild(duplicate);
      testimonials.hidden = false;

    }
  }

  // Visualizador acessível de documentos: usa <dialog> nativo e mantém
  // a fotografia original acessível sem JavaScript como fallback.
  const documentViewer = document.getElementById('document-viewer');
  if (documentViewer && typeof documentViewer.showModal === 'function') {
    const preview = documentViewer.querySelector('[data-document-viewer-image]');
    const viewerTitle = documentViewer.querySelector('#document-viewer-title');
    const originalLink = documentViewer.querySelector('[data-document-original]');
    document.querySelectorAll('[data-document-open]').forEach(link => {
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
        const image = link.dataset.documentImage;
        const source = link.getAttribute('href');
        if (!image || !source) return;
        event.preventDefault();
        preview.src = image;
        preview.alt = link.dataset.documentTitle || 'Documento institucional';
        viewerTitle.textContent = link.dataset.documentTitle || 'Documento institucional';
        originalLink.href = source;
        documentViewer.showModal();
        documentViewer.querySelector('[data-document-close]').focus();
      });
    });
    documentViewer.querySelector('[data-document-close]')?.addEventListener('click', () => documentViewer.close());
    documentViewer.addEventListener('click', event => { if (event.target === documentViewer) documentViewer.close(); });
    documentViewer.addEventListener('close', () => { preview.removeAttribute('src'); });
  }

  // Validação do formulário é nativa; o envio é POST para FormSubmit.
  // Não existe mensagem local falsa de sucesso: a plataforma confirma o envio.
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', event => {
    if(!form.reportValidity()) { event.preventDefault(); return; }
    const submit = form.querySelector('button[type="submit"]');
    if(submit) { submit.disabled = true; submit.textContent = 'A abrir confirmação de envio…'; }
    const feedback = document.getElementById('contact-feedback');
    if(feedback) feedback.textContent = 'A processar o seu pedido. Aguarde a confirmação do serviço de formulários.';
    // Restauro se o navegador voltar à página (por exemplo, voltar atrás após submissão).
    window.addEventListener('pageshow', () => {
      if(submit) { submit.disabled = false; submit.textContent = 'Enviar pedido de informações →'; }
    }, { once: true });
  });
})();
