$(function () {
    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }


});

let accordion = function () {
    let data = $('.accordion').attr("data-accordion");
    $(".accordion_header").on("click", function () {
        $(this).next(".accordion_content").not(':animated').slideToggle()
    })
}
accordion();