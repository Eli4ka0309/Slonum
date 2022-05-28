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

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data("collapse");

        console.log($(blockId).slideToggle());

        $(blockId).slideUp();
    });



});