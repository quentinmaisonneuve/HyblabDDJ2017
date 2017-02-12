

function addCountryEvents(svgDoc,stringPays,pourcentage,Zone,ZoneParent,nombreStag,nomPays,stagiaireLabel){

    var Pays = svgDoc.getElementById(stringPays);
    var PaysN = svgDoc.getElementById(stringPays+"N");

    var Paysparent = PaysN.parentNode;
    Paysparent.removeChild(PaysN);

/*                for(var i = 0, len = PaysTexte.children.length; i < len; i++){
        PaysTexte.children[i].style.fontFamily = "helvetica,sans-serif";
    }*/

    Pays.addEventListener("mouseenter",function(){
        nombreStag.children[1].textContent = pourcentage;
        nomPays.children[1].textContent = stringPays;
        if(stringPays === "République-Tchèque"){
            nomPays.children[1].textContent = "Rép-Tchèque";
        }
        nomPays.children[1].style.fontFamily = "helvetica,sans-serif";
        nomPays.children[1].style.fontSize = "15px";
        nomPays.children[1].style.fontWeight = "bold";
        nomPays.children[1].style.textAlign = "center";

        Paysparent.append(PaysN);
        ZoneParent.append(Zone);
        ZoneParent.append(nombreStag);
        ZoneParent.append(nomPays);
        ZoneParent.append(stagiaireLabel);

    }, false);

    PaysN.addEventListener("mouseleave",function(){
            ZoneParent.removeChild(Zone);
            Paysparent.removeChild(PaysN);
    }, false);

    if(stringPays === "Royaume-Uni"){
        var RUbutton = svgDoc.getElementById("Royaume-UniBouton");
        var popup = svgDoc.getElementById("GBPopup");
        ZoneParent.removeChild(popup);
        Paysparent.removeChild(RUbutton);
        RUbutton.addEventListener("mouseenter",function(){
            Paysparent.append(PaysN);
            Paysparent.append(RUbutton);
        }, false);

        RUbutton.addEventListener("click",function(){
            ZoneParent.append(popup);
        }, false);

        Pays.addEventListener("mouseenter",function(){
            Paysparent.append(RUbutton);
        }, false);

        PaysN.addEventListener("mouseleave",function(){
            Paysparent.removeChild(RUbutton);
        }, false);
    }
}

function getPourcentageStudents(country){
    var nbStagiaires = 0;
    $.ajax({
        url:"data/teams.json",
      dataType: 'json',
      async: false,
      //data: mydata,
      success: function(data) {
        var TotStagiaires = data.length;
        for (var i = TotStagiaires - 1; i >= 0; i--) {
            if(data[i].PAYS === country){
                nbStagiaires = nbStagiaires +1;
            }
        }
      }
    });
    return nbStagiaires;
}

var a = document.getElementById("mapsvg");

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
a.addEventListener("load",function(){

    /*var pays = ["Hongrie","Finlande","Portugal","Croatie","Lituanie","Lettonie","Russie","Pologne","Allemagne","France","Slovaquie","Roumanie","Bulgarie","Grèce","Serbie","Suède","Irlande","Italie","Belgique","Royaume-Uni","Pays-Bas","Suisse","République-Tchèque","Autriche"];*/
    var pays = ["Finlande","Portugal","Croatie","Lituanie","Lettonie","Russie","Suède","Royaume-Uni","Pologne","Irlande","Allemagne","Belgique","Norvège","France","Italie","Autriche","Serbie","Grèce","Bulgarie","Roumanie","Hongrie","République-Tchèque","Suisse","Pays-Bas","Slovaquie","Espagne"];
    // get the inner DOM of alpha.svg
    var svgDoc;
    svgDoc = a.contentDocument;
    var Zone = svgDoc.getElementById("Zone");
    var ZoneParent = Zone.parentNode;
    var nombreStag = svgDoc.getElementById("Zone_nombre");
    var nomPays = svgDoc.getElementById("Zone_pays");
    var stagiaireLabel = svgDoc.getElementById("Zone_stagiaire");
    ZoneParent.removeChild(Zone);
    ZoneParent.removeChild(nombreStag);
    ZoneParent.removeChild(nomPays);
    ZoneParent.removeChild(stagiaireLabel);
    // get the inner element by id
    for (var i = pays.length - 1; i >= 0; i--) {
        var pourcentage = getPourcentageStudents(pays[i]);
        addCountryEvents(svgDoc,pays[i],pourcentage,Zone,ZoneParent,nombreStag,nomPays,stagiaireLabel);
    }
}, false);
