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

});
