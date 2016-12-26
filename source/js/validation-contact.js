// Validation for login form

if ($('header').is('.header--works')) {
 
    var validationContact = (function () {
        var message = '',
            submit = $('#buttonSend'),
            tooltip = $('.tooltip');
    

        return {
            init: function () {

                var clearError = function () {
                    $('.tooltip')
                        .remove();
                    $('.works-contact__input-text')
                        .removeClass('error')
                        .val('');
                    $('.works-contact__textarea')    
                        .removeClass('error')
                        .val('');
                    $('.popup')
                        .hide();
                }


                $('#buttonClean').on('click', function(e) {
                    e.preventDefault();
                    clearError();
                });

                $('.popup__close').on('click', function(e) {
                    e.preventDefault();
                    clearError();
                });

                submit.on('click', function(e) {
                    e.preventDefault();

                    $('.tooltip').remove();

                    $('.works-contact__input-text').each(function() {
                        var $that = $(this);
                        
                        if(!$that.val()) {
                            var inputName = $that.attr('name');
                            message = 'Пожалуйста, укажите ' + inputName + '\n';

                            $that
                                .addClass('error')
                                .after( '<div class="tooltip">' + message + '</div>' );
                        }
                            
                    });

                    $('.works-contact__textarea').each(function() {
                        var $that = $(this);
                        
                        if(!$that.val()) {
                            var inputName = $that.attr('name');
                            message = 'Пожалуйста, напишите пару слов';

                            $that
                                .addClass('error')
                                .after( '<div class="tooltip">' + message + '</div>' );
                        }
                            
                    });

                    if ($('.works-contact__input-text').val() && $('.works-contact__textarea').val()) {
                        $('.popup').show();
                    }

                    $('.works-contact__input-text').on('click', function() {
                        $(this)
                            .removeClass('error')
                            .next($('.tooltip')).remove();
                    });

                    $('.works-contact__textarea').on('click', function() {
                        $(this)
                            .removeClass('error')
                            .next($('.tooltip')).remove();
                    });

                });


            }
        }

    }());

    $(document).ready(function() {
        validationContact.init();
    });

}
