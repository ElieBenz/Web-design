document.addEventListener('DOMContentLoaded', function () {
	// Mobile menu toggle
	var menuToggle = document.getElementById('menuToggle');
	var navList = document.querySelector('.navigation ul');
	if (menuToggle && navList) {
		menuToggle.addEventListener('click', function () {
			navList.classList.toggle('active');
		});
	}

	// Ensure Bootstrap carousels initialize even if data attributes are ignored
	var carouselIds = ['#heroCarousel', '#aboutCarousel', '#cinemaCarousel'];
	carouselIds.forEach(function (selector) {
		var el = document.querySelector(selector);
		if (el && window.bootstrap && window.bootstrap.Carousel) {
			// Create or re-use instance
			var instance = window.bootstrap.Carousel.getInstance(el);
			if (!instance) {
				new window.bootstrap.Carousel(el, {
					interval: 6000,
					ride: 'carousel',
					pause: false,
					wrap: true
				});
			}
		}
	});
});


