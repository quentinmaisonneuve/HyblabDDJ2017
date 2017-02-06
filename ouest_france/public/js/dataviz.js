// charset: utf-8
'use strict';


// JS for dataviz

// données 
// trajet
var depart;
var arrivee;

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

// mode de transport
modeDeTransport = document.getElementById("car").src; // chemin vers l'image (parmi ["img/Voiture.svg","img/Bus-Transport-en-commun.svg","img/Velo.svg","img/Pieton.svg"])
// s = s.split('/'); modeDeTransport = s[s.length - 1].split('.')[0]; // string parmi ["Voiture", "Bus-Transport-en-commun", "Velo", "Pieton"]

// Dataviz#1
pourcentage=80; // pourcentage = nb de personnes utilisant ce même trajet
pourcentage_arrondi = 80; //=round(pourcentage);
pourcentage_img = "img/p" + pourcentage_arrondi + ".svg"
document.getElementById("people").src=pourcentage_img;//dataviz_1_img.src=pourcentage_img;
document.getElementById("number").firstChild.nodeValue=pourcentage_arrondi;//dataviz_1_value=pourcentage_arrondi;

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
varBarChartByModeDeTransport = undefined;

// draw BarChart in dedicated slot in #scenario2

// Dataviz#3
// même format que datavi#2 mais avec les pourcentages d'utilisation de ce trajet pour chaque motif
varBarChartByMotif = undefined;

// draw BarChart in dedicated slot in #scenario3

