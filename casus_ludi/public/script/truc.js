/* Intro animations */

$(document).ready(function(){
	//exemple d'animation de rotation :
      $(".polygon").transition({ rotate: 720 },5000,'linear');
      $("#balance").transition({ rotate: 0, delay: 2000 },5000);
});