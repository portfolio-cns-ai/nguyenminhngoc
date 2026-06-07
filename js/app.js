const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const modal = $('[data-modal]');
const modalTitle = $('[data-modal-title]');
const modalKicker = $('[data-modal-kicker]');
const modalSummary = $('[data-modal-summary]');
const modalPdf = $('[data-modal-pdf]');
const modalFrame = $('[data-modal-frame]');
const modalSections = $('[data-modal-sections]');

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function iconFor(type) {
  const icons = {
    shuttle:
      '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 5l9 9M12 4l8 8M17 4l7 7M16 14l-5 13 13-5 3-10-10 2Z"/></svg>',
    headphone:
      '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 18v-3a10 10 0 0 1 20 0v3"/><path d="M9 18h4v8H9a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3ZM23 18h-4v8h4a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z"/></svg>'
  };
  return icons[type] || '';
}

function renderMiniTrack() {
  const target = $('[data-mini-track]');
  target.innerHTML = '';

  portfolio.modules.forEach((module) => {
    const row = createElement('button', `mini-row${module.featured ? ' featured' : ''}`);
    row.type = 'button';
    row.addEventListener('click', () => openModule(module.code));
    row.append(
      createElement('span', 'mini-code', `B${module.code}`),
      createElement('span', 'mini-title', module.title)
    );
    target.append(row);
  });
}

function renderHobbies() {
  const target = $('[data-hobby-panel]');
  target.innerHTML = '';

  portfolio.hobbies.forEach((hobby) => {
    const card = createElement('article', 'hobby-card');
    const icon = createElement('span', 'line-icon');
    icon.innerHTML = iconFor(hobby.icon);
    card.append(icon, createElement('h3', '', hobby.title), createElement('p', '', hobby.text));
    target.append(card);
  });
}

function renderModules() {
  const target = $('[data-module-grid]');
  target.innerHTML = '';

  portfolio.modules.forEach((module) => {
    const card = createElement('article', `module-card ${module.category.toLowerCase()}${module.featured ? ' featured' : ''}`);
    const top = createElement('div', 'module-top');
    top.append(
      createElement('span', 'module-code', `Bài ${module.code}`),
      createElement('span', 'module-category', module.category)
    );

    const title = createElement('h3', '', module.title);
    const summary = createElement('p', '', module.summary);

    const tags = createElement('div', 'tag-list');
    module.tags.forEach((tag) => tags.append(createElement('span', '', tag)));

    const actions = createElement('div', 'module-actions');
    const detailButton = createElement('button', 'text-button', 'Xem chi tiết');
    detailButton.type = 'button';
    detailButton.addEventListener('click', () => openModule(module.code));

    const pdfLink = createElement('a', 'text-button', 'Mở PDF');
    pdfLink.href = module.pdf;
    pdfLink.target = '_blank';
    pdfLink.rel = 'noopener';

    actions.append(detailButton, pdfLink);
    card.append(top, title, createElement('p', 'module-focus', module.focus), summary, tags, actions);
    target.append(card);
  });
}

function renderReflections() {
  const target = $('[data-reflection-grid]');
  target.innerHTML = '';

  portfolio.reflections.forEach((reflection) => {
    const card = createElement('article', 'reflection-card');
    card.append(createElement('h3', '', reflection.title), createElement('p', '', reflection.text));
    target.append(card);
  });
}

function openModule(code) {
  const module = portfolio.modules.find((item) => item.code === code);
  if (!module) return;

  modalTitle.textContent = module.title;
  modalKicker.textContent = `Bài ${module.code} / ${module.sourceFile} / ${module.focus}`;
  modalSummary.textContent = module.summary;
  modalPdf.href = module.pdf;
  modalFrame.src = module.pdf;
  modalSections.innerHTML = '';

  Object.entries(module.sections).forEach(([heading, text]) => {
    const note = createElement('article', 'study-note');
    note.append(createElement('h3', '', heading), createElement('p', '', text));
    modalSections.append(note);
  });

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  modalFrame.src = '';
  document.body.style.overflow = '';
}

function bindModal() {
  $$('[data-close-modal]').forEach((element) => element.addEventListener('click', closeModal));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
}

renderMiniTrack();
renderHobbies();
renderModules();
renderReflections();
bindModal();
