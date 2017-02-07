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
var display= function(data1,data2){

		
	svgCarte.selectAll("path")
		.data(window.sites_data)
	   .exit()
		.remove();
		
	svgCarte.selectAll("a")
		.data(data1)
	   .enter()
		.append("path")
		.attr("class","arc")
		.attr("d", path)
		.on("mouseover",MouseOverFunction)
		.on("mouseout",MouseOutFunction)
		.transition().duration(200);

	svgCarte.selectAll("a")
		.data(data2)
	   .enter()
		.append("path")
		.attr("class","arc2")
		.attr("d", path)
		.on("mouseover",MouseOverFunction)
		.on("mouseout",MouseOutFunction)
		.transition().duration(200);    
      
   
      
};

function MouseOverFunction(d,i) {
	d3.select(this).style(
		"stroke-width", "5px"
		
	);
	tooltip.style("display","inline");

    tooltip.html(d.properties["Pays financeur"]+'<br />'+d.properties["Pays frontalier"]+'<br />'+d.properties["Longueur (km)"]+" km")
     					.style("left",(d3.event.pageX)+"px")
    					.style("top",(d3.event.pageY+20)+"px")
    					.style("opacity",1.0);
}


function MouseOutFunction(d,i) {
	d3.select(this).style(
		"stroke-width", "1.5px"
		
	);
	tooltip.style("opacity",0.0);
	tooltip.style("display","none");
	
}




d3.json("data/world-110m.json", function(error, topology) {
    if (error) throw error;

    svgCarte.append("path")
      .datum(topojson.feature(topology, topology.objects.land))
      .attr("d", path)
      .attr("class", "land-boundary");

});

const YEAR_BEGIN = 1989;
const YEAR_END = 2016;

var sliderValue = YEAR_BEGIN;
var minDateUnix = 1989;
var maxDateUnix = 2017;
var secondsInDay = 1;
var newData;
d3.select('#slider3').call(d3.slider()
  .axis(true).min(minDateUnix).max(maxDateUnix).step(secondsInDay)
  .on("slide", function(evt, value) {
  
    sliderValue = value;
    updateAnnee(value); // pour le graphique
    
     var newData_construit = sites_data.filter(function(site) {
 
    	
     return(site.properties["Fin construction"]!='' && site.properties["Fin construction"]<= value) || (site.properties["Construction"]!='' && site.properties["Construction"] <= value );
   
   

    });
	
	    

    var newData_annonce = sites_data.filter(function(site) {
 
    	
      return site.properties["Date annonce"] != ''&& site.properties["Date annonce"] <= value;
   

    });
    
    
    	 
    display(newData_annonce, newData_construit);
  
  })
);
