	'use strict';

$("#Macération").click(function(e){
	$(".ScientifiqueJ3-1").fadeIn("slow");
	$(".ScientifiqueJ3-2").fadeOut("slow");
	$(".ScientifiqueJ3-3").fadeOut("slow");
	$(".ScientifiqueJ3-4").fadeOut("slow");

	$(".DataJ3-1").fadeIn("slow");
	$(".DataJ3-2").fadeOut("slow");
	$(".DataJ3-3").fadeOut("slow");
	$(".DataJ3-4").fadeOut("slow");
});

$("#Ultrasons").click(function(e){
	$(".ScientifiqueJ3-1").fadeOut("slow");
	$(".ScientifiqueJ3-2").fadeIn("slow");
	$(".ScientifiqueJ3-3").fadeOut("slow");
	$(".ScientifiqueJ3-4").fadeOut("slow");

	$(".DataJ3-1").fadeOut("slow");
	$(".DataJ3-2").fadeIn("slow");
	$(".DataJ3-3").fadeOut("slow");
	$(".DataJ3-4").fadeOut("slow");
});

$("#Enzymes").click(function(e){
	$(".ScientifiqueJ3-1").fadeOut("slow");
	$(".ScientifiqueJ3-2").fadeOut("slow");
	$(".ScientifiqueJ3-3").fadeIn("slow");
	$(".ScientifiqueJ3-4").fadeOut("slow");

	$(".DataJ3-1").fadeOut("slow");
	$(".DataJ3-2").fadeOut("slow");
	$(".DataJ3-3").fadeIn("slow");
	$(".DataJ3-4").fadeOut("slow");
});

$("#Ultrasons_Enzymes").click(function(e){
	$(".ScientifiqueJ3-1").fadeOut("slow");
	$(".ScientifiqueJ3-2").fadeOut("slow");
	$(".ScientifiqueJ3-3").fadeOut("slow");
	$(".ScientifiqueJ3-4").fadeIn("slow");

	$(".DataJ3-1").fadeOut("slow");
	$(".DataJ3-2").fadeOut("slow");
	$(".DataJ3-3").fadeOut("slow");
	$(".DataJ3-4").fadeIn("slow");
});