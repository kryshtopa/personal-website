// Scroll

var scrollToTarget = (function () {
	var arrowUp = $('.arrow-up'),
		arrowDown = $('.arrow-down'),
		wrapper = $('.wrapper'),
		main = $('main');

	var scrollFunc = function (button, target) {
		button.click(function(e) {
			e.preventDefault();
		    $('html, body').animate({
		        scrollTop: target.offset().top
		    }, 1000);
		});
	};

    return {
        init: function () {
			scrollFunc(arrowUp, wrapper);
			scrollFunc(arrowDown, main);
        }
    }

}());

