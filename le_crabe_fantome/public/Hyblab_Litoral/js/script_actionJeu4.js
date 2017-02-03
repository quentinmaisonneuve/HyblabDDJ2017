	'use strict';
	
	$("#barreJ4-1").mouseup(function(e){
		document.getElementById("Budget").value=200000-document.getElementById("barreJ4-1").value*80000+document.getElementById("barreJ4-2").value*50000;
		var echelle =200000-document.getElementById("barreJ4-1").value*80000+document.getElementById("barreJ4-2").value*50000;
		if(echelle<0){
			echelle=0;
		}
		document.getElementById("div1").style.transform = 'scale(' + echelle/200000 + ')';
		if(document.getElementById("barreJ4-1").value==1){
			$(".MaisonJ4-1").fadeIn("slow");
			$(".MaisonJ4-2").fadeOut("slow");
			$(".MaisonJ4-3").fadeOut("slow");
		}
		else if(document.getElementById("barreJ4-1").value==2){
			$(".MaisonJ4-1").fadeIn("slow");
			$(".MaisonJ4-2").fadeOut("slow");
			$(".MaisonJ4-3").fadeOut("slow");
		}
		else if(document.getElementById("barreJ4-1").value==3){
			$(".MaisonJ4-1").fadeIn("slow");
			$(".MaisonJ4-2").fadeIn("slow");
			$(".MaisonJ4-3").fadeIn("slow");
		}
		
	});
	
	$("#barreJ4-2").mouseup(function(e){
		document.getElementById("Budget").value=200000-document.getElementById("barreJ4-1").value*80000+document.getElementById("barreJ4-2").value*50000;
		var echelle =200000-document.getElementById("barreJ4-1").value*80000+document.getElementById("barreJ4-2").value*50000;
		if(echelle<0){
			echelle=0;
		}
		document.getElementById("div1").style.transform = 'scale(' + echelle/200000 + ')';
		if(document.getElementById("barreJ4-2").value==1){
			$(".DigueJ4-1").fadeIn("slow");
			$(".DigueJ4-2").fadeOut("slow");
			$(".DigueJ4-3").fadeOut("slow");
		}
		else if(document.getElementById("barreJ4-2").value==2){
			$(".DigueJ4-1").fadeIn("slow");
			$(".DigueJ4-2").fadeOut("slow");
			$(".DigueJ4-3").fadeOut("slow");
		}
		else if(document.getElementById("barreJ4-2").value==3){
			$(".DigueJ4-1").fadeIn("slow");
			$(".DigueJ4-2").fadeIn("slow");
			$(".DigueJ4-3").fadeIn("slow");
		}
	});
	
	$("#vague").click(function(e){
		var rand = Math.floor((Math.random() * 10) + 1);
		if(rand<3){
			alert("inf3");
			
		}
		if(rand>=3 && rand<=6){
			alert("3-6");
		}
		if(rand>=7){
			alert("sup6");
		}
	});

	