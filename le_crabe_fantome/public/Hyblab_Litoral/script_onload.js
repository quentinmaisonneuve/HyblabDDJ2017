	'use strict';

window.onload = function init (){
		$("#BateauRougeGrosJ1").fadeOut("slow");
		$("#BateauRougePetitJ1").fadeOut("slow");
		$("#BateauBleuClairJ1").fadeOut("slow");
		$("#BateauRoseJ1").fadeOut("slow");
		$("#BateauBleuFonceJ1").fadeOut("slow");
		$("#BateauNoirJ1").fadeOut("slow");
		
		
		$("#MerluJ1-1").fadeIn("slow");
		$("#MerluJ1-2").fadeIn("slow");
		$("#MerluJ1-3").fadeIn("slow");
		$("#ColinJ1-1").fadeIn("slow");
		$("#ColinJ1-2").fadeIn("slow");
		$("#HomardJ1-1").fadeIn("slow");
		$("#HomardJ1-2").fadeIn("slow");
		$("#HomardJ1-3").fadeIn("slow");
		$("#PoissonJ1-1").fadeIn("slow");
		$("#PoissonJ1-2").fadeIn("slow");
		
		document.getElementById("Budget").value = 200000-document.getElementById("barreJ4-1").value*80000+document.getElementById("barreJ4-2").value*50000;
	}