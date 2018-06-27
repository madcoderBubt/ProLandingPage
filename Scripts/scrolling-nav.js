window.onscroll = function() {myFunction()};

//function for changing navbar while scrolling
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  if (scrolled > 3) {
    //document.getElementById("navbar").style = "background:#fff;border-bottom:1px solid #e7e7e7";
	$('nav.navbar').css({backgroundColor:'#fff',borderBottom:'1px solid #e7e7e7'});
    $('a.page-scroll').addClass("scrolled");
    $('a.navbar-brand').addClass("scrolled");
  }else {
    //document.getElementById("navbar").style = "background:transparent;border-bottom:none";
	$('nav.navbar').css({backgroundColor:'transparent',borderBottom:'none'});
    $('a.page-scroll').removeClass("scrolled");
    $('a.navbar-brand').removeClass("scrolled");
  }
}

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Owl-carousel Slider
$('.owl-slide').owlCarousel({
  loop:true,
  margin:15,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      700:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:false,
          loop:true
      }
  }
});
//owlCarousel autoplay
$('.owl-autoplay').owlCarousel({
  loop:true,
  margin:15,
  responsiveClass:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      700:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:false,
          loop:true
      }
  }
});

//For filtering Projects
$(document).ready(function() {
  $('#filterOptions li a').click(function() {
    // fetch the class of the clicked item
    var ourClass = $(this).attr('class');
    // reset the active class on all the buttons
    $('#filterOptions li').removeClass('active');
    // update the active state on our clicked button
    $(this).parent().addClass('active');
    if(ourClass == 'all') {
      // show all our items
      $('#ourHolder').children('div.pf-item').fadeIn();
    }
    else {
      // hide all elements that don't share ourClass
      $('#ourHolder').children('div:not(.' + ourClass + ')').fadeOut();
      // show all elements that do share ourClass
      $('#ourHolder').children('div.' + ourClass).fadeIn();
    }
    return false;
  });
});
