function putRandWeek()
{
	rand = 2;//Math.floor(Math.random() * 11) + 1; 
    switch (rand) {
    	case 1 :
    		$.getJSON('/ThisWeekRock/', function(data) 
    		{ 
    			number=data[0].value;
				if (number>1)
    				document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeurs ont voulu écouter du rock."
				else
					document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeur a voulu écouter du rock."
    			document.getElementById("randomWeek2").innerHTML ="Et vous, vous écoutez quoi ?"


    			$.getJSON('/5LastGenre/Rock/', function(data2) 
    		{ 
    			var CoverList = "";
    			for (var i = 0, len = data2.length; i < len; i++) {
  				var title=data2[i].title;
  				var artist=data2[i].artist;	
    				$.getJSON('/Cover/artist/title/', function(data3) {
	    				if (data3 =! undefined && data3.track =! undefined && data3.track.album =! undefined)
	    				{
							//Cover=data2.track.album.image[2]['#text'];
							//CoverList+= "<img src="+Cover+"/>";
							CoverList += "a ";
						}
						//else throw 'errordejugement'
    				});//end first get json
    			}//end for each
    			document.getElementById("Cover").innerHTML = CoverList;
    			});
    		});
    		
    		
    		break;
    	case 2 :
    		$.getJSON('/ThisWeekAlternativeEtPunk/', function(data) { 
    			number=data[0].value;
				if (number>1)
    				document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeurs ont partagé des musiques alternatives et punks."
				else
					document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeur a partagé des musiques alternatives et punks."
    			document.getElementById("randomWeek2").innerHTML ="Et vous, vous écoutez quoi ?"
    		});
    		break;
    	case 3 :
    		$.getJSON('/ThisWeekUrban/', function(data) {
    			number=data[0].value;
				if (number>1)
    				document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeurs ont choisi de vous faire découvrir des musiques urbaines."
				else
					document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeur a choisi de vous faire découvrir des musiques urbaines."
    			document.getElementById("randomWeek2").innerHTML ="Et vous, vous écoutez quoi ?"});
    		break;
    	case 4 :
    		$.getJSON('/ThisWeekElectronica/', function(data) { 
    			number=data[0].value;
				if (number>1)
    				document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeurs ont décidé de danser sur de la musique électronique."
				else
					document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeur a décidé de danser sur de la musique électronique."
    			document.getElementById("randomWeek2").innerHTML ="Et vous, vous écoutez quoi ?"
    	});
    		break;
    	
    	case 5 :
    		$.getJSON('/ThisWeekJazz/', function(data) {
    			number=data[0].value;
				if (number>1)
    				document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeurs ont partagé leur musique de jazz préférée."
				else
					document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeur a partagé sa musique de jazz préférée."
    			document.getElementById("randomWeek2").innerHTML ="Et vous, vous écoutez quoi ?"
    		});
    		break;
    	
    	case 6 :
    		$.getJSON('/ThisWeekPop/', function(data) {
    			number=data[0].value;
				if (number>1)
    				document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeurs ont choisi de danser sur des chansons pop."
				else
					document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeur a choisi de danser sur des chansons pop."
    			document.getElementById("randomWeek2").innerHTML ="Et vous, vous écoutez quoi ?"
    		});
    		break;
    	case 7 :
    		$.getJSON('/ThisWeekNostalgique/', function(data) {
    			number=data[0].value;
				if (number>1)
    				document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeurs se sentaient nostalgique."
				else
					document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeur se sentait nostalgique."
    			document.getElementById("randomWeek2").innerHTML ="Et vous, quelle est votre humeur ? "
    		});
    		break;
    	case 8 :
    		$.getJSON('/ThisWeekCool/', function(data) {
    			number=data[0].value;
				if (number>1)
    				document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeurs étaient d’humeur cool."
				else
					document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeur était d’humeur cool."
    			document.getElementById("randomWeek2").innerHTML ="Et vous, quelle est votre humeur ? "
    		});
    		break;
    	case 9 :
    		$.getJSON('/ThisWeekStimulante/', function(data) {
    			number=data[0].value;
				if (number>1)
    				document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeurs ont voulu vous transmettre leur énergie."
				else
					document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeur a voulu vous transmettre son énergie."
    			document.getElementById("randomWeek2").innerHTML ="Et vous, quelle est votre humeur ? "
    		});
    		break;
    	case 10 :
    		$.getJSON('/ThisWeekAgressive/', function(data) {
    			number=data[0].value;
				if (number>1)
    				document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeurs ont partagé des musiques énervées."
				else
					document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeur a partagé des musiques énervées."
    			document.getElementById("randomWeek2").innerHTML ="Et vous, quelle est votre humeur ? "
    		});
    		break;
    	case 11 :
    		$.getJSON('/ThisWeekSentimentale/', function(data) {
    			number=data[0].value;
				if (number>1)
    				document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeurs ont choisi de partager leurs sentiments."
				else
					document.getElementById("randomWeek").innerHTML ="Cette semaine, " + number + " auditeur a choisi de partager ses sentiments."
    			document.getElementById("randomWeek2").innerHTML ="Et vous, quelle est votre humeur ? "
    		});
    		break;
    	
    	
    }
}
putRandWeek();




$(document).ready(function() {
    $('#fullpage').fullpage();
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
});

$(document).ready(function() {
    $('.js-scrollTo').on('click', function() {
        $.fn.fullpage.moveSectionDown();
    }); 
});

$('input[type="range"]').rangeslider();
$('input[type="range"]').rangeslider('destroy');
$('input[type="range"]').rangeslider('update', true);