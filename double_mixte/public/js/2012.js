function animateDigits2012() {
	$.get("data/nuiteesannuelles.json", function(data) {
    	var nbNuiteesPrecedentes = data[5].nbnuitees;
        var nbNuitees = data[6].nbnuitees;
        var array = nbNuitees.toString().split("").map(function(t){return parseInt(t)});
        var array2 = nbNuiteesPrecedentes.toString().split("").map(function(t){return parseInt(t)});
        
        replaceAllDigits(array2, 2012);
       
        setTimeout(function(){ $('#2012chiffre0').animateCss20120('flipInX'); }, 1000);
	    setTimeout(function(){ $('#2012chiffre1').animateCss20121('flipInX'); }, 1100);
	    setTimeout(function(){ $('#2012chiffre2').animateCss20122('flipInX');}, 1200);
	    setTimeout(function(){ $('#2012chiffre3').animateCss20123('flipInX');}, 1300);
	    setTimeout(function(){ $('#2012chiffre4').animateCss20124('flipInX');}, 1400);
	    setTimeout(function(){ $('#2012chiffre5').animateCss20125('flipInX');}, 1500);
	    setTimeout(function(){ $('#2012chiffre6').animateCss20126('flipInX');}, 1600);
        
	    $('.2012chiffre').removeClass('animated flipInX');

	    $.fn.extend({
		    animateCss20120: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(0, array, 2012); 
		        });
    		},
    		animateCss20121: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {    
	            	replaceDigit(1, array, 2012);
		        });
    		},
    		animateCss20122: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {    
	            	replaceDigit(2, array, 2012);
		        });
    		},
    		animateCss20123: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(3, array, 2012); 
		        });
    		},
    		animateCss20124: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(4, array, 2012);
		        });
    		},
    		animateCss20125: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(5, array, 2012);  
		        });
    		},
    		animateCss20126: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(6, array, 2012);
		        });
    		}
		});
    });
}

