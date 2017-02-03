/*$.fn.extend({
    animateCss: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(0, array, annee); 
        });       
    }
});*/

function replaceDigit(digit, array, annee) {
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
    }
    $('#'+annee+'chiffre'+digit).attr('src', 'img/'+image);
}

function replaceAllDigits(array, annee) {
    for(var i = 0; i <= 9; i++) {
        replaceDigit(i, array, annee);
    }
}

$.fn.extend({
    animateCss20110: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(0, array, annee); 
        });
    },
    animateCss20111: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {    
            replaceDigit(1, array, 2011);
        });
    },
    animateCss20112: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {    
            replaceDigit(2, array, annee);
        });
    },
    animateCss20113: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(3, array, annee); 
        });
    },
    animateCss20114: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(4, array, annee);
        });
    },
    animateCss20115: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(5, array, annee);  
        });
    },
    animateCss20116: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(6, array, annee);
        });
    },
    animateCss20120: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(0, array, annee); 
        });
    },
    animateCss20121: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {    
            replaceDigit(1, array, annee);
        });
    },
    animateCss20122: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {    
            replaceDigit(2, array, annee);
        });
    },
    animateCss20123: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(3, array, annee); 
        });
    },
    animateCss20124: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(4, array, annee);
        });
    },
    animateCss20125: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(5, array, annee);  
        });
    },
    animateCss20126: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(6, array, annee);
        });
    },
    animateCss20130: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(0, array, annee); 
        });
    },
    animateCss20131: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {    
            replaceDigit(1, array, annee);
        });
    },
    animateCss20132: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {    
            replaceDigit(2, array, annee);
        });
    },
    animateCss20133: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(3, array, annee); 
        });
    },
    animateCss20134: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(4, array, annee);
        });
    },
    animateCss20135: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(5, array, annee);  
        });
    },
    animateCss20136: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(6, array, annee);
        });
    },
    animateCss20140: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(0, array, annee); 
        });
    },
    animateCss20141: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {    
            replaceDigit(1, array, annee);
        });
    },
    animateCss20142: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {    
            replaceDigit(2, array, annee);
        });
    },
    animateCss20143: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(3, array, annee); 
        });
    },
    animateCss20144: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(4, array, annee);
        });
    },
    animateCss20145: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(5, array, annee);  
        });
    },
    animateCss20146: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(6, array, annee);
        });
    },
    animateCss20150: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(0, array, annee); 
        });
    },
    animateCss20151: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {    
            replaceDigit(1, array, annee);
        });
    },
    animateCss20152: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {    
            replaceDigit(2, array, annee);
        });
    },
    animateCss20153: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(3, array, annee); 
        });
    },
    animateCss20154: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(4, array, annee);
        });
    },
    animateCss20155: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(5, array, annee);  
        });
    },
    animateCss20156: function (animationName, array, annee) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            replaceDigit(6, array, annee);
        });
    }
});

function animateDigits(annee) {
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
       
        
        setTimeout(function(){ $('#'+annee+'chiffre0')['animateCss'+annee+0]('flipInX', array, annee); }, 1000);
        setTimeout(function(){ $('#'+annee+'chiffre1')['animateCss'+annee+1]('flipInX', array, annee); }, 1100);
        setTimeout(function(){ $('#'+annee+'chiffre2')['animateCss'+annee+2]('flipInX', array, annee); }, 1200);
        setTimeout(function(){ $('#'+annee+'chiffre3')['animateCss'+annee+3]('flipInX', array, annee);}, 1300);
        setTimeout(function(){ $('#'+annee+'chiffre4')['animateCss'+annee+4]('flipInX', array, annee);}, 1400);
        setTimeout(function(){ $('#'+annee+'chiffre5')['animateCss'+annee+5]('flipInX', array, annee);}, 1500);
        setTimeout(function(){ $('#'+annee+'chiffre6')['animateCss'+annee+6]('flipInX', array, annee);}, 1600);

       
        $('.'+annee+'chiffre').removeClass('animated flipInX');
    });
}
