$(document).ready(function() {
  var randomFist = Math.round(Math.random() * 4) + 6;
  var min = 11 - randomFist;
  var max = 14 - randomFist;
  var randomSecond = Math.round(Math.random() * ( max - min + 1)) + min;
  
  switch(randomFist) {
    case '6': 
      drawingSecondArrow(randomSecond);
      break;
    case '7': 
      drawingSecondArrow(randomSecond);
      break;
    case '8': 
      drawingSecondArrow(randomSecond);
      break;
    case '9': 
      drawingSecondArrow(randomSecond);
      break;
  }
  
  var drawingFistArrow = function() {
    
  };
  
  var drawingSecondArrow = function(secondArrow) {
      switch(secondArrow) {
      case '2': 

        break;
      case '3': 

        break;
      case '4': 

        break;
      case '5': 

        break;
      case '6': 

        break;
      case '7': 

        break;
      case '8': 

        break;
    }
  };
  
});
