	'use strict'
	
$("#Bouton2050").click(function(e){
	if(document.getElementById("scenar1").value==1){
		
	}
	if(document.getElementById("scenar2").value==2){
		
	}
	if(document.getElementById("scenar3").value==3){
		
	}
	if(document.getElementById("scenar4").value==4){
		
	}
});


$("#scenar1").click(function(e){
	$("#BateauRougeGrosJ1").fadeOut("slow");
	$("#BateauRougePetitJ1").fadeIn("slow");
	$("#BateauBleuClairJ1").fadeOut("slow");
	$("#BateauRoseJ1").fadeOut("slow");
	$("#BateauBleuFonceJ1").fadeIn("slow");
	$("#BateauNoirJ1").fadeOut("slow");
	
	
	

});

$("#scenar2").click(function(e){
	$("#BateauRougeGrosJ1").fadeIn("slow");
	$("#BateauRougePetitJ1").fadeOut("slow");
	$("#BateauBleuClairJ1").fadeOut("slow");
	$("#BateauRoseJ1").fadeOut("slow");
	$("#BateauBleuFonceJ1").fadeOut("slow");
	$("#BateauNoirJ1").fadeIn("slow");
});

$("#scenar3").click(function(e){
	$("#BateauRougeGrosJ1").fadeIn("slow");
	$("#BateauRougePetitJ1").fadeIn("slow");
	$("#BateauBleuClairJ1").fadeOut("slow");
	$("#BateauRoseJ1").fadeOut("slow");
	$("#BateauBleuFonceJ1").fadeIn("slow");
	$("#BateauNoirJ1").fadeIn("slow");
});

$("#scenar4").click(function(e){
	$("#BateauRougeGrosJ1").fadeIn("slow");
	$("#BateauRougePetitJ1").fadeIn("slow");
	$("#BateauBleuClairJ1").fadeIn("slow");
	$("#BateauRoseJ1").fadeIn("slow");
	$("#BateauBleuFonceJ1").fadeIn("slow");
	$("#BateauNoirJ1").fadeIn("slow");
});


