// SVG scroll animation

var svgScroll = (function(){
	var path = document.querySelector('#dkPath'),
		// pathLength = path.getTotalLength();
		// Path length declared manually in this case
		pathLength = 155;

	// Make very long dashes (the length of the path itself)
	path.style.strokeDasharray = pathLength + ' ' + pathLength;
	// Offset the dashes so the it appears hidden entirely
	path.style.strokeDashoffset = pathLength;
	// Jake Archibald says so
	// https://jakearchibald.com/2013/animated-line-drawing-svg/
	path.getBoundingClientRect();

	return {
		grow : function () {
			var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight),
				drawLength = pathLength * scrollPercentage;

				console.log(drawLength);

			// Draw in reverse
			path.style.strokeDashoffset = pathLength - drawLength;
			// When complete, remove the dash array, otherwise shape isn't quite sharp
			// Accounts for fuzzy math
			if (scrollPercentage >= 0.99) {
				path.style.strokeDasharray = "none";
			} else {
				path.style.strokeDasharray = pathLength + ' ' + pathLength;
			}
		}
	}
}());

$(window).scroll(function(){
	svgScroll.grow();
});