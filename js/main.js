$( function() {

    console.log(1);

    // Modal

    $('.call').click( function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal({
            overlay: {
                css: {
                    backgroundColor: 'rgba(19, 23, 49, .93)',
                    opacity: 1
                }
            }
        });
    });

    // Scroll

    $(".more-info").click( function(e) {
        e.preventDefault();
		elementClick = $(e.currentTarget).attr("href");
		destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

    // Menu opener hamburger

    $('.hamburger').click( function() {
        $('.menu-collapse').toggleClass('d-none');
        $('.menu').toggleClass('menu-opened');
        $('.hamburger').toggleClass('hamburger-opened');
        $('.hamburger-s').toggleClass('hamburger-s-opened');
        $('.hamburger-x').toggleClass('hamburger-x-opened');
    });

});