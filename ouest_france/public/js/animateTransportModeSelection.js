'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts

var listeSVG = ["img/Voiture.svg","img/Bus-Transport-en-commun.svg","img/Velo.svg","img/Pieton.svg"];
var iterator = 0;
document.getElementById('arrow_d').onclick = function () {
    iterator = iterator + 1;
    if (iterator > 3) {
      iterator = 0;
    }
   d3.selectAll('#myCar')
      .attr("xlink:href", listeSVG[iterator]);
};
document.getElementById('arrow_l').onclick = function () {
      iterator = iterator - 1;
      if (iterator < 0) {
        iterator = 3;
      }
      d3.selectAll('#myCar').attr("xlink:href", listeSVG[iterator])
};


var modeWidth = 450.0;
var modeHeight = 600.0;

var startMode = {
  x: 280,
  y: 140
};


var endMode = {
  x: 0,
  y: 300
};

// Creation du svg
var svg = d3.select('#modeTransport')
            .attr('width', modeWidth)
            .attr('height', modeHeight);

svg.append('rect')
  .attr('width', width)
  .attr('height', height)
  .attr('opacity', 0);

var g = svg.append('g');

// Creation du text
var textG = g.append('g')
  .style('trasform', 'translate(200px, 0)');
textG.append('text')
  .attr('class', 'bebas')
  .attr('x', '50px')
  .attr('y', '25px')
  .style('fill', 'white')
  .text('CHOISISSEZ VOTRE');

textG.append("svg:foreignObject")
  .attr("class", "texth2")
  .attr('x', '39px')
  .attr('y', '23px')
  .attr('width', 200)
  .style('color', 'white')
  .text('MODE DE TRANSPORT');

// Ajout des images
var imagesG = g.append('g');
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
        .attr("xlink:href", listeSVG[iterator]);
//
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



/*
var cross0Image = svg.append("svg:image")
      .classed('hiddenCross', true)
      .attr('x', zone0.location[0] + zoneBackgroundSize[0] - iconCrossSize[0]/2)
      .attr('y', zone0.location[1] - iconCrossSize[1])
      .attr('mapWidth', iconCrossSize[0])
      .attr('mapHeight', iconCrossSize[1])
      .attr("xlink:href", "img/map/cross.png");*/
