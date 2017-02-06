/****** CHART LINE + CURSOR ******/

$(function(){
	// Création du curseur
	$('#radios').radiosToSlider();
	$('#radios').radiosToSlider({
	  	animation: true
  	});
	$("topCreateUl").append("<li>Here's 3</li>");
	// Actualisation de la courbe selon l'année sélectionné
  	$('#radios').on("click", function(){
  		dataCreate = dataCreateYear($( "input:checked" ).val());
  		dataUpdate = dataUpdateYear($( "input:checked" ).val());
  		var data = {
			labels: [, , , , , ],
			series: [dataCreate,
					dataUpdate]
		};
		new Chartist.Line('#chart1', data, {
			fullWidth: true,
			lineSmooth: Chartist.Interpolation.cardinal({
				tension: 0
			}),
			axisY: {
				type: Chartist.FixedScaleAxis,
				low: 0,
				high: 10000,
				ticks: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
			}
		});
		switch($("input:checked" ).val()){
			case '2013':
       			texte2013();
            break;
            case '2014':
       			texte2014();
            break;
            case '2015':
       			texte2015();
            break;
            case '2016':
       			texte2016();
            break;
            case '2017':
       			texte2017();
            break;
		}
	    $("#topFlop #topCreate ul li").each(function(i) {
	        $(this).text(classementCreationTop($("input:checked" ).val())[i]);
	    });
	    $("#topFlop #flopCreate ul li").each(function(i) {
	        $(this).text(classementCreationFlop($("input:checked" ).val())[i]);
	    });
	    $("#topFlop #topUpdate ul li").each(function(i) {
	        $(this).text(classementModificationTop($("input:checked" ).val())[i]);
	    });
	    $("#topFlop #flopUpdate ul li").each(function(i) {
	        $(this).text(classementModificationFlop($("input:checked" ).val())[i]);
	    });
	});

});

// Actualisation des textes explicatifs selon l'année sélectionné
function texte2013(){
	$('#explication2013').css('display', 'block');
	$('#explication2014').css('display', 'none');
	$('#explication2015').css('display', 'none');
	$('#explication2016').css('display', 'none');
	$('#explication2017').css('display', 'none');
}
function texte2014(){
	$('#explication2013').css('display', 'none');
	$('#explication2014').css('display', 'block');
	$('#explication2015').css('display', 'none');
	$('#explication2016').css('display', 'none');
	$('#explication2017').css('display', 'none');
}
function texte2015(){
	$('#explication2013').css('display', 'none');
	$('#explication2014').css('display', 'none');
	$('#explication2015').css('display', 'block');
	$('#explication2016').css('display', 'none');
	$('#explication2017').css('display', 'none');
}
function texte2016(){
	$('#explication2013').css('display', 'none');
	$('#explication2014').css('display', 'none');
	$('#explication2015').css('display', 'none');
	$('#explication2016').css('display', 'block');
	$('#explication2017').css('display', 'none');
}
function texte2017(){
	$('#explication2013').css('display', 'none');
	$('#explication2014').css('display', 'none');
	$('#explication2015').css('display', 'none');
	$('#explication2016').css('display', 'none');
	$('#explication2017').css('display', 'block');
}

//setTimeout(function(){
	
function initDataviz1(){
	$("#topFlop #topCreate ul").append("<li></li></br><li></li></br><li></li>");
    $("#topFlop #topCreate ul li").each(function(i) {
        $(this).text(classementCreationTop('2013')[i]);
    });
    $("#topFlop #flopCreate ul").append("<li></li></br><li></li></br><li></li>");
    $("#topFlop #flopCreate ul li").each(function(i) {
    	$(this).text(classementCreationFlop('2013')[i]);
    });
    $("#topFlop #topUpdate ul").append("<li></li></br><li></li></br><li></li>");
    $("#topFlop #topUpdate ul li").each(function(i) {
        $(this).text(classementModificationTop('2013')[i]);
    });
    $("#topFlop #flopUpdate ul").append("<li></li></br><li></li></br><li></li>");
    $("#topFlop #flopUpdate ul li").each(function(i) {
        $(this).text(classementModificationFlop('2013')[i]);
    });
	$("#2013").prop("checked", true);
	var data = {
		labels: [, , , , , ],
		series: [dataCreateYear('2013'),
				dataUpdateYear('2013')]
	};
	new Chartist.Line('#chart1', data, {
		fullWidth: true,
		lineSmooth: Chartist.Interpolation.cardinal({
			tension: 0
		}),
		axisY: {
			type: Chartist.FixedScaleAxis,
			low: 0,
			high: 10000,
			ticks: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
		}
	});
}
//}, 2000);

/* ANIMATION MAN */

