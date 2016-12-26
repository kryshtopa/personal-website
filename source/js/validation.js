// Validation for login form

if ($('header').is('.welcome__header')) {
 
    var validation = (function () {
        var message = '',
            submit = $('#loginButton'),
            tooltip = $('.tooltip');
    

        return {
            init: function (clear) {
                var clear = clear;

                var clearError = function () {
                    $('.tooltip')
                        .remove();
                    $('.login-form__input-text')
                        .removeClass('error')
                        .val('');
                    $('.popup')
                        .hide();
                }

                if (clear) {
                    clearError();
                }

                $('#welcomeHomeButton').on('click', function(e) {
                    e.preventDefault();

                    clearError();
                });

                submit.on('click', function(e) {
                    e.preventDefault();

                    $('.tooltip').remove();

                    $('.login-form__input-text').each(function() {
                        var $that = $(this);
                        
                        
                        if(!$that.val()) {
                            var inputName = $that.attr('name');
                            message = 'Пожалуйста, укажите ' + inputName + '\n';

                            $that
                                .addClass('error')
                                .after( '<div class="tooltip">' + message + '</div>' );

                        }
                            
                    });

                    if (!$('#checkbox').is(':checked') || !$('#radio-1').is(':checked')) {
                        $('.popup').show();  
                    }

                    $('.popup__close').on('click', function(e) {
                        e.preventDefault();
                        $('.popup').hide();
                    });
                    

                    $('.login-form__input-text').on('click', function() {
                        $(this)
                            .removeClass('error')
                            .next($('.tooltip')).remove();
                    });

                });


            }
        }

    }());

    $(document).ready(function() {
        validation.init();
    });

}
