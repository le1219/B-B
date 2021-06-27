$(function () {
    $('#t_1').click(function () {
        console.log(1);
        $('.all').show();
    });
    $("#t_2").click(function () {
        console.log(2);
        $('.all').hide();
        $('.food_family').show();
    })
    $("#t_3").click(function () {
        console.log(3);
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

    $('.area_img').hover(function () {
        $('.intro').hide();
        var nowArea = $(this).data('area');
        $('.intro[data-intro=' + nowArea + ']').show();
    });

});

