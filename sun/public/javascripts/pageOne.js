
function putRandWeek()
{
	rand = Math.floor(Math.random() * 12) + 1; 
    switch (rand) {
    	case 1 :
    		$.getJSON('/ThisWeekRock/', function(data) 
    		{ 
    			number=data[0].value;
    			document.getElementById("randomWeek").innerHTML ="Cette semaine " + number + " d’auditeurs ont voulu écouter du rock"
    			document.getElementById("randomWeek2").innerHTML ="Et vous, vous écoutez quoi ?"
    		});
    		break;
    	case 2 :
    		$.getJSON('/ThisWeekAlternativeEtPunk/', function(data) { 
    			number=data[0].value;
    			document.getElementById("randomWeek").innerHTML ="Cette semaine " + number + " d’auditeurs ont partagé des musiques alternatives et punks"
    			document.getElementById("randomWeek2").innerHTML ="Et vous, vous écoutez quoi ?"
    		});
    		break;
    	case 3 :
    		$.getJSON('/ThisWeekUrban/', function(data) {
    			number=data[0].value;
    			document.getElementById("randomWeek").innerHTML ="Cette semaine " + number + " d’auditeurs ont choisi de vous faire découvrir des musiques urbaines"
    			document.getElementById("randomWeek2").innerHTML ="Et vous, vous écoutez quoi ?"});
    		break;
    	case 4 :
    		$.getJSON('/ThisWeekElectronica/', function(data) { 
    			number=data[0].value;
    			document.getElementById("randomWeek").innerHTML ="Cette semaine " + number + " d’auditeurs ont décidé de danser sur de la musique électronique"
    			document.getElementById("randomWeek2").innerHTML ="Et vous, vous écoutez quoi ?"
    	});
    		break;
    	case 5 :
    		$.getJSON('/ThisWeekClassique/', function(data) {
    			number=data[0].value;
    			document.getElementById("randomWeek").innerHTML ="Cette semaine " + number + " d’auditeurs ont décidé d’écouter de la musique classique"
    			document.getElementById("randomWeek2").innerHTML ="Et vous, vous écoutez quoi ?"
    		});
    		break;
    	case 6 :
    		$.getJSON('/ThisWeekJazz/', function(data) {
    			number=data[0].value;
    			document.getElementById("randomWeek").innerHTML ="Cette semaine " + number + " d’auditeurs ont partagé leur musique de jazz préférée"
    			document.getElementById("randomWeek2").innerHTML ="Et vous, vous écoutez quoi ?"
    		});
    		break;
    	
    	case 7 :
    		$.getJSON('/ThisWeekPop/', function(data) {
    			number=data[0].value; 
    			document.getElementById("randomWeek").innerHTML ="Cette semaine " + number + " d’auditeurs ont choisi de danser sur des chansons pop"
    			document.getElementById("randomWeek2").innerHTML ="Et vous, vous écoutez quoi ?"
    		});
    		break;
    	case 8 :
    		$.getJSON('/ThisWeekNostalgique/', function(data) {
    			number=data[0].value; 
    			document.getElementById("randomWeek").innerHTML ="Cette semaine " + number + " d’auditeurs se sentaient nostalgique"
    			document.getElementById("randomWeek2").innerHTML ="Et vous, quelle est votre humeur ? "
    		});
    		break;
    	case 9 :
    		$.getJSON('/ThisWeekCool/', function(data) {
    			number=data[0].value; 
    			document.getElementById("randomWeek").innerHTML ="Cette semaine " + number + " d’auditeurs étaient d’humeur cool"
    			document.getElementById("randomWeek2").innerHTML ="Et vous, quelle est votre humeur ? "
    		});
    		break;
    	case 10 :
    		$.getJSON('/ThisWeekStimulante/', function(data) {
    			number=data[0].value; 
    			document.getElementById("randomWeek").innerHTML ="Cette semaine " + number + " d’auditeurs ont voulu vous transmettre leur énergie"
    			document.getElementById("randomWeek2").innerHTML ="Et vous, quelle est votre humeur ? "
    		});
    		break;
    	case 11 :
    		$.getJSON('/ThisWeekAgressive/', function(data) {
    			number=data[0].value; 
    			document.getElementById("randomWeek").innerHTML ="Cette semaine " + number + " d’auditeurs ont partagé des musiques énervées"
    			document.getElementById("randomWeek2").innerHTML ="Et vous, quelle est votre humeur ? "
    		});
    		break;
    	case 12 :
    		$.getJSON('/ThisWeekSentimentale/', function(data) {
    			number=data[0].value; 
    			document.getElementById("randomWeek").innerHTML ="Cette semaine " + number + " d’auditeurs ont choisi de partager leurs sentiments"
    			document.getElementById("randomWeek2").innerHTML ="Et vous, quelle est votre humeur ? "
    		});
    		break;
    	
    	
    }
}
putRandWeek();