const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function updateClock() {
  const now = new Date();
  const el = $('#clock');
  if (el) {
    el.textContent = now.toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' }) + ' · ' + now.toLocaleDateString('ar-DZ', { weekday: 'long', day: 'numeric', month: 'long' });
  }
}
setInterval(updateClock, 1000);
updateClock();

const knowledgeInput = $('#knowledgeSearch');
if (knowledgeInput) {
  function filterKnowledge(cat = 'all') {
    const q = knowledgeInput.value.trim().toLowerCase();
    $$('.know').forEach(item => {
      const matchCat = cat === 'all' || item.dataset.cat === cat;
      const text = (item.dataset.text || item.textContent || '').toLowerCase();
      const matchQuery = !q || text.includes(q);
      item.classList.toggle('hidden', !(matchCat && matchQuery));
    });
  }

  knowledgeInput.addEventListener('input', () => filterKnowledge(window.currentFilter || 'all'));
  $('#clearSearch')?.addEventListener('click', () => {
    knowledgeInput.value = '';
    filterKnowledge('all');
    window.currentFilter = 'all';
    $$('.filter-row .btn').forEach(btn => btn.classList.toggle('active', btn.dataset.filter === 'all'));
  });

  $$('.filter-row .btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.currentFilter = btn.dataset.filter || 'all';
      $$('.filter-row .btn').forEach(x => x.classList.toggle('active', x === btn));
      filterKnowledge(window.currentFilter);
    });
  });
}

const aiQuestion = $('#aiQuestion');
const aiResult = $('#aiResult');
const askAi = $('#askAi');

if (askAi && aiQuestion && aiResult) {
  askAi.addEventListener('click', () => {
    const q = aiQuestion.value.trim();
    if (!q) {
      aiResult.textContent = 'يرجى كتابة سؤال أولاً.';
      return;
    }

    let answer = 'الخلاصة: راج�� الطبيب البيطري إذا استمر الأعراض.';
    if (/قط|قطه|قطة|قطط/.test(q)) {
      answer = 'القط: راقب فقدان الشهية أو القيء، واستشر الطبيب إذا استمر لأكثر من 24 ساعة أو إذا ظهر ضعف أو جفاف.';
    } else if (/كلب|كلبة|كلاب/.test(q)) {
      answer = 'الكلب: تحقق من الطعام، الوزن، النشاط، ووجود طفيليات. إذا كانت الأعراض متكررة أو شديدة، فالاستشارة البيطرية ضرورية.';
    } else if (/غذاء|علف|تغذية|طعام/.test(q)) {
      answer = 'التغذية: راقب النسبة المناسبة للبروتين، العمر، والوزن. لا تحدث كميات كبيرة فجأة، وابتعد عن الأطعمة السامة.';
    }

    aiResult.textContent = 'النتيجة: ' + answer;
  });
}

$$('.tag').forEach(tag => {
  tag.addEventListener('click', () => {
    if (aiQuestion) {
      aiQuestion.value = tag.dataset.question || '';
      askAi.click();
    }
  });
});
