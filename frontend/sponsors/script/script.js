$(window).on("load", function() {
    AOS.init();

    $(window).scroll(function() {
        AOS.refresh();
       
    });
    
$(".cover-text img").fadeIn("slow");
});

