// Skills

var skills = (function () {

	return {
		init: function () {
			var targetOffset = $('.about__col.col-2').offset().top;
		    if ( $(window).scrollTop() > targetOffset ) {   
		        $('.svg-circle').attr('class', 'svg-circle active');
		    }
		}	
	}
}());