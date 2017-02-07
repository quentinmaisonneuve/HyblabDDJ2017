/* Animations dataviz3 */

/*democratique = true;
service = false;
taux = false;

poidsGauche = 0.0;
poidsDroit = 0.0;

function getDemocratique(){return democratique;};
function getService(){return service;};
function getTaux(){return taux;};
function getPoidsGauche(){return Math.round(poidsGauche);};
function getPoidsDroit(){return Math.round(poidsDroit);};

function setDemocratique(demo){democratique = demo;};
function setService(serv){service = serv;};
function setTaux(t){taux = t;};
function setPoidsGauche(pGauche){poidsGauche = pGauche;};
function setPoidsDroit(pDroit){poidsDroit = pDroit;};

$(document).ready(function(){
    $("p.sousGauche").on("click",function(){
        //alert("Click gauche");
        for(var i= 0;i < document.getElementsByClassName("sousGauche").length;i++){
            //console.log(i);
            document.getElementsByClassName("sousGauche")[i].style.backgroundColor = "white";
        }
        this.style.backgroundColor = "#D2E8F9";
        if(getDemocratique() == true){
            setPoidsGauche(getSerDemo("democratique",this.id));
            affichePoidsGauche(getPoidsGauche());
        }
        else if(getService() == true){
            setPoidsGauche(getSerDemo("service",this.id));
            affichePoidsGauche(getPoidsGauche());
        }
        else if(getTaux() == true){
            dataDemo = getSerDemo("democratique",this.id);
            dataServ = getSerDemo("service",this.id);
            affichePoidsTaux(dataDemo, dataServ);
        }
        //animerAiguilleAntiHoraire();
    });

    $("p.sousDroite").on("click",function(){
        //alert("Click droit");
        for(var i= 0;i < document.getElementsByClassName("sousDroite").length;i++){
            //console.log(i);
            document.getElementsByClassName("sousDroite")[i].style.backgroundColor = "white";
        }
        this.style.backgroundColor = "#D2E8F9";
        if(getDemocratique() == true){
            setPoidsDroit(getSerDemo("democratique",this.id));
            affichePoidsDroit(getPoidsDroit());
        }
        else if(getService() == true){
            setPoidsDroit(poidsDroit = getSerDemo("service",this.id));
            affichePoidsDroit(getPoidsDroit());
        }
        //animerAiguilleHoraire();
    });

    $("a.menu3#tauxRegion").on("click",function(){
        setTaux(true);
        setDemocratique(false);
        setService(false);
        //alert(document.getElementById("droit")); //Check si le tableau est détecté
        document.getElementById("Droit").style.visibility="hidden";
        document.getElementById("affiche_balance").style.marginLeft="33%";
        document.getElementById("balance").width="175%";
        document.getElementById("aiguilleBalance").style.right="31.5%";
        document.getElementById("aiguilleBalance").style.top="28.17%";
        if(document.getElementById("poids1").style.visibility == "visible" || document.getElementById("poids2").style.visibility == "visible"){
            document.getElementById("poids1").style.right="41.25%";
            document.getElementById("poids1").style.top="33%";
            document.getElementById("poids2").style.right="19.5%";
            document.getElementById("poids2").style.top="33%";

            document.getElementById("textdroit").style.right="23.25%";
            document.getElementById("textdroit").style.top="40%";
            document.getElementById("textgauche").style.right="45%";
            document.getElementById("textgauche").style.top="40%";
        }
    });

    $("a.menu3#democratique").on("click",function(){
        setTaux(false);
        setDemocratique(true);
        setService(false);
        document.getElementById("balance").width="100%";
        document.getElementById("caseBalance").width="33%";
        document.getElementById("affiche_balance").style.marginLeft="0%";
        document.getElementById("aiguilleBalance").style.right="45.17%";
        document.getElementById("aiguilleBalance").style.top="29.5%";
        document.getElementById("Droit").style.visibility="visible";
        document.getElementById("Droit").width="33%";
        document.getElementById("aiguilleBalance").style.visibility="visible";

        document.getElementById("poids2").style.right="35%";
        document.getElementById("poids2").style.top="33%";
        document.getElementById("poids1").style.right="55%";
        document.getElementById("poids1").style.top="33%";

        document.getElementById("textdroit").style.top="40%";
        document.getElementById("textdroit").style.right="38.75%";
        document.getElementById("textgauche").style.top="40%";
        document.getElementById("textgauche").style.right="58.75%";
        
        if(document.querySelector(".tabDesc") != null) document.querySelector(".tabDesc").parentNode.removeChild(document.querySelector(".tabDesc"));
        document.getElementById("description").innerHTML += "<thead class='tabDesc'><th>Données démocratiques</th><tr class='tabDesc'><td class='tabDesc'>Il s’agit des données qui ne peuvent pas être exploitées pour développer des services mais qui permettent de connaître et de comprendre les débats, les prises de décisions et les actions des collectivités publiques. Elles regroupent l’association, le budget, coûts et service, les élections etc...</td></tr>";

    });

    $("a.menu3#service").on("click",function(){
        setTaux(false);
        setDemocratique(false);
        setService(true);
        document.getElementById("balance").width="100%";
        document.getElementById("caseBalance").width="33%";
        document.getElementById("Droit").style.visibility="visible";
        document.getElementById("affiche_balance").style.marginLeft="0%";
        document.getElementById("aiguilleBalance").style.right="45.17%";
        document.getElementById("Droit").width="33%";
        document.getElementById("aiguilleBalance").style.visibility="visible";
        document.getElementById("poids2").style.right="35%";
        document.getElementById("poids2").style.top="33%";
        document.getElementById("poids1").style.right="55%";
        document.getElementById("poids1").style.top="33%";

        document.getElementById("textdroit").style.top="40%";
        document.getElementById("textdroit").style.right="38.75%";
        document.getElementById("textgauche").style.top="40%";
        document.getElementById("textgauche").style.right="58.75%";

        if(document.querySelector(".tabDesc") != null) document.querySelector(".tabDesc").parentNode.removeChild(document.querySelector(".tabDesc"));
        document.getElementById("description").innerHTML += "<thead class='tabDesc'><th class='tabDesc'>Données servicielles</th><tr class='tabDesc'><td class='tabDesc'>Il s’agit des données qui peuvent être exploitées pour développer ou améliorer un service public ou un service commercial. Ici elles comprennent l'environnement, la culture, le transport ou les équipements etc…</td></tr>";
    });
});


function comparaisonPoids(){
    //alert(getPoidsDroit());
    //alert(getPoidsGauche());
    pourcentageDroit = (getPoidsDroit()/(getPoidsDroit()+getPoidsGauche()))*100;
    pourcentageGauche = (getPoidsGauche()/(getPoidsDroit()+getPoidsGauche()))*100;
    if(pourcentageGauche < pourcentageDroit){
        animerAiguilleHoraire();
    }
    else if(pourcentageGauche > pourcentageDroit){
        animerAiguilleAntiHoraire();
    }
    else {
        aiguillePosZero();
    }
};

function affichePoidsTaux(poidsDemo, poidsServ){
    pourcentageDemo = (poidsDemo/(poidsServ+poidsDemo))*100;
    //alert(pourcentageDemo);
    pourcentageServ = (poidsServ/(poidsServ+poidsDemo))*100;
    //alert(pourcentageServ);
    document.getElementById("poids2").style.fill="#002CE6";
    affichePoidsDroit();
    document.getElementById("poids1").style.fill="#000045";
    affichePoidsGauche();
    if(pourcentageDemo > pourcentageServ){
        animerAiguilleAntiHoraire();
    }
    else if(pourcentageDemo < pourcentageServ){
        animerAiguilleHoraire();
    }
};

function affichePoidsGauche(){    
    if(document.getElementById("textgauche") != null) document.getElementById("textgauche").parentNode.removeChild(document.getElementById("textgauche"));
    if(getTaux() == false){
        document.getElementById("affiche_balance").innerHTML += "<p class='text' id='textgauche' style='text-align:center;position:absolute;top:40%;right:58.75%;color:white;'>"+getPoidsGauche()+"</p>";
    }
    else document.getElementById("affiche_balance").innerHTML += "<p class='text' id='textgauche' style='text-align:center;position:absolute;top:40%;right:45%;color:white;'>"+getPoidsGauche()+"</p>";
    
    
    poids = document.getElementById("poids1");
    if(getTaux() == true){
        poids.style.right="42%";
        poids.style.top="33%";
        poids.style.visibility="visible";
    }
    else if (getDemocratique() == true || getService() == true) {
        poids.style.right="55%";
        poids.style.top="33%";
        poids.style.visibility="visible";
    }
    if(document.getElementById("poids2").style.visibility == "visible"){
        comparaisonPoids();
    }

};

function affichePoidsDroit(){
    if(document.getElementById("textdroit") != null) document.getElementById("textdroit").parentNode.removeChild(document.getElementById("textdroit"));
    if(getTaux() == false){
        document.getElementById("affiche_balance").innerHTML += "<p class='text' id='textdroit' style='text-align:center;position:absolute;top:40%;right:38.75%;color:white;'>"+getPoidsDroit()+"</p>";
    }
    else document.getElementById("affiche_balance").innerHTML += "<p class='text' id='textdroit' style='text-align:center;position:absolute;top:40%;right:23.25%;color:white;'>"+getPoidsDroit()+"</p>";
    
    poids1 = document.getElementById("poids2");
    if(getTaux() == true){
        poids1.style.right="19.5%";
        poids1.style.top="33%";
        poids1.style.visibility="visible";
    }
    else if (getDemocratique() == true || getService() == true) {
        poids1.style.right="35%";
        poids1.style.top="33%";
        poids1.style.visibility="visible";
    }
    if(document.getElementById("poids1").style.visibility == "visible"){
        comparaisonPoids();
    }

};

function aiguillePosZero(){
    $("#aiguilleBalance").transition({rotate : -50}, 750);
    $("#aiguilleBalance").transition({rotate : -40}, 750);
    $("#aiguilleBalance").transition({rotate : -45}, 500);
};

function animerAiguilleHoraire(){
    /* 1er -> type de mouvement ; 2ème -> temps en milli ; 3ème -> accélération */
   /* $('#aiguilleBalance').transition({ rotate: 60 }, 1800).transition({ rotate: 35 }, 1000).transition({ rotate: 45 }, 3000);
};

function animerAiguilleAntiHoraire(){
    /* 1er -> type de mouvement ; 2ème -> temps en milli ; 3ème -> accélération */
   /* $('#aiguilleBalance').transition({ rotate: -150 }, 1800).transition({ rotate: -115 }, 1000).transition({ rotate: -130 }, 3000);
};
*/


