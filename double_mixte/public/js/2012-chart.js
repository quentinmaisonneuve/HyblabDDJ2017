"use strict";
// Ask server to load data from Nantes opendata and send it to us
// then we add some of this data into our app
console.log( "loading data from server..." );
/*d3.json('data/2012-data.json', function(error,data) {
	alert(data.keys(0));
	console.log( "test..." );
});*/
var jsonObject;
$.get("data/2012-data.json",function(data){
	jsonObject=data;
	})
	
function drawStackedBarChart()
{
	//onReadystackedbar('#stackedbarchart', function() {
		var chart = c3.generate({
			bindto: '#stackedbarchart',
			size: {
				width: 500,// document.getElementById('stackedbarchart').getAttribute("width")
				height: 200
			},
			color: {
				pattern: ['#66D18F','#708090','#000000','#F5F594','#66A69C','#DAA520','#8A2BE2', '#1f77b4', '#aec7e8', '#ff7f0e']
			},
			interaction: {
				enabled: true
			},
			transition: {
				duration: 2000
			},
			bar: {
				width: {
					ratio: 0.5
				}
			},
			title: {
				text: "Billeterie des Machines"
			},
			data: {
				json: jsonObject.machines,
			//classes: 'dataa',
				type: 'bar',
				groups: [
					jsonObject.elements
				]/*,
			colors: {
				Eléphant: '#708090',
				Galerie: '#DAA520',
				Caroussel: '#8A2BE2'}*/,
				selection: {
					enabled: false
				},
			//order: 'desc' // stack order by sum of values descendantly. this is default.
			//order: 'asc'  // stack order by sum of values ascendantly.
				order: null   // stack order by data definition.
			},
			axis: {
				rotated: true,
	
				x: {
					type: 'category',
					categories: jsonObject.annees,
					label: {
			
						//text: 'Années',
						position: 'outer-left'
						// inner-right : default
						// inner-center
						// inner-left
						// outer-right
						// outer-center
						// outer-left
						}
				},
				y: {
					//type: 'indexed',
					show:false,
						//count: 6,
					tick: {
							rotate: 50,
							format: d3.format("d"),
							multiline: false
							},
					height: 130
					}
			},
			grid: {
				y: {
					show:false
				},
				x: {
					show:false
				}
			},
			tooltip: {
				show: true,
				grouped:false,
				contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
					return "<div class='stackedbartooltip'><font color='"+color(d[0])+"'>" + d[0].value +"</font></div>";
						//return "<font color='"+color(d[0])+"'>" + d[0].value +"</font>";
						}
				
			},
		legend: {
			position: 'right'
			//position: 'bottom'
			//position: 'inset',
           },
		zoom: {
			enabled: false
		}
		});
		//chart.groups(jsonObject.annees);
		chart.groups([jsonObject.elements]);

		//});
	
}
	
	

// Set a timeout so that we can ensure that the `chart` element is created.
     /* function onReadystackedbar(selector, callback) {
        var intervalID = window.setInterval(function() {
          if (document.querySelector(selector) !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
          }
        }, 500);
      }*/
