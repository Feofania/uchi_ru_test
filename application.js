$(document).ready(function() {
    var randomFirst = Math.round(Math.random() * 3) + 6;
    var min = 11 - randomFirst;
    var max = 14 - randomFirst;
    var randomSecond = Math.round(Math.random() * ( max - min)) + min;

    $('.expression').find('p').text(randomFirst+' + '+randomSecond+' = ?');

    //канвас для первой стрелки
    var heightAlfa = Math.round((40*randomFirst-randomFirst-1)/3);
    var widthAlfa = (40*randomFirst-randomFirst-1)+3;
    var topAlfa = 220-heightAlfa;
    var arrowAlfa = $("<canvas id='arrowAlfa' height="+heightAlfa+" width="+widthAlfa+"></canvas>");
    $('.question').find('.arrows').append(arrowAlfa);
    $('.arrows').find('#arrowAlfa').offset({top:topAlfa, left:45});

    //канвас для второй стрелки
    var heightBeta = Math.round((40*randomSecond-randomSecond-1)/3);
    var widthBeta = (40*randomSecond-randomSecond-1) + 3;
    var topBeta = 220-heightBeta;
    var leftBeta = $('#arrowAlfa').offset().left+widthAlfa - 3;
    var arrowBeta = $("<canvas id='arrowBeta' height="+heightBeta+" width="+widthBeta+"></canvas>");
    $('.question').find('.arrows').append(arrowBeta);
    $('.arrows').find('#arrowBeta').offset({top:topBeta, left:leftBeta});

    var drowArrow = function(height, width, arrow) {
        var minPercentWidth = Math.round(width*1/100);
        var maxPercentWidth = Math.round(width*3/100);
        var maxPercentHeight = Math.round(height*3/100);
        var canvas = document.getElementById(arrow);
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.bezierCurveTo(10, 10, width-maxPercentWidth, 10, width-minPercentWidth, height);
        ctx.moveTo(width, height-maxPercentHeight);
        ctx.lineTo(width-minPercentWidth, height);
        ctx.moveTo(width-maxPercentWidth, height-maxPercentHeight);
        ctx.lineTo(width-minPercentWidth, height);
        ctx.stroke();
    };

    drowArrow(heightAlfa, widthAlfa, 'arrowAlfa');

    //поле ввода первого слагаемого
    var alfaInput = $("<input class='alfaInput' type='text' size='1'>");
    $('.question').find('.arrows').append(alfaInput);
    $('.arrows').find('.alfaInput').offset({top:topAlfa-topAlfa/10, left:45+widthAlfa/2});

    $('.arrows').on('keyup', '.alfaInput', function() {
        var alfa = +$(this).val();

        if (alfa === randomFirst) {
            //если значение инпут верно, удаляем инпут, добавляем лейбел
            var alfaLab = $("<label class='alfaInput'>"+alfa+"</label>");
            $('.arrows').find('.alfaInput').remove();
            $('.question').find('.arrows').append(alfaLab);
            $('.arrows').find('.alfaInput').offset({top:topAlfa-topAlfa/10, left:45+widthAlfa/2});

            //отрисовка второй стрелки
            drowArrow(heightBeta, widthBeta, 'arrowBeta');

            //поле ввода второго слагаемого
            var betaInput = $("<input class='betaInput' type='text' size='1'>");
            $('.question').find('.arrows').append(betaInput);
            $('.arrows').find('.betaInput').offset({top:topBeta-topBeta/10, left:leftBeta+widthBeta/2});
        } else {
            $(this).toggleClass("notArrow");
            $(this).closest('.question').find('.randomFirst').toggleClass("notRandom");
        }
    });

    $('.arrows').on('keyup', '.betaInput', function() {
        var beta = +$(this).val();

        if (beta === randomSecond) {
            //если значение инпут верно, удаляем инпут, добавляем лейбел
            var betaLab = $("<label class='betaInput'>"+beta+"</label>");
            $('.arrows').find('.betaInput').remove();
            $('.question').find('.arrows').append(betaLab);
            $('.arrows').find('.betaInput').offset({top:topBeta-topBeta/10, left:leftBeta+widthBeta/2});

            //поле ввода суммы
            var answer = $("<input class='answer' type='text' size='2'>");
            $('.question').find('.expression').append(answer);
            $('.expression').find('p').text(randomFirst+' + '+randomSecond+' = ');
        } else {
            $(this).toggleClass("notArrow");
            $(this).closest('.question').find('.randomSecond').toggleClass("notRandom");
        }
    });

    $('.expression').on('keyup', '.answer', function(){
        var an = +$(this).val();
        if (an === randomFirst+randomSecond) {
            $('.expression').find('.answer').remove();
            $('.expression').find('p').text(randomFirst+' + '+randomSecond+' = '+an);
        } else {
            $(this).toggleClass("notArrow");
        }
    });
});
