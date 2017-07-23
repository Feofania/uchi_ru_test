$(document).ready(function() {
    var randomFirst = Math.round(Math.random() * 3) + 6;
    var min = 11 - randomFirst;
    var max = 14 - randomFirst;
    var randomSecond = Math.round(Math.random() * ( max - min)) + min;

    //пример
    var expression = $("<p class='expression'> <span class='randomFirst'>"+randomFirst+"</span> + <span class='randomSecond'>"+randomSecond+"</span> = ? </p>");
    $('.question').append(expression);

    //ось
    var sprite = $("<img class='sprite' src='test_task/sprite.png'>");
    $('.question').append(sprite);

    //канвас для первой стрелки
    var heightAlfa = Math.round((40*randomFirst-randomFirst-1)/3);
    var widthAlfa = (40*randomFirst-randomFirst-1);
    var topAlfa = 220-heightAlfa;
    var arrowAlfa = $("<canvas id='arrowAlfa' height="+heightAlfa+" width="+widthAlfa+"></canvas>");
    $('.question').append(arrowAlfa);
    $('#arrowAlfa').offset({top:topAlfa, left:45});

    //отрисовка первой стрелки
    var canvas = document.getElementById('arrowAlfa');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(0, heightAlfa);
    ctx.bezierCurveTo(10, 10, widthAlfa-10, 10, widthAlfa-3, heightAlfa);
    ctx.moveTo(widthAlfa, heightAlfa-10);
    ctx.lineTo(widthAlfa-3, heightAlfa);
    ctx.moveTo(widthAlfa-10, heightAlfa-10);
    ctx.lineTo(widthAlfa-3, heightAlfa);
    ctx.stroke();

    //поле ввода первого слагаемого
    var alfaInput = $("<input class='alfaInput' type='text' size='1'>");
    $('.question').append(alfaInput);
    $('.alfaInput').offset({top:topAlfa-10, left:widthAlfa/2});

    $('.alfaInput').on('keyup',  function() {
        var alfa = $(this).val();

        if (alfa == randomFirst) {
            //если значение инпут верно, удаляем инпут, добавляем лейбел
            var alfaLab = $("<label class='alfaInput'>"+alfa+"</label>");
            $('.alfaInput').remove();
            $('.question').append(alfaLab);
            $('.alfaInput').offset({top:topAlfa, left:45+widthAlfa/2});

            //канвас для второй стрелки
            var heightBeta = Math.round((40*randomSecond-randomSecond-1)/3);
            var widthBeta = (40*randomSecond-randomSecond-1);
            var topBeta = 220-heightBeta;
            var leftBeta = $('#arrowAlfa').offset().left+widthAlfa;
            var arrowBeta = $("<canvas id='arrowBeta' height="+heightBeta+" width="+widthBeta+"></canvas>");
            $('.question').append(arrowBeta);
            $('#arrowBeta').offset({top:topBeta, left:leftBeta});

            //отрисовка второй стрелки
            var canvas = document.getElementById('arrowBeta');
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(0, heightBeta);
            ctx.bezierCurveTo(10, 10, widthBeta-10, 10, widthBeta-3, heightBeta);
            ctx.moveTo(widthBeta, heightBeta-10);
            ctx.lineTo(widthBeta-3, heightBeta);
            ctx.moveTo(widthBeta-10, heightBeta-10);
            ctx.lineTo(widthBeta-3, heightBeta);
            ctx.stroke();

            //поле ввода второго слагаемого
            var betaInput = $("<input class='betaInput' type='text' size='1'>");
            $('.question').append(betaInput);
            $('.betaInput').offset({top:topBeta-10, left:leftBeta+widthBeta/2});
        } else {
            $(this).toggleClass("notArrow");
            $(this).closest('.question').find('.randomFirst').toggleClass("notRandom");
        }

        $('.betaInput').on('keyup', function() {
            var beta = $(this).val();

            if (beta == randomSecond) {
                //если значение инпут верно, удаляем инпут, добавляем лейбел
                var betaLab = $("<label class='betaInput'>"+beta+"</label>");
                $('.betaInput').remove();
                $('.question').append(betaLab);
                $('.betaInput').offset({top:topBeta, left:leftBeta+widthBeta/2});

                //поле ввода суммы
                var answer = $("<input class='answer' type='text' size='1'>");
                $('.question').append(answer);
                $('p').text(randomFirst+' + '+randomSecond+' = ');
            } else {
                $(this).toggleClass("notArrow");
                $(this).closest('.question').find('.randomSecond').toggleClass("notRandom");
            }

            $('.answer').on('keyup', function(){
                var an = $(this).val();
                if (an == randomFirst+randomSecond) {
                    $('.answer').remove();
                    $('p').text(randomFirst+' + '+randomSecond+' = '+an);
                } else {
                    $(this).toggleClass("notArrow");
                }
            });
        });
    });

/*




  */
});
