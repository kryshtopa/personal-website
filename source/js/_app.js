'use strict';

$(document).ready(function() {
	preloader.init();
	navigation.init();
	scrollToTarget.init();
});

$(window).on( 'mousemove', function (e) {
	parallax.init(e);
});