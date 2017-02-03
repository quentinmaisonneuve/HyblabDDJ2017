'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts

var listeSVG = ["../public/img/Voiture.svg","../public/img/Bus-Transport-en-commun.svg","../public/img/Velo.svg","../public/img/Pieton.svg"];
var iterator = 0;
document.getElementById('arrow_d').onclick = function () {
    iterator = iterator + 1;
    if (iterator > 3) {
      iterator = 0;
    }
    document.getElementById('car').src = listeSVG[iterator];

  };
document.getElementById('arrow_l').onclick = function () {
      iterator = iterator - 1;
      if (iterator < 0) {
        iterator = 3;
      }
       document.getElementById('car').src = listeSVG[iterator];
    };