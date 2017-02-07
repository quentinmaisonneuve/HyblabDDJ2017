'use strict';
// charset: utf-8

function create_dataviz() {
    create_dataviz_1();
    create_dataviz_2();
    create_dataviz_3();
}

function create_dataviz_1() {
    var value = data.d30.matrix.mode.total[getDepart()][getArrivee()];
    var total = data.d30.matrix.mode.total[getDepart()].total;
    var rounded = Math.ceil(value / total * 10) * 10;

    if (rounded > 0) {
        document.getElementById("people").src = "img/dataviz1/" + rounded + ".svg";
    }

    document.getElementById("number").replaceChild(document.createTextNode(value));
}

function create_dataviz_2() {
    var total = data.d30.matrix.mode.total[getDepart()].total;

    alert((data.d30.matrix.mode.voiture[getDepart()][getArrivee()] / total).toFixed(2) * 100 + "%");
    alert((data.d30.matrix.mode.tc[getDepart()][getArrivee()] / total).toFixed(2) * 100 + "%");
    alert((data.d30.matrix.mode.velo[getDepart()][getArrivee()] / total).toFixed(2) * 100 + "%");
    alert((data.d30.matrix.mode.marche[getDepart()][getArrivee()] / total).toFixed(2) * 100 + "%");
}

function create_dataviz_3() {
}

// JS for dataviz

// données 
var depart;
var arrivee;
var modeDeTransport;
var dataviz_2_img=document.getElementById("transport");

// events
document.getElementById("continuer").addEventListener("click", getMapFirstData, false);
document.getElementById("commencer").addEventListener("click", getModeDeTransportData, false);

// trajets
function getMapFirstData() {
    depart = getDepart();
    arrivee = getArrivee();
    
    // modify the click event listener on the map
    document.getElementById("continuer").removeEventListener("click", getMapData, false);  
    document.getElementById("continuer").addEventListener("click", cleanLastBarCharts, false);

    makeDataviz2();
    makeDataviz3();
}

function getMapData() {
    depart = getDepart();
    arrivee = getArrivee();

    makeDataviz2();
    makeDataviz3();
}

function getModeDeTransportData() {
    // mode de transport
    modeDeTransport = document.getElementById("myCar").href.baseVal; // chemin vers l'image (parmi ["img/Voiture.svg","img/Bus-Transport-en-commun.svg","img/Velo.svg","img/Pieton.svg"])

    makeDataviz1();
    dataviz_2_img.src = modeDeTransport;
}

// Dataviz#1
function makeDataviz1 () {
    var nbPersonnesFaisantLeMemeTrajet = 5000; // nbPersonnesFaisantLeMemeTrajet = nb de personnes utilisant ce même trajet
    var pourcentage = 80; // pourcentage = nb de personnes utilisant ce même trajet mais sur une échelle de 0 à 100
    var pourcentage_arrondi = 80; // pourcentage_arrondi = nb de personnes utilisant ce même trajet mais sur une échelle de 0 à 100 de 10 en 10
    var pourcentage_img = "";
    if (pourcentage_arrondi !== 0) pourcentage_img = "img/dataviz1/" + pourcentage_arrondi + ".svg";
    
    document.getElementById("people").src = pourcentage_img; //dataviz_1_img.src = pourcentage_img;
    document.getElementById("number").firstChild.nodeValue = nbPersonnesFaisantLeMemeTrajet; //dataviz_1_value = nbPersonnesFaisantLeMemeTrajet;
dataviz_2_img.src=modeDeTransport;
}

// Dataviz #1
function makeDataviz1() {
    var value = data.d30.matrix.mode.total[getDepart()][getArrivee()];
    var total = data.d30.matrix.mode.total[getDepart()].total;
    var percent = value / total;

    alert(value);
    alert(total);
    alert(percent);



var nbPersonnesFaisantLeMemeTrajet = 5000; // nbPersonnesFaisantLeMemeTrajet = nb de personnes utilisant ce même trajet
var pourcentage = 80; // pourcentage = nb de personnes utilisant ce même trajet mais sur une échelle de 0 à 100
var pourcentage_arrondi = 80; // pourcentage_arrondi = nb de personnes utilisant ce même trajet mais sur une échelle de 0 à 100 de 10 en 10
var pourcentage_img = "";
if (pourcentage_arrondi !== 0) pourcentage_img = "img/dataviz1/" + pourcentage_arrondi + ".svg";
document.getElementById("people").src = pourcentage_img;//dataviz_1_img.src = pourcentage_img;
document.getElementById("number").firstChild.nodeValue = value;//dataviz_1_value = nbPersonnesFaisantLeMemeTrajet;
}

function drawChart(dataset, idForDrawing, idsForValues, colorsSet) {
    var barWidth = 40;
    var barFullWidth = (barWidth + 10) * dataset.length;
    var barHeight = 200;

    var x = d3.scale.linear().domain([0, dataset.length]).range([0, barFullWidth]);
    var y = d3.scale.linear().domain([0, d3.max(dataset, function(datum) { return datum.books; })]).
      rangeRound([0, barHeight]);

    // add the canvas to the DOM
    var barDemo = d3.select(idForDrawing).
        append("svg:svg").
        attr("width", barFullWidth).
        attr("height", barHeight);

    barDemo.selectAll("rect").
      data(dataset).
      enter().
      append("svg:rect").
      attr("x", function(datum, index) { return x(index); }).
      attr("y", function(datum) { return barHeight - y(datum.books); }).
      attr("height", function(datum) { return y(datum.books); }).
      attr("width", barWidth).
      attr("fill", "#d4584e");
      //colorsSet
  
    idsForValues.forEach(function (s, i) {
    var p_tag = document.getElementById(s);
    p_tag.firstChild.nodeValue = dataset[i].books;
    i+=1; 
    }, 0);
}

function cleanLastBarCharts() {
    d3.select("#bar-demo").select("svg").remove();
    d3.select("#bar-demo-3").select("svg").remove();
    
    getMapData();
}

function makeDataviz2 () {
    //Dataviz#2
    //pourcentages d'utilisation de ce trajet (depart/arrivee) pour chaque moyen de transport (cf. la var modeDeTransport, attention c'est un pathName!)

    // TO-DO (Tudal) : remplacer les valeurs des items "books" par tes data.mod adéquats ;)
    var varBarChartByModeDeTransport = [{year: 2006, books: 54},
      {year: 2007, books: 43},
      {year: 2008, books: 41},
      {year: 2009, books: 44}];

    drawChart(varBarChartByModeDeTransport, "#bar-demo", ["pourcentVoiture", "pourcentCommun", "pourcentVelo", "pourcentPied"], ["#d4584e", "", "", ""]);
}

function makeDataviz3 () {
    // Dataviz#3
    // même format que datavi#2 mais avec les pourcentages d'utilisation de ce trajet pour chaque motif

    // TO-DO (Tudal) : remplacer les valeurs des items "books" par tes data.mod adéquats ;)
    var varBarChartByMotif = [{year: 2006, books: 64},
      {year: 2007, books: 53},
      {year: 2008, books: 51}];

    drawChart(varBarChartByMotif, "#bar-demo-3", ["pourcentTravail", "pourcentEtude", "pourcentAutres"], ["#d4584e", "", ""]);
}
