$(function (){
    let header= $("#header"),
        introH= $("#intro").innerHeight(),
        scrollOffset= 0;


    $(window).on("scroll", function (){
        scrollOffset = $(this).scrollTop();

        console.log(scrollOffset);
        if (scrollOffset >= introH){
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }

    });
});