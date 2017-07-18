$(document).ready(function() {
  var randomFirst = Math.round(Math.random() * 4) + 6;
  var min = 11 - randomFirst;
  var max = 14 - randomFirst;
  var randomSecond = Math.round(Math.random() * ( max - min + 1)) + min;
  
  var expression = $("<p class='expression'> <span class='randomFirst'>" + randomFirst + "</span> + <span class='randomSecond'>" + randomSecond + "</span> = ? </p>");
  $('.quention').append(expression);
  
  var sprite = $("<img class='sprite' src='sprites/sprite" + randomFirst + ".png'>");
  $('.quention').append(sprite);
  
  var arrowAlfa = $("<input class='arrowAlfa" + randomFirst + "' input type='text' size='5'>");
  $('.quention').append(arrowAlfa);
  
  $('.arrowAlfa'+randomFirst).on('keyup',  function() {
    var alfa = $(this).val();
    if (alfa == randomFirst) {
      var alfaLab = $("<label for='arrowAlfa" + alfa + "'>" + alfa + "</label>");
      $('.quention').append(alfaLab);
      //задать новую картинку
      //задать новый inputBeta
    } else {
      $(this).toggleClass("notArrowAlfa");
      $(this).closest('.quention').find('.randomFirst').toggleClass("notRandomFirst");
    }
  });
  
  $('.arrowBeta'+randomSecond).on('keyup',  function() {
    var beta = $(this).val();
    if (beta == randomSecond) {
      var betaLab = $("<label for='arrowBeta" + beta + "'>" + beta + "</label>");
      $('.quention').append(betaLab);
      //задать новый inputAnswer
    } else {
      $(this).toggleClass("notArrowBeta");
      $(this).closest('.quention').find('.randomSecond').toggleClass("notRandomSecond");
    }
  });
  
  //слушать inputAnswer
});
