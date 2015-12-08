
$(document).ready(function(){


  var moveLeft = function(){
    var leftMove = $('#char').position().left - 50;
    $('#char').animate({left: leftMove}, {duration: 500});
  };

  var moveRight = function(){
    var rightMove = $('#char').position().left + 50;
    $('#char').animate({left: rightMove}, {duration: 500});
  };

  var moveUp = function(){
    var upMove = $('#char').position().top - 50;
    $('#char').animate({top: upMove}, {duration: 500});
  };

  var moveDown = function(){
    var downMove = $('#char').position().top + 50;
    $('#char').animate({top: downMove}, {duration: 500});
  };


  $('#run').on('click', function(event){
    event.preventDefault();
    var myCode=editor.getValue();
    console.log(myCode);
    eval(myCode);
  });

});
