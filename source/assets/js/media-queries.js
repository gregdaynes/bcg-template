$(document).ready(function() {

    function doneResizing() {
        if(Modernizr.mq('screen and (min-width:1024px)')) {
            // action for screen widths including and above 768 pixels
            console.log('768');
            $('.js--mq--desk--appendTo-sidebar').appendTo($('.l-sidebar'));
        }
        else if(Modernizr.mq('screen and (max-width:1023px)')) {
            // action for screen widths below 768 pixels
            console.log('< 768');
            $('.js--mq--not__desk--appendTo-copmonent-footer').appendTo($('.l-component-footer'));
        }
    }

    var id;
    $(window).resize(function() {
        clearTimeout(id);
        id = setTimeout(doneResizing, 0);
    });

    doneResizing();
});