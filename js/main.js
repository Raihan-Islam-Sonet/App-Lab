/* Sticky header*/
        
window.addEventListener('scroll',function(){
    var header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>0)
  });
 








/* client logo */
$('.companies-logo').owlCarousel({
    loop:true,
    margin:10,
    nav:true,


    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,


    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


/* client Review */
$('.review-item').owlCarousel({
    loop:true,
    margin:10,
    nav:true,


    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,


    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



