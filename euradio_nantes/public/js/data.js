window.onload = function () {
    creatFacebook();
    chartFacebook.render();
    //loadJSON();

}

function showFacebook(){
    creatFacebook();
    chartFacebook.render();
}

function showTwitter(){
    creatTwitter();
    chartTwitter.render();
}

function creatFacebook(){

    chartFacebook = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Facebook",
                fontFamily: "Verdana",
                fontColor: "Peru",
                fontSize: 28

            },
            animationEnabled: true,
            axisY: {
                tickThickness: 0,
                lineThickness: 0,
                valueFormatString: " ",
                gridThickness: 0                    
            },
            axisX: {
                tickThickness: 0,
                lineThickness: 0,
                labelFontSize: 18,
                labelFontColor: "Peru"

            },
            data: [
            {
                indexLabelFontSize: 26,
                toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{y}</strong></span>",

                indexLabelPlacement: "inside",
                indexLabelFontColor: "#FF6666",
                indexLabelFontWeight: 600,
                indexLabelFontFamily: "Verdana",
                color: "#3b5998",
                type: "bar",
                dataPoints: provenancePaysPourcentageFacebook.reverse()
                /*
                [
                    { y: 21, label: "21%", indexLabel: "France" },
                    { y: 25, label: "25%", indexLabel: "USA" },
                    { y: 33, label: "33%", indexLabel: "Alemande" },
                    { y: 36, label: "36%", indexLabel: "Belge" },
                    { y: 42, label: "42%", indexLabel: "Espanyol" },
                    { y: 49, label: "49%", indexLabel: "Italy" },
                    { y: 50, label: "50%", indexLabel: "Monago" },
                    { y: 55, label: "55%", indexLabel: "Suisse" },
                    { y: 61, label: "61%", indexLabel: "Pays-pas" }
                ]
                */
            }
            ]
        });
}


function creatTwitter(){

    chartTwitter = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Twitter",
                fontFamily: "Verdana",
                fontColor: "Peru",
                fontSize: 28

            },
            animationEnabled: true,
            axisY: {
                tickThickness: 0,
                lineThickness: 0,
                valueFormatString: " ",
                gridThickness: 0                    
            },
            axisX: {
                tickThickness: 0,
                lineThickness: 0,
                labelFontSize: 18,
                labelFontColor: "Peru"

            },
            data: [
            {
                indexLabelFontSize: 26,
                toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{y}</strong></span>",

                indexLabelPlacement: "inside",
                indexLabelFontColor: "#FF6666",
                indexLabelFontWeight: 600,
                indexLabelFontFamily: "Verdana",
                color: "#00acee",
                type: "bar",
                dataPoints: provenancePaysPourcentageTwitter.reverse()
                /*[
                    { y: 21, label: "21%", indexLabel: "Suisse" },
                    { y: 25, label: "25%", indexLabel: "Pays-pas" },
                    { y: 33, label: "33%", indexLabel: "Alemande" },
                    { y: 36, label: "36%", indexLabel: "Italy" },
                    { y: 42, label: "42%", indexLabel: "Espanyol" },
                    { y: 49, label: "49%", indexLabel: "Belge" },
                    { y: 50, label: "50%", indexLabel: "Monago" },
                    { y: 55, label: "55%", indexLabel: "France" },
                    { y: 61, label: "61%", indexLabel: "USA" }
                ]*/
            }
            ]
        });
}

//jQuery(document).ready(function($){
    function loadJSON() {
        //$.getJSON('js/facebook.json', function(provenancePaysPourcentage) {
        $.getJSON('js/timeline.json', function(data) {
            var olEvents = $(".events ol");
            var olEventsContent = $(".events-content ol")
            jQuery.each(data.data, function() {
                console.log(this.date);
                
            });
        });
    }
