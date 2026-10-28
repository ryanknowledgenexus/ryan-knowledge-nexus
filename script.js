const questions = [
  {
    subject: "Pakistan Affairs",
    question: "When did Pakistan become independent?",
    options: ["14 August 1947", "15 August 1947", "23 March 1940", "11 September 1948"],
    answer: 0,
    explanation: "Pakistan became independent on 14 August 1947."
  },
  {
    subject: "Pakistan Affairs",
    question: "Who presented the Lahore Resolution?",
    options: ["Liaquat Ali Khan", "A. K. Fazlul Huq", "Quaid-e-Azam", "Allama Iqbal"],
    answer: 1,
    explanation: "A. K. Fazlul Huq moved the Lahore Resolution on 23 March 1940."
  },
  {
    subject: "Pakistan Affairs",
    question: "The Lahore Resolution was adopted in which year?",
    options: ["1930", "1935", "1940", "1947"],
    answer: 2,
    explanation: "The All-India Muslim League adopted it on 23 March 1940."
  },
  {
    subject: "Pakistan Affairs",
    question: "Who was the first Governor-General of Pakistan?",
    options: ["Liaquat Ali Khan", "Muhammad Ali Jinnah", "Khawaja Nazimuddin", "Iskander Mirza"],
    answer: 1,
    explanation: "Muhammad Ali Jinnah was Pakistan's first Governor-General."
  },
  {
    subject: "Pakistan Affairs",
    question: "Who was Pakistan's first Prime Minister?",
    options: ["Liaquat Ali Khan", "Muhammad Ali Bogra", "Ayub Khan", "I. I. Chundrigar"],
    answer: 0,
    explanation: "Liaquat Ali Khan became Prime Minister in 1947."
  },
  {
    subject: "Pakistan Affairs",
    question: "Pakistan's first constitution came into force in:",
    options: ["1949", "1956", "1962", "1973"],
    answer: 1,
    explanation: "The 1956 Constitution came into force on 23 March 1956."
  },
  {
    subject: "Pakistan Affairs",
    question: "The Constitution currently in force in Pakistan was adopted in:",
    options: ["1956", "1962", "1973", "1985"],
    answer: 2,
    explanation: "Pakistan's Constitution was adopted in 1973."
  },
  {
    subject: "Pakistan Affairs",
    question: "The Objectives Resolution was passed in:",
    options: ["1947", "1949", "1951", "1956"],
    answer: 1,
    explanation: "The Constituent Assembly adopted it on 12 March 1949."
  },
  {
    subject: "Pakistan Affairs",
    question: "Who was Pakistan's first President?",
    options: ["Ayub Khan", "Iskander Mirza", "Yahya Khan", "Fazal Ilahi Chaudhry"],
    answer: 1,
    explanation: "Iskander Mirza became the first President in 1956."
  },
  {
    subject: "Pakistan Affairs",
    question: "The Indus Waters Treaty was signed in:",
    options: ["1956", "1960", "1965", "1972"],
    answer: 1,
    explanation: "India and Pakistan signed the treaty in 1960."
  },
  {
    subject: "Pakistan Affairs",
    question: "The Simla Agreement was signed in:",
    options: ["1965", "1971", "1972", "1974"],
    answer: 2,
    explanation: "The agreement was signed in July 1972."
  },
  {
    subject: "Pakistan Affairs",
    question: "Which is the longest river in Pakistan?",
    options: ["Jhelum", "Chenab", "Indus", "Ravi"],
    answer: 2,
    explanation: "The Indus is Pakistan's longest river."
  },
  {
    subject: "Pakistan Affairs",
    question: "Pakistan's highest mountain is:",
    options: ["Nanga Parbat", "K2", "Broad Peak", "Gasherbrum I"],
    answer: 1,
    explanation: "K2 is Pakistan's highest mountain."
  },
  {
    subject: "Pakistan Affairs",
    question: "The first martial law in Pakistan was imposed in:",
    options: ["1956", "1958", "1962", "1969"],
    answer: 1,
    explanation: "Martial law was imposed in October 1958."
  },
  {
    subject: "Pakistan Affairs",
    question: "The 18th Amendment was passed in:",
    options: ["2008", "2010", "2013", "2018"],
    answer: 1,
    explanation: "The 18th Amendment was enacted in April 2010."
  },
  {
    subject: "Pakistan Affairs",
    question: "Pakistan joined the United Nations in:",
    options: ["1947", "1950", "1955", "1960"],
    answer: 0,
    explanation: "Pakistan became a UN member on 30 September 1947."
  },
  {
    subject: "Pakistan Affairs",
    question: "Pakistan's national language is:",
    options: ["Punjabi", "Sindhi", "Urdu", "English"],
    answer: 2,
    explanation: "Article 251 of the Constitution identifies Urdu as the national language."
  },
  {
    subject: "Pakistan Affairs",
    question: "Pakistan's capital was shifted from Karachi to Islamabad during the:",
    options: ["1950s", "1960s", "1970s", "1980s"],
    answer: 1,
    explanation: "The capital functions shifted to Islamabad during the 1960s."
  },
  {
    subject: "Pakistan Affairs",
    question: "Pakistan's first general election on the basis of adult franchise was held in:",
    options: ["1965", "1970", "1977", "1985"],
    answer: 1,
    explanation: "Pakistan's first general election on adult franchise took place in 1970."
  },
  {
    subject: "Pakistan Affairs",
    question: "The State Bank of Pakistan began operations in:",
    options: ["1947", "1948", "1951", "1956"],
    answer: 1,
    explanation: "The State Bank began operations on 1 July 1948."
  },
  {
    subject: "Islamic Studies",
    question: "The first revealed verses are traditionally identified as the opening verses of:",
    options: ["Surah Al-Fatiha", "Surah Al-Alaq", "Surah Al-Ikhlas", "Surah Al-Baqarah"],
    answer: 1,
    explanation: "The first five verses of Surah Al-Alaq are traditionally identified as the first revelation."
  },
  {
    subject: "Islamic Studies",
    question: "How many pillars of Islam are commonly enumerated?",
    options: ["Three", "Four", "Five", "Six"],
    answer: 2,
    explanation: "The five pillars are Shahadah, prayer, zakat, fasting and Hajj."
  },
  {
    subject: "Islamic Studies",
    question: "The Hijrah from Makkah to Madinah occurred in:",
    options: ["610 CE", "622 CE", "630 CE", "632 CE"],
    answer: 1,
    explanation: "The Hijrah in 622 CE marks the beginning of the Islamic calendar era."
  },
  {
    subject: "Islamic Studies",
    question: "How many surahs are in the Quran?",
    options: ["110", "112", "114", "116"],
    answer: 2,
    explanation: "The Quran contains 114 surahs."
  },
  {
    subject: "Islamic Studies",
    question: "Which month is associated with obligatory fasting?",
    options: ["Muharram", "Rajab", "Ramadan", "Shawwal"],
    answer: 2,
    explanation: "Fasting during Ramadan is one of the five pillars of Islam."
  },
  {
    subject: "Islamic Studies",
    question: "Zakat is primarily a form of:",
    options: ["Pilgrimage", "Obligatory almsgiving", "Voluntary retreat", "Animal sacrifice"],
    answer: 1,
    explanation: "Zakat is obligatory almsgiving subject to relevant conditions."
  },
  {
    subject: "Islamic Studies",
    question: "The Battle of Badr took place in:",
    options: ["2 AH", "3 AH", "5 AH", "8 AH"],
    answer: 0,
    explanation: "The Battle of Badr took place in 2 AH."
  },
  {
    subject: "Islamic Studies",
    question: "The Treaty of Hudaybiyyah was concluded in:",
    options: ["2 AH", "4 AH", "6 AH", "8 AH"],
    answer: 2,
    explanation: "The treaty was concluded in 6 AH."
  },
  {
    subject: "Islamic Studies",
    question: "The Farewell Sermon was delivered during the Hajj of:",
    options: ["8 AH", "9 AH", "10 AH", "11 AH"],
    answer: 2,
    explanation: "The Farewell Sermon was delivered during the pilgrimage of 10 AH."
  },
  {
    subject: "Islamic Studies",
    question: "The direction of prayer is called the:",
    options: ["Mihrab", "Qiblah", "Minbar", "Ihram"],
    answer: 1,
    explanation: "Qiblah is the direction Muslims face during prayer."
  },
  {
    subject: "Islamic Studies",
    question: "Which angel is associated with conveying revelation to prophets?",
    options: ["Mikail", "Israfil", "Jibril", "Azrail"],
    answer: 2,
    explanation: "Jibril is associated with conveying divine revelation."
  },
  {
    subject: "Islamic Studies",
    question: "Hajj is performed in which Islamic month?",
    options: ["Ramadan", "Shawwal", "Dhul Hijjah", "Safar"],
    answer: 2,
    explanation: "The main rites of Hajj occur in Dhul Hijjah."
  },
  {
    subject: "Islamic Studies",
    question: "The Quran was revealed in which language?",
    options: ["Persian", "Arabic", "Hebrew", "Aramaic"],
    answer: 1,
    explanation: "The Quran is in Arabic."
  },
  {
    subject: "Islamic Studies",
    question: "Which city contains the Kaaba?",
    options: ["Madinah", "Jerusalem", "Makkah", "Taif"],
    answer: 2,
    explanation: "The Kaaba is located in Masjid al-Haram in Makkah."
  },
  {
    subject: "Islamic Studies",
    question: "The month that begins the Islamic calendar is:",
    options: ["Ramadan", "Muharram", "Rabi al-Awwal", "Dhul Hijjah"],
    answer: 1,
    explanation: "Muharram is the first month of the Islamic calendar."
  },
  {
    subject: "European History",
    question: "The French Revolution began in:",
    options: ["1776", "1789", "1815", "1848"],
    answer: 1,
    explanation: "The French Revolution began in 1789."
  },
  {
    subject: "European History",
    question: "The storming of the Bastille took place on:",
    options: ["4 July 1776", "14 July 1789", "18 June 1815", "1 May 1848"],
    answer: 1,
    explanation: "The Bastille was stormed on 14 July 1789."
  },
  {
    subject: "European History",
    question: "Who was defeated at the Battle of Waterloo?",
    options: ["Otto von Bismarck", "Napoleon Bonaparte", "Louis XIV", "Frederick the Great"],
    answer: 1,
    explanation: "Napoleon was defeated at Waterloo in 1815."
  },
  {
    subject: "European History",
    question: "The Congress of Vienna followed the defeat of:",
    options: ["Charlemagne", "Napoleon", "Julius Caesar", "Oliver Cromwell"],
    answer: 1,
    explanation: "The Congress of Vienna met in 1814–1815 to reorganise Europe after the Napoleonic Wars."
  },
  {
    subject: "European History",
    question: "Who is most associated with German unification under Prussian leadership?",
    options: ["Metternich", "Otto von Bismarck", "Garibaldi", "Robespierre"],
    answer: 1,
    explanation: "Bismarck played the central political role in German unification in 1871."
  },
  {
    subject: "European History",
    question: "The Industrial Revolution began in:",
    options: ["Britain", "Russia", "Spain", "Greece"],
    answer: 0,
    explanation: "The Industrial Revolution began in Britain in the eighteenth century."
  },
  {
    subject: "European History",
    question: "The First World War began in:",
    options: ["1905", "1914", "1918", "1939"],
    answer: 1,
    explanation: "The First World War began in 1914."
  },
  {
    subject: "European History",
    question: "The Treaty of Versailles was signed in:",
    options: ["1914", "1917", "1919", "1923"],
    answer: 2,
    explanation: "The Treaty of Versailles was signed in 1919."
  },
  {
    subject: "European History",
    question: "The Russian Revolution that brought the Bolsheviks to power occurred in:",
    options: ["1905", "1917", "1922", "1933"],
    answer: 1,
    explanation: "The Bolsheviks seized power during the October Revolution of 1917."
  },
  {
    subject: "European History",
    question: "The Second World War began in Europe in:",
    options: ["1933", "1938", "1939", "1941"],
    answer: 2,
    explanation: "Germany invaded Poland in September 1939."
  },
  {
    subject: "European History",
    question: "The Berlin Wall fell in:",
    options: ["1985", "1989", "1991", "1995"],
    answer: 1,
    explanation: "The Berlin Wall fell in November 1989."
  },
  {
    subject: "World History",
    question: "The United Nations was founded in:",
    options: ["1919", "1945", "1948", "1955"],
    answer: 1,
    explanation: "The UN Charter came into force on 24 October 1945."
  },
  {
    subject: "World History",
    question: "The League of Nations was established after:",
    options: ["The Napoleonic Wars", "The First World War", "The Second World War", "The Cold War"],
    answer: 1,
    explanation: "The League of Nations emerged from the post-First World War settlement."
  },
  {
    subject: "World History",
    question: "The Cold War was mainly a rivalry between:",
    options: ["Britain and France", "The United States and the Soviet Union", "China and Japan", "Germany and Italy"],
    answer: 1,
    explanation: "The Cold War centred on the US and Soviet-led blocs."
  },
  {
    subject: "World History",
    question: "The Renaissance began in:",
    options: ["Italy", "Sweden", "Russia", "Ireland"],
    answer: 0,
    explanation: "The Renaissance began in Italian city-states."
  },
  {
    subject: "World History",
    question: "The Magna Carta was sealed in:",
    options: ["1066", "1215", "1492", "1648"],
    answer: 1,
    explanation: "King John sealed the Magna Carta in 1215."
  },
  {
    subject: "World History",
    question: "The American Declaration of Independence dates to:",
    options: ["1776", "1789", "1812", "1865"],
    answer: 0,
    explanation: "The Declaration of Independence was adopted on 4 July 1776."
  },
  {
    subject: "World History",
    question: "The Berlin Conference of 1884–1885 concerned mainly:",
    options: ["The partition of Africa by European powers", "The founding of the UN", "German reunification", "The end of the First World War"],
    answer: 0,
    explanation: "The conference set rules for European claims in Africa."
  },
  {
    subject: "World History",
    question: "The Cuban Missile Crisis occurred in:",
    options: ["1956", "1962", "1968", "1979"],
    answer: 1,
    explanation: "The crisis occurred in October 1962."
  },
  {
    subject: "World History",
    question: "The first human to walk on the Moon was:",
    options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
    answer: 1,
    explanation: "Neil Armstrong stepped onto the Moon in July 1969."
  },
  {
    subject: "Science",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: 1,
    explanation: "Iron-rich dust gives Mars its reddish appearance."
  },
  {
    subject: "Science",
    question: "The chemical formula for water is:",
    options: ["CO2", "H2O", "O2", "NaCl"],
    answer: 1,
    explanation: "A water molecule contains two hydrogen atoms and one oxygen atom."
  },
  {
    subject: "Science",
    question: "Which gas do plants absorb during photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: 2,
    explanation: "Plants use carbon dioxide, water and light to produce sugars."
  },
  {
    subject: "Science",
    question: "The approximate speed of light in vacuum is:",
    options: ["30,000 km/s", "150,000 km/s", "300,000 km/s", "3,000,000 km/s"],
    answer: 2,
    explanation: "Light travels at approximately 300,000 kilometres per second."
  },
  {
    subject: "Science",
    question: "Which organ pumps blood around the human body?",
    options: ["Liver", "Heart", "Lung", "Kidney"],
    answer: 1,
    explanation: "The heart pumps blood through the circulatory system."
  },
  {
    subject: "Science",
    question: "At standard atmospheric pressure, water boils at:",
    options: ["0°C", "50°C", "100°C", "150°C"],
    answer: 2,
    explanation: "Water boils at 100°C at one standard atmosphere."
  },
  {
    subject: "Science",
    question: "Which vitamin can the skin synthesise with sunlight exposure?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answer: 3,
    explanation: "UVB exposure enables the skin to synthesise vitamin D."
  },
  {
    subject: "Science",
    question: "Which is the largest organ of the human body?",
    options: ["Heart", "Skin", "Liver", "Brain"],
    answer: 1,
    explanation: "The skin is the body's largest organ."
  },
  {
    subject: "Science",
    question: "What is the pH of neutral water at about 25°C?",
    options: ["3", "5", "7", "10"],
    answer: 2,
    explanation: "Pure water has a pH of approximately 7 at 25°C."
  },
  {
    subject: "Science",
    question: "Which force keeps planets in orbit around the Sun?",
    options: ["Magnetism", "Gravity", "Friction", "Static electricity"],
    answer: 1,
    explanation: "Gravity governs planetary orbits."
  },
  {
    subject: "Science",
    question: "Which blood cells primarily transport oxygen?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
    answer: 0,
    explanation: "Haemoglobin in red blood cells binds and transports oxygen."
  },
  {
    subject: "Civics and Governance",
    question: "How many permanent members are on the UN Security Council?",
    options: ["3", "5", "10", "15"],
    answer: 1,
    explanation: "The Security Council has five permanent members."
  },
  {
    subject: "Civics and Governance",
    question: "The principal judicial organ of the United Nations is the:",
    options: ["International Criminal Court", "International Court of Justice", "Permanent Court of Arbitration", "European Court of Human Rights"],
    answer: 1,
    explanation: "The ICJ is the UN's principal judicial organ."
  },
  {
    subject: "English Vocabulary",
    question: "Benevolent most nearly means:",
    options: ["Hostile", "Kind and charitable", "Careless", "Uncertain"],
    answer: 1,
    explanation: "Benevolent means well-meaning and kindly."
  },
  {
    subject: "English Vocabulary",
    question: "The antonym of scarce is:",
    options: ["Rare", "Limited", "Abundant", "Insufficient"],
    answer: 2,
    explanation: "Abundant means plentiful, the opposite of scarce."
  },
  {
    subject: "English Vocabulary",
    question: "Mitigate means to:",
    options: ["Intensify", "Lessen severity", "Ignore completely", "Predict precisely"],
    answer: 1,
    explanation: "To mitigate is to make something less severe or harmful."
  },
  {
    subject: "English Vocabulary",
    question: "Choose the grammatically correct sentence:",
    options: ["Each of the students have a book.", "Each of the students has a book.", "Each students has a book.", "Each of student have a book."],
    answer: 1,
    explanation: "Each is singular and takes the singular verb has."
  },
  {
    subject: "English Vocabulary",
    question: "The plural of criterion is:",
    options: ["Criterions", "Criteria", "Criterias", "Criterion"],
    answer: 1,
    explanation: "Criteria is the plural form of criterion."
  },
  {
    subject: "English Vocabulary",
    question: "Ubiquitous means:",
    options: ["Found everywhere", "Very old", "Impossible to prove", "Extremely rare"],
    answer: 0,
    explanation: "Ubiquitous means present or found everywhere."
  },
  {
    subject: "English Vocabulary",
    question: "Choose the correct spelling:",
    options: ["Accomodation", "Accommodation", "Acommodation", "Accommadation"],
    answer: 1,
    explanation: "Accommodation is spelled with double c and double m."
  },
  {
    subject: "English Vocabulary",
    question: "Pragmatic most nearly means:",
    options: ["Idealistic only", "Practical", "Angry", "Unclear"],
    answer: 1,
    explanation: "Pragmatic means dealing with matters in a practical way."
  },
  {
    subject: "English Vocabulary",
    question: "Choose the correct sentence:",
    options: ["Neither answer are correct.", "Neither answer is correct.", "Neither answers is correct.", "Neither answer were correct."],
    answer: 1,
    explanation: "Neither is singular in this construction and takes is."
  },
  {
    subject: "English Vocabulary",
    question: "Candid most nearly means:",
    options: ["Frank and honest", "Secretive", "Decorative", "Doubtful"],
    answer: 0,
    explanation: "Candid means truthful and straightforward."
  }
];

