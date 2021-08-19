$(document).ready(function () {
    setTimeout(function () {
        $('.sign ul li:last-child').show()
        $('.sign ul li:first-child').hide()
    },1000)
})

$('.menu-icon').click(function () {
    $('.toggle-menu').addClass('left')
    $('.toggle-menu').removeClass('hide-menu')
})

$('.close-menu').click(function () {
    $('.toggle-menu').addClass('hide-menu')
    $('.toggle-menu').removeClass('left')
})