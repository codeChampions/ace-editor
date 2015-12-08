$(document).ready(function(){

  $('#run').on('click', function(event){
    event.preventDefault();
    var myCode=editor.getValue();
    eval(myCode);
  });

});
