'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts
/*
// Load a dummy json file using the fetch API
fetch('data/dummy.json')
    // this promise will be fulfilled when the json fill will be
    .then(function (response){
        // if we could load the resource, parse it
        if( response.ok )
            return response.json();
        else // if not, send some error message as JSON data
            return {data: "JSON file not found"};

    })
    // in case of invalid JSON (parse error) send some error message as JSON data
    .catch( function (error){
        return {data: "Invalid JSON"};
    })
    // this promise will be fulfilled when the json will be parsed
    .then(function (json) {
        document.querySelector('#data')
            .textContent = json.data;
    });
*/
window.onload = function () {
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
}
