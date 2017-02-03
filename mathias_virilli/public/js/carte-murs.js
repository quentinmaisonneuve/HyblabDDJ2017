var width = 960,
    height = 480;

var svgCarte = d3.select("#carte-murs").append("svg")
    .attr("width", width)
    .attr("height", height);

var projection = d3.geo.equirectangular()
    .scale(153)
    .translate([width / 2, height / 2])
    .precision(.1);

var path = d3.geo.path()
    .projection(projection);
    
var tooltip = d3.select("#carte-murs").append("div")
    					.attr("class","tooltip") 
    					.attr("opacity",0.0); 
 
           
d3.json("data/murs.json", function(error, json) {
	if (error) throw error;

	window.sites_data=json.features;
		
});
var display= function(data){

  
   svgCarte.selectAll("path")
		.data(data)
	   .exit()
		.remove();
		
	 svgCarte.selectAll("path")
		.data(window.sites_data)
	   .exit()
		.remove();
		
	svgCarte.selectAll("a")
		.data(data)
	   .enter()
		.append("path")
		.attr("class","arc")
		.attr("d", path)
		.on("mouseover",MouseOverFunction)
		.on("mouseout",MouseOutFunction)
		.transition().duration(200);
	

};

function MouseOverFunction(d,i) {
	d3.select(this).style(
		"stroke", "orange"
		
	).style(
		"stroke-width", "5px"
		
	);


     tooltip.html("hi world")
     					.style("left",(d3.event.pageX)+"px")
    					.style("top",(d3.event.pageY+20)+"px")
    					.style("opacity",1.0);
}


function MouseOutFunction(d,i) {
	d3.select(this).style(
		"stroke", "red"
		
	).style(
		"stroke-width", "1.5px"
		
	);
	tooltip.style("opacity",0.0);
	
	
}




d3.json("data/world-110m.json", function(error, topology) {
    if (error) throw error;

    svgCarte.append("path")
      .datum(topojson.feature(topology, topology.objects.land))
      .attr("d", path)
      .attr("class", "land-boundary");

});

var minDateUnix = 1989;
var maxDateUnix = 2018;
var secondsInDay = 1;
var newData;
d3.select('#slider3').call(d3.slider()
  .axis(true).min(minDateUnix).max(maxDateUnix).step(secondsInDay)
  .on("slide", function(evt, value) {
     newData = _(sites_data).filter(function(site) {
 
    	
      return site.properties.debut <= value;

    });	 
    display(newData);
  
  })
);
