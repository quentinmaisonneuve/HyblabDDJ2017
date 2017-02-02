function animateDigits2015() {
	$.get("data/nuiteesannuelles.json", function(data) {
    	var nbNuiteesPrecedentes = data[8].nbnuitees;
        var nbNuitees = data[9].nbnuitees;
        var array = nbNuitees.toString().split("").map(function(t){return parseInt(t)});
        var array2 = nbNuiteesPrecedentes.toString().split("").map(function(t){return parseInt(t)});
        
        replaceAllDigits(array2, 2015);
       
        setTimeout(function(){ $('#2015chiffre0').animateCss20150('flipInX'); }, 1000);
	    setTimeout(function(){ $('#2015chiffre1').animateCss20151('flipInX'); }, 1100);
	    setTimeout(function(){ $('#2015chiffre2').animateCss20152('flipInX');}, 1200);
	    setTimeout(function(){ $('#2015chiffre3').animateCss20153('flipInX');}, 1300);
	    setTimeout(function(){ $('#2015chiffre4').animateCss20154('flipInX');}, 1400);
	    setTimeout(function(){ $('#2015chiffre5').animateCss20155('flipInX');}, 1500);
	    setTimeout(function(){ $('#2015chiffre6').animateCss20156('flipInX');}, 1600);
        
	    $('.2015chiffre').removeClass('animated flipInX');

	    $.fn.extend({
		    animateCss20150: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(0, array, 2015); 
		        });
    		},
    		animateCss20151: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {    
	            	replaceDigit(1, array, 2015);
		        });
    		},
    		animateCss20152: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {    
	            	replaceDigit(2, array, 2015);
		        });
    		},
    		animateCss20153: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(3, array, 2015); 
		        });
    		},
    		animateCss20154: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(4, array, 2015);
		        });
    		},
    		animateCss20155: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(5, array, 2015);  
		        });
    		},
    		animateCss20156: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(6, array, 2015);
		        });
    		}
		});
    });
}

