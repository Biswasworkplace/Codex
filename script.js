const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('siteNav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

document.querySelectorAll('.year').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const facts = [
  'Benzene ring carbons are all sp² hybridized and planar.',
  'SN2 reactions always proceed with inversion at the stereocenter.',
  'A strong C=O stretch in IR typically appears near 1700 cm⁻¹.',
  'Grignard reagents behave like carbon nucleophiles.',
  'Diels-Alder is a concerted [4+2] cycloaddition reaction.'
];

const surpriseFactBtn = document.getElementById('surpriseFactBtn');
const surpriseFact = document.getElementById('surpriseFact');
if (surpriseFactBtn && surpriseFact) {
  surpriseFactBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    surpriseFact.textContent = facts[randomIndex];
  });
}

document.querySelectorAll('.progress-fill').forEach((fill) => {
  const target = fill.getAttribute('data-progress') || '0';
  requestAnimationFrame(() => {
    fill.style.width = `${target}%`;
  });
});

const gradeBtn = document.getElementById('gradeQuiz');
if (gradeBtn) {
  gradeBtn.addEventListener('click', () => {
    const answers = { q1: 'SN2', q2: 'C=O', q3: 'nucleophile' };
    let score = 0;
    let attempted = 0;

    for (const [key, value] of Object.entries(answers)) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (selected) {
        attempted += 1;
        if (selected.value === value) score += 1;
      }
    }

    const result = document.getElementById('quizResult');
    if (!result) return;

    if (attempted < Object.keys(answers).length) {
      result.textContent = `Please answer all questions. You attempted ${attempted}/3.`;
      result.style.color = '#9a3412';
      return;
    }

    result.textContent = score === 3 ? `Excellent! Your score: ${score}/3 🎉` : `Your score: ${score}/3`;
    result.style.color = score >= 2 ? '#166534' : '#991b1b';
  });
}
