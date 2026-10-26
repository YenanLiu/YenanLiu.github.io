const notes={agriculture:'Efficient visual recognition for agricultural applications.',all:'Selected work across research areas. * Equal contribution.',first:'First-author and co-first-author papers. * Equal contribution.',agents:'GUI grounding, memory and computer-use agents.',avs:'Audio-visual segmentation and cross-modal alignment.',generation:'3D/4D generation, reconstruction and tracking.',understanding:'Multimodal and cross-view human understanding.',human:'Digital humans: gesture, expression and appearance modeling.'};
const papers = [...document.querySelectorAll('.publication')];
const filters = [...document.querySelectorAll('[data-filter]')];
const more = document.getElementById('papers-more');
let selected = 'all';
let expanded = false;
function renderPapers() {
  let count = 0;
  papers.forEach(paper => {
    const matches = selected === 'all' || (selected === 'first' ? paper.dataset.firstAuthor === 'true' : paper.dataset.category === selected);
    if (matches) count++;
    paper.hidden = !matches || (selected === 'all' && !expanded && count > 4);
  });
  filters.forEach(button => {
    const active = button.dataset.filter === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  more.hidden = selected !== 'all' || count <= 4;
  more.textContent = expanded ? 'Show less' : 'More';
  more.setAttribute('aria-expanded', String(expanded));
  document.getElementById('filter-note').textContent = notes[selected] + (selected === 'all' && !expanded && count > 4 ? ' (Showing 4 of ' + count + ' papers)' : ' (' + count + (count === 1 ? ' paper)' : ' papers)'));
}
filters.forEach(button => button.addEventListener('click', () => {
  selected = button.dataset.filter;
  expanded = false;
  renderPapers();
}));
more.addEventListener('click', () => {
  expanded = !expanded;
  renderPapers();
});
renderPapers();
