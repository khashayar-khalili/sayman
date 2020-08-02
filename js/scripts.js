$(document).ready(function() {
    $('#product').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,

                loop: false
            }
        }
    });
    $('#products').owlCarousel({
        rtl: true,
        loop: true,
        nav: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,

            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,

                loop: false
            }
        }
    });
});