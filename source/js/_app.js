'use strict';

$(document).ready(function() {
	preloader.init();
	navigation.init();
	authFlip.init();
	scrollToTarget.init();
	slider.init();
});

$(window).on('scroll', function() {
	skills.init();
});

if ($('header').is('.header--works')) {
	
	$(document).ready(function() {
		blur.init();
	});
	
	$(window).on('resize', function() {
		blur.init();
	});

}







