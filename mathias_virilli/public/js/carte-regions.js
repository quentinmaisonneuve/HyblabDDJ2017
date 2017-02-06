'use strict';

const CIRCLES_FILL_COLOR = '#FFFFFF';
const CIRCLES_MOUSE_OVER_FILL_COLOR = '#888888';
const CIRCLES_MOUSE_OVER_FILL_OPACITY = 0.5;
const CIRCLES_STROKE_OPACITY = 0;
const CIRCLES_FILL_OPACITY = 0.2;


function drawCircles(json) {

    // Récupération de la carte et des cercles
    var mapSVG = document.getElementById("mapRegions").getSVGDocument().children[0];
    var circles = [];
    
    json.forEach(function(reg) {
        var newCircle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');

        Object.keys(reg).forEach(function(attr) {
            newCircle.setAttribute(attr, reg[attr]);
        });
        newCircle.setAttribute("fill", CIRCLES_FILL_COLOR);
        newCircle.setAttribute("stroke-opacity", CIRCLES_STROKE_OPACITY);
        newCircle.setAttribute("fill-opacity", CIRCLES_FILL_OPACITY);
        
        mapSVG.appendChild(newCircle);
        circles.push(newCircle);
    });
	
    // Gestion des évènements
	circles.forEach(function(circle) {
		circle.style.cursor = 'pointer';
        
        circle.addEventListener('mouseover', function(evt) {
            evt.target.setAttribute('fill', CIRCLES_MOUSE_OVER_FILL_COLOR);
            evt.target.setAttribute('fill-opacity', CIRCLES_MOUSE_OVER_FILL_OPACITY);
        });
        
        circle.addEventListener('mouseout', function(evt) {
            evt.target.setAttribute('fill', CIRCLES_FILL_COLOR);
            evt.target.setAttribute('fill-opacity', CIRCLES_FILL_OPACITY);
        });
        
		circle.addEventListener('click', function(evt) {
			$(this).moveTo(evt.target.id);
		});
	});
}



// Récupération des données depuis le fichier JSON
fetch('data/regions.json')
    .then(function(response) {
        if(response.ok) {
            return response.json();
        } else {
            return {data: "JSON file not found"};
        }
    })
    .catch(function(error) {
        return {data: "Invalid JSON"};
    })
    .then(drawCircles);
