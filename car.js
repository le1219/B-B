$(function () {
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
