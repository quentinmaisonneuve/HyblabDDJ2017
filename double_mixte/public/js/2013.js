function animateDigits2013() {
	$.get("data/nuiteesannuelles.json", function(data) {
    	var nbNuiteesPrecedentes = data[6].nbnuitees;
        var nbNuitees = data[7].nbnuitees;
        var array = nbNuitees.toString().split("").map(function(t){return parseInt(t)});
        var array2 = nbNuiteesPrecedentes.toString().split("").map(function(t){return parseInt(t)});
        
        replaceAllDigits(array2, 2013);
       
        setTimeout(function(){ $('#2013chiffre0').animateCss20130('flipInX'); }, 1000);
	    setTimeout(function(){ $('#2013chiffre1').animateCss20131('flipInX'); }, 1100);
	    setTimeout(function(){ $('#2013chiffre2').animateCss20132('flipInX');}, 1200);
	    setTimeout(function(){ $('#2013chiffre3').animateCss20133('flipInX');}, 1300);
	    setTimeout(function(){ $('#2013chiffre4').animateCss20134('flipInX');}, 1400);
	    setTimeout(function(){ $('#2013chiffre5').animateCss20135('flipInX');}, 1500);
	    setTimeout(function(){ $('#2013chiffre6').animateCss20136('flipInX');}, 1600);
        
	    $('.2013chiffre').removeClass('animated flipInX');

	    $.fn.extend({
		    animateCss20130: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(0, array, 2013); 
		        });
    		},
    		animateCss20131: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {    
	            	replaceDigit(1, array, 2013);
		        });
    		},
    		animateCss20132: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {    
	            	replaceDigit(2, array, 2013);
		        });
    		},
    		animateCss20133: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(3, array, 2013); 
		        });
    		},
    		animateCss20134: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(4, array, 2013);
		        });
    		},
    		animateCss20135: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(5, array, 2013);  
		        });
    		},
    		animateCss20136: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(6, array, 2013);
		        });
    		}
		});
    });
}