// TEST

var typep2 = "democratique"; 
var typep1 = "service"; 
var regionp2 = "france"; 
var regionp1 = "france";

function initDataviz3(){
    
    var p2 = getSerDemo("democratique"); 
    var p1 = getSerDemo("service"); 

    var value2 = Math.round((p2*100)/(p2 + p1)); 
    var value1 = Math.round((p1*100)/(p2 + p1)); 

    $("#valeurPoids2").html(value2+"%");
    $("#svg-container-poids2").css("width",4 + (value2 * 11 / 100) + "%"); 

    $("#svg-container-poids2").css("visibility","visible"); 
    $("#svg-container-poids2").css("top", 21 + ((100-value2)*26/100)+"%"); 
    $("#svg-container-poids2").css("left", 28 + ((100-value2)*5/100)+"%");
    $("#valeurPoids2").css("top", 41 + ((100-value2)*9/100)+"%");

    $("#valeurPoids1").html(value1+"%");
    $("#svg-container-poids1").css("width",4 + (value1 * 11 / 100) + "%"); 

    $("#svg-container-poids1").css("visibility","visible"); 
    $("#svg-container-poids1").css("top", 21 + ((100-value1)*26/100)+"%"); 
    $("#svg-container-poids1").css("left", 58 + ((100-value1)*5/100)+"%"); 
    $("#valeurPoids1").css("top", 40 + ((100-value1)*9/100)+"%");

}

