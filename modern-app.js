const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

// نظام البيانات الذكي الكامل
const smartDatabase = {
  urgentDiseases: [
    {
      id: 1,
      title: "🦠 إنفلونزا الطيور - انتشار عالمي",
      severity: "high",
      description: "تحذير: انتشار واسع جداً في المناطق الحارة والمعتدلة. احرص على عزل الدواجن والطيور فوراً.",
      animals: "دواجن، طيور برية، ديوك رومي",
      symptoms: "خمول شديد، فقدان الشهية، انخفاض إنتاج البيض، تورم الوجه، إسهال أخضر، عدم استقرار عصبي",
      prevention: "تطعيم دوري، تهوية جيدة، نظافة عالية",
      date: "2026-10-08",
      source: "منظمة الصحة الحيوانية العالمية"
    },
    {
      id: 2,
      title: "🐰 جرب الأرانب - ظهور محلي",
      severity: "medium",
      description: "حالات مؤكدة من جرب الأرانب في المناطق الريفية والمزارع الصغيرة.",
      animals: "أرانب بكل أنواعها",
      symptoms: "حكة شديدة، خسارة الشعر، تقشر الجلد، سلوك عصبي",
      prevention: "عزل فوري، علاج موضعي بالكبريت والزيوت الطبية",
      date: "2026-10-07",
      source: "وزارة الزراعة"
    },
    {
      id: 3,
      title: "🐕 التهاب المعدة والأمعاء - موسمي",
      severity: "low",
      description: "ارتفاع الحالات في فصل الصيف، خاصة مع عدم الاهتمام بنظافة المياه والطعام.",
      animals: "كلاب، قطط، حيوانات مختلفة",
      symptoms: "إسهال، قيء، ضعف عام، فقدان الشهية، جفاف الفم",
      prevention: "مياه نظيفة، طعام صحي، نظافة المحيط العالية",
      date: "2026-10-06",
      source: "مركز البحوث البيطرية"
    }
  ],

  marketPrices: {
    pets: [
      { name: "🐱 قطة فارسية", min: 150, max: 500, currency: "USD", trend: "up" },
      { name: "🐶 كلب جولدن ريتريفر", min: 200, max: 800, currency: "USD", trend: "stable" },
      { name: "🐹 أرنب بلجيكي", min: 30, max: 80, currency: "USD", trend: "up" },
      { name: "🦜 ببغاء ماكاو", min: 500, max: 2000, currency: "USD", trend: "stable" }
    ],
    livestock: [
      { name: "🐔 لحم دجاج (كيلو)", min: 2.5, max: 4, currency: "USD", trend: "down" },
      { name: "🐄 لحم بقري (كيلو)", min: 5, max: 10, currency: "USD", trend: "up" },
      { name: "🐑 لحم الضأن (كيلو)", min: 6, max: 12, currency: "USD", trend: "up" },
      { name: "🥚 بيض الدجاج (دستة)", min: 0.8, max: 1.5, currency: "USD", trend: "down" }
    ]
  },

  topFAQ: [
    {
      priority: 1,
      question: "ما أعراض إنفلونزا الطيور عند الدواجن؟",
      answer: "الأعراض الرئيسية: الخمول الشديد، فقدان الشهية بشكل تام، انخفاض إنتاج البيض، تورم الوجه والرأس، إسها�� أخضر، عدم استقرار عصبي. ⚠️ عند ظهور أي من هذه الأعراض: اعزل الدواجن فوراً واتصل بالطبيب البيطري",
      category: "diseases",
      urgency: "high"
    },
    {
      priority: 2,
      question: "لماذا ترفض قطتي تناول الطعام؟",
      answer: "الأسباب الشائعة: التوتر والقلق، التغيرات المفاجئة في الطعام، مشاكل في الأسنان أو اللثة، التهاب المعدة، تغييرات بيئية في المنزل. ⚠️ إذا استمر لأكثر من 24 ساعة أو ظهر قيء: مراجعة الطبيب ضرورية",
      category: "cats",
      urgency: "high"
    },
    {
      priority: 3,
      question: "ما الأطعمة الممنوعة والسامة للكلاب؟",
      answer: "أطعمة ممنوعة تماماً: الشوكولاتة، البصل، الثوم، العنب والزبيب، الأطعمة الدهنية جداً، الكحول، الحلويات بالسكرين الصناعي. حتى كميات صغيرة قد تسبب تسمماً خطيراً - تجنبها تماماً",
      category: "dogs",
      urgency: "medium"
    },
    {
      priority: 4,
      question: "كيف أعرف أن الكلب يعاني من الألم؟",
      answer: "علامات الألم: التململ، الخوف، البكاء، تجنب الحركة، إصابة موضع معين، تغيير في السلوك، العدوانية غير المعهودة. الحل: فحص بيطري فوري، لا تعطِ أدوية بدون استشارة",
      category: "dogs",
      urgency: "high"
    }
  ],

  topArticles: [
    {
      id: 1,
      title: "🦠 الوقاية من الأمراض المعدية عند الدواجن",
      summary: "دليل شامل يشمل أفضل الممارسات، نظافة المزرعة، التهوية، التطعيمات، والعزل الطبي.",
      category: "diseases",
      priority: "high",
      readTime: 8,
      date: "2026-10-08",
      content: "دليل متكامل يغطي جميع جوانب الوقاية من الأمراض المعدية في الدواجن، بما فيها: نظافة المزرعة، التهوية الجيدة، برامج التطعيم، العزل الطبي، المراقبة المستمرة للحيوانات."
    },
    {
      id: 2,
      title: "💉 جدول التطعيمات الكامل للكلاب والقطط",
      summary: "متى يتم تطعيم الجراء والقطط الصغيرة، أنواع اللقاحات، التطعيمات الدورية الضرورية.",
      category: "vaccines",
      priority: "high",
      readTime: 6,
      date: "2026-10-05",
      content: "جدول شامل يوضح موعد كل لقاح، العمر المناسب، التطعيمات الإضافية حسب المنطقة الجغرافية، والعناية بعد التطعيم."
    },
    {
      id: 3,
      title: "🐱 أفضل طرق تنظيف صندوق فضلات القطط",
      summary: "نصائح عملية للنظافة والصحة، تقليل الروائح الكريهة، الوقاية من الأمراض.",
      category: "cats",
      priority: "medium",
      readTime: 5,
      date: "2026-10-06",
      content: "نصائح عملية وسهلة التطبيق لتنظيف صندوق الفضلات، اختيار نوع الرمل المناسب، التخلص الآمن من الفضلات، الوقاية من الأمراض."
    }
  ]
};

