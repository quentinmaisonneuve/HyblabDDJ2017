/* ######################## BUBBLE CHARTS ############################### */

// TODO: transition http://jsfiddle.net/CCRb5/
function initBubble(node)
{

    var diameter = 400, //max size of the bubbles
        color    = d3.scale.category20b(); //color category

    var bubble = d3.layout.pack()
        .sort(null)
        .size([diameter, diameter])
        .padding(-20.5);

    var svg = d3.select("#bubble3")
        .append("svg")
        .attr("width", diameter)
        .attr("height", diameter)
        .attr("class", "bubble");

    //d3.csv("./csv/test.csv", function(error, data){
    d3.json(getRoad(), function(error, data){
        //convert numerical values from strings to numbers
        data = data.map(function(d){
            d.value = +d["value"];
            return d;
        });

        //bubbles needs very specific format, convert data to this.
        var nodes = bubble.nodes({children:data}).filter(function(d) {
            return (!d.children && d.id != "");
        });

        nodes.sort(function(a,b){
           return b.value-a.value;
        });
        nodes.splice(3); // garder les 3 meilleurs !
        nodes.sort(function(a,b){
            return a.value-b.value;
        });

        // Define the div for the tooltip
        var div = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        //setup the chart
        var bubbles = svg.append("g")
            .attr("transform", "translate(0,0)")
            .selectAll(".bubble")
            .data(nodes)
            .enter();

        //create the bubbles
        bubbles.append("circle")
            .attr("r", function(d){ return d.r; })
            .attr("cx", function(d){ return d.x; })
            .attr("cy", function(d){ return d.y; })
            .attr("class", function(d) {return d.id})
            .style("fill", function(d) { return color(d.value); })
            .on("mouseover", function(d) {
                div.transition()
                    .duration(200)
                    .style("opacity", .9);
                div	.html(getTooltip(d.id))
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        //format the text for each bubble
        bubbles.append("text")
            .attr("x", function(d){ return d.x; })
            .attr("y", function(d){ return d.y + 5; })
            .attr("text-anchor", "middle")
            .text(function(d){ return d["id"]; })
            .style({
                "fill":"white",
                "font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
                "font-size": "12px"
            });
    });
}




/*########################## TOOLTIP ##############################################" */
function getTooltip(genre)
{
    switch (genre)
    {
        case "Alternative et punk":
            return "Vous et vos potes savez très bien que le punk n’est pas mort. Vous aimez cet esprit communautaire qui n’a pas besoin des autres pour exister, d’ailleurs s’ils ne sont pas contents, ça vous arrange bien.";
            break;
        case "Rock":
            return "Ce qui vous fait vibrer quand vous entendez du rock, c’est de vous imaginer au milieu d’un bon vieux riff ! Veste en cuir sur le dos, vous êtes un accro du Hellfest.";
            break;
        case "Classique":
            return "La musique pour vous est avant tout un moyen de vous apaiser. Lorsque les accords s’entremêlent, des frissons traversent votre corps. Votre bonheur : passer de la musique de chambre à l’orchestre symphonique.";
            break;
        case "Electronica":
            return "De la musique ? Oui mais surtout du son ! Pour s’éclater ou se détendre, des mixes qui vous ensorcellent et vous font vibrer.";
            break;
        case "Jazz":
            return "Quoi de mieux qu’un chorus de trompette pour égayer votre journée ? Lorsque le son d’un saxophone retentit, vous vous imaginez tout de suite dans un club de jazz pour un jam entre amis.";
            break;
        case "Pop":
            return "L’époque, le genre ou le chanteur...  rien n’a d’importance pour vous tant que la mélodie vous plait. Et, vous savez quoi ? Vous avez bien raison !";
            break;
        case "Urban":
            return "Que vous préfériez le Rap ou le R’n’B, que vous soyiez plus beatmaking que backpacker, vous êtes un poète dans l’âme. Et, au final, qu’il soit des nineties ou bien actuel, l’esprit hip-hop est resté intact et vous le savez bien.";
            break;
    }
}

/* ######################## RECUPERATION JSON ############################### */

function getRoad()
{
    // Style
    var season = $('input[type=radio][name=season]:checked').attr('value');
    return "./creneau/"+season+"/0/1/20";
}

initBubble(getRoad());