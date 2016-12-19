// Navigation

var navigation = (function () {
	var navIcon = $('.main-nav__icon'),
		nabBody = $('.main-nav');

	return {
		init: function () {
			navIcon.click(function(){
				$(this).toggleClass('open');
				nabBody.toggleClass('active');
			});
		}	
	}
}());

