$(document).ready(function () {

  //======================= navbars =======================//

  var $login = $('.navbar .login');
  var $logo = $('.logo')
  var $ul = $('ul .nav_links')
  
  $(".bar").click(function () {
     if($login.css('display')  ==  'none' && $logo.css('display') ==  'block' ){
      $login.css('display' , 'block');
      $logo.css('display' , 'none');
      $ul.css('display' , 'block' );
     }
     else{   
      $login.css('display' , 'none');
      $logo.css('display' , 'block');
      $ul.css('display' , 'none');
     }
  })


  //======================= section_fly_tabs =======================//

    function filter (selector) { 
      $('.flights .all').filter(selector).fadeIn()
      $('.flights .all').not(selector).fadeOut();
      if($('.flights_airline').css('display') == 'none'){
         $('.flights_airline').css('display', 'block');
      }
     }

    $('.right_title .stop').click( function () {
      filter('.flights .all');
    })

    $('.right_title .price').click( function () {
      filter('.flights .flights_price');
    })

    $('.right_title .airline').click( function () {
      filter('.flights .flights_airline');
    })

    $('.right_title .schedule').click( function () {
      filter('.flights .flights_schedule');
    })


  //======================= modal_contact_now =======================//

  var $btn_contact = $('.btn_contact');
  var $modal_contact = $('.contact_modal');
  var $modal_opacity = $('.modal_bg_opacity')
  var $modal_close = $('.contact_close')
    $btn_contact.click(function () {
       
      $modal_opacity.show()
      $modal_contact.show('slow')

    })

    $modal_close.click(function () {
      
      $modal_opacity.hide()
      $modal_contact.hide('slow')

    })

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

       
          
          

      //======================= section_news tabs =======================//
 
    $('.news_tabs_title').click(function () { 

     
      $('.tabs_text').not($(this).next()).slideUp();
      $(this).next().slideToggle();

      if($('.tabs_text').css('display') == 'block'){
        $('.fa-arrow-to-top').css('transform' ,'rotate(180deg)')
      }else{
        $('.fa-arrow-to-top').css('transform','rotate(360deg)')
      }
/// togirlash kerak
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