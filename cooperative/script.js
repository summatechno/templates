$(function () {

  window.onscroll = function(){scrollFunction()};
  function scrollFunction() {
      if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
          $(".header").css({"top":"0px", "width":"100%", "margin":"0", "background-color":"hsla(240, 100%, 21%)"});

          $(".up").css({"bottom":"100px"});
          
      }
      
      else{
        $(".header").css({"top":"30px", "width":"95%", "margin":"0 2.5%", "background-color":"hsla(240, 100%, 21%, 0.7)"});

        $(".up").css({"bottom":"-100px"});
      }
  } 

  $(".testimony .column .col .text").click(function () {
    $(this).children(".testimony .column .col .text #p").slideToggle(200);
    $(this).children(".testimony .column .col .text .span").html("READ LESS");
  })
  

    $(".ham").click(function () {
        $(".mobile").css({left:"0%"});
    })
    $(".mobile").click(function () {
        $(".mobile").css({left:"-105%"});
    })

    $("#year").html(new Date().getFullYear());

    $(window).ready(function () {
      $("body .body .slider .text h1").css({left:"0%"});
      $("body .body .slider .text p").css({right:"0%"});
      $("body .body .slider .text h2").css({transform:"scale(1)"});
    })
});