function shuffle(items) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let dailyQuestions = shuffle(questions);
let dailyIndex = 0;
let dailyScore = 0;
let dailyAnswered = false;
const $ = id => document.getElementById(id);

function renderDailyQuestion() {
  const q = dailyQuestions[dailyIndex];
  if (!q || !$('quizQuestion')) return;
  dailyAnswered = false;
  $('quizSubject').textContent = q.subject;
  $('quizNumber').textContent = `Question ${dailyIndex + 1} of ${dailyQuestions.length}`;
  $('quizQuestion').textContent = q.question;
  $('quizOptions').innerHTML = '';
  $('quizExplanation').textContent = '';
  $('quizExplanation').classList.remove('show');

  q.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quiz-option';
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.addEventListener('click', () => {
      if (dailyAnswered) return;
      dailyAnswered = true;
      [...$('quizOptions').children].forEach((el, i) => {
        el.disabled = true;
        if (i === q.answer) el.classList.add('correct');
        if (i === index && index !== q.answer) el.classList.add('wrong');
      });
      if (index === q.answer) dailyScore++;
      $('quizExplanation').textContent =
        (index === q.answer ? 'Correct. ' : 'Incorrect. ') + q.explanation;
      $('quizExplanation').classList.add('show');
      $('quizScore').textContent = `Score: ${dailyScore}`;
      $('quizNext').disabled = false;
    });
    $('quizOptions').appendChild(button);
  });
  $('quizNext').disabled = true;
}

