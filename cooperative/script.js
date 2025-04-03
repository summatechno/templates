$(function () {
    window.onscroll = function(){scrollFunction()};
  function scrollFunction() {
      if (document.body.scrollTop >= 500 || document.documentElement.scrollTop > 500) {
          $(".up").css({"bottom":"100px"});
          
      }
      
      else{
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