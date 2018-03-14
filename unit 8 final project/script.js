/*global*/

// function fahrtocel(fahrenheit) {
//     var val = 0;
//     return val;
// }

// function celtofahr(celsious) {
//     var cal = 0;
//     return val;
//     /*global val*/
// }

// $(funtion() {
//     $("start").on(`keyup`, function() {
//         $("#finish").val(celtofahr($(this).val()));
//     });
//     $("#finish")
//     }
// }

function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
}