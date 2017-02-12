'use strict';

// les id des sections sur lesquelles la "slide nav" ne doit pas apparaitre
var idsOfSectionsWithoutSlideNav = ["scenario1", "scenario2", "scenario3"];

// on récupère la section actuellement affichée
function updateSlideNav() {    
    var idOfCurrentVisibleSection = document.getElementsByClassName('active')[0].id;

    if (idsOfSectionsWithoutSlideNav.includes(idOfCurrentVisibleSection)) {
        // si la section actuellement affichée fait partie de la liste des sections sur lesquelles la "slide nav" ne doit pas apparaitre
        // on enlève la slide nav de l'affichage
        document.getElementById("fp-nav").setAttribute("style", "display: none");

        switch (idOfCurrentVisibleSection) {
            case "scenario1": 
                startScene1();
                break;
            case "scenario2":
                startScene2();
                break;
            case 'scenario3':
                startScene3();
                break;
        }
    }
    
    else {
        document.getElementById("fp-nav").setAttribute("style", "");
    }
}