// نظام الذكاء الاصطناعي المحلي
const smartAI = {
  analyzeQuestion: function(question) {
    const q = question.toLowerCase();
    
    if (/إنفلونزا|طيور|دواجن|وباء|مرض/.test(q)) {
      return {
        type: "disease",
        priority: "high",
        suggestion: "هذا سؤال عاجل عن الأمراض. يُنصح بمراجعة قسم الأخبار الطارئة.",
        relevantData: smartDatabase.urgentDiseases[0]
      };
    }
    
    if (/قط|قطة|قطط/.test(q)) {
      return {
        type: "cats",
        priority: "medium",
        suggestion: "سؤال متعلق بالقطط. راجع قاعدة المعرفة أو الأسئلة الشائعة.",
        relevantData: smartDatabase.topFAQ.find(f => f.category === "cats")
      };
    }
    
    if (/كلب|كلاب|جرو/.test(q)) {
      return {
        type: "dogs",
        priority: "medium",
        suggestion: "سؤال متعلق بالكلاب. راجع قاعدة المعرفة أو جدول التطعيمات.",
        relevantData: smartDatabase.topFAQ.find(f => f.category === "dogs")
      };
    }
    
    if (/طعام|تغذي|علف|غذاء/.test(q)) {
      return {
        type: "nutrition",
        priority: "medium",
        suggestion: "سؤال عن التغذية. يُنصح بالاطلاع على قسم التغذية الصحية.",
        relevantData: "راجع المقالات الخاصة بالتغذية المتوازنة"
      };
    }
    
    return {
      type: "general",
      priority: "low",
      suggestion: "سؤال عام. حاول البحث في قاعدة المعرفة.",
      relevantData: null
    };
  },

  generateAnswer: function(question) {
    const analysis = this.analyzeQuestion(question);
    
    let answer = "المعلومة: ";
    
    if (analysis.type === "disease") {
      answer += "يتعلق سؤالك بمرض حيواني. " + analysis.relevantData.description + " الوقاية: " + analysis.relevantData.prevention;
    } else if (analysis.type === "cats") {
      answer += "للقطط: " + analysis.relevantData.answer;
    } else if (analysis.type === "dogs") {
      answer += "للكلاب: " + analysis.relevantData.answer;
    } else if (analysis.type === "nutrition") {
      answer += "التغذية الصحية ضرورية جداً. تأكد من توازن الطعام حسب العمر والنوع.";
    } else {
      answer += analysis.suggestion;
    }
    
    return answer;
  }
};

