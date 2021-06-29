$(function () {
    $('#t_1').click(function () {
        $('.all').show();
    });
    $("#t_2").click(function () {
        $('.all').hide();
        $('.food_family').show();
    })
    $("#t_3").click(function () {
        $('.all').hide();
        $('.travel_family').show();
    })
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

    $('.area_img').click(function () {
        $('.intro').hide();
        var nowArea = $(this).data('area');
        $('.intro[data-intro=' + nowArea + ']').show();
    });

    $('.travel_nav li').click(function () {
        $('.travel_nav li').removeClass('add');
        $(this).addClass('add');
        console.log(1)
    })
});

