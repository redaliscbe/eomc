document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.navbar-nav a.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      const nav = document.getElementById('navbarCollapse');
      if (nav && nav.classList.contains('show')) {
        new bootstrap.Collapse(nav).toggle();
      }
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  function setActiveLink() {
    const scrollY = window.scrollY + 120;
    sections.forEach(function (sec) {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
        });
        const active = document.querySelector('.navbar-nav .nav-link[href="#' + sec.id + '"]');
        if (active) {
          active.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  if (window.jQuery) {
    window.jQuery('.event-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      margin: 25,
      loop: true,
      nav: true,
      dots: false,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
      ],
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    });
  }

  document.querySelectorAll('.event-img').forEach(function (img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function () {
      const modalImg = document.getElementById('eventModalImg');
      if (modalImg) {
        modalImg.src = this.src;
      }
      const modal = document.getElementById('eventImageModal');
      if (modal) {
        new bootstrap.Modal(modal).show();
      }
    });
  });
});