// ملء العناصر بالبيانات الذكية
function populateDiseases() {
  const grid = $('#urgentGrid');
  if (!grid) return;
  
  grid.innerHTML = smartDatabase.urgentDiseases.map(disease => `
    <div class="card" style="border-right:4px solid ${disease.severity === 'high' ? 'var(--danger)' : disease.severity === 'medium' ? '#ffd93d' : '#6bcf7f'}">
      <div class="priority-badge ${disease.severity}">${disease.severity === 'high' ? '🆘 عاجل' : disease.severity === 'medium' ? '⚠️ تحذير' : '📢 معلومة'}</div>
      <h3>${disease.title}</h3>
      <p class="muted">${disease.description}</p>
      <p><strong>الحيوانات المتأثرة:</strong> ${disease.animals}</p>
      <p><strong>الأعراض:</strong> ${disease.symptoms}</p>
      <p><strong>الوقاية:</strong> ${disease.prevention}</p>
      <p class="small">📅 آخر تحديث: ${disease.date} | المصدر: ${disease.source}</p>
    </div>
  `).join('');
}

function populateMarket() {
  const ticker = document.querySelector('.market-ticker');
  if (!ticker) return;
  
  const allItems = [...smartDatabase.marketPrices.pets, ...smartDatabase.marketPrices.livestock];
  
  const tickerHTML = allItems.map(item => `
    <div class="market-item">
      <strong>${item.name}</strong>
      <div class="price">$${item.min} - $${item.max}</div>
      <div class="trend ${item.trend}">
        ${item.trend === 'up' ? '📈 صاعد' : item.trend === 'down' ? '📉 هابط' : '➡️ مستقر'}
      </div>
    </div>
  `).join('');
  
  ticker.innerHTML = tickerHTML;
}

function populateFAQ() {
  const grid = $('#faqGrid');
  if (!grid) return;
  
  grid.innerHTML = smartDatabase.topFAQ.map(faq => `
    <div class="card">
      <div class="priority-badge ${faq.urgency}">${faq.urgency === 'high' ? '🆘 عاجل' : '⚠️ مهم'}</div>
      <h3>${faq.question}</h3>
      <p><strong>الإجابة:</strong></p>
      <p class="muted">${faq.answer}</p>
    </div>
  `).join('');
}

function populateArticles() {
  const grid = document.querySelector('#articles .grid');
  if (!grid) return;
  
  grid.innerHTML = smartDatabase.topArticles.map(article => `
    <div class="card">
      <div class="priority-badge ${article.priority}">${article.priority === 'high' ? '📈 مهم جداً' : '⚠️ مهم'}</div>
      <h3>${article.title}</h3>
      <p class="muted">${article.summary}</p>
      <p class="small">⏱️ وقت القراءة: ${article.readTime} دقائق | 📅 ${article.date}</p>
    </div>
  `).join('');
}

