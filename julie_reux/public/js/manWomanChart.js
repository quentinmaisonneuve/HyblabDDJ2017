var man = 44;
var woman = 5;
var manPercent = Math.round(man / (man+woman) * 100);
var womanPercent = 100-manPercent;
var manTooltipText = "<img src=\"images/circleMan.png\" width=\"16px\"/> &nbsp&nbsp <b>homme : ".concat(manPercent).concat(" %</b>");
var womanTooltipText = "<img src=\"images/circleWoman.png\" width=\"16px\"/> &nbsp&nbsp <b>femme : ".concat(womanPercent).concat(" %</b>");
var figureWidth = "8%"; //change this percentage to have more or less figure per row

for (i = 0; i < man; i++) { 
	var elem = document.createElement("img");
	elem.src = 'images/man.png';
	elem.className += " manIMG";
	elem.title = manTooltipText;
	
	document.getElementById("chartManWoman").appendChild(elem);
}
 var br = document.createElement("br");
 document.getElementById("chartManWoman").appendChild(br);
for (i = 0; i < woman; i++) { 
	var elem = document.createElement("img");
	elem.src = 'images/woman.png';
	elem.className += " womanIMG";
	elem.title = womanTooltipText;
	document.getElementById("chartManWoman").appendChild(elem);
}

$("#manTD" )
  .hover(function() {
	$('.womanIMG').css({ opacity: 0.5 });
  }, function() {
	$('.womanIMG').css({ opacity: 1 });
  })
$("#womanTD" )
  .hover(function() {	
	$('.manIMG').css({ opacity: 0.5 });
  }, function() {
	$('.manIMG').css({ opacity: 1 });
  })
  
  
$(document).ready(function(){
	$('.manIMG').tooltip({ html : true });   
});
$(document).ready(function(){
	$('.womanIMG').tooltip({ html : true });   
});

$(".manIMG").width(figureWidth);
$(".womanIMG").width(figureWidth);