if ($('quizQuestion')) renderDailyQuestion();

if ($('quizNext')) {
  $('quizNext').addEventListener('click', () => {
    dailyIndex++;
    if (dailyIndex >= dailyQuestions.length) {
      dailyQuestions = shuffle(questions);
      dailyIndex = 0;
      dailyScore = 0;
      $('quizScore').textContent = 'Score: 0';
    }
    renderDailyQuestion();
  });
}

const bankList = $('mcqBankList');
const subjectFilter = $('mcqSubjectFilter');
const bankSearch = $('mcqSearch');

if (subjectFilter && bankList) {
  [...new Set(questions.map(q => q.subject))].sort().forEach(subject => {
    const option = document.createElement('option');
    option.value = subject;
    option.textContent = subject;
    subjectFilter.appendChild(option);
  });
}

function renderBank() {
  if (!bankList) return;
  const term = (bankSearch?.value || '').trim().toLowerCase();
  const subject = subjectFilter?.value || 'all';

  const matches = questions
    .map((q, index) => ({ ...q, originalIndex: index }))
    .filter(q =>
      (subject === 'all' || subject === q.subject) &&
      (!term || `${q.subject} ${q.question} ${q.options.join(' ')} ${q.explanation}`.toLowerCase().includes(term))
    );

  const status = $('mcqBankStatus');
  if (status) status.textContent =
    `${matches.length} question${matches.length === 1 ? '' : 's'} found out of ${questions.length}.`;

  bankList.innerHTML = '';

  if (!matches.length) {
    bankList.innerHTML = '<div class="mcq-empty">No matching question found. Try another keyword or subject.</div>';
    return;
  }

  matches.forEach(q => {
    const card = document.createElement('article');
    card.className = 'mcq-item';

    const top = document.createElement('div');
    top.className = 'mcq-item-top';

    const category = document.createElement('span');
    category.textContent = q.subject;

    const number = document.createElement('span');
    number.textContent = `MCQ ${q.originalIndex + 1}`;

    top.append(category, number);

    const heading = document.createElement('h3');
    heading.textContent = q.question;

    const options = document.createElement('div');
    options.className = 'mcq-item-options';

    const feedback = document.createElement('div');
    feedback.className = 'mcq-feedback';
    feedback.setAttribute('aria-live', 'polite');

    q.options.forEach((answerText, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mcq-bank-option';
      btn.textContent = `${String.fromCharCode(65 + index)}. ${answerText}`;

      btn.addEventListener('click', () => {
        if (btn.dataset.answered) return;

        [...options.children].forEach((el, i) => {
          el.disabled = true;
          el.dataset.answered = '1';
          if (i === q.answer) el.classList.add('correct');
        });

        if (index !== q.answer) btn.classList.add('wrong');

        feedback.classList.add('show', index === q.answer ? 'is-correct' : 'is-wrong');
        feedback.textContent =
          (index === q.answer ? 'Correct. ' : `Incorrect. Correct answer: ${q.options[q.answer]}. `) +
          q.explanation;
      });

      options.appendChild(btn);
    });

    card.append(top, heading, options, feedback);
    bankList.appendChild(card);
  });
}