// أداة الحسابات الذكية
function setupCalculators() {
  const calcDose = $('#calcDose');
  if (calcDose) {
    calcDose.addEventListener('click', () => {
      const weight = parseFloat($('#weight')?.value || 0);
      const dose = parseFloat($('#dose')?.value || 0);
      const result = weight > 0 && dose >= 0 ? (weight * dose).toFixed(2) : 'بيانات غير صحيحة';
      $('#doseResult').textContent = `الناتج الحسابي: ${result} mg`;
    });
  }

  const calcAge = $('#calcAge');
  if (calcAge) {
    calcAge.addEventListener('click', () => {
      const birth = $('#birth')?.value;
      if (!birth) {
        $('#ageResult').textContent = 'اختر تاريخ الميلاد أولاً';
        return;
      }
      const bd = new Date(birth);
      const now = new Date();
      let years = now.getFullYear() - bd.getFullYear();
      let months = now.getMonth() - bd.getMonth();
      if (months < 0) { years--; months += 12; }
      $('#ageResult').textContent = `العمر التقريبي: ${years} سنة و ${months} شهر`;
    });
  }
}

// مساعد الذكاء الاصطناعي
function setupAI() {
  const askAi = $('#aiDemo');
  if (askAi) {
    askAi.addEventListener('click', () => {
      const question = $('#aiq')?.value.trim();
      if (!question) {
        $('#aiResult').textContent = 'يرجى كتابة سؤال أولاً';
        return;
      }
      const answer = smartAI.generateAnswer(question);
      $('#aiResult').textContent = answer;
    });
  }

  // زر البحث السريع
  const googleBtn = $('#googleBtn');
  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      const q = $('#webq')?.value.trim();
      if (q) window.open(`https://www.google.com/search?q=${encodeURIComponent(q)}`, '_blank');
    });
  }

  const youtubeBtn = $('#youtubeBtn');
  if (youtubeBtn) {
    youtubeBtn.addEventListener('click', () => {
      const q = $('#webq')?.value.trim();
      if (q) window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`, '_blank');
    });
  }
}

// واتساب
function setupWhatsApp() {
  const sendWA = $('#sendWA');
  if (sendWA) {
    sendWA.addEventListener('click', () => {
      const name = $('#cn')?.value.trim();
      const phone = $('#cp')?.value.trim();
      const question = $('#ca')?.value.trim();
      
      if (!name || !phone || !question) {
        alert('يرجى ملء جميع الحقول');
        return;
      }
      
      const msg = `السلام عليكم دكتور، أنا ${name}\nالهاتف: ${phone}\nالسؤال:\n${question}`;
      window.open(`https://wa.me/213540661865?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
}

// البحث في قاعدة المعرفة
function setupKnowledgeSearch() {
  const knowledgeInput = $('#knowledgeSearch');
  if (knowledgeInput) {
    knowledgeInput.addEventListener('input', () => {
      const query = knowledgeInput.value.toLowerCase();
      $$('.know').forEach(card => {
        const text = (card.dataset.text || '').toLowerCase();
        card.style.display = !query || text.includes(query) ? 'block' : 'none';
      });
    });
  }

  const filterButtons = $$('[data-filter]');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      $$('.know').forEach(card => {
        card.style.display = cat === 'all' || card.dataset.cat === cat ? 'block' : 'none';
      });
      filterButtons.forEach(b => b.classList.toggle('active', b === btn));
    });
  });

  const clearSearch = $('#clearSearch');
  if (clearSearch) {
    clearSearch.addEventListener('click', () => {
      knowledgeInput.value = '';
      $$('.know').forEach(card => card.style.display = 'block');
      filterButtons.forEach((b, i) => b.classList.toggle('active', i === 0));
    });
  }
}

// ساعة حية
function updateClock() {
  const clock = $('#clock');
  if (clock) {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' }) + ' · ' + now.toLocaleDateString('ar-DZ', { weekday: 'long', day: 'numeric', month: 'long' });
  }
}

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', () => {
  populateDiseases();
  populateMarket();
  populateFAQ();
  populateArticles();
  setupCalculators();
  setupAI();
  setupWhatsApp();
  setupKnowledgeSearch();
  updateClock();
  setInterval(updateClock, 1000);
});
