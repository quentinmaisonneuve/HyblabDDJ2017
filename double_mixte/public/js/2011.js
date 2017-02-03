function animateDigits() {
	$('.chiffre').attr('src', 'img/zero.svg');

	$.get("data/nuiteesannuelles.json", function(data) {
    	        
        var nbNuitees = data[5].nbnuitees;
        var array = nbNuitees.toString().split("").map(function(t){return parseInt(t)});
        setTimeout(function(){ $('#chiffre0').animateCss0('flipInX'); }, 1000);
	    setTimeout(function(){ $('#chiffre1').animateCss1('flipInX'); }, 1100);
	    setTimeout(function(){ $('#chiffre2').animateCss2('flipInX');}, 1200);
	    setTimeout(function(){ $('#chiffre3').animateCss3('flipInX');}, 1300);
	    setTimeout(function(){ $('#chiffre4').animateCss4('flipInX');}, 1400);
	    setTimeout(function(){ $('#chiffre5').animateCss5('flipInX');}, 1500);
	    setTimeout(function(){ $('#chiffre6').animateCss6('flipInX');}, 1600);
        
	    $('.chiffre').removeClass('animated flipInX');

	    function replaceDigit(digit) {
	    	if(array[digit] == 0) {
        		$('#chiffre'+digit).attr('src', 'img/zero.svg');
        	} 
        	else if(array[digit] == 1) {
        		$('#chiffre'+digit).attr('src', 'img/un.svg');
        	} 
        	else if(array[digit] == 2) {
        		$('#chiffre'+digit).attr('src', 'img/deux.svg');
        	}
        	else if(array[digit] == 3) {
        		$('#chiffre'+digit).attr('src', 'img/trois.svg');
        	}
        	else if(array[digit] == 4) {
        		$('#chiffre'+digit).attr('src', 'img/quatre.svg');
        	}
        	else if(array[digit] == 5) {
        		$('#chiffre'+digit).attr('src', 'img/cinq.svg');
        	}
        	else if(array[digit] == 6) {
        		$('#chiffre'+digit).attr('src', 'img/six.svg');
        	}
        	else if(array[digit] == 7) {
        		$('#chiffre'+digit).attr('src', 'img/sept.svg');
        	}
        	else if(array[digit] == 8) {
        		$('#chiffre'+digit).attr('src', 'img/huit.svg');
        	}
        	else if(array[digit] == 9) {
        		$('#chiffre'+digit).attr('src', 'img/neuf.svg');
        	} 
	    }
	    
	    $.fn.extend({
		    animateCss0: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(0); 
		        });
    		},
    		animateCss1: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {    
	            	replaceDigit(1);
		        });
    		},
    		animateCss2: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {    
	            	replaceDigit(2);
		        });
    		},
    		animateCss3: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(3); 
		        });
    		},
    		animateCss4: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(4);
		        });
    		},
    		animateCss5: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(5);  
		        });
    		},
    		animateCss6: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            	replaceDigit(6);
		        });
    		}
		});
    });

       
        
    

}

