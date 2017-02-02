function animateDigits2011() {
	$('.chiffre').attr('src', 'img/zero.svg');

	$.get("data/nuiteesannuelles.json", function(data) {
    	        
        var nbNuitees = data[5].nbnuitees;
        var array = nbNuitees.toString().split("").map(function(t){return parseInt(t)});
        setTimeout(function(){ $('#2011chiffre0').animateCss0('flipInX'); }, 1000);
	    setTimeout(function(){ $('#2011chiffre1').animateCss1('flipInX'); }, 1100);
	    setTimeout(function(){ $('#2011chiffre2').animateCss2('flipInX');}, 1200);
	    setTimeout(function(){ $('#2011chiffre3').animateCss3('flipInX');}, 1300);
	    setTimeout(function(){ $('#2011chiffre4').animateCss4('flipInX');}, 1400);
	    setTimeout(function(){ $('#2011chiffre5').animateCss5('flipInX');}, 1500);
	    setTimeout(function(){ $('#2011chiffre6').animateCss6('flipInX');}, 1600);
        
	    $('.chiffre').removeClass('animated flipInX');


	    $.fn.extend({
		    animateCss0: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(0, array, 2011); 
		        });
    		},
    		animateCss1: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {    
	            	replaceDigit(1, array, 2011);
		        });
    		},
    		animateCss2: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {    
	            	replaceDigit(2, array, 2011);
		        });
    		},
    		animateCss3: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(3, array, 2011); 
		        });
    		},
    		animateCss4: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(4, array, 2011);
		        });
    		},
    		animateCss5: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(5, array, 2011);  
		        });
    		},
    		animateCss6: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(6, array, 2011);
		        });
    		}
		});
    });
}

