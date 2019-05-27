$( function() {

    // Modal

    $('#modal1').click( function () {
        $('#exampleModal1').arcticmodal();
    });

    $('#modal2').click( function () {
        $('#exampleModal2').arcticmodal();
    });

    $('#modal3').click( function () {
        $('#exampleModal3').arcticmodal();
    });

    $('#modal4').click( function () {
        $('#exampleModal4').arcticmodal();
    });

    $('#modal5').click( function () {
        $('#exampleModal5').arcticmodal();
    });

    $('#modal6').click( function () {
        $('#exampleModal6').arcticmodal();
    });

    // Scroll

    $(".menu__link").click( function(e) {
        e.preventDefault();
		elementClick = $(e.currentTarget).attr("href");
		destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

});