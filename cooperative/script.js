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
  

    $(".ham").click(function () {
        $(".mobile").css({left:"0%"});
    })
    $(".mobile").click(function () {
        $(".mobile").css({left:"-105%"});
    })

    $("#year").html(new Date().getFullYear());
});