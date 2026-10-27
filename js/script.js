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

  // contact form: no backend, so hand the message to WhatsApp
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (!name || !message || !/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email)) {
      note.textContent = 'Please fill in your name, a valid e-mail address and a message.';
      note.style.color = '#b3261e';
      return;
    }
    const text = 'Hi, my name is ' + name + ' (' + email + ').\n\n' + message;
    window.open('https://wa.me/27810272523?text=' + encodeURIComponent(text), '_blank', 'noopener');
    note.textContent = 'WhatsApp has opened with your message — just press send. You can also e-mail info@vitastar.co.za.';
    note.style.color = 'var(--navy)';
    form.reset();
  });