//});
var provenancePaysPourcentageFacebook = 
[

      /*{
        "label": "France",
        "y": 6352,
        "indexLabel": "81,59%"
      },*/
      {
        "label": "Italie",
        "y": 206,
        "indexLabel": "2,65%"
      },

      {
        "label": "Belgique",
        "y": 189,
        "indexLabel": "2,43%"
      },
      {
        "label": "Espagne",
        "y": 105,
        "indexLabel": "1,35%"
      },
      {
        "label": "Allemagne",
        "y": 98,
        "indexLabel": "1,26%"
      },
      {
        "label": "Royaume Uni",
        "y": 83,
        "indexLabel": "1,07%"
      },
      {
        "label": "Etats Unis%",
        "y": 63,
        "indexLabel": "0,81%"
      },
      {
        "label": "Canada",
        "y": 48,
        "indexLabel": "0,62%"
      },
      {
        "label": "Suisse",
        "y": 36,
        "indexLabel": "0,46%"
      },
      {
        "label": "Portugal",
        "y": 31,
        "indexLabel": "0,4%"
      },
      {
        "label": "Algérie",
        "y": 29,
        "indexLabel": "0,37%"
      }/*,
      {
        "label": "Grèce",
        "y": 29,
        "indexLabel": "0,37%"
      },
      {
        "label": "Roumanie",
        "y": 24,
        "indexLabel": "0,31%"
      },
      {
        "label": "Maroc",
        "y": 23,
        "indexLabel": "0,3%"
      },
      {
        "label": "Tunisie",
        "y": 18,
        "indexLabel": "0,23%"
      },
      {
        "label": "Pologne",
        "y": 17,
        "indexLabel": "0,22%"
      },
      
      {
        "label": "Irlande",
        "y": 16,
        "indexLabel": "0,21%"
      },
      {
        "label": "Mexique",
        "y": 16,
        "indexLabel": "0,21%"
      },
      {
        "label": "Brésil",
        "y": 16,
        "indexLabel": "0,21%"
      },
      {
        "label": "Pays Bas",
        "y": 14,
        "indexLabel": "0,18%"
      },
      {
        "label": "Hongrie",
        "y": 13,
        "indexLabel": "0,17%"
      }/*,
      {
        "label": "Bulgarie",
        "y": 13,
        "indexLabel": "0,17"
      }/*,
      {
        "label": "Turquie",
        "y": 11,
        "indexLabel": "0,14"
      },
      {
        "label": "Danemark",
        "y": 11,
        "indexLabel": "0,14"
      },
      {
        "label": "Sénégal",
        "y": 11,
        "indexLabel": "0,14"
      },
      {
        "label": "Réunion",
        "y": 10,
        "indexLabel": "0,13"
      },
      {
        "label": "République Tchèque",
        "y": 9,
        "indexLabel": "0,12"
      },
      {
        "label": "Géorgie",
        "y": 8,
        "indexLabel": "0,1"
      },
      {
        "label": "Ukraine",
        "y": 8,
        "indexLabel": "0,1"
      },
      {
        "label": "Russie",
        "y": 8,
        "indexLabel": "0,1"
      },
      {
        "label": "Argentine",
        "y": 8,
        "indexLabel": "0,1"
      },
      {
        "label": "Pérou",
        "y": 8,
        "indexLabel": "0,1"
      },
      {
        "label": "Luxembourg",
        "y": 8,
        "indexLabel": "0,1"
      },
      {
        "label": "Autriche",
        "y": 8,
        "indexLabel": "0,1"
      },
      {
        "label": "Lituanie",
        "y": 7,
        "indexLabel": "0,09"
      },
      {
        "label": "Inde",
        "y": 7,
        "indexLabel": "0,09"
      },
      {
        "label": "Suède",
        "y": 7,
        "indexLabel": "0,09"
      },
      {
        "label": "Finlande",
        "y": 7,
        "indexLabel": "0,09"
      },
      {
        "label": "Philippines",
        "y": 6,
        "indexLabel": "0,08"
      },
      {
        "label": "Serbie",
        "y": 6,
        "indexLabel": "0,08"
      },
      {
        "label": "Guadeloupe",
        "y": 6,
        "indexLabel": "0,08"
      },
      {
        "label": "Guyane Française",
        "y": 6,
        "indexLabel": "0,08"
      },
      {
        "label": "Indonésie",
        "y": 6,
        "indexLabel": "0,08"
      },
      {
        "label": "Chili",
        "y": 5,
        "indexLabel": "0,06"
      },
      {
        "label": "Australie",
        "y": 5,
        "indexLabel": "0,06"
      }*/
    ]
var provenancePaysPourcentageTwitter =[
    /*{
      "y": "79"
      "label": "France",
      "indexLabel": "79"
    },*/
    {
      "y": 6,
      "label": "Belgique",
      "indexLabel": "6%"
    },
    {
      "y": 3,
      "label": "Royaume-Uni",
      "indexLabel": "3%"
    },
    {
      "y": 2,
      "label": "Italie",
      "indexLabel": "2%"
    },
    {
      "y": 1,
      "label": "Espagne",
      "indexLabel": "1%"
    },
    {
      "y": 1,
      "label": "Allemagne",
      "indexLabel": "1%"
    },
    {
      "y": 1,
      "label": "Etats-Unis",
      "indexLabel": "1%"
    },
    {
      "y": 1,
      "label": "Pays-Bas",
      "indexLabel": "1%"
    },
    {
      "y": 1,
      "label": "Canada",
      "indexLabel": "1%"
    },
    {
      "y": 1,
      "label": "Grèce",
      "indexLabel": "1%"
    }
  ]