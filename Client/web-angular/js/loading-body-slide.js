(function($){jQuery(window).load(function(){
                $('.flexslider').flexslider({
                    animation: "slide",
                    start: function(slider){
                        $('bod').removeClass('loading');
                    }
                       })
            });
        }(jQuery));