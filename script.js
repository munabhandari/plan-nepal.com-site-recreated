$(window).scroll(function(){
    if($(window).scrollTop() > 250){
        $('header').addClass('sticky');
    }else{
        $('header').removeClass('sticky');

    }
})