$(document).ready(function () {

 

  //======================= navbars =======================//

   

  //======================= our service hover =======================//

  var $service_info = $(' .service_box .service_info');
  var $service_text = $('.service_text');
  var $service_btn = $('.service_btn');  
    
  var $read_more = $('.read_more');
  var $btn_all = $('.service-all')
    
      $service_info.on('click' , function () {
        
        var id =  $(this).attr("id");

       $service_text.each( function () { 
          var target =  $(this).attr('id');
             if(target == id){
                 $(this).fadeIn('slow') 
             } 
      
        })
      
      
      })
      $service_btn.click(function () {
        $read_more.not($(this).prev()).slideUp();
        $(this).prev().slideToggle();
      })
      
        
      
      $btn_all.click(function () {
          $service_text.fadeToggle("slow")
      }) 
     
     //======================= section-carousel =======================//

  $(".section_gallery .owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    center: true,
    slideTransition: `2`,
    lazyLoad: true,
    margin: 2,
    nav:true,
    rewind: true,
    dots: false,
     
  });

      //======================= section-carousel =======================//

       
          
          

      //======================= section_what_we_do tabs =======================//
 
    $('.title_tabs').click(function () { 
      
      $('.texts').removeClass('active').not($(this).next()).slideUp();
      $(this).next().slideToggle();

      if($('.texts').css('display') === 'block'){
        $('.fa-arrow-to-top').css('transform' ,'rotate(180deg)')    
      }else{
        $('.fa-arrow-to-top').css('transform','rotate(360deg)')
        
      }
 
     })
 
      //======================= scroll click =======================//

     var btn = $('.click_top');
     
     btn.click(function () {
      $('html, body').animate({
        scrollTop : 0,
      }, 1500)

       })

     $(window).scroll(function() {

      var scroll = $(this).scrollTop()

      if( scroll >= 2000){
        $('.click_top').fadeIn()
      }else{
        $('.click_top').fadeOut()
      }
//  console.log(scroll)


     })
 
//======================= section_clients-carousel  =======================//

$(".section_clients .owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  center: true,
  slideTransition: `2`,
  dotsEach: true,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: false,
});


 

});