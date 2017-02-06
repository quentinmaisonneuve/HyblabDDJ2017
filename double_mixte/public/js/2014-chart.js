

d3.select("input[value=\"total\"]").property("checked", true);
var svg = d3.select("#pieChart")
    .append("svg")
    .attr("height", "100%")
    .attr("width", "100%")
    .append("g")

svg.append("g")
    .attr("class", "slices");
svg.append("g")
    .attr("class", "labelName");
svg.append("g")
    .attr("class", "labelValue");

var width = 960,
    height = 450,
    radius = Math.min(width, height) / 2;

var pie = d3.layout.pie()
    .sort(null)
    .padAngle(.04)
    .value(function(d) {
        return d.value;
    });

var arc = d3.svg.arc()
    .outerRadius(radius * 0.7)
    .innerRadius(radius * 0.3);

var outerArc = d3.svg.arc()
    .innerRadius(radius * 0.8)
    .outerRadius(radius * 0.3);

var legendRectSize = (radius * 0.05);
var legendSpacing = radius * 0.02;


var div = d3.select("#pieChart").append("div").attr("id", "toolTip");

svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var colorRange = d3.scale.category20();
var color = d3.scale.ordinal()
    .range(["#e58c4a", "#f43f00", "#8cc63f", "#2cda9b", "#1e8c62", "#ff8c00"]);


datasetTotal = [
        {label:"Category 1", value:19}, 
        {label:"Category 2", value:5}, 
        {label:"Category 3", value:13},
        {label:"Category 4", value:17},
        {label:"Category 5", value:19},
        {label:"Category 6", value:27}
        ];

datasetOption1 = [
        {label:"Category 1", value:22}, 
        {label:"Category 2", value:33}, 
        {label:"Category 3", value:4},
        {label:"Category 4", value:15},
        {label:"Category 5", value:36},
        {label:"Category 6", value:0}
        ];

change(datasetTotal);


d3.selectAll("input")
    .on("change", selectDataset);
    
function selectDataset()
{
    var value = this.value;
    if (value == "total")
    {
        change(datasetTotal);
    }
    else if (value == "option1")
    {
        change(datasetOption1);
    }
}


function change(data) {

    /* ------- PIE SLICES -------*/
    var slice = svg.select(".slices").selectAll("path.slice")
        .data(pie(data), function(d){ return d.data.label });

    slice.enter()
        .insert("path")
        .style("fill", function(d) { return color(d.data.label); })
        .attr("class", "slice");

    slice
        .transition().duration(1000)
        .attrTween("d", function(d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                return arc(interpolate(t));
            };
        })
    slice
        .on("mousemove", function(d){
            div.attr("width","100%");
            div.style("display", "inline-block");
            div.html((d.data.label)+"<br>"+(d.data.value)+"%");
        });
    slice
        .on("mouseout", function(d){
            div.style("display", "none");
        });


    slice.exit()
        .remove();

    var legend = svg.selectAll('.legend')
        .data(color.domain())
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', function(d, i) {
            var height = legendRectSize + legendSpacing;
            var offset =  height * color.domain().length / 2;
            var horz = -3 * legendRectSize;
            var vert = i * height - offset;
            return 'translate(' + horz + ',' + vert + ')';
        });


    

    /* ------- TEXT LABELS -------*/

    var text = svg.select(".labelName").selectAll("text")
        .data(pie(data), function(d){ return d.data.label });

    

    function midAngle(d){
        return d.startAngle + (d.endAngle - d.startAngle)/2;
    }

    text
        .transition().duration(1000)
        .attrTween("transform", function(d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
                return "translate("+ pos +")";
            };
        })

    
};
