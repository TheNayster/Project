$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("i").hasClass("fa-pause")){
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        }else{
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

$(function(){
    $("#reserveButton").click(function(){
        $("#reserveButton").modal("show");
    });
});

$(function(){
    $("#loginButton").click(function(){
        $("#loginButton").modal("show");
    });
});
$(function() {
    var elem = document.getElementById("myAnimation");   
    var pos = 0;
    var id = setInterval(frame, 0);
    function frame() {
      if (pos == 1800) {
        if (pos == 0) {
            clearInterval(id);
            
          } else {
            pos--; 
            elem.style.bottom = pos + 'px'; 
          }
      } else {
        pos++; 
        elem.style.left = pos + 'px'; 
      }
    }
  })
    
