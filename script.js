(function(){
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scroll-reveal for every .reveal element on the page
    var revealEls = document.querySelectorAll('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(function(el){ el.classList.add('is-visible'); });
    } else {
      var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      revealEls.forEach(function(el){ observer.observe(el); });
    }

    // Scroll progress bar
    var progressBar = document.getElementById('scrollProgress');
    function updateProgress(){
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressBar) progressBar.style.width = pct + '%';
    }

    // Subtle hero photo parallax
    var heroPhoto = document.querySelector('.hero-photo');
    function updateParallax(){
      if (!heroPhoto || reduceMotion) return;
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var offset = Math.min(scrollTop * 0.08, 40);
      heroPhoto.style.transform = 'translateY(' + offset + 'px)';
    }

    var ticking = false;
    function onScroll(){
      if (!ticking) {
        window.requestAnimationFrame(function(){
          updateProgress();
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();
  })();
