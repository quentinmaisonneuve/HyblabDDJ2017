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
// pourcentage = nb de personnes sur le même trajet
// pourcentage_arrondi = (pourcentage)
// pourcentage_img = "img/" + pourcentage_arrondi + ".svg"
dataviz_1_img.src=pourcentage_img

//

//Dataviz#2
//pourcentages pour chaque moyen de transport : pourcentage d'utilisation
// => ça part dans le D3JS de Jinbo

// Dataviz#3
// pourcentage 


