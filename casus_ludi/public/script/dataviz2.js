'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts
setTimeout(function(){
    
    var arrayColor = {"association" : "#9FD1FE","budget" : "#7FB0F9","couts-des-services" : "#5F8FF4","culture" : "#00047F","education" : "#4C53FF","election" : "#406EF0","Environnement" : "#0009FF","equipements" : "#26297F","marche-public" : "#204DEB","permis-de-construire" : "#2351EB","pv-deliberations" : "#123EE9","subventions" : "#002BE5","transport" : "#0007CC","urbanisme" : "#000044", "France" : "none"}; 
    var regions = ["Auvergne-Rhone-Alpes","Bourgogne-Franche-Comte","Bretagne","Centre-Val-de-Loire","Corse","Grand-Est","Hauts-de-France","Ile-de-France","Normandie","Nouvelle-Aquitaine","Occitanie","Pays-de-la-Loire","Provence-Alpes-Cote-d-Azur"]; 
    var arrayRegionsX = {"Auvergne-Rhone-Alpes" : 107,"Bourgogne-Franche-Comte" : 29,"Bretagne" : -94,"Centre-Val-de-Loire" : -109,"Corse" : 239,"Grand-Est" : 348,"Hauts-de-France" : 131,"Ile-de-France" : 150,"Normandie" : -85,"Nouvelle-Aquitaine" : -189,"Occitanie" : -140,"Pays-de-la-Loire" : -329,"Provence-Alpes-Cote-d-Azur" : 44}
    var arrayRegionsY = {"Auvergne-Rhone-Alpes" : -8,"Bourgogne-Franche-Comte" : 98,"Bretagne" : -287,"Centre-Val-de-Loire" : 49,"Corse" : 378,"Grand-Est" : -136,"Hauts-de-France" : -287,"Ile-de-France" : -13,"Normandie" : 41,"Nouvelle-Aquitaine" : -86,"Occitanie" : 119,"Pays-de-la-Loire" : 48,"Provence-Alpes-Cote-d-Azur" : 329}

    var svg = d3.select("#circleChart"),
    margin = 20,
    diameter = +svg.attr("width"),
    g = svg.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    var pack = d3.pack()
        .size([diameter - margin, diameter - margin])
        .padding(2);

    var root = d3.hierarchy(datavizCircle())
        .sum(function(d) { return d.size; })
        .sort(function(a, b) { return b.value - a.value;}); 

  var focus = root,
      nodes = pack(root).descendants(),
      view;

    nodes.forEach(function(item){
        if(item.data.name in arrayRegionsX ){
            item.x += arrayRegionsX[item.data.name];
            item.y += arrayRegionsY[item.data.name];  
        }
        if((item.data.name != "France") && (item.parent.data.name in arrayRegionsX)){
            item.x += arrayRegionsX[item.parent.data.name];
            item.y += arrayRegionsY[item.parent.data.name]; 
        }
    }); 

/*
    nodes[1].x =  310; 
    nodes[1].y =  265; 
  
    // Bourgogne
    nodes[10].x = 392;
    nodes[10].y = 180; 

    // GE 
    nodes[6].x = 423;
    nodes[6].y = 90;

    // IDF 
    nodes[5].x = 305;
    nodes[5].y = 125;

    // Val de loire
    nodes[4].x = 175;
    nodes[4].y = 200;

    // Normandie
    nodes[12].x = 148;
    nodes[12].y = 108;

    //Bretagne 
    nodes[8].x = 70;
    nodes[8].y = 115;

    //PDL
    nodes[9].x = 63;
    nodes[9].y = 205;

    //Nouvelle Aquitaine
    nodes[3].x = 95;
    nodes[3].y = 315;

    // Occitanie
    nodes[2].x = 220;
    nodes[2].y = 392;

    // HF
    nodes[7].x = 215;
    nodes[7].y = 50;

    // PACA
    nodes[11].x = 340;
    nodes[11].y = 380;

    // Corse
    nodes[13].x = 425;
    nodes[13].y = 445;
    */

  var circle = g.selectAll("circle")
    .data(nodes)
    .enter().append("circle")
    .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
    .style("fill-opacity", function(d){
        if(!(d.data.id in arrayColor)){
            return "0"; 
        }
    })
    .style("fill", function(d) { 
        if(d.data.id in arrayColor){
            return arrayColor[d.data.id];
            //return "none";
        }
        else{
            //return "none"
            return "#ffffff";
        }
    })
    .on("click", function(d) { console.log(d); if (focus !== d) zoom(d), d3.event.stopPropagation(); });

  var text = g.selectAll("text")
    .data(nodes)
    .enter().append("text")
      .attr("class", "label")
      .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
      .style("display", function(d) { return d.parent === root ? "inline" : "none"; })
      .text(function(d) { return d.data.name; });

  var node = g.selectAll("circle,text");

  svg
      //.style("background", "#FFFFFF")
      .style("background-image", "url(\"img/FULL.svg\")")
      .style("background-position","center")
      .style("background-size", "1145px")
      .on("click", function() { zoom(root); });

  zoomTo([root.x, root.y, root.r * 2 + margin]);

  function zoom(d) {
    var focus0 = focus; focus = d;

    var transition = d3.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", function(d) {
          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
          return function(t) { zoomTo(i(t)); };
        });

    transition.selectAll("text")
       .filter(function(d) {
          if(!(d === undefined))
          {
            return d.parent === focus || this.style.display === "inline";
          }
        })
        .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
        .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

  function zoomTo(v) {
    var k = diameter / v[2]; view = v;
    node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
    circle.attr("r", function(d) { return d.r * k; });
  }

}, 3000);

