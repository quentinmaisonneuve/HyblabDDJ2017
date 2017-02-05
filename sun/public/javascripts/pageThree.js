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
        //nodes.splice(4); // garder les 4 meilleurs !
        var total = nodes[0].value + nodes[1].value + nodes[2].value + nodes[3].value;
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
                return d.value/total * 800 ; })
            .attr("height", function(d){ return d.value/total * 800 ; })
            .attr("id", function(d)
            {
                if (d.id == nodes[0].id)
                    return "bubbleR";
                else if (d.id == nodes[1].id)
                    return "bubbleV";
                else if (d.id == nodes[2].id)
                    return "bubbleB";
                else if (d.id == nodes[3].id)
                    return "bubbleBG";
            })
            .attr("x", function(d){
                if (d.id == nodes[0].id)
                    return 60;
                else if (d.id == nodes[1].id)
                    return 250;
                else if (d.id == nodes[2].id)
                    return 0;
                else if (d.id == nodes[3].id)
                    return 80;
                else
                    return -2000;
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
                else
                    return -2000;
            })
            .attr("class", "bubbleC")
           /* .style("fill", function(d) { return color(d.value); })*/
            .on("mouseover", function(d) {
                d3.select(this).classed("hover", true);
                div.transition()
                    .duration(200)
                    .style("opacity", .9);
                div	.html(getTooltip(d.id))
                    .style("background-color", function()
                    {
                        if (d.id == nodes[0].id)
                            return "#BB5A53";
                        else if (d.id == nodes[1].id)
                            return "#507260";
                        else if (d.id == nodes[2].id)
                            return "#054365";
                        else if (d.id == nodes[3].id)
                            return "#90A5BB";
                    });
                    /*.style("top", (d3.event.pageY - 28) + "px");*/
                musiqueCommence(d.id);
                //tourne(d3.select(this).attr("id"));
            })
            .on("mouseout", function(d) {
                d3.select(this).classed("hover", false);
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
                musiqueArrete(d.id);
            })
            .style("transform-origin", function(d){
                var xRotation = parseFloat(d3.select(this).attr("x"),10) + ( parseFloat(d3.select(this).attr("width"),10)/2);
                var yRotation = parseFloat(d3.select(this).attr("y"),10) + ( parseFloat(d3.select(this).attr("height"),10)/2);
                return xRotation + "px " + yRotation+ "px";
            });

        //circle.append()
        //format the text for each bubble
        bubbles.append("text")
            .attr("x", function(d){
                if (d.id == nodes[0].id)
                    return parseInt(d3.select("#bubbleR").attr("x"),10) + parseInt(d3.select("#bubbleR").attr("width"),10)/2;
                else if (d.id == nodes[1].id)
                    return parseInt(d3.select("#bubbleV").attr("x"),10) + parseInt(d3.select("#bubbleV").attr("width"),10)/2;
                else if (d.id == nodes[2].id)
                    return parseInt(d3.select("#bubbleB").attr("x"),10) + parseInt(d3.select("#bubbleB").attr("width"),10)/2;
                else if (d.id == nodes[3].id)
                    return parseInt(d3.select("#bubbleBG").attr("x"),10) + parseInt(d3.select("#bubbleBG").attr("width"),10)/2;
                else
                    return -200;
            })
            .attr("y", function(d){
                if (d.id == nodes[0].id)
                    return parseInt(d3.select("#bubbleR").attr("y"),10) + parseInt(d3.select("#bubbleR").attr("height"),10)/3;
                else if (d.id == nodes[1].id)
                    return parseInt(d3.select("#bubbleV").attr("y"),10) + parseInt(d3.select("#bubbleV").attr("height"),10)/3;
                else if (d.id == nodes[2].id)
                    return parseInt(d3.select("#bubbleB").attr("y"),10) + parseInt(d3.select("#bubbleB").attr("height"),10)/3;
                else if (d.id == nodes[3].id)
                    return parseInt(d3.select("#bubbleBG").attr("y"),10) + parseInt(d3.select("#bubbleBG").attr("height"),10)/3;
                else
                    return -200;
            })
            .attr("id", function(d)
            {
                if (d.id == nodes[0].id)
                    return "bubbleRTxt";
                else if (d.id == nodes[1].id)
                    return "bubbleVTxt";
                else if (d.id == nodes[2].id)
                    return "bubbleBTxt";
                else if (d.id == nodes[3].id)
                    return "bubbleBGTxt";
            })
            .attr("text-anchor", "middle")
            .text(function(d){
                if (d["id"] == "Pop")
                    return "Chanson Pop";
                else
                    return d["id"];
            })

            .attr("class", "bubbleCTxt")
            .style("font-size", function(d) {
                var taille = (1+(d.value/total))*13;
                if (taille > 20)
                    taille = 20;
                else if (taille < 9)
                    taille = 9;
                return taille + "px"
            })
            .style({
                "fill":"white",
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

     //   svg.selectAll("text").data(nodes).append("text").text(function(d){return d.id;});

        // MAKE THE CHANGE
        svg.selectAll(".bubbleC")   // change the bubble
            .duration(750)
            .attr("width", function(d){console.log("pour :"+d.id+" d.value/total="+d.value+"/"+total+"*800="+d.value/total * 800); return d.value/total * 800 ; })
            .attr("height", function(d){ return d.value/total * 800 ; })
            .attr("class", "bubbleC")
            .style("transform-origin", function(d){
                var xRotation = parseFloat(d3.select(this).attr("x"),10) + ( parseFloat(d3.select(this).attr("width"),10)/2);
                var yRotation = parseFloat(d3.select(this).attr("y"),10) + ( parseFloat(d3.select(this).attr("height"),10)/2);
                return xRotation + "px " + yRotation+ "px";
            })
        ;


        svg.selectAll(".bubbleCTxt")
            .duration(750)
            .attr("x", function(d){
                if (d.id == nodes[0].id)
                    return parseInt(d3.select("#bubbleR").attr("x"),10) + parseInt(d3.select("#bubbleR").attr("width"),10)/2;
                else if (d.id == nodes[1].id)
                    return parseInt(d3.select("#bubbleV").attr("x"),10) + parseInt(d3.select("#bubbleV").attr("width"),10)/2;
                else if (d.id == nodes[2].id)
                    return parseInt(d3.select("#bubbleB").attr("x"), 10) + parseInt(d3.select("#bubbleB").attr("width"), 10) / 2;
                else if (d.id == nodes[3].id)
                    return parseInt(d3.select("#bubbleBG").attr("x"),10) + parseInt(d3.select("#bubbleBG").attr("width"),10)/2;
                else
                    return -200;
            })
            .attr("y", function(d){
                if (d.id == nodes[0].id)
                    return parseInt(d3.select("#bubbleR").attr("y"),10) + parseInt(d3.select("#bubbleR").attr("height"),10)/3;
                else if (d.id == nodes[1].id)
                    return parseInt(d3.select("#bubbleV").attr("y"),10) + parseInt(d3.select("#bubbleV").attr("height"),10)/3;
                else if (d.id == nodes[2].id)
                    return parseInt(d3.select("#bubbleB").attr("y"),10) + parseInt(d3.select("#bubbleB").attr("height"),10)/3;
                else if (d.id == nodes[3].id)
                    return parseInt(d3.select("#bubbleBG").attr("y"),10) + parseInt(d3.select("#bubbleBG").attr("height"),10)/3;
                else
                    return -200;
            })
            .style("font-size", function(d) {
                var taille = (1+(d.value/total))*13;
                if (taille > 20)
                    taille = 20;
                else if (taille < 9)
                    taille = 9;
                return taille + "px"
            });
    });

}

