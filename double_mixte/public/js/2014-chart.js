

d3.select("input[value=\"total\"]").property("checked", true);
var svg = d3.select("#pieChart")
    .append("svg")
    .attr("height", "100%")
    .attr("width", "80%")
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
var color = d3.scale.ordinal() .range(["#042037", "#123552", "#496C89", "#AF2D00", "#CC3400", "#FF5A21", "#FF6F3E"]);


datasetTotal = [
        {label:"18 - 24 ans", value:10}, 
        {label:"25 - 34 ans", value:16}, 
        {label:"35 - 49 ans", value:36},
        {label:"50 - 62 ans", value:24},
        {label:"63 - 75 ans", value:10},
        {label:"plus de 75 ans", value:1}
        ];

datasetOption1 = [
        {label:"Category 1", value:26}, 
        {label:"Category 2", value:15.3}, 
        {label:"Category 3", value:21.4},
        {label:"Category 4", value:14.2},
        {label:"Category 5", value:8.9},
        {label:"Category 6", value:6.4},
        {label:"Category 7", value:4.4},
        {label:"Category 8", value:2.1},
        {label:"Category 9", value:0.4}
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

            document.getElementById("labelValue14").innerHTML = (d.data.label)+ " - " +(d.data.value)+ " %";
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
