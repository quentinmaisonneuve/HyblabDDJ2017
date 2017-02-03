/* Animations dataviz3 */

democratique = true;
service = false;
taux = false;

function getDemocratique(){return democratique;};
function getService(){return service;};
function getTaux(){return taux;};

function setDemocratique(demo){democratique = demo;};
function setService(serv){service = serv;};
function setTaux(t){taux = t;};

$(document).ready(function(){
    $("p.sousGauche").on("click",function(){
        //alert("Click gauche");
        if(getDemocratique() == true){
            poidsGauche = getSerDemo("democratique",this.id);
            affichePoidsGauche();
        }
        else if(getService() == true){
            poidsGauche = getSerDemo("service",this.id);
            affichePoidsGauche();
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
        if(getDemocratique() == true){
            poidsDroit = getSerDemo("democratique",this.id);
            affichePoidsDroit();
        }
        else if(getService() == true){
            poidsDroit = getSerDemo("service",this.id);
            affichePoidsDroit();
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
        document.getElementById("aiguilleBalance").style.right="31.75%";
        if(document.getElementById("poids1").style.visibility == "visible" || document.getElementById("poids2").style.visibility == "visible"){
            document.getElementById("poids1").style.right="41.25%";
            document.getElementById("poids1").style.top="28%";
            document.getElementById("poids2").style.right="19.5%";
            document.getElementById("poids2").style.top="28%";
        }
    });

    $("a.menu3#democratique").on("click",function(){
        setTaux(false);
        setDemocratique(true);
        setService(false);
        document.getElementById("caseBalance").width="33%";
        document.getElementById("affiche_balance").style.marginLeft="0%";
        document.getElementById("aiguilleBalance").style.right="47.35%";
        document.getElementById("Droit").style.visibility="visible";
        document.getElementById("Droit").width="33%";
        document.getElementById("aiguilleBalance").style.visibility="visible";
        document.getElementById("poids2").style.right="35%";
        document.getElementById("poids2").style.top="28%";
        document.getElementById("poids1").style.right="56.7%";
        document.getElementById("poids1").style.top="28%";
        
    });

    $("a.menu3#service").on("click",function(){
        setTaux(false);
        setDemocratique(false);
        setService(true);
        document.getElementById("caseBalance").width="33%";
        document.getElementById("Droit").style.visibility="visible";
        document.getElementById("affiche_balance").style.marginLeft="0%";
        document.getElementById("aiguilleBalance").style.right="47.35%";
        document.getElementById("Droit").width="33%";
        document.getElementById("aiguilleBalance").style.visibility="visible";
        document.getElementById("poids2").style.right="35%";
        document.getElementById("poids2").style.top="28%";
        document.getElementById("poids1").style.right="56.7%";
        document.getElementById("poids1").style.top="28%";
    });
});

function affichePoidsTaux(poidsDemo, poidsServ){
    pourcentageDemo = (poidsDemo/(poidsServ+poidsDemo))*100;
    pourcentageServ = (poidsServ/(poidsServ+poidsDemo))*100;
    document.getElementById("poids2").style.fill="#002CE6";
    affichePoidsDroit(pourcentageDemo);
    document.getElementById("poids1").style.fill="#000045";
    affichePoidsGauche(pourcentageServ);
    if(poidsDemo > poidsServ){
        animerAiguilleAntiHoraire();
    }
    else if(poidsDemo < poidsServ){
        animerAiguilleHoraire();
    }
};

function affichePoidsGauche(){
    poids = document.getElementById("poids1");
    if(getTaux() == true){
        poids.style.right="41.25%";
        poids.style.top="28%";
        poids.style.visibility="visible";
    }
    else if (getDemocratique() == true || getService() == true) {
        poids.style.right="56.7%";
        poids.style.top="28%";
        poids.style.visibility="visible";
    }

};

function affichePoidsDroit(){
    poids1 = document.getElementById("poids2");
    if(getTaux() == true){
        poids1.style.right="19.5%";
        poids1.style.top="28%";
        poids1.style.visibility="visible";
    }
    else if (getDemocratique() == true || getService() == true) {
        poids1.style.right="35%";
        poids1.style.top="28%";
        poids1.style.visibility="visible";
    }

};

function animerAiguilleHoraire(){
    /* 1er -> type de mouvement ; 2ème -> temps en milli ; 3ème -> accélération */
    $('#aiguilleBalance').transition({ rotate: 60 }, 1800);
    $('#aiguilleBalance').transition({ rotate: 35 }, 1000);
    $('#aiguilleBalance').transition({ rotate: 45 }, 3000);
};

function animerAiguilleAntiHoraire(){
    /* 1er -> type de mouvement ; 2ème -> temps en milli ; 3ème -> accélération */
    $('#aiguilleBalance').transition({ rotate: -150 }, 1800);
    $('#aiguilleBalance').transition({ rotate: -115 }, 1000);
    $('#aiguilleBalance').transition({ rotate: -130 }, 3000);
};