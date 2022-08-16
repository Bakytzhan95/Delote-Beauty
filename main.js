$(document).ready(function() {
    $('.nav-bar').click(function() {
        $('.nav-bar').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('menu-active');
    })

    $('.scroll__down').click(function(){
        $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 1500);
        return false;
    });
});