
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
    setTimeout(function(){
      if($('#char').position().top === $('#x').position().top && $('#char').position().left === $('#x').position().left){
      alert("Congrats you won!");
    }
    else{
      alert("Sorry, try again");
      console.log($('#char').position());
      console.log($('#x').position());
      $("#char").css('top', '0px');
      $("#char").css('left', '0px');

    }}, 3000);

  });

});
