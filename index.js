$(function () {
    $('.my-slide').slick(
        {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            autoplay: true,
            prevArrow: '<i class="fas fa-angle-left" role="button" data-slide="prev"></i>',
            nextArrow: '<i class="fas fa-angle-right" role="button" data-slide="next"></i>'
        }
    );
    $('.fas.fa-bars.bur').click(function () {

        if ($('.mobile_menu').css('display') == 'none') {
            console.log(1)
            $('.mobile_menu').show();
        }
        else {
            console.log(2)
            $('.mobile_menu').hide();

        }
    });
});