function changeType(elem, type){
    if($(elem).attr("src") == "./img/bouton2.svg"){
        $(elem).attr("src","./img/bouton.svg");
        if($(elem).attr("id") == 'button1'){
            $("#poids1").attr("data", "./img/poids_clair.svg"); 
            $("#listeRegion1").css("background-color", "#002CE6");
            $("#listeRegion1").css("border-color", "#002CE6");
            typep1 = "service";
        }
        else {
            $("#poids2").attr("data", "./img/poids_clair.svg"); 
            $("#listeRegion2").css("background-color", "#002CE6"); 
            $("#listeRegion2").css("border-color", "#002CE6");
            typep2 = "service";
        }
    }
    else{
        $(elem).attr("src","./img/bouton2.svg");
          if($(elem).attr("id") == 'button1'){
            $("#poids1").attr("data", "./img/poids.svg"); 
            $("#listeRegion1").css("background-color", "#000040"); 
            $("#listeRegion1").css("border-color", "#000040");
            typep1 = "democratique";
        }
        else {
            $("#poids2").attr("data", "./img/poids.svg"); 
            $("#listeRegion2").css("background-color", "#000040"); 
            $("#listeRegion2").css("border-color", "#000040");
            typep2 = "democratique";
        }
    }
    calculPart()
}

function changeRegion(elem,i,region){
    if(i == 2){
        $("#selectedRegion2").attr("id",""); 
        $(elem).find("li").attr("id", "selectedRegion2");
        regionp2 = region;  
    }
    else {
        $("#selectedRegion1").attr("id",""); 
        $(elem).find("li").attr("id", "selectedRegion1");
        regionp1 = region;
    }
    calculPart(); 
}

function calculPart(){
    p2 = getSerDemo(typep2, regionp2); 
    p1 = getSerDemo(typep1, regionp1); 

    var value2 = Math.round((p2*100)/(p2 + p1)); 
    var value1 = Math.round((p1*100)/(p2 + p1)); 

    $("#valeurPoids2").html(value2+"%");
    $("#svg-container-poids2").css("width",4 + (value2 * 11 / 100) + "%"); 

    $("#svg-container-poids2").css("visibility","visible"); 
    $("#svg-container-poids2").css("top", 21 + ((100-value2)*26/100)+"%"); 
    $("#svg-container-poids2").css("left", 28 + ((100-value2)*5/100)+"%");
    $("#valeurPoids2").css("top", 41 + ((100-value2)*9/100)+"%");

    $("#valeurPoids1").html(value1+"%");
    $("#svg-container-poids1").css("width",4 + (value1 * 11 / 100) + "%"); 

    $("#svg-container-poids1").css("visibility","visible"); 
    $("#svg-container-poids1").css("top", 21 + ((100-value1)*26/100)+"%"); 
    $("#svg-container-poids1").css("left", 58 + ((100-value1)*5/100)+"%"); 
    $("#valeurPoids1").css("top", 40 + ((100-value1)*9/100)+"%");

    if(value1 > value2){
        animerAiguilleDroite();
    }
    else if(value1 < value2){
        animerAiguilleGauche();
    }
    else{
        animerAiguilleMilieu();
    }


}