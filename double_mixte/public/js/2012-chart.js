"use strict";
// Ask server to load data from Nantes opendata and send it to us
// then we add some of this data into our app
console.log( "loading data from server..." );
/*d3.json('data/2012-data.json', function(error,data) {
	alert(data.keys(0));
	console.log( "test..." );
});*/
$(window).resize(drawStackedBarChart);
function vwTOpx(value) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;
 
  var result = (x*value)/100;
  return(result);
}
function vhTOpx(value) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
 
  var result = (y*value)/100;
  return(result);
}
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
		chart = c3.generate({
			bindto: '#stackedbarchart',
			size: {
				width: vwTOpx(30),
				height: vhTOpx(30)
			},
			color: {
				pattern: ['#c63442','#aa7809','#f43f00','#f43f00','#443308','#89590b','#89590b','#dd9014','#66D18F','#708090','#000000','#F5F594','#66A69C','#DAA520','#8A2BE2', '#1f77b4', '#aec7e8', '#ff7f0e']
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
				type: 'bar',
				groups: [
					jsonObject.elements
				],
				selection: {
					enabled: false
				},
				order: null   // stack order by data definition.
			},
			axis: {
				rotated: true,
	
				x: {
					type: 'category',
					categories: jsonObject.annees,
					label: {
			
						//text: 'Années',
						position: 'outer-center'
						// inner-right : default
						// inner-center
						// inner-left
						// outer-right
						// outer-center
						// outer-left
						}
				},
				y: {
					show:false
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
					if(d[0].value==0) 
						return "";
					else
					return "<div class='stackedbartooltip' style='border-color:"+color(d[0])+"'><font color='"+color(d[0])+"'>" + d[0].value +"</font></div>";
						}
				
			},
		legend: {
			show:false
           },
		zoom: {
			enabled: false
		}
		});
d3.select('.containerstacked2').html("");
   d3.select('.containerstacked2').selectAll('div').insert('div', '.chart').attr('class', 'legend')
  .data(jsonObject.elements)
  .enter().append('div')
  .attr('id', 'legendline').attr('style','text-align: center')
  .html(function(id) {
	  var img;
	  if(id=="Eléphant")
	  {img="img/billetterie/elephant.svg";}
	  else if(id=="Galerie")
	  {img="img/billetterie/galerie.svg";}
		else if(id=="Caroussel")
		{img="img/billetterie/caroussel.svg";}
		else{ img="img/test.png";}
	 return '<div class="legend-machines"><div class="legend-image"><img class="machine" src="'+img+'" style="(vertical-align: middle;text-align:center)" alt="Smiley face"  width="100%" height="100%"/></div></div><br/><div class="legend-label">'+id+'</div>';
  })
  .each(function(id) {
    //d3.select(this).append('span').style
    d3.select(this).select('span').style('background-color', 'red');
	d3.select(this).select('.legend-machines').style('background-color', chart.color(id));
	d3.select(this).select('.legend-machines').style('border', 'solid 0.3vh #000');
	d3.select(this).select('.legend-machines').style('border-radius', '50%');
	d3.select(this).select('.legend-machines').style('display','inline-block');
	d3.select(this).select('.legend-machines').style('position','relative');
	d3.select(this).select('.legend-machines').style('width','2.5vw');
	d3.select(this).select('.legend-machines').style('height','2.5vw');
	d3.select(this).select('.legend-machines').style('vertical-align','middle');
	d3.select(this).select('.legend-machines').style('text-align','center');
    d3.select(this).select('.legend-machines').style('opacity','0.8');
	d3.select(this).select('.legend-image').style('width','1.9vw');
	d3.select(this).select('.legend-image').style('height','1.9vw');
	d3.select(this).select('.legend-image').style('vertical-align','middle');
	d3.select(this).select('.legend-image').style('text-align','center');
	d3.select(this).select('.legend-image').style('display','inline-block');
	d3.select(this).select('.legend-image').style('position','relative');
	d3.select(this).select('.legend-label').style('font', 'normal bold 1vw "Josefin Sans", serif');
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
  setTimeout(function(){
  var $boxOne = $('.legend-machines');
    $boxOne.addClass('vibrateanimate');
  },800);
	
}