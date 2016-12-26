// Parallax

var parallax = (function () {
	var layer = $('.parallax').find('.parallax__layer');
	layer.map(function (key, value) {
		var bottomPosition = (window.innerHelght / 2) * (key / 100);
		$(value).css({
			'bottom'    : '-'+bottomPosition+'px',
			'transform' : 'translate3d(0px, 0px, 0)'
		});
	});

	return {
		init: function (e) {
			var mouse_dx = e.pageX,
				mouse_dy = e.pageY,
				w = (window.innerWidth / 2) - mouse_dx,
				h = (window.innerHeight / 2) - mouse_dy;
			
			layer.map(function (key, value) {
				var bottomPosition = (window.innerHeight / 2) * (key / 100),
					widthPosition = w * (key / 100),
					heightPosition = h * (key / 100);

				$(value).css({
					'bottom'    : '-'+bottomPosition+'px',
					'transform' : 'translate3d('+widthPosition+'px, '+heightPosition+'px, 0)'
				});
			});
		}	
	}
}());