// Slider

if ($('header').is('.header--works')) {

    var slider = (function(){
        var currentIndex = 0,
            sliderDescriptionItem = $('.slider-description__item'),
            sliderContent = $('.slider-content__list'),
            sliderContentItem = $('.slider-content__item'),
            controlsPrev = $('.controls__prev'),
            controlsNext = $('.controls__next'),
            items = sliderContentItem,
            qty = items.length;

        sliderContent.clone().appendTo(controlsPrev);
        sliderContent.clone().appendTo(controlsNext);
        sliderDescriptionItem.addClass('slide-up');
        controlsPrev.find('.slider-content__item').addClass('prev slide-up');
        controlsNext.find('.slider-content__item').addClass('next');

        var cycleItems = function (items, currentIndex) {

            if (items.hasClass('next') || items.hasClass('prev')) {
                if (currentIndex > qty - 1) {
                    currentIndex = 0;
                }
                if (currentIndex < 0) {
                    currentIndex = qty - 1;
                }            
            }

            var item = items.eq(currentIndex);
            items.hide();
            item.css('display','block');

            if (items.hasClass('slide-up')) {
                item.css('animation-name','bottom');      
            } else {
                item.css('animation-name','top');
            }
        }

        cycleItems(sliderContentItem, currentIndex);
        cycleItems(sliderDescriptionItem, currentIndex);
        cycleItems(controlsPrev.find('.slider-content__item'), currentIndex - 1);
        cycleItems(controlsNext.find('.slider-content__item'), currentIndex + 1);    

        return {
            init: function () {


                controlsNext.on('click', function(e) {
                    e.preventDefault();
                    currentIndex += 1;
                    
                    if (currentIndex > qty - 1) {
                        currentIndex = 0;
                    }

                    sliderContentItem.addClass('slide-up');
                    sliderDescriptionItem.removeClass('slide-up');

                    cycleItems(sliderContentItem, currentIndex);
                    cycleItems(sliderDescriptionItem, currentIndex);
                    cycleItems(controlsPrev.find('.slider-content__item'), currentIndex - 1);
                    cycleItems(controlsNext.find('.slider-content__item'), currentIndex + 1);
                });

                controlsPrev.on('click', function(e) {
                    e.preventDefault();                
                    currentIndex -= 1;
                    
                    if (currentIndex < 0) {
                        currentIndex = qty - 1;
                    }

                    sliderContentItem.removeClass('slide-up');
                    sliderDescriptionItem.addClass('slide-up');

                    cycleItems(sliderContentItem, currentIndex);
                    cycleItems(sliderDescriptionItem, currentIndex);
                    cycleItems(controlsPrev.find('.slider-content__item'), currentIndex - 1);
                    cycleItems(controlsNext.find('.slider-content__item'), currentIndex + 1);
                });

            }
        }

    }());

    $(document).ready(function() {
        slider.init();
    });

}