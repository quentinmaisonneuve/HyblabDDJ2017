'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts

var listesvgTransport = ["img/Voiture.svg","img/Bus-Transport-en-commun.svg","img/Velo.svg","img/Pieton.svg"];
var iterator = 0;
document.getElementById('arrow_d').onclick = function () {
    iterator = iterator + 1;
    if (iterator > 3) {
      iterator = 0;
    }
   d3.selectAll('#myCar')
      .attr("xlink:href", listesvgTransport[iterator]);
};
document.getElementById('arrow_l').onclick = function () {
      iterator = iterator - 1;
      if (iterator < 0) {
        iterator = 3;
      }
      d3.selectAll('#myCar').attr("xlink:href", listesvgTransport[iterator])
};


var modeWidth = 400.0;
var modeHeight = 600.0;

var startMode = {
  x: 280,
  y: 140
};


var endMode = {
  x: 0,
  y: 300
};

// Creation du svgTransport
var svgTransport = d3.select('#modeTransport');

svgTransport.append('rect')
  .attr('width', modeWidth)
  .attr('height', modeHeight)
  .attr('opacity', 0);

var gT = svgTransport.append('g');

// Creation du text
var textG = gT.append('g');
textG.append('text')
  .attr('class', 'bebas')
  .attr('x', '40px')
  .attr('y', '50px')
  .style('fill', 'white')
  .style('font-size', "2em")
  .text('CHOISISSEZ VOTRE').style('font-family','ArialR');

textG.append("svg:foreignObject")
  .attr("class", "texth2")
  .attr('x', '39px')
  .attr('y', '50px')
  .attr('width', "500")
  .style('color', 'white')
  .style('font-size', '9em')
  .text('MODE DE TRANSPORT');

// Ajout des images
var imagesG = gT.append('g');
imagesG.append("svg:image")
        .classed("route", true)
        .attr('x', '0px')
        .attr('y', '100px')
        .attr("xlink:href", "img/Route.svg");

var myCarMode = imagesG.append("svg:image")
        .attr("id", "myCar")
        .attr('x', 20)
        .attr('y', 20)
        .attr('width', '40%')
        .attr('height', '40%')
        .attr("xlink:href", listesvgTransport[iterator]);

imagesG.append("input")
    .attr("class", "bebas")
    .attr("type", "button")
    .attr("id", "commencer")
    .attr("value", "COMMENCER");


// Ajout de la transition
function resetCar(delay, callback) {
  myCarMode.transition().delay(delay)
      .attr('x', startMode.x)
      .attr('y', startMode.y)
      .duration(0)
      .each("end", callback);
}

function startModeScene() {
  myCarMode.transition()
      .attr('x', endMode.x)
      .attr('y', endMode.y)
      .duration(3000)
  .each("end", function () { resetCar(2000, function () { startModeScene(); }); });
}

resetCar(0, function() {});
resetCar(2000, function() { startModeScene(); });
