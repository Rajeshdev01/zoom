function menu_open() {
    jQuery(".main-menu").css({"transform":"translateX(0)"}) 
}
function menu_close() { 
    jQuery(".main-menu").css({"transform":"translateX(320px)"})
}

jQuery(window).scroll(function(){
  if (jQuery(window).scrollTop() >= 100) {
    jQuery('header').addClass('fixed');
   }
   else {
    jQuery('header').removeClass('fixed');
   }
});

jQuery(document).ready(function(){
  jQuery(".srch-tgl, .srch-close").click(function(){
    jQuery(".srch-pop").toggle();
  });
});

jQuery(document).ready(function(){
    jQuery('.btm-testimonials').owlCarousel({
    loop:true,
    autoplay:true,
    margin:0,
    nav:false,
    //navText: ["<img src='images/lt-arw.svg'>","<img src='images/rt-arw.svg'>"],
    dots:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:2,
        }
    }
});
});


jQuery(document).ready(function($) {
    jQuery('.counter').counterUp({
        delay: 10,
        time: 500
    });
});

jQuery(document).ready(function(){
jQuery('.main-menu li a').click(function() {
    //alert("ssss");
       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            jQuery('html, body').animate({
              scrollTop: (target.offset().top - 64)
            }, 1000 );
            return false;
          }
        }
      });
    });

wow = new WOW(
	{
		boxClass: 'wow',
		offset: 0,
		mobile: true,
		live: true
	}
)
wow.init();

