
$(function(){
  $("#btn").click(function(){
    $("img").toggle();
  });
});

$(document).ready(function() {
        $("button#hello").click(function() {
          $("ul").prepend("<li>hello!</li>");
        });

        $("button#goodbye").click(function() {
          $("ul").prepend("<li>Goodbye!</li>");
        });

        $("button#stop").click(function() {
          $("ul").prepend("<li>Stop copying me!</li>");
        });
      });
