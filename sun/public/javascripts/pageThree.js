/* ######################## BUBBLE CHARTS ############################### */
var diameter = 600, //max size of the bubbles
    color    = d3.scale.category20b(); //color category

var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(0);


var svg = d3.select("#bubble3")
    .append("svg")
    .attr("width", 800)
    .attr("height", 400)
    .attr("class", "bubble");


function initBubble(node)
{
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
        nodes.splice(4); // garder les 3 meilleurs !
        var total = nodes[0].value + nodes[1].value + nodes[2].value + nodes[3].value;
        console.log("total1:"+total);
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
        bubbles.append("svg:image")
            .attr("xlink:href", function(d){
                if (d.id == nodes[0].id)
                    return "./images/vynile-rouge.svg";
                else if (d.id == nodes[1].id)
                    return "./images/vynile-vert.svg";
                else if (d.id == nodes[2].id)
                    return "./images/vynile-bleu.svg";
                else if (d.id == nodes[3].id)
                    return "./images/vynile-bleu-gris.svg";
            })
            .attr("width", function(d){
                console.log("pour :"+d.id+" d.value/total="+d.value+"/"+total+"*800="+d.value/total * 800);
                return d.value/total * 800 ; })
            .attr("height", function(d){ return d.value/total * 800 ; })
            .attr("x", function(d){
                if (d.id == nodes[0].id)
                    return 60;
                else if (d.id == nodes[1].id)
                    return 250;
                else if (d.id == nodes[2].id)
                    return 0;
                else if (d.id == nodes[3].id)
                    return 80;
            })
            .attr("y", function(d){
                if (d.id == nodes[0].id)
                    return 40;
                else if (d.id == nodes[1].id)
                    return 20;
                else if (d.id == nodes[2].id)
                    return 0;
                else if (d.id == nodes[3].id)
                    return 230;
            })
            .attr("class", function(d) {return d.id})
            .attr("class", "bubbleC")
           /* .style("fill", function(d) { return color(d.value); })*/
            .on("mouseover", function(d) {
                div.transition()
                    .duration(200)
                    .style("opacity", .9);
                div	.html(getTooltip(d.id))
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
                musiqueCommence(d.id);
            })
            .on("mouseout", function(d) {
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
                musiqueArrete(d.id);
            });



        //circle.append()
        //format the text for each bubble
        bubbles.append("text")
            .attr("x", function(d){
                if (d.id == nodes[0].id)
                    return 180;
                else if (d.id == nodes[1].id)
                    return 360;
                else if (d.id == nodes[2].id)
                    return 0;
                else if (d.id == nodes[3].id)
                    return 80;
            })
            .attr("y", function(d){
                if (d.id == nodes[0].id)
                    return 160;
                else if (d.id == nodes[1].id)
                    return 60;
                else if (d.id == nodes[2].id)
                    return 0;
                else if (d.id == nodes[3].id)
                    return 230;
            })
            .attr("text-anchor", "middle")
            .text(function(d){ return d["id"]; })
            .attr("class", "bubbleCTxt")
            .style({
                "fill":"white",
                "font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
                "font-size": "25px",
            });
    });
}

function changeBubble(node)
{

    // GET DATA AGAIN
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
        nodes.splice(4); // garder les 3 meilleurs !
        var total = 0;
        total = nodes[0].value + nodes[1].value + nodes[2].value + nodes[3].value;

        d3.selectAll(".bubbleC").data(nodes);

        // SELECT THE SECTION
        var svg = d3.selectAll("#bubble3").transition();


        // MAKE THE CHANGE
        svg.selectAll(".bubbleC")   // change the bubble
            .duration(750)
            .attr("width", function(d){console.log("pour :"+d.id+" d.value/total="+d.value+"/"+total+"*800="+d.value/total * 800); return d.value/total * 800 ; })
            .attr("height", function(d){ return d.value/total * 800 ; })
            .attr("class", "bubbleC")

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
    return "./creneau/"+season+"/1/16/18";
}

initBubble(getRoad());


var audio=null;
var audioCourant = null;

function musiqueCommence(genre){
     switch (genre)
    {
        case "Alternative et punk":
            if (audio==null || audioCourant!="Alternative"){
                audio = document.getElementById("Alternative");
                audioCourant = "Alternative";
            }
            audio.play();
            break;
        case "Rock":
            if (audio==null||audioCourant!="Rock"){
                audio = document.getElementById("Rock");
                audioCourant = "Rock";
            }
            audio.play();
            break;
        case "Electronica":
            if (audio==null||audioCourant!="Electronica"){
                audio = document.getElementById("Electro");
                audioCourant = "Electronica";
            }
            audio.play();
            break;
        case "Jazz":
            if (audio==null||audioCourant!="Jazz"){
                audio = document.getElementById("Jazz");
                audioCourant = "Jazz";
            }
            audio.play();
            break;
        case "Pop":
            if (audio==null||audioCourant!="Pop"){
                audio = document.getElementById("Pop");
                audioCourant = "Pop";
            }
            audio.play();
            break;
        case "Urban":
            if (audio==null||audioCourant!="Urban"){
                audio = document.getElementById("Urban");
                audioCourant = "Urban";
            }
            audio.play();
            break;
    }

}

function musiqueArrete(genre){
        audio.pause();
}