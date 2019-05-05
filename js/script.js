$(function(){
    $('.artist_info').not('active').hide();
    $('.artist').click(function(){
        $('.artist').removeClass('active').eq($(this).index()).addClass('active');
        $('.artist_cover img').removeClass('active').eq($(this).index()).addClass('active');
        $('.artist_info').removeClass('active').hide().eq($(this).index()).fadeIn(500);
    })

    $('.genre_info').not('active').hide();
    $('.genre').click(function(){
        $('.genre').removeClass('active').eq($(this).index()).addClass('active');
        $('.genre_cover img').removeClass('active').eq($(this).index()).addClass('active');
        $('.genre_info').removeClass('active').hide().eq($(this).index()).fadeIn(500);
    })

    $('.btn').click(function(){
        $('.menu').slideToggle(500);
    })

    $(window).resize(function(){
        if($(window).width() > 768) {
            $('.menu').removeAttr('style');
        }
    })
})