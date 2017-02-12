/* Animations dataviz3 */

var typep2 = "democratique"; 
var typep1 = "service"; 
var regionp2 = "france"; 
var regionp1 = "france";

function initDataviz3(){
    
    var p2 = getSerDemo("democratique"); 
    var p1 = getSerDemo("service"); 

    var value2 = Math.round((p2*100)/(p2 + p1)); 
    var value1 = Math.round((p1*100)/(p2 + p1)); 

    $("#valeurPoidsGauche").html(value2+"%");

    $("#valeurPoidsDroite").html(value1+"%");

    calculPart();
}

function changeType(elem, type){
    if($(elem).attr("src") == "./img/bouton2.svg"){
        $(elem).attr("src","./img/bouton.svg");
        if($(elem).attr("id") == 'button1'){
            $("#poidsDroite").attr("src", "./img/balance/poidsClair.svg"); 
            $("#cableDroite").attr("src", "./img/balance/cable_clair.svg"); 
            $("#listeRegion1").css("background-color", "#002CE6");
            $("#listeRegion1").css("border-color", "#002CE6");
            typep1 = "service";
        }
        else {
            $("#poidsGauche").attr("src", "./img/balance/poidsClair.svg"); 
            $("#cableGauche").attr("src", "./img/balance/cable_clair.svg"); 
            $("#listeRegion2").css("background-color", "#002CE6"); 
            $("#listeRegion2").css("border-color", "#002CE6");
            typep2 = "service";
        }
    }
    else{
        $(elem).attr("src","./img/bouton2.svg");
          if($(elem).attr("id") == 'button1'){
            $("#poidsDroite").attr("src", "./img/balance/poidsFonce.svg"); 
            $("#cableDroite").attr("src", "./img/balance/cable_fonce.svg"); 
            $("#listeRegion1").css("background-color", "#000040"); 
            $("#listeRegion1").css("border-color", "#000040");
            typep1 = "democratique";
        }
        else {
            $("#poidsGauche").attr("src", "./img/balance/poidsFonce.svg"); 
            $("#cableGauche").attr("src", "./img/balance/cable_fonce.svg"); 
            $("#listeRegion2").css("background-color", "#000040"); 
            $("#listeRegion2").css("border-color", "#000040");
            typep2 = "democratique";
        }
    }
    if(typep1 != typep2){
    	if($(elem).attr("id") == 'button1'){
    		$("#selectedRegion2").attr("id","");
        	$("#r-"+regionp1+"-2").find("li").attr("id", "selectedRegion2");
    		regionp2 = regionp1; 
        }
        else {
        	$("#selectedRegion1").attr("id","");
        	$("#r-"+regionp2+"-1").find("li").attr("id", "selectedRegion1");
        	regionp1 = regionp2; 
        }
    }
    calculPart()
}

function changeRegion(elem,i,region){
    if(i == 2){
        $("#selectedRegion2").attr("id",""); 
        $(elem).find("li").attr("id", "selectedRegion2");
        regionp2 = region;  
        if(typep2 != typep1){
        	$("#selectedRegion1").attr("id","");
        	$("#r-"+region+"-1").find("li").attr("id", "selectedRegion1");
        	regionp1 = region; 
        }
    }
    else {
        $("#selectedRegion1").attr("id",""); 
        $(elem).find("li").attr("id", "selectedRegion1");
        regionp1 = region;
        if(typep2 != typep1){
        	$("#selectedRegion2").attr("id","");
        	$("#r-"+region+"-2").find("li").attr("id", "selectedRegion2");
        	regionp2 = region; 
        }
    }
    calculPart(); 
}

function calculPart(){
    p2 = getSerDemo(typep2, regionp2); 
    p1 = getSerDemo(typep1, regionp1); 

    var value2 = Math.round((p2*100)/(p2 + p1)); 
    var value1 = Math.round((p1*100)/(p2 + p1)); 

    $("#valeurPoidsGauche").html(value2+"%");

    $("#valeurPoidsDroite").html(value1+"%");

    if(value1 > value2){
        animerCableGauche(-(10-(value2/10))+'vmin');
        animerCableDroite((value1/10)+'vmin');
    }
    else if(value1 < value2){
        animerCableGauche((value2/10)+'vmin');
        animerCableDroite(-(10-(value1/10))+'vmin');
    }
    else{
        animerCablesMilieu();
    }


}