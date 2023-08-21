$(document).ready(function() {
    $("a[href*=#]").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    }); 
});

document.addEventListener("DOMContentLoaded", function(){
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
})