$(document).ready(function() {
  var randomFirst = Math.round(Math.random() * 3) + 6;
  var min = 11 - randomFirst;
  var max = 14 - randomFirst;
  var randomSecond = Math.round(Math.random() * ( max - min)) + min;
  
  var expression = $("<p class='expression'> <span class='randomFirst'>"+randomFirst+"</span> + <span class='randomSecond'>"+randomSecond+"</span> = ? </p>");
  $('.question').append(expression);

  var sprite = $("<img class='sprite' src='sprites/sprite"+randomFirst+".png'>");
  $('.question').append(sprite);

  var arrowAlfa = $("<input class='arrowAlfa"+randomFirst+"' type='text' size='1'>");
  $('.question').append(arrowAlfa);

  $('.arrowAlfa'+randomFirst).on('keyup',  function() {
    var alfa = $(this).val();
    if (alfa == randomFirst) {
      var alfaLab = $("<label for='arrowAlfa"+alfa+"' class='arrowAlfa"+randomFirst + "'>"+alfa+"</label>");
      $('.arrowAlfa'+randomFirst).remove();
      $('.question').append(alfaLab);

      $('.sprite').attr('src', 'sprites/sprite'+randomFirst+randomSecond+'.png');

      var arrowBeta = $("<input class='arrowBeta"+randomFirst+randomSecond+"' type='text' size='1'>");
      $('.question').append(arrowBeta);
    } else {
      $(this).toggleClass("notArrow");
      $(this).closest('.question').find('.randomFirst').toggleClass("notRandom");
    }
  });
  
  $('.arrowBeta'+randomFirst+randomSecond).on('keyup',  function() {
    var beta = $(this).val();
    if (beta == randomSecond) {
      var betaLab = $("<label for='arrowBeta" + beta + "'>" + beta + "</label>");
      $('.question').append(betaLab);

      var answer = $("<input class='answer' type='text' size='1'>");
      $('.question').append(answer);
      $('p').text(randomFirst+' + '+randomSecond+' = ');
    } else {
      $(this).toggleClass("notArrow");
      $(this).closest('.question').find('.randomSecond').toggleClass("notRandom");
    }
  });
  
  $('.answer').on('keyup', function(){
    var an = $(this).val();
    if (an == randomFirst+randomSecond) {
      var answerLab = $("<label class='answer'>"+an+"</label>");
      $('.answer').remove();
      $('.question').append(answerLab);
      $('p').text(randomFirst+' + '+randomSecond+' = '+an);
    } else {
      $(this).toggleClass("notArrow");
    }
  });
});
