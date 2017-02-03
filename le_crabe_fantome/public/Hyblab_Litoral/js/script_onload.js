	'use strict';

window.onload = function init (){
	
	
	
	
		$(".BateauG1").fadeOut("slow");
		$(".BateauP1").fadeOut("slow");
		$(".BateauM1").fadeOut("slow");
		$(".BateauM2").fadeOut("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauG2").fadeOut("slow");
		
		
		$(".Homard1").fadeIn("slow");
		$(".Homard2").fadeOut("slow");
		$(".Homard3").fadeIn("slow");
		$(".Homard4").fadeOut("slow");
		
		$(".Merlu1").fadeIn("slow");
		$(".Merlu2").fadeOut("slow");
		$(".Merlu3").fadeIn("slow");
		$(".Merlu4").fadeOut("slow");
		
		$(".Sole1").fadeIn("slow");
		$(".Sole2").fadeOut("slow");
		$(".Sole3").fadeOut("slow");
		$(".Sole4").fadeIn("slow");
		
		document.getElementById("Budget").value = 200000-document.getElementById("barreJ4-1").value*80000+document.getElementById("barreJ4-2").value*50000;
	}