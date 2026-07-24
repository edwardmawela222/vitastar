const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
  }));

  // pulse divider reveal
  const pulses = document.querySelectorAll('.pulse');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
  }, { threshold: .4 });
  pulses.forEach(p => io.observe(p));

  // scroll to top
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('active', window.scrollY > 400);
  });
  toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  // contact form (front-end only placeholder)
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    note.textContent = "Thanks — this form is UI-only for now. Wire it up to your backend or a form service (e.g. Formspree) to receive submissions.";
    note.style.color = 'var(--navy)';
  });