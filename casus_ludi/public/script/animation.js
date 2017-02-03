/* Intro animations */

$(document).ready(function(){

   		animerIntro();

   		$("#thumbnail").click(function(){
   			$('video').animate({opacity:1});
   			$("#thumbnail").animate({opacity:0},500);
   			$('video').get(0).play();
   		});

});

function animerIntro(){
	var delai = 2500;
	//cle_usb de la page d'accueil
	$('#cle_USB').transition({ x:'12%' },2000);

    //Horloge de la page d'accueil
	$('#aiguille1').transition({ rotate: (360/12)*60, delay : delai},60000);
	$('#aiguille2').transition({ rotate: 360*60,  delay : delai},60000);

	//Main de la page d'accueil
	$('#main').transition({x:'10px',delay:delai},1000,'linear');
	for (var i = 0; i < 50; i++) {
		$('#main').transition({x:'0px'},1000,'linear');
		$('#main').transition({x:'10px'},1000,'linear');
	};

	//Nuages de la page d'accueil
	$('#nuages').transition({x:'-1%',y:'0.5%', delay:delai},3000);
	for (var i = 0; i < 50; i++) {
		$('#nuages').transition({x:'0%',y:'0%'},3000);
		$('#nuages').transition({x:'-1%',y:'0.5%'},3000);
	};

	//Fleche de la page d'accueil
	$('#fleche').transition({y:'15%', delay:delai},1000,'linear');
	for (var i = 0; i < 50; i++) {
		$('#fleche').transition({y:'0%'},1000,'linear');
		$('#fleche').transition({y:'15%'},1000,'linear');
	};

	//Personnage écran accueil
	$('#personnage').transition({opacity:1, delay:delai},1000);

	//Thumbnail
	for (var i = 0; i < 3; i++) {
		$('#personnage').transition({opacity:0.7, delay:delai},1500);
		$('#personnage').transition({opacity:1, delay:delai},1500);
	};
}

function resetIntro(){
	//Arrêt des animations
	$('#aiguille1').stop(true,true);
	$('#aiguille2').stop(true,true);
	$('#main').stop(true,true);
	$('#cle_USB').stop(true,true);
	$('#nuages').stop(true,true);
	$('#fleche').stop(true,true);
	$('personnage').stop(true,true);

	//Remise à zéro
	$('#aiguille1').transition({ rotate: 0});
	$('#aiguille2').transition({ rotate: 0});
	$('#main').transition({x:0});
	$('#nuages').transition({x:0,y:0});
	$('#cle_USB').transition({ x:0});
	$('#fleche').transition({ y:0});
	$('#personnage').transition({opacity:0});
}

function animerMotion(){

	for (var i = 0; i < 2; i++) {
		//clignement des yeux
			//Une fois
		$('#paupieresHaut').transition({y:'25%',delay:3000},200);
		$('#paupieresBas').transition({y:'-25%',delay:3000},200);	
		$('#paupieresHaut').transition({y:'0%'},300);
		$('#paupieresBas').transition({y:'-0%'},300);
			//Deux fois
		$('#paupieresHaut').transition({y:'25%',delay:2700},200);
		$('#paupieresBas').transition({y:'-25%',delay:2700},200);	
		$('#paupieresHaut').transition({y:'0%'},300);
		$('#paupieresBas').transition({y:'-0%'},300);
			//Trois fois
		$('#paupieresHaut').transition({y:'25%',delay:4000},200);
		$('#paupieresBas').transition({y:'-25%',delay:4000},200);	
		$('#paupieresHaut').transition({y:'0%'},300);
		$('#paupieresBas').transition({y:'-0%'},300);
			//Quatre fois
		$('#paupieresHaut').transition({y:'25%',delay:4000},200);
		$('#paupieresBas').transition({y:'-25%',delay:4000},200);	
		$('#paupieresHaut').transition({y:'0%'},300);
		$('#paupieresBas').transition({y:'-0%'},300);

		//mouvement des pupilles
		$('#yeux').transition({x:'10%',delay:1500},700);
		$('#yeux').transition({x:'0%'},700);
		$('#yeux').transition({x:'-10%', y:'-5%',delay:1500},1000);
		$('#yeux').transition({x:'0%', y:'0%', delay:1000},500);
		$('#yeux').transition({x:'10%',delay:1500},1000);
		$('#yeux').transition({x:'10%',y:'7%',delay:1500},1000);
		$('#yeux').transition({x:'10%',y:'-5%',delay:5000},1000);
		$('#yeux').transition({x:'0%',y:'0%',delay:3000},1000);
	}

	//Aiguilles de l'horloge
	$('#aiguilleMotion1').transition({ rotate: (360/12)*60},60000);
	$('#aiguilleMotion2').transition({ rotate: 360*60},60000);
	

	$('#tableau').transition({y:'77%'},2000);

	$('#thumbnail').transition({opacity:1,delay:2000},1000);
}

function resetMotion(){
	$('#tableau').transition({y:'0%'});
	$('video').transition({opacity:0});

	$('#aiguilleMotion1').stop(true,true);
	$('#aiguilleMotion2').stop(true,true);

	$('#aiguilleMotion1').transition({ rotate: 0});
	$('#aiguilleMotion2').transition({ rotate: 0});

	$('#thumbnail').transition({opacity:0});
}