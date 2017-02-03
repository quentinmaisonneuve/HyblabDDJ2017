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
	var chart;
function toggle(id) {
    chart.toggle(id);
}
	
function drawStackedBarChart()
{
	//onReadystackedbar('#stackedbarchart', function() {
		chart = c3.generate({
			bindto: '#stackedbarchart',
			size: {
				width: 400,
				height: 200
			},
			color: {
				pattern: ['#f43f00','#443308','#89590b','#89590b','#dd9014','#66D18F','#708090','#000000','#F5F594','#66A69C','#DAA520','#8A2BE2', '#1f77b4', '#aec7e8', '#ff7f0e']
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
			/*title: {
				text: "Billeterie des Machines"
			},*/
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
					return "<div class='stackedbartooltip' border='3' style='border-color:"+color(d[0])+"'><font color='"+color(d[0])+"'>" + d[0].value +"</font></div>";
						//return "<font color='"+color(d[0])+"'>" + d[0].value +"</font>";
						}
				
			},
		legend: {
			position: 'right',
			show:false
			//position: 'bottom'
			//position: 'inset',
           },
		zoom: {
			enabled: false
		}
		})
		//chart.groups(jsonObject.annees);
		//chart.groups([jsonObject.elements]);
		//.insert('div', '.chart').attr('class', 'legend')
d3.select('.containerstacked').html("");
   d3.select('.containerstacked').selectAll('div').insert('div', '.chart').attr('class', 'legend')
  .data(["Eléphant", "Galerie", "Caroussel"])
  .enter().append('div')
  .attr('data-id', function(id) {
    return id;
  }).attr('style','text-align: center')
  .html(function(id) {
	  var img;
	  if(id=="Eléphant")
	  {img="img/billetterie/elephant.svg";}
	  else if(id=="Galerie")
	  {img="img/test.png";}
		else if(id=="Caroussel")
		{img="img/test.png";}
		else{ img="img/test.png";}
	 return '<div class="legend-machines"><img class="machine" src="'+img+'" style="(vertical-align: middle;margin:auto)" alt="Smiley face"  width="40px"/></div><br/><div class="legend-label">'+id+'</div>';

   // return '<span></span>'+id;
  })
  .each(function(id) {
    //d3.select(this).append('span').style
    d3.select(this).select('span').style('background-color', 'red');
	d3.select(this).select('.legend-machines').style('background-color', chart.color(id));
	d3.select(this).select('.legend-machines').style('border-radius', '50%');
	d3.select(this).select('.legend-machines').style('display','inline-block');
	d3.select(this).select('.legend-machines').style('position','relative');
	d3.select(this).select('.legend-machines').style('width','40px');
	d3.select(this).select('.legend-machines').style('height','40px');
	d3.select(this).select('.legend-machines').style('vertical-align','middle');
	d3.select(this).select('.legend-machines').style('text-align','center');
	d3.select(this).select('.legend-label').style('font', 'italic bold 15px Georgia, serif');
	d3.select(this).select('.legend-label').style('color', chart.color(id));
	d3.select(this).select('#machine').style('margin', 'auto');


	
  })
  .on('mouseover', function(id) {
    chart.focus(id);
  })
  .on('mouseout', function(id) {
    chart.revert();
  })
  .on('click', function(id) {
  $(this).toggleClass("c3-legend-item-hidden")
    chart.toggle(id);
  });

		
	
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
