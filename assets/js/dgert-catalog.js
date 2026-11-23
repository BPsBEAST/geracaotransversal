/* Catálogo DGERT: uma única fonte de dados em assets/js/data.js.
   Não requer bibliotecas, servidor ou framework. */
(() => {
  'use strict';
  const container = document.getElementById('dgert-catalog');
  if (!container) return;

  const catalog = window.GT?.dgertCatalog || [];
  const filters = [...document.querySelectorAll('[data-dgert-filter]')];
  const search = document.getElementById('dgert-search');
  const counter = document.getElementById('dgert-results');
  const empty = document.getElementById('dgert-empty');
  let active = 'all';

  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[char]));
  const normalize = text => String(text || '').toLocaleLowerCase('pt-PT')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const contactLink = course =>
    `../contactos.html?formacao=${encodeURIComponent(course.id)}`;

  function itemMarkup(course) {
    const title = escapeHTML(course.title);
    const link = contactLink(course);
    if (course.type === 'completo') {
      const features = (course.features || []).map(item =>
        `<li><span aria-hidden="true">✓</span>${escapeHTML(item)}</li>`).join('');
      return `
        <article class="dgert-item dgert-program reveal" data-id="${escapeHTML(course.id)}"
          data-type="completo">
          <div class="dgert-program-art" aria-hidden="true">
            <div class="dgert-program-art-ring"></div>
            <div class="dgert-program-symbol"><span>+</span></div>
            <span class="dgert-program-art-tag">PERCURSO COMPLETO</span>
            <span class="dgert-program-art-foot">SAÚDE <span>•</span> FORMAÇÃO PROFISSIONAL</span>
          </div>
          <div class="dgert-program-body">
            <span class="dgert-card-type"><span class="dgert-type-point"></span>${escapeHTML(course.label)}</span>
            <h3>${title}</h3>
            <p>${escapeHTML(course.summary)}</p>
            <ul class="dgert-feature-list">${features}</ul>
            <div class="dgert-card-foot">
              <span>Programa e condições sob consulta</span>
              <a class="btn btn-primary" href="${link}" aria-label="Pedir informações sobre ${title}">Pedir informações <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </article>`;
    }
    const code = escapeHTML(course.code);
    return `
      <article class="dgert-item dgert-ufcd-card reveal" data-id="${escapeHTML(course.id)}"
        data-type="ufcd">
        <div class="dgert-ufcd-top">
          <span class="dgert-ufcd-kicker">UNIDADE DE FORMAÇÃO</span>
          <span class="dgert-ufcd-code">UFCD ${code}</span>
        </div>
        <h3>${title}</h3>
        <p>${escapeHTML(course.summary || "Formação individual para aprofundar competências nesta área.")}</p>
        <div class="dgert-ufcd-bottom">
          <span>Condições sob consulta</span>
          <a class="dgert-card-link" href="${link}" aria-label="Pedir informações sobre ${title}">Saber mais <span aria-hidden="true">↗</span></a>
        </div>
      </article>`;
  }

  container.innerHTML = catalog.map(itemMarkup).join('');
  const cardNodes = [...container.querySelectorAll('.dgert-item')];

  function update() {
    const query = normalize(search?.value.trim());
    let count = 0;
    cardNodes.forEach((card, index) => {
      const item = catalog[index];
      const matchType = active === 'all' || item.type === active;
      const matchSearch = !query || normalize(
        [item.title, item.code, item.summary, item.type, ...(item.features || [])].join(' ')
      ).includes(query);
      const visible = matchType && matchSearch;
      card.hidden = !visible;
      if (visible) count++;
    });
    counter.textContent = `${count} ${count === 1 ? 'formação encontrada' : 'formações encontradas'}`;
    empty.hidden = count !== 0;
  }

  filters.forEach(button => button.addEventListener('click', () => {
    active = button.dataset.dgertFilter;
    filters.forEach(other => {
      const selected = other === button;
      other.classList.toggle('is-active', selected);
      other.setAttribute('aria-pressed', String(selected));
    });
    update();
  }));
  search?.addEventListener('input', update);
  update();
})();
