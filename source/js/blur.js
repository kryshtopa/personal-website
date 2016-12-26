// Blur

if ($('header').is('.header--works')) {
	
	var blur = (function () {
		var wrapper = document.querySelector('.works-contact__wrapper'),
			form = document.querySelector('.works-contact__blur');

		return {
			init: function () {
				var imgWidth = document.querySelector('.testimonials__bg').offsetWidth;
				var posX = -wrapper.offsetLeft;
				var posY = -wrapper.offsetTop;
				var blurCSS = form.style;

				blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
				blurCSS.backgroundPosition = posX + 'px' + ' ' + posY + 'px';
			}
		}
	}());
	
	$(document).ready(function() {
		blur.init();
	});
	
	$(window).on('resize', function() {
		blur.init();
	});

}