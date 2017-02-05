'use strict';

const LONGUEUR_MAX = 30000;
const OBJETS = ["immigration", "terrorisme", "trafic", "zone de conflit", "inégalités"]

var walls;
d3.json("data/walls.json", function(error, data) {
    walls = data;
});

// Mike Bostock "margin conventions"
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// D3 scales = just math
// x is a function that transforms from "domain" (data) into "range" (usual pixels)
// domain gets set after the data loads
var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);


// D3 Axis - renders a d3 scale in SVG
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");
    
var line = d3.svg.line()
    .x(function(d) { return x(d.annee); })
    .y(function(d) { return y(d.longueur); });

// create an SVG element (appended to body)
// set size
// add a "g" element (think "group")
// annoying d3 gotcha - the 'svg' variable here is a 'g' element
// the final line sets the transform on <g>, not on <svg>
var svg = d3.select("#graphique-mur").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")

svg.append("g")
    .attr("class", "y axis")
  .append("text") // just for the title (ticks are automatic)
    //.attr("transform", "rotate(-90)") // rotate the text!
    .attr("x", 140)
    .attr("y", -9)
    //.attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Longueur cumulée des murs (km)");
    
// Add the line path.
svg.append("path")
    .attr("class", "line");

window.onload = function() {
    updateAnnee(sliderValue);
}

var ulObjets = document.getElementById("objets-separations");
OBJETS.forEach(function(obj) {
    var li = document.createElement("li");
    li.id = "obj-" + obj.split(" ").join("-");
    ulObjets.append(li);
});




// Met à jour la page en fonction de l'année indiquée par le slider
function updateAnnee(val) {
    document.getElementById("affichage-annee").innerHTML = val;
    
    var displayData = generateDisplayData();
    draw(displayData.longueurs);
    
    OBJETS.forEach(function(obj) {
        var objFormatted = obj.split(" ").join("-");
        var li = document.getElementById("obj-" + objFormatted);
        li.innerHTML = '<span class="value">' + displayData.objets[obj] + '</span><img class="icone-objet-separation" src="img/icone-' + objFormatted + '.svg"/><span class="name">' + obj + '</span>';
    });
}

// Traite les données du JSON pour générer les données à afficher
function generateDisplayData() {

    var annee = sliderValue;
    
    var displayData = {'longueurs': [], 'objets': {}};
    OBJETS.forEach(function(obj) {
        displayData.objets[obj] = 0;
    });
    
    for(var y = YEAR_BEGIN ; y <= YEAR_END ; y++) {
        displayData.longueurs.push({'annee': y, 'longueur': 0});
    }

    // Génération des données à afficher
    walls.forEach(function(d) {
	  
        if(d['Date annonce'] !== "" && d['Longueur (km)'] !== "" && d['Date annonce'] <= annee) {
	        
            displayData.longueurs.forEach(function(elem) {
                if(elem.annee >= d['Date annonce'] && elem.annee <= annee) {
                    elem.longueur += d['Longueur (km)'];
                }
            });
            
            OBJETS.forEach(function(obj) {
                if(d[obj] !== "") {
                    displayData.objets[obj]++;
                }
            });
        }
    });

    return displayData;
}

function draw(data) {

    var annee = sliderValue;

    // measure the domain
    // now the scales are finished and usable
    x.domain(data.map(function(d) { if(d.annee <= annee) return d.annee; }));
    y.domain([0, LONGUEUR_MAX]);
    
    xAxis.tickValues(x.domain().filter(function(d, i) { return !(i % 4); }));

    // Select the section we want to apply our changes to
    var svg = d3.select("#graphique-mur");

    // Make the changes
    svg.select(".line")   // change the line
        .attr("d", line(data));
    svg.select(".x.axis") // change the x axis
        .call(xAxis);
    svg.select(".y.axis") // change the y axis
        .call(yAxis);
}
