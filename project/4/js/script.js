window.addEventListener('load', function () {

   /// ================= navbar ================= ///
    var $bars = $('.bar');

    $bars.click(function () {
        $('.menu').animate({
            right: 0,
        }, 1000)
         
      })

      $('#close').click(function() {
        $('.menu').animate({
            right: '-1000px',
        }, 1001)
 
    })

     /// ================= nav_tabs ================= ///
  
    var $tabs = $('.nav_tabs li');
    var $li = $('.nav_tabs a');
    var $item_tab = $(".item_tabs")
   
    $tabs.click(function () { 
        var str = $(this).index(); 

        $item_tab.each(function () {
             id = $(this).index()
             if(str == id ){
                 $(this).fadeIn();
             }else{
                $(this).fadeOut();
             }
       })
     
        $li.each(function (index ) {     
          if(str == index ){         
              $(this).fadeIn();
          }else{
            $(this).fadeOut();
          }

          })
    
      })

       /// ================= sm_tabs ================= ///

       $('.sm_tabs').click(function() {
        $('.sm_tabs_text').not($(this).next()).slideUp();
        $(this).next().slideToggle();
       })

})

