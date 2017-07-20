$(document).ready(function() {
  var randomFirst = Math.round(Math.random() * 3) + 6;
  var min = 11 - randomFirst;
  var max = 14 - randomFirst;
  var randomSecond = Math.round(Math.random() * ( max - min + 1)) + min;
  
  var expression = $("<p class='expression'> <span class='randomFirst'>" + randomFirst + "</span> + <span class='randomSecond'>" + randomSecond + "</span> = ? </p>");
  $('.question').append(expression);

  var sprite = $("<img class='sprite' src='sprites/sprite" + randomFirst + ".png'>");
  $('.question').append(sprite);

  var arrowAlfa = $("<input class='arrowAlfa" + randomFirst + "' type='text' size='1'>");
  $('.question').append(arrowAlfa);

  $('.arrowAlfa'+randomFirst).on('keyup',  function() {
    var alfa = $(this).val();
    if (alfa == randomFirst) {
      var alfaLab = $("<label for='arrowAlfa" + alfa + "' class='arrowAlfa" + randomFirst + "'>" + alfa + "</label>");
      $('.arrowAlfa'+randomFirst).remove();
      $('.question').append(alfaLab);
      //задать новую картинку
      //задать новый inputBeta
    } else {
      $(this).toggleClass("notArrowAlfa");
      $(this).closest('.question').find('.randomFirst').toggleClass("notRandomFirst");
    }
  });
  
  $('.arrowBeta'+randomSecond).on('keyup',  function() {
    var beta = $(this).val();
    if (beta == randomSecond) {
      var betaLab = $("<label for='arrowBeta" + beta + "'>" + beta + "</label>");
      $('.question').append(betaLab);
      //задать новый inputAnswer
    } else {
      $(this).toggleClass("notArrowBeta");
      $(this).closest('.question').find('.randomSecond').toggleClass("notRandomSecond");
    }
  });
  
  //слушать inputAnswer
});
