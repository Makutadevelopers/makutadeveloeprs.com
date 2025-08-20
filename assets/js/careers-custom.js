// Animate image section text on scroll
document.addEventListener('DOMContentLoaded', function() {
	var imageContent = document.querySelector('.makuta-careers-image-content');
	if (!imageContent) return;
	function onScroll() {
		var rect = imageContent.getBoundingClientRect();
		if (rect.top < window.innerHeight - 100) {
			imageContent.classList.add('visible');
			window.removeEventListener('scroll', onScroll);
		}
	}
	window.addEventListener('scroll', onScroll);
	onScroll(); // in case already in view
});

document.addEventListener('DOMContentLoaded', function() {
	makutaInitSlides();

	// Navbar include
	fetch('components/navbar.html').then(res => res.text()).then(html => {
		document.getElementById('navbar-include').innerHTML = html;
	});

	// Ensure video plays on some browsers (autoplay policy)
	const heroVideo = document.querySelector('.makuta-hero-bg-video');
	if (heroVideo) {
		heroVideo.play().catch(() => {});
	}
});
// Navbar include
document.addEventListener('DOMContentLoaded', function() {
	fetch('components/navbar.html').then(res => res.text()).then(html => {
		document.getElementById('navbar-include').innerHTML = html;
	});

	// Ensure video plays on some browsers (autoplay policy)
	const heroVideo = document.querySelector('.makuta-hero-bg-video');
	if (heroVideo) {
		heroVideo.play().catch(() => {});
	}
});
