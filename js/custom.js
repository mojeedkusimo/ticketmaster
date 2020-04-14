$(document).ready(function () {

    var offsetBlueDiv = $('#blue-div-nav').offset().top;

    var stickyWhiteDiv = function () {
        var scrollTop = $(window).scrollTop(); 

      
        if (scrollTop > offsetBlueDiv) {
            $('.hide-and-show').css({ display: "block" });
            $('#blue-div-nav').css({ display: "none" });
            $('.white-div').addClass('sticky-nav');
        }
        else {
            $('.hide-and-show').css({ display: "none" });
            $('#blue-div-nav').css({ display: "block" });
            $('.white-div').removeClass('sticky-nav');
        }
    };

    stickyWhiteDiv();
    $(window).scroll(function () {
        stickyWhiteDiv();
    });

    

    function stopCarousel() {
        // var windowIsThin = window.matchMedia("(min-width:768px)").matches;

        // if (windowIsThin) {
        //     //carousel disabled
        //     $('.carousel').carousel({
        //         interval: false
        //     });
        // }; 
        if ($(window).width() > 767) {
            // disable carousel
            $('.carousel').carousel({
                interval: false
            });
        }

    }
    stopCarousel()
  
});
