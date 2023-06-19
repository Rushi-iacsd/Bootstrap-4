


$('.aboutSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:true, 
   
    autoplay : true,
   autoplayTimeout : 3000,
    navText : ['<i class="fa-solid fa-arrow-left fa-2x"></i>','<i class="fa-solid fa-arrow-right fa-2x"></i>'],
    responsive:{
        0:{
            items:1,
             dots:false,
             nav:false
         
        },
        600:{
            items:3,
            dots:false
        },
        1000:{
            items:4,
            
          
        }
    }
})
