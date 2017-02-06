//the bar chart normal
// set the dimensions
function barChart() {

    var margin = {top: 20, right: 20, bottom: 90, left: 40},
        width = 600 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;


// set the ranges
    var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

    var y = d3.scale.linear().range([height, 0]);

// set the axis
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")


    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);


// add the SVG element
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


// load the data
    d3.json("../data/data.json", function (error, data) {

        data.forEach(function (d) {
            d.key = d.key;
            d.value = +d.value;
        });

        // scale the range of the data
        x.domain(data.map(function (d) {
            return d.key;
        }));
        y.domain([0, d3.max(data, function (d) {
            return d.value;
        })]);

        // add axis x
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)

            .selectAll("text")
            .style("text", "end")
            .attr("dx", "-.8em")
            .attr("dy", "-.55em")
            .attr("transform", "rotate(-45)");




        // Add bar chart
        svg.selectAll("bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) {
                return x(d.key);
            })
            .attr("width", x.rangeBand())
            .attr("y", function (d) {
                return y(d.value);
            })
            .attr("height", function (d) {
                return height - y(d.value);
            });

    });
    /**
     * Created by Evan on 2017/2/3.
     */
}
