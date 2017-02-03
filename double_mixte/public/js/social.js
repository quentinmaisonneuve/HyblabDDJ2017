function replaceDigits(digit, array, annee) {
	
}

function animateSocial(annee) {
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
	console.log(indice);
	$.get("data/data-facebook.json", function(data) {
		if(indice != 0) {
			var nbFacebookPrecedents = data[indice-1].nombre;
			var array2 = nbFacebookPrecedents.toString().split("").map(function(t){return parseInt(t)});
		}
		var nbFacebook = data[indice].nombre;
		var array = nbFacebook.toString().split("").map(function(t){return parseInt(t)});
			
	});
}