/*
$("#barreJ1").mouseup(function(e){
	if (document.getElementById("barreJ1").value==0){
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
	}
	
	else if (document.getElementById("barreJ1").value==1){
		$("#BateauRougeGrosJ1").fadeOut("slow");
		$("#BateauRougePetitJ1").fadeIn("slow");
		$("#BateauBleuClairJ1").fadeOut("slow");
		$("#BateauRoseJ1").fadeOut("slow");
		$("#BateauBleuFonceJ1").fadeOut("slow");
		$("#BateauNoirJ1").fadeOut("slow");
		
		
		$("#MerluJ1-1").fadeIn("slow");
		$("#MerluJ1-2").fadeIn("slow");
		$("#MerluJ1-3").fadeIn("slow");
		$("#ColinJ1-1").fadeOut("slow");
		$("#ColinJ1-2").fadeIn("slow");
		$("#HomardJ1-1").fadeIn("slow");
		$("#HomardJ1-2").fadeIn("slow");
		$("#HomardJ1-3").fadeIn("slow");
		$("#PoissonJ1-1").fadeIn("slow");
		$("#PoissonJ1-2").fadeIn("slow");
	}
	
	else if (document.getElementById("barreJ1").value==2){
		$("#BateauRougeGrosJ1").fadeIn("slow");
		$("#BateauRougePetitJ1").fadeIn("slow");
		$("#BateauBleuClairJ1").fadeOut("slow");
		$("#BateauRoseJ1").fadeOut("slow");
		$("#BateauBleuFonceJ1").fadeOut("slow");
		$("#BateauNoirJ1").fadeOut("slow");
		
		
		$("#MerluJ1-1").fadeIn("slow");
		$("#MerluJ1-2").fadeIn("slow");
		$("#MerluJ1-3").fadeIn("slow");
		$("#ColinJ1-1").fadeOut("slow");
		$("#ColinJ1-2").fadeIn("slow");
		$("#HomardJ1-1").fadeIn("slow");
		$("#HomardJ1-2").fadeIn("slow");
		$("#HomardJ1-3").fadeIn("slow");
		$("#PoissonJ1-1").fadeOut("slow");
		$("#PoissonJ1-2").fadeIn("slow");
	}
	
	else if (document.getElementById("barreJ1").value==3){
		$("#BateauRougeGrosJ1").fadeIn("slow");
		$("#BateauRougePetitJ1").fadeIn("slow");
		$("#BateauBleuClairJ1").fadeOut("slow");
		$("#BateauRoseJ1").fadeIn("slow");
		$("#BateauBleuFonceJ1").fadeOut("slow");
		$("#BateauNoirJ1").fadeOut("slow");
		
		
		$("#MerluJ1-1").fadeOut("slow");
		$("#MerluJ1-2").fadeIn("slow");
		$("#MerluJ1-3").fadeIn("slow");
		$("#ColinJ1-1").fadeOut("slow");
		$("#ColinJ1-2").fadeIn("slow");
		$("#HomardJ1-1").fadeOut("slow");
		$("#HomardJ1-2").fadeIn("slow");
		$("#HomardJ1-3").fadeIn("slow");
		$("#PoissonJ1-1").fadeOut("slow");
		$("#PoissonJ1-2").fadeIn("slow");
	}
	
	else if (document.getElementById("barreJ1").value==4){
		$("#BateauRougeGrosJ1").fadeIn("slow");
		$("#BateauRougePetitJ1").fadeIn("slow");
		$("#BateauBleuClairJ1").fadeOut("slow");
		$("#BateauRoseJ1").fadeIn("slow");
		$("#BateauBleuFonceJ1").fadeIn("slow");
		$("#BateauNoirJ1").fadeOut("slow");
		
		
		$("#MerluJ1-1").fadeOut("slow");
		$("#MerluJ1-2").fadeOut("slow");
		$("#MerluJ1-3").fadeIn("slow");
		$("#ColinJ1-1").fadeOut("slow");
		$("#ColinJ1-2").fadeIn("slow");
		$("#HomardJ1-1").fadeOut("slow");
		$("#HomardJ1-2").fadeOut("slow");
		$("#HomardJ1-3").fadeIn("slow");
		$("#PoissonJ1-1").fadeOut("slow");
		$("#PoissonJ1-2").fadeIn("slow");
	}
	
	else if (document.getElementById("barreJ1").value==5){
		$("#BateauRougeGrosJ1").fadeIn("slow");
		$("#BateauRougePetitJ1").fadeIn("slow");
		$("#BateauBleuClairJ1").fadeOut("slow");
		$("#BateauRoseJ1").fadeIn("slow");
		$("#BateauBleuFonceJ1").fadeIn("slow");
		$("#BateauNoirJ1").fadeIn("slow");
		
		
		$("#MerluJ1-1").fadeOut("slow");
		$("#MerluJ1-2").fadeOut("slow");
		$("#MerluJ1-3").fadeOut("slow");
		$("#ColinJ1-1").fadeOut("slow");
		$("#ColinJ1-2").fadeIn("slow");
		$("#HomardJ1-1").fadeOut("slow");
		$("#HomardJ1-2").fadeOut("slow");
		$("#HomardJ1-3").fadeIn("slow");
		$("#PoissonJ1-1").fadeOut("slow");
		$("#PoissonJ1-2").fadeOut("slow");
	}
	
	else if (document.getElementById("barreJ1").value==6){
		$("#BateauRougeGrosJ1").fadeIn("slow");
		$("#BateauRougePetitJ1").fadeIn("slow");
		$("#BateauBleuClairJ1").fadeIn("slow");
		$("#BateauRoseJ1").fadeIn("slow");
		$("#BateauBleuFonceJ1").fadeIn("slow");
		$("#BateauNoirJ1").fadeIn("slow");
		
		
		$("#MerluJ1-1").fadeOut("slow");
		$("#MerluJ1-2").fadeOut("slow");
		$("#MerluJ1-3").fadeOut("slow");
		$("#ColinJ1-1").fadeOut("slow");
		$("#ColinJ1-2").fadeOut("slow");
		$("#HomardJ1-1").fadeOut("slow");
		$("#HomardJ1-2").fadeOut("slow");
		$("#HomardJ1-3").fadeOut("slow");
		$("#PoissonJ1-1").fadeOut("slow");
		$("#PoissonJ1-2").fadeOut("slow");
	}
});
*/