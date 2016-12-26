// Blog navigation

if ($('header').is('.header--blog')) {

	var blogNavigation = (function () {
		
		var target = $('.container--blog').offset().top,
			win = $(window),
			wrapper = $('.wrapper'),
			blogContainer = $('.blog-nav__list'),
			blogContainerWidth = blogContainer.width(),
			blogNav = $('.blog-nav'),
			blogNavTrigger = $('.blog-nav__trigger'),
			blogContent = $('.blog-content'),
			blogItem = $('.blog-nav__item');

			blogNavTrigger.on('click', function () {
				blogNav.toggleClass('blog-nav--active');
				wrapper.toggleClass('wrapper--active');
			})

		$(document).mouseup(function(e){
		    if (!blogNav.is(e.target) && blogNav.has(e.target).length === 0 ) {
		        blogNav.removeClass('blog-nav--active');
		        wrapper.removeClass('wrapper--active');
		    }
		});

		//smoothscroll
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top + 2
					}, 1000);

					return false;
				}
			}
		});

		return {
			init: function () {
			    	
			    	if ( win.scrollTop() > target ) {   
			        	blogContainer
			        		.addClass('blog-nav__list--fixed')
			        		.css('width', blogContainerWidth);
			    	} else {
			    		blogContainer
			    			.removeClass('blog-nav__list--fixed')
			    			.css('width', '80%');
			    	}

			},
			scroll: function () {
				var scrollPos = $(document).scrollTop();

			    $('.blog-nav__list a').each(function () {
		        	var currLink = $(this);
					var refElement = $(currLink.attr('href'));
			        
			        if (refElement.position().top + target <= scrollPos) {
			            $('.blog-nav__list li a').removeClass('blog-nav__link--active');
			            currLink.addClass('blog-nav__link--active');
			        }

			    });
			},
			navHide: function () {
		    	if ( win.width() < 769 && win.scrollTop() > target) {   
		    		blogNav.show();
		    	} else if ( win.width() > 769 ) {
		    		blogNav.show();
		    	} else {
		    		blogNav.hide().removeClass('blog-nav--active');
		    		wrapper.removeClass('wrapper--active');
		    	}
			}
		}
		
	}());

	$(document).ready(function() {
		blogNavigation.navHide();
	});

	$(window).on('scroll', function() {
		blogNavigation.init();
		blogNavigation.scroll();
		blogNavigation.navHide();
	});

}