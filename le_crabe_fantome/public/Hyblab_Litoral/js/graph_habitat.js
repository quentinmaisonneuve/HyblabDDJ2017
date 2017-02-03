var svgContainer = d3.select(".chart_habitat1");

var height=svgContainer.node().getBoundingClientRect().height;
var width=svgContainer.node().getBoundingClientRect().width;

var color=["#062a3a","#6a9dae","#b8e8f2","#ffffff"];

var rect = svgContainer.selectAll("rect")
    .data(data)
    .enter()
    .append("rect");

rect.attr("x",10)
    .attr("y", function(d, i){
        var sum=0;
        for(var k=0;k<i;k++){
            sum+=data[k].value;
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

rect.on("mouseover", function(d, i){
    rect.transition().style("fill-opacity", function(d2, i2){
      if (i === i2) return 1;
      else return 0.2;
    })
});

rect.on("mouseout", function(){
  rect.transition()
  .style("fill-opacity",1);
})
