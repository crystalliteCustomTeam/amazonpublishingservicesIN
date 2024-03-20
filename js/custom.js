function myFunction() {
    var x = document.getElementById("disclaimer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


    $(document).ready(function () {
        $(".fancybox").fancybox();
    });
    var clock = $('.timmer_content').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: true,
        callbacks: {
            stop: function () {
                $('.message').html('The clock has stopped!')
            }
        }
    });

    // set time
    clock.setTime(259200);

    // countdown mode
    clock.setCountdown(true);

    // start the clock
    clock.start();

    function order_now_value(objButton) {
        x = objButton.name;
        document.getElementById('lead_area_popup1').value = x;
        document.getElementById('lead_text').innerHTML = x;
    }


    $(".process-box").click(function () {
        $(".tab").addClass("active");
        $(this).addClass("active");
        $(document).ready(function () {
            $(".process-box").click(function () {
                $(".process-box").removeClass("active");
                $(".tab").addClass("active");
                $(this).addClass("active");
            });
        });
    })


    $('.popUpBtn').click(function () {
        $("#modalCoupon").slideDown().modal("show")
    })


    $('.testi-slider').slick({
        dots: false,
        autoplay: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        speed: 10000,
        pauseOnHover: false,
        cssEase: 'linear'
    });
    $('.resume_inner').slick({
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.services-port').slick({
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.custom-ebok-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });


    $(document).ready(function () {
        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".moreBox:hidden").slice(0, 4).slideDown();
            if ($(".moreBox:hidden").length == 0) {
                $("#loadMore").fadeOut('slow');
            }
            $(".moreBoxtwo:hidden").slice(0, 4).slideDown();
            if ($(".moreBox:hidden").length == 0) {
                $("#loadMore").fadeOut('slow');
            }
            $(".moreBoxthree:hidden").slice(0, 4).slideDown();
            if ($(".moreBox:hidden").length == 0) {
                $("#loadMore").fadeOut('slow');
            }
        });
    });


    $('.price-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $(function () {
        $("#accordion1").accordion();
    });
    $(function () {
        $("#accordion2").accordion();
    });
    $(function () {
        $("#accordion3").accordion();
    });
    $('#service-category-tabs li a').click(function () {
        $('#service-category-tabs li a').find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        if ($(this).next('.contant_box_acc').css('display') == 'block') {
            $(this).next('.contant_box_acc').slideUp('slow');
        } else {
            $('#service-category-tabs .contant_box_acc').css('display', 'none');
            $(this).next('.contant_box_acc').slideDown('slow');
            $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
        }
    });


    /* RESPONSIVE JS */
    /* Tabbing Function */
    $('[data-targetit]').on('click', function (e) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var target = $(this).data('targetit');
        $('.' + target).siblings('[class^="box-"]').hide();
        $('.' + target).fadeIn();
        $('.tabViewList').slick("setPosition", 0);
    });
    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();


    let url = ''
    if (url == "") {
        url = "home";
    }

    $("." + url + "-link").addClass("my-active")


    var isloading = true;

    function removeLoading() {
        if (isloading) {
            $("head").append(`
                 <link rel="stylesheet" type="text/css" href="css/animate.css">
                 <link rel="stylesheet" type="text/css" href="css/jquery.fancybox.min.css">
         
         <link rel="stylesheet" type="text/css" href="css/fancybox.css">
         
         <link rel="stylesheet" href="css/accordian-jquery-ui.css">
         
         <link rel="stylesheet" type="text/css" href="css/slick.css">
         
         <link rel="stylesheet" type="text/css" href="css/slick-theme.css">
         <\/script>
         
                 `);

            $('.myLazy').each(function () {
                $(this).attr("src", $(this).attr('data-src'))
            })
            isloading = false
        }
    }
    $(document).mousemove(removeLoading)
    $(document).on("touchmove", removeLoading)
    setInterval(removeLoading, 15000);


    $("a.fancybox").fancybox();


    function setButtonURL() {
        $zopim.livechat.window.show();
    }


    $('.bookbook-slider').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: false
                }
            }
        ]
    });