/*########################## TOOLTIP ##############################################" */
function getTooltip(genre)
{
    switch (genre)
    {
        case "Alternative et punk":
            return "<h1>Alternative et punk</h1>" +
                "<h2>Depeche Mode - <i>Enjoy The Silence</i></h2>" +
                "<p>Vous et vos potes savez très bien que le punk n’est pas mort. Vous aimez cet esprit communautaire qui n’a pas besoin des autres pour exister, d’ailleurs s’ils ne sont pas contents, ça vous arrange bien.</p>";
            break;
        case "Rock":
            return "<h1>Rock</h1>" +
                "<h2>Iggy Pop - <i>The Passenger</i></h2>" +
                "<p>Ce qui vous fait vibrer quand vous entendez du rock, c’est de vous imaginer au milieu d’un bon vieux riff ! Veste en cuir sur le dos, vous êtes un accro du Hellfest.</p>";
            break;
        case "Classique":
            return "<h1>Musique</h1>" +
                "<p>La musique pour vous est avant tout un moyen de vous apaiser. Lorsque les accords s’entremêlent, des frissons traversent votre corps. Votre bonheur : passer de la musique de chambre à l’orchestre symphonique.</p>";
            break;
        case "Electronica":
            return "<h1>Musique Electronique</h1>" +
                "<h2>Etienne De Crécy & Madeline Follin - <i>You (Less Hate Remix)</i></h2>" +
                "<p>De la musique ? Oui mais surtout du son ! Pour s’éclater ou se détendre, des mixes qui vous ensorcellent et vous font vibrer.</p>";
            break;
        case "Jazz":
            return "<h1>Jazz</h1>" +
                "<h2>Nina Simone - <i>My Baby Just Cares For Me</i></h2>" +
                "<p>Quoi de mieux qu’un chorus de trompette pour égayer votre journée ? Lorsque le son d’un saxophone retentit, vous vous imaginez tout de suite dans un club de jazz pour un jam entre amis.</p>";
            break;
        case "Pop":
            return "<h1>Chanson Pop</h1>" +
                "<h2>OutKast - <i>Hey Ya!</i></h2>" +
                "<p>L’époque, le genre ou le chanteur...  rien n’a d’importance pour vous tant que la mélodie vous plait. Et, vous savez quoi ? Vous avez bien raison !</p>";
            break;
        case "Urban":
            return "<h1>Urbain</h1>" +
                "<h2>Shaggy - <i>It Wasn't Me</i></h2>" +
                "<p>Que vous préfériez le Rap ou le R’n’B, que vous soyiez plus beatmaking que backpacker, vous êtes un poète dans l’âme. Et, au final, qu’il soit des nineties ou bien actuel, l’esprit hip-hop est resté intact et vous le savez bien.</p>";
            break;
        case "Sentimentale":
            return "Par votre grandeur d’âme, <br/> Vous déclarez votre flamme <br/> <br/>         Comme vous l’aurez compris, vous êtes une personne sentimentale. Avec MySun, trouvez votre âme-soeur musicale !";
            break;
        case "Agressive":
            return "LA MAJUSCULE DE VOTRE CLAVIER EST VOTRE TOUCHE PRÉFÉRÉE. <br/> Et ouais, vous aimez les bons riffs, les mélodies accrocheuses ou encore les berceuses à base de Metallica. Avouez, le Hellfest est votre terrain de jeu ! ";
            break;
        case "Stimulante":
            return "En soirée, vous êtes une pile électrique, <br/> Suivre le tempo est votre technique ! <br/> Vous ne vous arrêtez jamais. Continuez à nous ambiancer avec MySun !";
            break;
        case "Cool":
            return "Des fleurs sur tous vos habits, <br/> Bob Marley est votre sonnerie, <br/> Bref, vous êtes cool ! <br/> Peace and Love, pas de prises de tête. Avec MySun, partagez votre bonne humeur.";
            break;
        case "Nostalgique":
            return "Vous re-penserez à votre jeunesse, <br/> Telle est notre promesse ! <br/> Vous êtes nostalgique et ça nous plait ! A chaque souvenir sa chanson, partagez les avec MySun !";
            break;
    }
}

