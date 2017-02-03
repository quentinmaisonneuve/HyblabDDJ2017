'use strict';

document.getElementById('buttonEncadre1').onclick = function() {
  var value = document.getElementById('encadre1').style["z-index"];
  if (value != 0) {
      value = 0;
      $.fn.fullpage.moveSectionDown();
  } else {
    value = 11;
  }
  document.getElementById('encadre1').style["z-index"] = value;
}

document.getElementById('buttonEncadre2').onclick = function() {
  var value2 = document.getElementById('encadre2').style["z-index"];
  if (value2 != 0) {
      value2 = 0;
      $.fn.fullpage.moveSectionDown();
  } else {
    value2 = 11;
  }
  document.getElementById('encadre2').style["z-index"] = value2;
}

document.getElementById('buttonEncadre3').onclick = function() {
  var value2 = document.getElementById('encadre3').style["z-index"];
  if (value2 != 0) {
      value2 = 0;
      $.fn.fullpage.moveSectionDown();
  } else {
    value2 = 11;
  }
  document.getElementById('encadre3').style["z-index"] = value2;
}
