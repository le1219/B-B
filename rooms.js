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
});

