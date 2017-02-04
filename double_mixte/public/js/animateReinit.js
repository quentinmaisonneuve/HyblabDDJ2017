function animateChiffreReinit(annee) {
	    var indice;
    if(annee === 2011) {
        indice = 5;
    }
    else if(annee === 2012) {
        indice = 6;
    }
    else if(annee === 2013) {
        indice = 7;
    }
    else if(annee === 2014) {
        indice = 8;
    }
    else if(annee === 2015) {
        indice = 9;
    }
	if(annee === 2011) {
        $('.2011chiffre').attr('src', 'img/zero.svg');
    }
    $.get("data/nuiteesannuelles.json", function(data) {
        var nbNuiteesPrecedentes = data[indice-1].nbnuitees;
        var nbNuitees = data[indice].nbnuitees;
        var array = nbNuitees.toString().split("").map(function(t){return parseInt(t)});
        var array2 = nbNuiteesPrecedentes.toString().split("").map(function(t){return parseInt(t)});

        
        if(annee != 2011) {
            replaceAllDigits(array2, annee); 
        }
       
    });
}

function animateFacebookReinit(annee) {
	var indice;
	if(annee === 2012) {
		indice = 0;
	}
	else if(annee == 2013) {
		indice = 1;
	}
	else if(annee === 2014) {
		indice = 2;
	}
	else if(annee === 2015) {
		indice = 3;
	}
	else {
		indice = 4;
	}

	 if(annee === 2012) {

        $('.2012insta').attr('src', 'img/blanc.svg');
        $('.2012facebook').attr('src', 'img/blanc.svg');
        $('.2012twitter').attr('src', 'img/blanc.svg');
    }

	$.get("data/data-facebook.json", function(data) {
		if(annee != 2012) {
			var nbFacebookPrecedents = data[indice-1].nombre;
			var array2 = nbFacebookPrecedents.toString().split("").map(function(t){return parseInt(t)});
		}
		var nbFacebook = data[indice].nombre;
		var array = nbFacebook.toString().split("").map(function(t){return parseInt(t)});

		var label = "facebook";
		// données de l'année précédente
		if(annee != 2012) {
			if((array2.length)!=5) {
				var e = 5-array2.length;
				for(var i=0; i<e; i++) {
					array2.unshift(-1);
				}
			}
			replaceAllDigitsSocial(array2, annee, label);
		}
		
	});
}

function animateTwitterReinit(annee) {
	var indice;
	if(annee === 2012) {
		indice = 0;
	}
	else if(annee == 2013) {
		indice = 1;
	}
	else if(annee === 2014) {
		indice = 2;
	}
	else if(annee === 2015) {
		indice = 3;
	}
	else {
		indice = 4;
	}

	 if(annee === 2012) {

        $('.2012insta').attr('src', 'img/blanc.svg');
        $('.2012facebook').attr('src', 'img/blanc.svg');
        $('.2012twitter').attr('src', 'img/blanc.svg');
    }

	$.get("data/data-twitter.json", function(data) {
		if(annee != 2012) {
			var nbFacebookPrecedents = data[indice-1].nombre;
			var array2 = nbFacebookPrecedents.toString().split("").map(function(t){return parseInt(t)});
		}
		var nbFacebook = data[indice].nombre;
		var array = nbFacebook.toString().split("").map(function(t){return parseInt(t)});

		var label = "twitter";
		// données de l'année précédente
		if(annee != 2012) {
			if((array2.length)!=5) {
				var e = 5-array2.length;
				for(var i=0; i<e; i++) {
					array2.unshift(-1);
				}
			}
			replaceAllDigitsSocial(array2, annee, label);
		}
		
	});
}

function animateInstagramReinit(annee) {
	var indice;
	if(annee === 2012) {
		indice = 0;
	}
	else if(annee == 2013) {
		indice = 1;
	}
	else if(annee === 2014) {
		indice = 2;
	}
	else if(annee === 2015) {
		indice = 3;
	}
	else {
		indice = 4;
	}
	
	 if(annee === 2012) {

        $('.2012insta').attr('src', 'img/blanc.svg');
        $('.2012facebook').attr('src', 'img/blanc.svg');
        $('.2012twitter').attr('src', 'img/blanc.svg');
    }

	$.get("data/data-instagram.json", function(data) {
		if(annee != 2012) {
			var nbFacebookPrecedents = data[indice-1].nombre;
			var array2 = nbFacebookPrecedents.toString().split("").map(function(t){return parseInt(t)});
		}
		var nbFacebook = data[indice].nombre;
		var array = nbFacebook.toString().split("").map(function(t){return parseInt(t)});

		var label = "insta";

		// données de l'année précédente
		if(annee != 2012) {
			if((array2.length)!=5) {
				var e = 5-array2.length;
				for(var i=0; i<e; i++) {
					array2.unshift(-1);
				}
			}
			replaceAllDigitsSocial(array2, annee, label);
		}
		
	});
}
