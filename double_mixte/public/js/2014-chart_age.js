var chartData = {
    "barCircleMobile":[
    {"index":0.6,   "value":10,  "fill":"#A494B7", "label":"Health.com"},
    {"index":0.7, "value":16,  "fill":"#CBC3D6", "label":"Health Grades"},
    {"index":0.8, "value":36,  "fill":"#F1EFF4", "label":"Healthline"},
    {"index":0.9,   "value":24,  "fill":"#A494B7", "label":"Health.com"},
    {"index":1, "value":10,  "fill":"#CBC3D6", "label":"Health Grades"},
    {"index":1.1, "value":1,  "fill":"#F1EFF4", "label":"Healthline"}
    ],
    "barCircleWeb":[
    {"index":0.3, "value":26, "fill":"#231F20", "label":"WebMD Health"},
    {"index":0.4, "value":15.3, "fill":"#403437", "label":"Everyday Health"},
    {"index":0.5, "value":21.4, "fill":"#53363C", "label":"Livestrong.com"},
    {"index":0.6, "value":14.2, "fill":"#5E2C3A", "label":"About.com Health Section"},
    {"index":0.7, "value":8.9, "fill":"#660E34", "label":"Healthline"},
    {"index":0.8, "value":6.4, "fill":"#7D3A4D", "label":"HealthGrades"},
    {"index":0.9, "value":4.4, "fill":"#96606B", "label":"Yahoo! Health"},
    {"index":1,   "value":2.1,  "fill":"#B28A91", "label":"Lifescript.com"},
    {"index":1.1, "value":0.4,  "fill":"#D3BCBF", "label":"Health.com"}

    ]
};

        Math.radians = function(degrees) {
          return degrees * Math.PI / 180;
      };
var chart_percent = new Array();
var chart_label = new Array();
/*$(function(){
    $.get("data/data_age.json",function(data){
        var json_data = JSON.stringify(data);
        for (var i = 0; i < json_data.length; i++) {
            chart_percent.push(json_data[i].percent);
            chart_label.push(json_data[i].age);

        }
        alert(json_data);



  })

});*/


function drawBarCircleChart(data,target,values,labels){
    var w = 362,
    pi = Math.PI,
    h = 362,
    size = 360,
    radius = 200,
    sectorWidth = .1,
    radScale = 25,
    sectorScale = 1.45,
    target = d3.select(target),
    valueText = d3.select(values),
    labelText = d3.select(labels);

    var drawArc = d3.svg.arc()
    .innerRadius(function(d,i){return (d.index/sectorScale) * radius + radScale; })
    .outerRadius(function(d,i){return ((d.index/sectorScale) + (sectorWidth/sectorScale)) * radius + radScale; })
    .startAngle(pi)
    .endAngle(function(d) { return pi + Math.radians(360*d.value/100); });

    var path = target.selectAll("path")
    .data(data);
    path.transition()         
    .duration(300)
    .attr("fill", function(d){
        var grn = Math.floor((1 - d/60)*255);
        return "rgb(0, "+ grn +", 0)";
    })
    .attr("d", drawArc); 
    path.enter().append("svg:path")
    .attr("fill",function(d,i){return d.fill})
    .attr("stroke","#D1D3D4")
    .transition()
    .ease("elastic")
    .duration(1000)
    .delay(function(d,i){return i*100})
    .attrTween("d", arcTween);

    valueText.selectAll("tspan").data(data).enter()
    .append("tspan")
    .attr({
        x:50,
        y:function(d,i){return i*14},       
        "text-anchor":"end"
    })
    .text(function(d,i){return data[i].value+"%"});
    
    labelText.selectAll("tspan").data(data).enter()
    .append("tspan")
    .attr({
        x:0,
        y:function(d,i){return i*14}
    })
    .text(function(d,i){return data[i].label});

    function arcTween(b) {
        var i = d3.interpolate({value: 0}, b);
        return function(t) {
            return drawArc(i(t));
        };
    }

}

function doGraphAnim2014()
{
    $.get("data/data_age.json",function(data){
   
    setTimeout(function(){drawBarCircleChart(data.barCircleWeb,"#circleBar-web-chart","#circleBar-web-values","#circleBar-web-labels")},800);
    setTimeout(function(){drawBarCircleChart(data.barCircleMobile,"#circleBar-mobile-chart","#circleBar-mobile-values","#circleBar-mobile-labels")},800);


    d3.select("#circleBar-web-icon")
    .transition()
    .delay(500)
    .duration(500)
    .attr("opacity","1");
    d3.select("#circleBar-web-text")
    .transition()
    .delay(750)
    .duration(500)
    .attr("opacity","1");
    d3.select("#circleBar-web-clipLabels")
    .transition()
    .delay(600)
    .duration(1250)
    .attr("height","150");
    d3.select("#circleBar-mobile-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
    d3.select("#circleBar-mobile-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
    d3.select("#circleBar-mobile-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");
    })
}