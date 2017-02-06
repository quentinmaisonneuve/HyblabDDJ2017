var svgContainer = d3.select(".chart_habitat");
var anneContainer=d3.select(".list_annee");
var height=svgContainer.node().getBoundingClientRect().height;
var width=svgContainer.node().getBoundingClientRect().width;


$.getJSON("data/habitat.json",function(dataJson) {

    var buttonData=[];
    var data=[];
    dataJson.vulnerability.forEach(
        function(e){
            buttonData.push(e.date);
            var donne=[];
            donne.push({value:e.zoneA});
            donne.push({value:e.zoneB});
            donne.push({value:e.zoneC});
            donne.push({value:e.zoneD});
            data.push(donne);
        });
    var color=["#062a3a","#6a9dae","#b8e8f2","#ffffff"];

    var rect = svgContainer.selectAll("rect")
        .data(data[0])
        .enter()
        .append("rect");
    //<text x="100" y="100" alignment-baseline="middle" text-anchor="middle">AAAA</text>
    var tip=svgContainer.append("text").attr("alignment-baseline","middle").attr("text-anchor","middle");
    var buttons = anneContainer.selectAll("button")
        .data(buttonData)
        .enter()
        .append("button");
    buttons.attr("type","button")
        .attr("class",function (d,i) {
            if(i==0){
                return "button_anne_selected"
            }else
                return "button_anne"
        })
        .append("div")
        .text(function(d) { return d;});
    buttons.on("click",function (d,i) {
        console.log(i);

        buttons.transition().attr("class",function (d2,i2){
            if(i==i2){
                return "button_anne_selected"
            }else
                return "button_anne"
        });

        svgContainer.selectAll("rect")
            .data(data[i])
            .transition()
            .duration(1000)
            .attr("x",10)
            .attr("y", function(d, i2){
                var sum=0;
                for(var k=0;k<i2;k++){
                    sum+=data[i][k].value;
                }
                return (sum*height)  ;
            })
            .attr("id",function(d,i){
                return i;
            })
            .attr("width",width)
            .attr("height",function(d){
                return d.value*height;
            })
            .attr("fill",function(d,i){
                return color[i];
            })
            .attr("id", function(d,i){return i});
        tip.html(Math.floor(d.value*100)+"%").attr("x", (d3.event.pageX+30) )
            .attr("y", (d3.event.pageY-185) );
    });

    rect.attr("x",10)
        .attr("y", function(d, i){
            var sum=0;
            for(var k=0;k<i;k++){
                sum+=data[0][k].value;
            }
            return (sum*height)  ;
        })
        .attr("id",function(d,i){
            return i;
        })
        .attr("width",width)
        .attr("height",function(d){
            return d.value*height;
        })
        .attr("fill",function(d,i){
            return color[i];
        })
        .attr("id", function(d,i){return i});


    rect.on("mousemover", function(d, i){
        rect.transition().style("fill-opacity", function(d2, i2){
            if (i === i2) return 1;
            else return 0.2;
        })
        tip.html(Math.floor(d.value*100)+"%").attr("x", (d3.event.pageX+30) )
            .attr("y", (d3.event.pageY-185) );
    });

    rect.on("mouseout", function(){
        rect.transition()
            .style("fill-opacity",1);
        tip.html("");
    })


});





var svg = d3.select("#histogramme"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);
y = d3.scale.linear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("data/data.tsv", function(d) {
    d.frequency = +d.frequency;
    return d;
}, function(error, data) {
    if (error) throw error;

    x.domain(data.map(function(d) { return d.letter; }));
    y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.svg.axis()
            .scale(x)
            .orient("bottom"));

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.svg.axis()
            .scale(y)
            .orient("left").ticks(10, "%"))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Taux");

    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.letter); })
        .attr("y", function(d) { return y(d.frequency); })
        .attr("width", x.rangeBand())
        .attr("height", function(d) { return height - y(d.frequency); });
});