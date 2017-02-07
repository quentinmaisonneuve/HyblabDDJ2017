// charset: utf-8
'use strict';

// JS for dataviz

// données 
var depart;
var arrivee;
var modeDeTransport;
var dataviz_2_img=document.getElementById("transport");
var barDemo;

// events
document.getElementById("continuer").addEventListener("click", getMapData, false);
document.getElementById("commencer").addEventListener("click", getModeDeTransportData, false);

// trajet
function getMapData() {
depart = getDepart();
arrivee = getArrivee();
/*
map.addEventListener("click", ,false);

croixAnnulationDepart.addEventListener("click", annulationDepart, false);
croixAnnulationArrivee.addEventListener("click", annulationArrivee, false);

function annulationMapSelection(variable) {
    variable = undefined;
}

function annulationDepart() {
    annulationMapSelection(depart);
}

function annulationArrivee() {
    annulationMapSelection(arrivee);
}
*/

/*
alert(depart);
alert(arrivee);
*/

makeDataviz2();
//alert("make barchart#2");
makeDataviz3();
}

function getModeDeTransportData() {
// mode de transport
modeDeTransport = document.getElementById("myCar").href.baseVal; // chemin vers l'image (parmi ["img/Voiture.svg","img/Bus-Transport-en-commun.svg","img/Velo.svg","img/Pieton.svg"])
// s = s.split('/'); modeDeTransport = s[s.length - 1].split('.')[0]; // string parmi ["Voiture", "Bus-Transport-en-commun", "Velo", "Pieton"]

makeDataviz1();
dataviz_2_img.src=modeDeTransport;
}

// Dataviz#1
function makeDataviz1 () {
var nbPersonnesFaisantLeMemeTrajet = 5000; // nbPersonnesFaisantLeMemeTrajet = nb de personnes utilisant ce même trajet
var pourcentage = 80; // pourcentage = nb de personnes utilisant ce même trajet mais sur une échelle de 0 à 100
var pourcentage_arrondi = 80; // pourcentage_arrondi = nb de personnes utilisant ce même trajet mais sur une échelle de 0 à 100 de 10 en 10
var pourcentage_img = "";
if (pourcentage_arrondi !== 0) pourcentage_img = "img/dataviz1/" + pourcentage_arrondi + ".svg";
document.getElementById("people").src = pourcentage_img;//dataviz_1_img.src = pourcentage_img;
document.getElementById("number").firstChild.nodeValue = nbPersonnesFaisantLeMemeTrajet;//dataviz_1_value = nbPersonnesFaisantLeMemeTrajet;
}

function makeDataviz2 () {
//Dataviz#2
//pourcentages d'utilisation de ce trajet (depart/arrivee) pour chaque moyen de transport (cf. la var modeDeTransport, attention c'est un pathName!)
// il me faudrait une var au format suivant :
/*
varBarChartByModeDeTransport =
[{year: 2006, books: 54},
{year: 2007, books: 43},
{year: 2008, books: 41},
{year: 2009, books: 44}];
*/

// draw BarChart in dedicated slot in #scenario2
var varBarChartByModeDeTransport = [{year: 2006, books: 54},
  {year: 2007, books: 43},
  {year: 2008, books: 41},
  {year: 2009, books: 44}];

var barWidth = 40;
var barFullWidth = (barWidth + 10) * varBarChartByModeDeTransport.length;
var barHeight = 200;

var x = d3.scale.linear().domain([0, varBarChartByModeDeTransport.length]).range([0, barFullWidth]);
var y = d3.scale.linear().domain([0, d3.max(varBarChartByModeDeTransport, function(datum) { return datum.books; })]).
  rangeRound([0, barHeight]);

// add the canvas to the DOM
  barDemo = d3.select("#bar-demo").
  append("svg:svg").
  attr("width", barFullWidth).
  attr("height", barHeight);

barDemo.selectAll("rect").
  data(varBarChartByModeDeTransport).
  enter().
  append("svg:rect").
  attr("x", function(datum, index) { return x(index); }).
  attr("y", function(datum) { return barHeight - y(datum.books); }).
  attr("height", function(datum) { return y(datum.books); }).
  attr("width", barWidth).
  attr("fill", "#d4584e");
  

  document.getElementById("continuer").removeEventListener("click", getMapData, false);  
  document.getElementById("continuer").addEventListener("click", cleanLastBarChart, false);  
}

function cleanLastBarChart() {
    //alert("remove BarChart");
    d3.select("#bar-demo").select("svg").remove();
    getMapData();
}

function makeDataviz3 () {
// Dataviz#3
// même format que datavi#2 mais avec les pourcentages d'utilisation de ce trajet pour chaque motif
var varBarChartByMotif;

// draw BarChart in dedicated slot in #scenario3
}
