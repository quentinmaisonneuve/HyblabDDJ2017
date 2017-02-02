function animateDigits2014() {
	$.get("data/nuiteesannuelles.json", function(data) {
    	var nbNuiteesPrecedentes = data[7].nbnuitees;
        var nbNuitees = data[8].nbnuitees;
        var array = nbNuitees.toString().split("").map(function(t){return parseInt(t)});
        var array2 = nbNuiteesPrecedentes.toString().split("").map(function(t){return parseInt(t)});
        
        replaceAllDigits(array2, 2014);
       
        setTimeout(function(){ $('#2014chiffre0').animateCss20140('flipInX'); }, 1000);
	    setTimeout(function(){ $('#2014chiffre1').animateCss20141('flipInX'); }, 1100);
	    setTimeout(function(){ $('#2014chiffre2').animateCss20142('flipInX');}, 1200);
	    setTimeout(function(){ $('#2014chiffre3').animateCss20143('flipInX');}, 1300);
	    setTimeout(function(){ $('#2014chiffre4').animateCss20144('flipInX');}, 1400);
	    setTimeout(function(){ $('#2014chiffre5').animateCss20145('flipInX');}, 1500);
	    setTimeout(function(){ $('#2014chiffre6').animateCss20146('flipInX');}, 1600);
        
	    $('.2014chiffre').removeClass('animated flipInX');

	    $.fn.extend({
		    animateCss20140: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(0, array, 2014); 
		        });
    		},
    		animateCss20141: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {    
	            	replaceDigit(1, array, 2014);
		        });
    		},
    		animateCss20142: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {    
	            	replaceDigit(2, array, 2014);
		        });
    		},
    		animateCss20143: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(3, array, 2014); 
		        });
    		},
    		animateCss20144: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(4, array, 2014);
		        });
    		},
    		animateCss20145: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(5, array, 2014);  
		        });
    		},
    		animateCss20146: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(6, array, 2014);
		        });
    		}
		});
    });
}

