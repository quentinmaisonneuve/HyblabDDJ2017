	'use strict';

window.onload = function init (){
	
	
	
	
		$("#BateauRougeGrosJ1").fadeOut("slow");
		$("#BateauRougePetitJ1").fadeOut("slow");
		$("#BateauBleuClairJ1").fadeOut("slow");
		$("#BateauRoseJ1").fadeOut("slow");
		$("#BateauBleuFonceJ1").fadeOut("slow");
		$("#BateauNoirJ1").fadeOut("slow");
		
		
		$("#HomardJ2-1").fadeIn("slow");
		$("#HomardJ2-2").fadeIn("slow");
		$("#HomardJ2-3").fadeOut("slow");
		$("#HomardJ2-4").fadeOut("slow");
		
		$("#MerluJ2-1").fadeIn("slow");
		$("#MerluJ2-2").fadeIn("slow");
		$("#MerluJ2-3").fadeOut("slow");
		$("#MerluJ2-4").fadeOut("slow");
		
		$("#SoleJ2-1").fadeIn("slow");
		$("#SoleJ2-2").fadeIn("slow");
		$("#SoleJ2-3").fadeOut("slow");
		$("#SoleJ2-4").fadeOut("slow");
		
		document.getElementById("Budget").value = 200000-document.getElementById("barreJ4-1").value*80000+document.getElementById("barreJ4-2").value*50000;
	}