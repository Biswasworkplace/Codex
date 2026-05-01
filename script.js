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

    result.textContent = `Your score: ${score}/3`;
    result.style.color = score >= 2 ? '#166534' : '#991b1b';
  });
}
