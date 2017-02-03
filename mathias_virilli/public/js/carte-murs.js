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

d3.json("data/exemple.json", function(error, json) {
    if (error) throw error;
    svgCarte.selectAll("path")
	    .data(json.features)
	    .enter()
	    .append("path")
	    .attr("class","arc")
	    .attr("d", path);
});

d3.json("data/world-110m.json", function(error, topology) {
    if (error) throw error;

    svgCarte.append("path")
      .datum(topojson.feature(topology, topology.objects.land))
      .attr("d", path)
      .attr("class", "land-boundary");

});
