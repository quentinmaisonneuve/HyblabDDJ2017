	'use strict'


//zone check box

//check box famille
$("#cbtouriste").click(function(e){
	$(".Touriste1").fadeIn("slow");
	$(".Touriste2").fadeIn("slow");
	$(".Touriste3").fadeIn("slow");
	$(".Touriste4").fadeIn("slow");

	$(".Agriculteur").fadeOut("slow");
	$(".PORC").fadeOut("slow");
	//caca
	$(".Bouse1").fadeOut("slow");
	$(".Bouse2").fadeOut("slow");
	$(".Bouse3").fadeOut("slow");
	$(".Bouse4").fadeOut("slow");

	$(".Scientifique").fadeOut("slow");
	$(".LogoScientifique1").fadeOut("slow");
	$(".LogoScientifique2").fadeOut("slow");
	$(".LogoScientifique3").fadeOut("slow");
	$(".LogoScientifique4").fadeOut("slow");
	$(".LogoScientifique5").fadeOut("slow");
});

//check box agriculteur
$("#cbagriculteur").click(function(e){
	$(".Agriculteur").fadeIn("slow");
	$(".PORC").fadeIn("slow");
	//caca
	$(".Bouse1").fadeIn("slow");
	$(".Bouse2").fadeOut("slow");
	$(".Bouse3").fadeOut("slow");
	$(".Bouse4").fadeOut("slow");

	$(".Touriste1").fadeOut("slow");
	$(".Touriste2").fadeOut("slow");
	$(".Touriste3").fadeOut("slow");
	$(".Touriste4").fadeOut("slow");

	$(".Scientifique").fadeOut("slow");
	$(".LogoScientifique1").fadeOut("slow");
	$(".LogoScientifique2").fadeOut("slow");
	$(".LogoScientifique3").fadeOut("slow");
	$(".LogoScientifique4").fadeOut("slow");
	$(".LogoScientifique5").fadeOut("slow");
});

//check box scientifique
$("#cbscientifique").click(function(e){
	$(".Scientifique").fadeIn("slow");
	$(".LogoScientifique1").fadeIn("slow");
	$(".LogoScientifique2").fadeIn("slow");
	$(".LogoScientifique3").fadeIn("slow");
	$(".LogoScientifique4").fadeIn("slow");
	$(".LogoScientifique5").fadeIn("slow");

	$(".Touriste1").fadeOut("slow");
	$(".Touriste2").fadeOut("slow");
	$(".Touriste3").fadeOut("slow");
	$(".Touriste4").fadeOut("slow");

	$(".Agriculteur").fadeOut("slow");
	$(".PORC").fadeOut("slow");
	//caca
	$(".Bouse1").fadeOut("slow");
	$(".Bouse2").fadeOut("slow");
	$(".Bouse3").fadeOut("slow");
	$(".Bouse4").fadeOut("slow");
});

$("#AttaqueM").click(function(e){
	//touriste
	if(document.getElementById("cbtouriste").checked){
		$(".Monstre4").fadeOut("slow");
		$(".Monstre3").fadeIn("slow");
		$(".Touriste1").fadeOut("slow");
		$(".Touriste2").fadeOut("slow");
		$(".Touriste3").fadeOut("slow");
		$(".Touriste4").fadeOut("slow");

	}
	//agriculteur
	else if(document.getElementById("cbagriculteur").checked){
		$(".Monstre4").fadeOut("slow");
		$(".Monstre1").fadeIn("slow");
		//3 caca
		$(".Bouse2").fadeIn("slow");
		$(".Bouse3").fadeIn("slow");
		$(".Bouse4").fadeIn("slow");


	}
	//scientifique
	else if(document.getElementById("cbscientifique").checked){
		$(".Monstre4").fadeOut("slow");
		$(".Monstre1").fadeIn("slow");

		$(".Scientifique").fadeOut("slow");
		//Scientifique victoire
		//$(".Scientifique").fadeIn("slow");

	}

});
