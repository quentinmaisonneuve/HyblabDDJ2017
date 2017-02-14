

function animateBus(nomID){$("#"+nomID).animate({
 left: $("#"+nomID).parent().width()  }, 8000);
}



function animateFirstBus(){$("#busVan11").animate({
 left: $("#busVan11").parent().width() }, 8000);
}


function animateLastBus(){$("#busVan16").animate({
 left: $("#busVan16").parent().width()/2- $("#busVan16").width()}, 8000);
}

