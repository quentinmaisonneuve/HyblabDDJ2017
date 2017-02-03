var dataCreate = dataCreateYear('2013');
var dataUpdate = dataUpdateYear('2013');

$(function(){
	$('#radios').radiosToSlider();
	$('#radios').radiosToSlider({
	  animation: true,
  	});

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
				high: 20000,
				ticks: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000]
			}
		});
	});
});

setTimeout(function(){
	
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
			high: 20000,
			ticks: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000]
		}
	});
}, 2000);


/*stroke:#002BE5 +clair
  stroke:#000044*/
