/****** CHART LINE + CURSOR ******/

$(function(){
	// Création du curseur
	$('#radios').radiosToSlider();
	$('#radios').radiosToSlider({
	  	animation: true
  	});

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
		switch($( "input:checked" ).val()){
			case '2013':
       			texte2013();
       			reset();
       			anime2013();
            break;
            case '2014':
       			texte2014();
       			reset();
       			anime2014();
            break;
            case '2015':
       			texte2015();
       			reset();
       			anime2015();
            break;
            case '2016':
       			texte2016();
       			reset();
       			anime2016();
            break;
            case '2017':
       			texte2017();
       			reset();
       			anime2017();
            break;
		}

	});

});
// Animation texte
function anime2013(){
	$('p:nth-child(1)').transition({opacity:1},2000);
	$('p:nth-child(2)').transition({opacity:1,delay:1500},2000);
	$('p:nth-child(3)').transition({opacity:1,delay:3000},2000);
}
function anime2014(){
	$('p:nth-child(1)').transition({opacity:1},2000);
	$('p:nth-child(2)').transition({opacity:1,delay:1500},2000);
	$('p:nth-child(3)').transition({opacity:1,delay:3000},2000);
}
function anime2015(){
	$('p:nth-child(1)').transition({opacity:1},2000);
	$('p:nth-child(2)').transition({opacity:1,delay:1500},2000);
	$('p:nth-child(3)').transition({opacity:1,delay:3000},2000);
}
function anime2016(){
	$('p:nth-child(1)').transition({opacity:1},2000);
	$('p:nth-child(2)').transition({opacity:1,delay:1500},2000);
	$('p:nth-child(3)').transition({opacity:1,delay:3000},2000);
}
function anime2017(){
	$('p:nth-child(1)').transition({opacity:1},2000);
	$('p:nth-child(2)').transition({opacity:1,delay:1500},2000);
	$('p:nth-child(3)').transition({opacity:1,delay:3000},2000);
}
// Remise à zéro
function reset(){
	$('p:nth-child(1)').transition({opacity:0});
	$('p:nth-child(2)').transition({opacity:0});
	$('p:nth-child(3)').transition({opacity:0});
}

/*function stopAnime(){
	stop true true
	$('explicationAnnee').
}*/

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

setTimeout(function(){
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
}, 2000);

/* ANIMATION MAN */

