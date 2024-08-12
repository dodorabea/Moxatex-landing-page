(function ($) {
  "use strict";
  /********************************/
  /*  Loading   Js      */
  /********************************/
  $(window).bind('load', function () {
    $('.loading, body').addClass('loaded');
    setTimeout(function () {
      $('.loading').css({ 'display': 'none' })
    }, 2000)
  });

  // Will remove overlay after 1min for users cannnot load properly.
  setTimeout(function () {
    $('.loading, body').addClass('loaded');
  }, 5000);



  var menuAnimation = new TimelineMax({ paused: true });
  var menuAnimationBack = new TimelineMax({ paused: true, reversed: true });
  var navMain = document.getElementById("nav-main");
  var menuButton = document.getElementById("menu-button");
  var toggle = true;
  var mqls = [
    window.matchMedia("(min-width: 769px)"),
    window.matchMedia("(min-width: 581px) and (max-width: 768px)"),
    window.matchMedia("(max-width: 580px)"),
  ];

  function mediaqueryresponse(mql) {
    if (mqls[0].matches) {
      menuAnimation.to(
        navMain,
        0.8,
        {
          width: 480,
          className: "+=skew vertical",
          ease: Power2.easeInOut,
          transform: "translate3d(0,0,0)",
        },
        0
      );
    }
    if (mqls[1].matches) {
      menuAnimation.to(
        navMain,
        0.8,
        {
          width: "50%",
          className: "+=skew vertical",
          ease: Power2.easeInOut,
          transform: "translate3d(0,0,0)",
        },
        0
      );
    }
    if (mqls[2].matches) {
      menuAnimation.to(
        navMain,
        0.8,
        {
          width: "70%",
          className: "+=skew vertical",
          ease: Power2.easeInOut,
          transform: "translate3d(0,0,0)",
        },
        0
      );
    }
  }

  for (var i = 0; i < mqls.length; i++) {
    mediaqueryresponse(mqls[i]);
    mqls[i].addListener(mediaqueryresponse);
  }

  menuAnimationBack.to(
    navMain,
    0.55,
    {
      width: 0,
      className: "+=skew vertical skewback",
      ease: Power4.easeIn,
      transform: "translate3d(0,0,0)",
    },
    0
  );

  menuButton.onclick = function () {
    toggle = !toggle;
    toggle === false ? menuAnimation.play(0) : menuAnimationBack.play(0);
  };

  /********************************/
  /* Section Background   Js      */
  /********************************/
  window.sections = [...document.querySelectorAll(".section")];
  window.lastScrollTop = window.pageYOffset;

  document.body.style.background = window.sections[0].getAttribute("data-bg");

  window.addEventListener("scroll", onScroll);

  function onScroll() {
    const scrollTop = window.pageYOffset;

    const section = window.sections
      .map((section) => {
        const el = section;
        const rect = el.getBoundingClientRect();
        return { el, rect };
      })
      .find((section) => section.rect.bottom >= window.innerHeight * 0.5);
    document.body.style.background = section.el.getAttribute("data-bg");
  }

  /********************************/
  /*  Scroll   Js      */
  /********************************/
  var btn = $('#Scrollbutton');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });


  /********************************/
  /*  anchor-link   Js      */
  /********************************/
  $('.js-anchor-link').click(function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      var scrollTo = target.offset().top;
      $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
    }
  });
  /********************************/
  /*  AOS   Js      */
  /********************************/
  AOS.init({
    duration: 1400,
    easing: "ease-in-cubic",
    disable: "mobile",
  });
})(jQuery);


