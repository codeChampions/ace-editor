
$(document).ready(function(){


  var moveLeft = function(){
    $('#char').animate({left: "-=50"}, {duration: 500});
  };

  var moveRight = function(){
    $('#char').animate({left: "+=50"}, {duration: 500});
  };

  var moveUp = function(){
    $('#char').animate({top: "-=50"}, {duration: 500});
  };

  var moveDown = function(){
    $('#char').animate({top: "+=50"}, {duration: 500});
  };


  $('#run').on('click', function(event){
    event.preventDefault();
    var myCode=editor.getValue();
    console.log(myCode);
    eval(myCode);
  });

});
