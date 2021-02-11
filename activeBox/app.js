$(function() {

    /* Fixed header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrolPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrolPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrolPos = $(this).scrollTop();

        checkScroll(scrolPos, introH);


    });

    function checkScroll(scrolPos, introH) {
        if(scrolPos > introH) {
           header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");


        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700)
    });

    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");

    });

    /* Reviews https://kenwheeler.github.io/slick/*/
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });



});