/* ######################## RECUPERATION JSON ############################### */

function getRoad()
{
    // Style
    //var season = $('input[type=radio][name=season]:checked').attr('value');
    var heure_min = getHeure() - 1;
    var heure_max = getHeure() + 1;

    var season;
        switch ($("#slider").roundSlider("option", "value"))
        {
            case 0:
            case 4:
                season = "spring";
                break;
            case 1:
                season = "summer";
                break;
            case 2:
                season = "autumn";
                break;
            case 3:
                season = "winter";
                break;
        }


    var weekEnd;
        if(document.getElementById("weekOrWeekEnd").className == "play")
            weekEnd = 0;
        else
            weekEnd = 1;
    return "./creneau/"+season+"/"+weekEnd+"/16/18";
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


/*
    printemps: 0 ou 4
    été: 1
    autonme:2
    hiver:3
*/
function setSaison(m_saison){
    saison = m_saison;
}

$("#slider").roundSlider({
    handleShape: "circle",
    handleSize: "34,10",
    width: "44",
    radius: "46",
    value: 0,
    animation: false,
    showTooltip: false,
    editableTooltip: false,
    keyboardAction: false,
    max: "4",
    startAngle: 45,

    change: function (args) {
        setSaison(slider.getValue());
        changeBubble(getRoad());
    }
});