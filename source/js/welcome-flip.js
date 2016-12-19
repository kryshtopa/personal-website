// Welcome flip auth

var authFlip = (function () {
	var welcomeFlipper = $('.welcome'),
		welcomeButton = $('.auth__button'),
		welcomeHomeButton = $('#welcomeHomeButton');

	var flipFunc = function (target) {
		target.click(function(e){
			e.preventDefault();
			welcomeFlipper.toggleClass('hover');
			welcomeButton.toggleClass('active');
		});
	}

	$(document).mouseup(function(e){
	    if (!welcomeFlipper.is(e.target) && welcomeFlipper.has(e.target).length === 0 && !welcomeButton.is(e.target) ) {
	        welcomeFlipper.removeClass('hover');
	        welcomeButton.addClass('active');
	    }
	});

    return {
        init: function () {
        	flipFunc(welcomeButton);
        	flipFunc(welcomeHomeButton);
        }
    }

}());

