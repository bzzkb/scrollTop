window.onload = function(){
    var scrolled;
    var timer;

    document.getElementById('top').onclick = function(){
        scrolled = window.pageYOffset;
        timer = setInterval(scrollToTop, 5);
    }
    function scrollToTop(){
        if (scrolled > 0){
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 20;
        }
        else{
            window.scrollTo(0,0);
            clearInterval(timer);
        }
    }
}