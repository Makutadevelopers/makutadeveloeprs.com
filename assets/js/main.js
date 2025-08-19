document.addEventListener("DOMContentLoaded", function() 
{
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const progressBar = document.querySelector('.carousel-progress-bar');
  const progressBarInner = document.querySelector('.progress-bar-inner');
  const indicators = document.querySelector('.carousel-indicators');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const tooltip = document.getElementById('know-more-tooltip');
  let current = 0;
  let timer;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
      dots[i].classList.toggle('active', i === idx);
    });
    // Hide all dots, show progress bar only for active
    dots.forEach((dot, i) => {
      dot.style.display = (i === idx) ? 'none' : 'inline-block';
    });
    // Move progress bar to the position of the active dot
    const allIndicators = Array.from(indicators.children).filter(child => child.classList.contains('carousel-dot') || child.classList.contains('carousel-progress-bar'));
    const activeDotIndex = idx;
    // Remove progress bar from current position
    if (progressBar.parentNode) progressBar.parentNode.removeChild(progressBar);
    // Insert progress bar at the active dot's position
    if (activeDotIndex === dots.length - 1) {
      indicators.appendChild(progressBar);
    } else {
      indicators.insertBefore(progressBar, dots[activeDotIndex + 1]);
    }
    progressBar.classList.add('active');
    current = idx;
    animateProgressBar();
  }

  function animateProgressBar() {
    progressBarInner.style.transition = 'none';
    progressBarInner.style.width = '0%';
    setTimeout(() => {
      progressBarInner.style.transition = 'width 5s linear';
      progressBarInner.style.width = '100%';
    }, 50);
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      resetTimer();
    });
  });

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
    animateProgressBar();
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetTimer();
  });

  // Tooltip logic for Know More (only on carousel image)
  slides.forEach(slide => {
    const img = slide.querySelector('img');
    if (img) {
      img.addEventListener('mousemove', function(e) {
        tooltip.style.opacity = 1;
        tooltip.style.left = (e.clientX + 16) + 'px';
        tooltip.style.top = (e.clientY - 16) + 'px';
      });
      img.addEventListener('mouseleave', function() {
        tooltip.style.opacity = 0;
      });
      img.addEventListener('touchstart', function(e) {
        tooltip.style.opacity = 1;
        tooltip.style.left = (e.touches[0].clientX + 16) + 'px';
        tooltip.style.top = (e.touches[0].clientY - 16) + 'px';
      });
      img.addEventListener('touchend', function() {
        tooltip.style.opacity = 0;
      });
    }
  });

  showSlide(0);
  timer = setInterval(nextSlide, 5000);
  animateProgressBar();
});