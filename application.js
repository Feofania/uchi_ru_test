$(document).ready(function() {
  var randomFirst = Math.round(Math.random() * 4) + 6;
  var min = 11 - randomFirst;
  var max = 14 - randomFirst;
  var randomSecond = Math.round(Math.random() * ( max - min + 1)) + min;
  
  var quention = $("<p class='quention'>" + randomFirst + " + " + randomSecond + " = ? </p>");
  $('.quention').append(quention);
  
  var sprite = $("<img class='sprite' src='sprites/sprite" + randomFirst + ".png'>");
  $('.sprite').append(sprite);
  
  var arrowAlfa = $("<input class='arrowAlfa" + randomFirst + "' input type='text' size='5'>");
  $('.arrowAlfa').append(arrowAlfa);
  
  
});
