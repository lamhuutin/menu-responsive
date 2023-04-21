$(function(){
    $('div#navbars').click(function(){
        $('ul#menu-responsive').stop().slideToggle()
    })
    function hide(){
        $('ul#menu-responsive, ul#menu-responsive ul.sub-menu-responsive').slideUp();
        $('ul#menu-responsive>li i').removeClass('open')
    }
    $(window).resize(function(){
        hide();
    })
    $(window).scroll(function(){
        hide();
    })
    // $('ul#menu-responsive>li i').click(function(){
    //     let demo = $(this).parent();
    //     demo.next().slideToggle();
    //     if($(this).hasClass('fa-chevron-down')){
    //         $(this).removeClass('fa-chevron-down')
    //         $(this).addClass('fa-chevron-up')
    //     }else{
    //         $(this).removeClass('fa-chevron-up')
    //         $(this).addClass('fa-chevron-down')
    //     }
    // }) // cách 1
    $('ul#menu-responsive>li i').click(function(){
        $(this).toggleClass('open');
        let demo = $(this).parent();
        demo.next().slideToggle();
    })
})