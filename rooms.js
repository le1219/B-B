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
});
