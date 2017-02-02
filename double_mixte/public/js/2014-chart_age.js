
Math.radians = function(degrees) {
return degrees * Math.PI / 180;
};

function delChart(target,values,labels){

    var target = d3.select(target),
    valueText = d3.select(values),
    labelText = d3.select(labels);

    target.selectAll("path").remove();
    labelText.remove();
    valueText.remove();


}

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
    var arcTip = d3.tip()
              .attr('class', 'd3-tip')
              .offset([0, 0])
              .html(function (d,i) { return "<span>" + data[i].label + "</span>"; });
      
  
    var drawArc = d3.svg.arc()
    .innerRadius(function(d,i){return (d.index/sectorScale) * radius + radScale; })
    .outerRadius(function(d,i){return ((d.index/sectorScale) + (sectorWidth/sectorScale)) * radius + radScale; })
    .startAngle(pi)
    .endAngle(function(d) { return pi + Math.radians(360*d.value/100); });
    var path = target.selectAll("path")
    .data(data);
  if(path.empty()){
    path.transition()         
    .duration(300)

    .attr("fill", function(d){
        var grn = Math.floor((1 - d/60)*255);
        return "rgb(0, "+ grn +", 0)";
    })

    .attr("d", drawArc)
    target.call(arcTip);
     path.enter().append("svg:path")
    .attr("fill",function(d,i){return d.fill})
    .on('mouseover', arcTip.show)
    .on('mouseout', arcTip.hide)
    .attr("stroke","none")
    .transition()
    .ease("elastic")
    .duration(1000)
    .delay(function(d,i){return i*100})
    .attrTween("d", arcTween)
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
    
}

function doGraphAnimCSP()
{
    $.get("data/data_age.json",function(data){
   
    setTimeout(function(){drawBarCircleChart(data.barCircleMobile,"#circleBar-mobile-chart","#circleBar-mobile-values","#circleBar-mobile-labels")},800);


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

function doGraphAnimAge()
{
    $.get("data/data_age.json",function(data){
   
    setTimeout(function(){drawBarCircleChart(data.barCircleWeb,"#circleBar-web-chart","#circleBar-web-values","#circleBar-web-labels")},800);


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
    })
}


