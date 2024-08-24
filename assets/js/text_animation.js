function tm_animate_text(){
    "use strict";

    var animateSpan = jQuery('.animation_text_word');
    
    animateSpan.typed({
        strings: ["Data Analyst", "Data Scientist", "Business Analyst", "Columbia Student"],
        loop: true,
        startDelay: 0,
        backDelay: 1000
    });
}

jQuery(document).on('ready', function () {
    (function ($) {
        tm_animate_text();
    })(jQuery);
});
