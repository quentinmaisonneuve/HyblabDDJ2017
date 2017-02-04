$.fn.extend({
    animateFacebook20130: function (animationName, array, annee, label) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigitSocial(0, array, annee, label); 
        });
    },
	animateFacebook20131: function (animationName, array, annee, label) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigitSocial(1, array, annee, label); 
        });
    },
	animateFacebook20132: function (animationName, array, annee, label) {
	    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	    this.addClass('animated ' + animationName).one(animationEnd, function() {
	        replaceDigitSocial(2, array, annee, label); 
    	});
    },
    animateFacebook20133: function (animationName, array, annee, label) {
	    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	    this.addClass('animated ' + animationName).one(animationEnd, function() {
	        replaceDigitSocial(3, array, annee, label); 
    	});
    },
    animateFacebook20134: function (animationName, array, annee, label) {
	    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	    this.addClass('animated ' + animationName).one(animationEnd, function() {
	        replaceDigitSocial(4, array, annee, label); 
    	});
    },
    animateTwitter20130: function (animationName, array, annee, label) {
	    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	    this.addClass('animated ' + animationName).one(animationEnd, function() {
	        replaceDigitSocial(0, array, annee, label); 
    	});
    },
    animateTwitter20131: function (animationName, array, annee, label) {
	    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	    this.addClass('animated ' + animationName).one(animationEnd, function() {
	        replaceDigitSocial(1, array, annee, label); 
    	});
    },
    animateTwitter20132: function (animationName, array, annee, label) {
	    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	    this.addClass('animated ' + animationName).one(animationEnd, function() {
	        replaceDigitSocial(2, array, annee, label); 
    	});
    },
    animateTwitter20133: function (animationName, array, annee, label) {
	    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	    this.addClass('animated ' + animationName).one(animationEnd, function() {
	        replaceDigitSocial(3, array, annee, label); 
    	});
    },
    animateTwitter20134: function (animationName, array, annee, label) {
	    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	    this.addClass('animated ' + animationName).one(animationEnd, function() {
	        replaceDigitSocial(4, array, annee, label); 
    	});
    }
});

function replaceDigitSocial(digit, array, annee, label) {
	var image;
    switch(array[digit]) {
        case 0:
            image = 'zero.svg';
            break;
        case 1:
            image = 'un.svg';
            break;
        case 2:
            image = 'deux.svg';
            break;
        case 3:
            image = 'trois.svg';
            break;
        case 4:
            image = 'quatre.svg';
            break; 
        case 5:
            image = 'cinq.svg';
            break;
        case 6:
            image = 'six.svg';
            break;
        case 7:
            image = 'sept.svg';
            break;
        case 8:
            image = 'huit.svg';
            break;
        case 9:
            image = 'neuf.svg';
            break; 
        default:
        	image = 'blanc.svg';
    }
    if(image != 'blanc.svg') {
    	$('#'+annee+label+digit).attr('src', 'img/'+image);
    }
    
}

function replaceAllDigitsSocial(array, annee, label) {
	var i = 5-array.length;
    for(i; i <= 4; i++) {
        replaceDigitSocial(i, array, annee, label);
    }
}

function animateSocialFacebook(annee) {
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

	$.get("data/data-facebook.json", function(data) {
		if(annee != 2012) {
			var nbFacebookPrecedents = data[indice-1].nombre;
			var array2 = nbFacebookPrecedents.toString().split("").map(function(t){return parseInt(t)});
		}
		var nbFacebook = data[indice].nombre;
		var array = nbFacebook.toString().split("").map(function(t){return parseInt(t)});


		// données de l'année précédente
		if(annee != 2012) {
			if((5-array2.length)!=0) {
				for(var i=0; i<(5-array2.length); i++) {
					array2.unshift(-1);
				}
			}
			replaceAllDigitsSocial(array2, annee, "facebook");
		}
		
		if((5-array.length)!=0) {
			for(var i=0; i<=(5-array.length); i++) {
				array.unshift(-1);
			}
		}
		var label = "facebook";
		setTimeout(function(){ $('#'+annee+'facebook0')['animateFacebook'+annee+0]('flipInX', array, annee, label); }, 1000);
        setTimeout(function(){ $('#'+annee+'facebook1')['animateFacebook'+annee+1]('flipInX', array, annee, label); }, 1100);
        setTimeout(function(){ $('#'+annee+'facebook2')['animateFacebook'+annee+2]('flipInX', array, annee, label); }, 1200);
        setTimeout(function(){ $('#'+annee+'facebook3')['animateFacebook'+annee+3]('flipInX', array, annee, label);}, 1300);
        setTimeout(function(){ $('#'+annee+'facebook4')['animateFacebook'+annee+4]('flipInX', array, annee, label);}, 1400);

       	$('.'+annee+'facebook').removeClass('animated flipInX')
	});

}

function animateSocialTwitter(annee) {
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
	$.get("data/data-twitter.json", function(data) {
		if(annee != 2012) {
			var nbTwitterPrecedents = data[indice-1].nombre;
			var array2 = nbTwitterPrecedents.toString().split("").map(function(t){return parseInt(t)});
		}
		var nbTwitter = data[indice].nombre;
		var array = nbTwitter.toString().split("").map(function(t){return parseInt(t)});

		var label = "twitter";
		
		// données de l'année précédente
		if(annee != 2012) {
			if((5-array2.length)!=0) {
				for(var i=0; i<(5-array2.length); i++) {
					array2.unshift(-1);
				}
			}
			replaceAllDigitsSocial(array2, annee, label);
		}
		
		if((5-array.length)!=0) {
			for(var i=0; i<=(5-array.length); i++) {
				array.unshift(-1);
			}
		}

		setTimeout(function(){ $('#'+annee+'twitter0')['animateTwitter'+annee+0]('flipInX', array, annee, label); }, 1000);
        setTimeout(function(){ $('#'+annee+'twitter1')['animateTwitter'+annee+1]('flipInX', array, annee, label); }, 1100);
        setTimeout(function(){ $('#'+annee+'twitter2')['animateTwitter'+annee+2]('flipInX', array, annee, label); }, 1200);
        setTimeout(function(){ $('#'+annee+'twitter3')['animateTwitter'+annee+3]('flipInX', array, annee, label);}, 1300);
        setTimeout(function(){ $('#'+annee+'twitter4')['animateTwitter'+annee+4]('flipInX', array, annee, label);}, 1400);

       	$('.'+annee+'twitter').removeClass('animated flipInX')
	});
}