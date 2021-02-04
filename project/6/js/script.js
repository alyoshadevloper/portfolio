 $(document).ready(function () {
      /// ================= header owl_carousel ================= ///
    
      $("header .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        center: true,
        slideTransition: `2`,
        dotsEach: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: true,
    
      });
     

   /// ================= navbar ================= ///
     $('.nav_bar').click(function () {
       if( $('.navbars').css('display') ==  'none' && $('.logos').css('display') == 'block'){
        $('.navbars').css('display' , 'block');
        $('.logos').css('display' , 'none');
       }else{
        $('.navbars').css('display' , 'none');
        $('.logos').css('display' , 'block');
       }
     
       })
       

   /// ================= document_scrool ================= ///

      var $links = $('.navs a')
      $links.click(function (e) {
        e.preventDefault();
        $links.removeClass('active')
        var id = $(this).addClass('active').attr('href')

        var target = $(id).offset().top - 50;

        $('html, body').animate({
            scrollTop: target,
        }, 1000)
    })


    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if(scroll >= 2000){
            $('footer .click').fadeIn(1000);
        }else{
            $('footer .click').fadeOut(1000);
        }
    })
 

        $('footer .click').click(function () {
            $('html, body').animate({
                scrollTop: 0,
            },1000)
          })




     /// ================= form_search ================= ///
      
     $('ul .search').click( function (e) {
       e.preventDefault();
       $('.form_search').animate({
         top: "80px",
       }, 1000)  
     })
     $('.close').click( function () {  
      $('.form_search').animate({
        top: "-1000px",
      }, 1000)
     
    })

     /// ================= section_second_tabs ================= ///

      function filter (color) {   
        $('.project_item').filter(color).parent().fadeIn(1500)
        $('.project_item').not(color).parent().fadeOut(500)
        }
     $('.all').click(function () { 
       filter('.project_item') 
      })
      $('.design').click(function () { 
        filter('.one') 
       })
       $('.app').click(function () { 
        filter('.two') 
       })
       $('.illus').click(function () { 
        filter('.three') 
       })
       $('.photo').click(function () { 
        filter('.four') 
       })
 
       /// ================= section_five_owl_carousel ================= ///

       
       $("section .owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        center: true,
        slideTransition: `2`,
        dotsEach: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: true,
        margin: 30,
    
      });

































       
//  var arr = document.querySelectorAll('.number')

//  for(var i = 0; i < arr.length; i++){
//   var max_num =  arr[i].getAttribute('data-number');
//    var num = 0;
//    function count () {
//     num = num + 10
//   }
//   var interval = setInterval(function() {
//     // count()
//      if(num = 1000){
//        clearInterval(interval)
//      }
//      $('.number').html(num)
//    },1)

   
  


  // var as = setInterval(function() {
  //   sx()
  //   // $('.number').html(st)
  //   // console.log(st)
  //  },1)  

   
   
 




//  console.log(xw)
//   num = 0
   
//   number = $('.number').attr("data-number")
//   function set (){
//   num = num + 10;
//    if(num >= number){
//     clearInterval(x)
//   }
 
// }
//  var x = setInterval( function ( ){
//        set()
//        $('.number').html(num)
//       },1)        
    
 
   
 


  
})


















//  xx.animateNumber(
//    {
//      number: 100
//    },
//    2000
//  );
 
//   var xx = $('#ten').value()
 
     
// console.log(xx)








   
//   window.addEventListener('load' ,  function () {
//   (function(){ 
//           let el = document.querySelector('#pencil');
//           let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":3,"strokeOpacity":1,"strokeColor":"#000","strokeCap":"round","strokeDash":"1, 1","delay":500}); 
//           myAnimation.paint(); 
//       }
  
//     )();
  
//     (function(){ 
         
//       let ds = document.querySelector('#layout');
//       let myAnimation = new LazyLinePainter(ds, {"ease":"easeLinear","strokeWidth":3,"strokeOpacity":1,"strokeColor":"#000","strokeCap":"round","strokeDash":"2, 2","delay":600}); 
//       myAnimation.paint(); 
//         }
    
    
//     )();
//     (function(){ 
         
//       let three = document.querySelector('#settings');
//               let myAnimation = new LazyLinePainter(three, {"ease":"easeLinear","strokeWidth":3,"strokeOpacity":1,"strokeColor":"#000","strokeCap":"round","strokeDash":"1, 1","delay":700}); 
//               myAnimation.paint(); 
//         }
    
    
//     )();
//     let four = document.querySelector('#rocket');
//     let myAnimation = new LazyLinePainter(four, {"ease":"easeLinear","strokeWidth":3,"strokeOpacity":1,"strokeColor":"#000","strokeCap":"round","round":"1, 1","delay":800}); 
//     myAnimation.paint(); 
   
// })

 
 
 