// Skills

if ($('header').is('.header--about')) {

	var skills = (function () {

		return {
			init: function () {
				var targetOffset = $('.about__col.col-2').offset().top - 40;
			    if ( $(window).scrollTop() > targetOffset ) {   
			        $('.svg-circle').attr('class', 'svg-circle active');
			    }
			}	
		}
	}());

	$(window).on('scroll', function() {
		skills.init();
	});

}