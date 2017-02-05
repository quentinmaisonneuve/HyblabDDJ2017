"use strict";
// Ask server to load data from Nantes opendata and send it to us
// then we add some of this data into our app
console.log( "loading data from server..." );
/*d3.json('data/2012-data.json', function(error,data) {
	alert(data.keys(0));
	console.log( "test..." );
});*/
var legend1=1,legend2=1,legend3=1;
var sizeimage='3vw';
var sizecadreimage='3.2vw';
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
	d3.select('#stackedbarchart').html("");
		chart = c3.generate({
			bindto: '#stackedbarchart',
			size: {
				width: vwTOpx(38),
				height: vhTOpx(25)
			},
			color: {
				pattern: ['#f43f00','#001526','#dd0707','#c63442','#aa7809','#f43f00','#f43f00','#443308','#89590b','#89590b','#dd9014','#66D18F','#708090','#000000','#F5F594','#66A69C','#DAA520','#8A2BE2', '#1f77b4', '#aec7e8', '#ff7f0e']
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
  .attr('id', 'legendline').attr('style','text-align: center').append('div').attr('id','legend-machines')
  .html(function(id) {
	  var img;
	  if(id=="Eléphant")
	  {img='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="'+sizeimage+'" height="'+sizeimage+'" viewBox="235.5 230 160 139.5" enable-background="new 235.5 230 160 139.5" xml:space="preserve"> <path fill="#ffffff" d="M380.752,344.003c-2.312,0-4.194-1.882-4.194-4.194v-62.846c0-8.354-6.653-15.18-14.939-15.468 c0.441,2.19,0.675,4.454,0.675,6.772c0,1.238-1.003,2.241-2.241,2.241c-1.235,0-2.238-1.003-2.238-2.241 c0-8.106-3.259-15.465-8.53-20.841c-1.266-1.605-7.153-5.528-8.829-6.169c0.04,0,0.079,0,0.119,0.003 c-3.813-1.778-8.063-2.772-12.542-2.772c-16.42,0-29.779,13.359-29.779,29.78c0,4.007,0.797,7.828,2.238,11.318 c1.408,3.952,3.7,7.336,6.574,9.804c0,0.003,0.003,0.006,0.003,0.009c5.387,5.344,12.797,8.65,20.964,8.65 c1.238,0,2.241,1.001,2.241,2.239c0,1.237-1.003,2.237-2.241,2.237c-18.283,0-33.267-14.396-34.211-32.447h-17.132 c-9.784,0-18.251,5.743-22.206,14.035c-7.551,1.95-12.983,8.781-12.983,16.799v21.94c0,2.014,1.639,3.653,3.651,3.653 c2.016,0,3.658-1.64,3.658-3.653v-21.94c0-2.908,1.26-5.596,3.32-7.456c-0.02,0.398-0.028,0.804-0.028,1.207v66.351h25.326V338.56 c0-0.706,0.336-1.374,0.901-1.795c0.565-0.423,1.3-0.554,1.979-0.353c6.537,1.944,13.498,2.931,20.688,2.931 c5.907,0,11.706-0.673,17.234-2.004c0.667-0.158,1.371-0.005,1.908,0.421c0.54,0.424,0.854,1.072,0.854,1.758v21.496h25.326v-40.539 c-6.636-2.933-11.28-9.575-11.28-17.285v-2.258c0-1.237,1.001-2.238,2.239-2.238s2.238,1.001,2.238,2.238v2.258 c0,7.948,6.467,14.414,14.417,14.414c3.795,0,7.365,1.478,10.05,4.163s4.163,6.254,4.163,10.05v11.824 c0,4.839,3.937,8.779,8.775,8.779h11.842v-8.417H380.752z M364.968,295.757h-6.447c-1.235,0-2.238-1.003-2.238-2.238 c0-1.237,1.003-2.241,2.238-2.241h6.447c1.238,0,2.241,1.004,2.241,2.241C367.209,294.754,366.206,295.757,364.968,295.757z"/> </svg>';}
	  else if(id=="Galerie")
	  {img='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="'+sizeimage+'" height="'+sizeimage+'" viewBox="251.167 236.5 126.667 125" enable-background="new 251.167 236.5 126.667 125" xml:space="preserve"><path fill="#ffffff" d="M327.679,269.162l-8.396,27.485c0.562,0.867,1.148,1.71,1.71,2.502l12.352-22.817 C331.583,273.831,329.72,271.355,327.679,269.162z"/><path fill="#ffffff" d="M315.148,290.418v0.052c0.818,1.174,1.607,2.323,2.297,3.396l8.218-26.771c-2.271-2.119-4.722-3.957-7.478-5.207 L315.148,290.418z"/><path fill="#ffffff" d="M293.712,267.349l12.327,27.718c0.229-0.539,0.409-1.072,0.56-1.61c0.026-0.127,0.078-0.206,0.128-0.356v-0.054 l-5.104-31.796h-0.027C298.331,262.551,295.779,264.72,293.712,267.349z"/><path fill="#ffffff" d="M287.025,280.492l14.956,21.641c1.021-1.251,1.914-2.576,2.653-3.957L292.002,269.8 C289.909,273.09,288.353,276.867,287.025,280.492z"/><path fill="#ffffff" d="M253.862,301.652c0,6.911,5.605,13.546,12.55,13.546c15.339,0,19.722-1.859,28.116-7.135l-21.306-17.854 c-5.021,1.029-3.101,0-6.81,0C259.467,290.21,253.862,294.764,253.862,301.652z"/><g><g><path fill="#ffffff" d="M304.098,260.51l4.313,27.001c0.051-0.129,0.077-0.23,0.128-0.333c0.434-1.25,0.867-2.398,1.276-3.317 c0.024-0.05,0.051-0.127,0.076-0.178c0.384,0.331,0.767,0.766,1.201,1.249c0.587,0.665,1.199,1.48,1.836,2.349l2.808-26.337 c-1.454-0.46-3.01-0.765-4.644-0.893c-0.409-0.051-0.843-0.077-1.276-0.103c-0.256-0.025-0.511-0.025-0.791-0.025 c-0.179,0-0.332,0-0.485,0.025C306.932,259.948,305.452,260.152,304.098,260.51z"/></g></g><g><g><path fill="#ffffff" d="M322.626,301.47c0.153,0.205,0.332,0.435,0.485,0.639c0.255,0.357,0.511,0.688,0.816,1.02 c0.255,0.356,0.536,0.715,0.842,1.047l15.746-16.511l0.281-0.308c-0.688-0.944-1.429-2.016-2.247-3.24 c-0.229-0.358-0.484-0.741-0.74-1.123c-0.203-0.307-0.407-0.612-0.612-0.92c-0.051-0.074-0.077-0.127-0.127-0.203 c-0.689-1.046-1.378-2.094-2.093-3.165l-10.769,19.879l-0.971,1.791L322.626,301.47z"/></g></g><g><g><path fill="#ffffff" d="M275.388,289.193l2.68,2.248l18.629,15.694c0.052-0.028,0.128-0.078,0.18-0.128c0.356-0.254,0.688-0.538,1.02-0.793 c0.332-0.278,0.664-0.56,0.97-0.842c0.484-0.408,0.944-0.843,1.377-1.276l-14.316-20.67l-1.429-2.066l-3.649,3.139l-1.939,1.658 L275.388,289.193z"/><path fill="#ffffff" d="M296.697,307.136l1.047,0.865l-0.867-0.993C296.826,307.058,296.749,307.107,296.697,307.136z"/></g></g><path fill="#ffffff" d="M326.479,306.063c5.667,5.895,13.093,9.493,27.894,10.286l1.48,2.498l1.199-2.399l0.715-1.399l-0.05-0.104l0.102-0.025 l-0.052,0.13l0.868,1.452l1.404,2.347l1.174-2.322l0.765-1.505l-0.051-0.076h0.076l-0.025,0.076l0.791,1.354l1.455,2.473 l1.761-3.521c3.829-1.839,6.458-5.767,6.458-10.286c0-6.352-5.13-11.484-11.484-11.484c-0.46,0-0.918,0-1.354,0.029l-4.235-7.837 l-2.807,8.04c-4.772,0.178-6.84-0.232-10.208-4.365L326.479,306.063z"/></svg>';}
		else if(id=="Caroussel")
		{img='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="'+sizeimage+'" height="'+sizeimage+'" viewBox="251.167 236.5 126.667 125" enable-background="new 251.167 236.5 126.667 125" xml:space="preserve"><g><polyline points="283.279,264.867 283.283,264.865 283.285,264.865 	"/><path d="M350.535,353.217c-8.222,2.061-20.763,3.361-34.804,3.361c-13.908,0-26.342-1.277-34.564-3.295l0.425-15.594 c9.498,0.756,20.536,1.195,32.333,1.232c0.638,0.016,1.275,0.016,1.925,0.016c0.638,0,1.275,0,1.913-0.016 c11.757-0.037,22.742-0.477,32.213-1.221L350.535,353.217z"/><path d="M317.763,289.654v45.613c-0.638,0.012-1.275,0.012-1.913,0.012c-0.65,0-1.288,0-1.925-0.012v-45.613 c0.691-0.012,1.382-0.012,2.072-0.012C316.595,289.643,317.179,289.643,317.763,289.654z"/><g><g><g><g><path d="M306.084,311.426c0,1.623-1.54,3.068-3.943,4.016c-2.405-0.947-3.944-2.393-3.944-4.016 c0-1.625,1.539-3.072,3.944-4.016C304.544,308.354,306.084,309.801,306.084,311.426z"/></g></g><path d="M299.56,315.955c-1.495,0.395-3.204,0.615-5.021,0.615c-3.98,0-7.444-1.074-9.24-2.662l-5.094,5.09v-15.145l5.094,5.09 c1.337-1.184,3.6-2.08,6.311-2.467v-22.266h2.067v22.082c0.284-0.01,0.573-0.016,0.862-0.016c1.816,0,3.526,0.223,5.021,0.619 c-2.233,1.154-3.484,2.766-3.484,4.529S297.327,314.799,299.56,315.955z"/></g><g><g><g><path d="M352.492,311.426c0,1.623-1.54,3.068-3.944,4.016c-2.404-0.947-3.944-2.393-3.944-4.016 c0-1.625,1.54-3.072,3.944-4.016C350.952,308.354,352.492,309.801,352.492,311.426z"/></g></g><path d="M345.967,315.955c-1.494,0.395-3.203,0.615-5.02,0.615c-3.981,0-7.444-1.074-9.24-2.662l-5.095,5.09v-15.145l5.095,5.09 c1.338-1.184,3.6-2.08,6.311-2.467v-22.266h2.067v22.082c0.283-0.01,0.573-0.016,0.862-0.016c1.816,0,3.525,0.223,5.02,0.619 c-2.232,1.154-3.484,2.766-3.484,4.529S343.735,314.799,345.967,315.955z"/></g></g><path d="M325.787,248.093l-2.763,13.245c-0.013,0-0.026,0.013-0.04,0.013l-7.08-3.613l-7.12,3.6 c-0.041-0.013-0.08-0.026-0.12-0.039l-2.763-13.245c2.299-1.222,5.3-2.019,8.621-2.178v-4.623c0-0.73,0.584-1.329,1.328-1.329 c0.731,0,1.329,0.598,1.329,1.329v4.623C320.5,246.075,323.489,246.872,325.787,248.093z"/><path d="M365.081,270.212l-3.919,22.381c-8.169-3.412-24.455-5.789-43.398-5.924c-0.584-0.012-1.168-0.012-1.766-0.012	c-0.69,0-1.381,0-2.072,0.012c-18.837,0.16-35.017,2.525-43.12,5.953l-4.185-22.438l10.88,3.096l5.287-8.409v-0.013l15.861,5.327 l10.136-5.167l7.12-3.64l7.08,3.614l10.176,5.194l15.861-5.327l5.3,8.422L365.081,270.212z"/></g></svg>';}
		else{ img="img/test.png";}
	 //return '<div class="legend-machines"><div class="legend-image"><img class="machine" src="'+img+'" style="(vertical-align: middle;text-align:center;)" alt="Smiley face"  width="100%" height="100%"/></div></div><br/><div class="legend-label">'+id+'</div>';
	 return '<div class="legend-image">'+img+'</div><br/><div class="legend-label legend-label-'+id+'">'+id+'</div>';
  })
  .each(function(id) {
    //d3.select(this).append('span').style
    d3.select(this).selectAll('path').style('fill', chart.color(id));
	d3.select(this).selectAll('path').attr('id','path-'+id);
	d3.select(this).select('.legend-image').style('width',sizeimage);
	d3.select(this).select('.legend-image').style('height',sizeimage);
	d3.select(this).select('.legend-image').style('vertical-align','middle');
	d3.select(this).select('.legend-image').style('text-align','center');
	d3.select(this).select('.legend-image').style('display','inline-block');
	d3.select(this).select('.legend-image').style('position','relative');
	d3.select(this).select('.legend-label').style('font', 'normal bold 1vw "Josefin Sans", serif');
	d3.select(this).select('.legend-label').style('color', chart.color(id));
	legend1=1;
	legend2=1;
	legend3=1;
	//d3.select(this).select('.legend-image').style('margin', 'auto');
	//d3.select(this).select('.legend-image').style('padding', 'auto');
	
  })
  .on('mouseover', function(id) {
    chart.focus(id);
  })
  .on('mouseout', function(id) {
    chart.revert();
  })
  .on('click', function(id) {
  //$(this).toggleClass("c3-legend-item-hidden")
  var nombrezero=0;
  if(legend1==0)
	  nombrezero++;
  if(legend2==0)
	  nombrezero++;
  if(legend3==0)
	  nombrezero++;
  if(id=="Eléphant")
  {
	  if(legend1==1)
	  {
		  if(nombrezero<2){
						d3.select(this).selectAll('#path-Eléphant').style('fill', '#808080');
						d3.select(this).selectAll('.legend-label-eléphant').style('color', '#808080');
						legend1=0;
						chart.toggle(id);
						}
	  }
	  else
	  {
		  d3.select(this).selectAll('#path-Eléphant').style('fill', chart.color(id));
		  d3.select(this).selectAll('.legend-label-eléphant').style('color', chart.color(id));
		  legend1=1;
		  chart.toggle(id);
	  }
  }	
  else{
	  if(id=="Galerie")
		{
			if(legend2==1)
			{
				if(nombrezero<2){
						d3.select(this).selectAll('#path-Galerie').style('fill', '#808080');
						d3.select(this).selectAll('.legend-label-galerie').style('color', '#808080');
						legend2=0;
						chart.toggle(id);
				}
			}
			else
			{
				d3.select(this).selectAll('#path-Galerie').style('fill', chart.color(id));
				d3.select(this).selectAll('.legend-label-galerie').style('color', chart.color(id));
				legend2=1;
				chart.toggle(id);
			}
		}
		else{
			if(id=="Caroussel")
			{
				if(legend3==1 )
				{
					if(nombrezero<2){
						d3.select(this).selectAll('#path-Caroussel').style('fill', '#808080');
						d3.select(this).selectAll('.legend-label-caroussel').style('color', '#808080');
						legend3=0;
						chart.toggle(id);
					}
				}
				else
				{
					d3.select(this).selectAll('#path-Caroussel').style('fill', chart.color(id));
					d3.select(this).selectAll('.legend-label-caroussel').style('color', chart.color(id));
					legend3=1;
					chart.toggle(id);
				}
			}
		}
  }  
    
  });
	
}