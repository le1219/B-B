$(document).ready(function () {
    $("#dbl_rooms").click(function () {
        $(".rooms").hide();
        $(".dbl_rooms").show();
    });
    $("#tri_rooms").click(function () {
        $(".rooms").hide();
        $(".tri_rooms").show();
    });
    $("#family_rooms").click(function () {
        $(".rooms").hide();
        $(".family_rooms").show();
    });
    $('#all_rooms').click(function () {
        $('.rooms').hide();
        $('.all_rooms').show();
    });
    // $('.all_rooms').click(function () {
    //     if ($('.aa').css('display') == 'none') {
    //         $('.aa').slideDown();
    //     } else {
    //         $('.aa').slideUp();
    //     }
    // });
    $(".sm_1").click(function () {
        console.log(1)
        $("#md_1").attr('src', $(this).attr('src'));

    });

    $(".sm_2").click(function () {
        console.log(1)
        $("#md_2").attr('src', $(this).attr('src'));

    });
    $(".sm_3").click(function () {
        console.log(1)
        $("#md_3").attr('src', $(this).attr('src'));

    });
    $(".sm_4").click(function () {
        console.log(1)
        $("#md_4").attr('src', $(this).attr('src'));

    });
    $(".sm_5").click(function () {
        console.log(1)
        $("#md_5").attr('src', $(this).attr('src'));

    });
    $(".sm_6").click(function () {
        console.log(1)
        $("#md_6").attr('src', $(this).attr('src'));

    });
    $(".sm_7").click(function () {
        console.log(1)
        $("#md_7").attr('src', $(this).attr('src'));

    });
    $(".sm_8").click(function () {
        console.log(1)
        $("#md_8").attr('src', $(this).attr('src'));

    });
});