if (bankList) renderBank();
if (bankSearch) bankSearch.addEventListener('input', renderBank);
if (subjectFilter) subjectFilter.addEventListener('change', renderBank);

function runSiteSearch() {
  const input = $('searchInput');
  const message = $('searchMessage');
  if (!input || !message) return;

  const term = input.value.trim();
  if (!term) {
    message.textContent = 'Enter a subject or material to search.';
    input.focus();
    return;
  }

  const q = term.toLowerCase();
  const targets = [...document.querySelectorAll(
    '.material-card, .resource-card, .subject-card, .exam-card'
  )];

  const hits = targets.filter(el =>
    (el.innerText + ' ' + (el.dataset.search || '')).toLowerCase().includes(q)
  );

  if (hits.length) {
    hits.forEach(el => {
      el.classList.add('search-highlight');
      setTimeout(() => el.classList.remove('search-highlight'), 2400);
    });
    hits[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    message.textContent = `${hits.length} matching item${hits.length === 1 ? '' : 's'} found on RKN.`;
    return;
  }

  message.textContent =
    `“${term}” is not in the RKN library yet. Search the web for it, or check back as new material is added. `;

  const link = document.createElement('a');
  link.href = 'https://www.google.com/search?q=' +
    encodeURIComponent(term + ' study material PDF');
  link.target = '_blank';
  link.rel = 'noopener';
  link.textContent = 'Search the web ↗';
  message.appendChild(link);
}

if ($('searchButton')) $('searchButton').addEventListener('click', runSiteSearch);

if ($('searchInput')) {
  $('searchInput').addEventListener('keydown', event => {
    if (event.key === 'Enter') runSiteSearch();
  });
}
