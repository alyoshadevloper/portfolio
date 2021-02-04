window.addEventListener('load', function () {

  /// =========== Preloader ========= ///////
  var number = $('.loader .muns')
  var presloader = document.getElementById('preloader')
  var loader = $('.loader')
  var timer = 0

  const nums = () => {
    var times = timer++;
    number.html(times + '%')
    console.log(times)
  }

  var inter = setInterval(function () {
    if (timer !== 101) {
      nums()
    } else {

      setTimeout(function () {
        clearInterval(inter)
        loader.addClass('active')
        if (!presloader.classList.contains('done')) {
          presloader.classList.add('done')
        }
      }, 1000)

    }

  }, 20)

  //// Vivus Js animation Icons 

  const vivus = new Vivus(
    'html', {
      type: 'delayed',
      duration: 200

    },
  );
  const css = new Vivus(
    'css', {
      type: 'delayed',
      duration: 200

    },
  );
  const js = new Vivus(
    'javascript', {
      type: 'delayed',
      duration: 200
    },
  );
  const jquery = new Vivus(
    'jquery', {
      type: 'delayed',
      duration: 200
    },
  );
  const nodejs = new Vivus(
    'nodejs', {
      type: 'delayed',
      duration: 200
    },
  );
  const expressjs = new Vivus(
    'expressjs', {
      type: 'delayed',
      duration: 200
    },
  );
  const mongodb = new Vivus(
    'mongodb', {
      type: 'delayed',
      duration: 200
    },
  );
  const reactjs = new Vivus(
    'reactjs', {
      type: 'delayed',
      duration: 200
    },
  );
  const quality = new Vivus(
    'quality', {
      type: 'delayed',
      duration: 200
    },
  );
  const modern = new Vivus(
    'modern', {
      type: 'delayed',
      duration: 200
    },
  );
  const cyber = new Vivus(
    'cyber', {
      type: 'delayed',
      duration: 200
    },
  );

  ///////////// owl carousel /////////////

  $(".section_second .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    stagePadding: 50,
    items: 3,
    center: true,
    autoplay: true,
    autoplayTimeout: 2000,
  })

  ///////////// wow.js /////////////

  new WOW().init();

  ///////////// scrol_navbar /////////////

  var $links = $('.navs a')
  var text_nav = $('.text_nav a')

  $links.click(function (e) {
    e.preventDefault()
    $links.removeClass('colors')
    var attribute = $(this).addClass('colors').attr('href')
    var offset = $(attribute).offset().top - 70
    $('html, body').animate({
      scrollTop: offset,
    }, 1000)

  })

  $(window).scroll(function () {
    var button_top = $(".button_top")
    var scroll_top = $(this).scrollTop()

    text_nav.each(function () {
      var attribute = $(this).attr('href')
      var selector = $(attribute).offset().top - 150
      if (scroll_top >= selector) {
        text_nav.removeClass('colors')
        $(this).addClass('colors')
      } else if (scroll_top === 0) {
        text_nav.removeClass('colors')
      }
    })
    if (scroll_top >= 900) {
      button_top.css('visibility', 'visible')
    } else {
      button_top.css('visibility', 'hidden')
    }

  })

  ///////////// button_top_scroll /////////////

  var button_top = $(".button_top")
  button_top.click(function () {
    $('html , body').animate({
      scrollTop: 0
    }, 1000)
  })


  ///////////// bars /////////////

  var bars = $('.bars')
  var navs = $('.navs')
  var logo = $('.logo')
  bars.click(function () {
    if (bars.css("display") == 'block' && logo.css('display') == 'block') {
      logo.css('display', 'none')
      navs.css("display", 'flex')
    } else {
      navs.css("display", 'none')
      logo.css('display', 'block')
    }

  })

  ///////////// header_text_titile /////////////

  var text_second = document.querySelector('.header_text .hd_title')
  var inner_text_second = text_second.innerHTML
  text_second.innerHTML = ""
  var i = 0
  function print() {
    text_second.innerHTML += inner_text_second.charAt(i)
    i++
  }

  setInterval(function () {
    print()
  }, 500)
  
})