

function animateBus(nomID){$("#"+nomID).animate({
 left: $("#"+nomID).parent().width()/2  - $("#"+nomID).width() }, 5000);
}



function animateFirstBus(){$("#busVan11").animate({
 left: $("#busVan11").parent().width() - $("#busVan11").width()}, 10000);
	 $(".moveDiv")
        .mouseover(function () { $(this).pauseAnimation(); })
        .mouseout(function () { $(this).resumeAnimation(); });
}

