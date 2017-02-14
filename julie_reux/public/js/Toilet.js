$('#Stat').html("Quelle repartition H/F ?");

var to;
var to2;
var shakeMan = function() {
    $("#man").effect( "shake", { direction: "up", times: 1, distance: 10},250 );
};
var shakeWoman = function() {
    $("#woman").effect( "shake", { direction: "up", times: 1, distance: 10},250 );
};

$( "#man" )
  .hover(function() {
    $('#Stat').html("92 %");
	$(this).css({ opacity: 0.7 });
	
	$(this).effect( "shake", { direction: "up", times: 1, distance: 10},250 );
	 to = window.setInterval(shakeMan, 1000) //set the speed of jump
  },function() {
    window.clearInterval(to);
})
  .mouseout(function() {
    $('#Stat').html("Quelle repartition H/F ?");
	$(this).css({ opacity: 1 });
  });
 
$( "#woman" )
  .hover(function() {
    $('#Stat').html("8 %");
	$(this).css({ opacity: 0.7 });
	
	$(this).effect( "shake", { direction: "up", times: 1, distance: 10},250 );
	 to = window.setInterval(shakeWoman, 1000) //set the speed of jump
  },function() {
    window.clearInterval(to);
})
  .mouseout(function() {
    $('#Stat').html("Quelle repartition H/F ?");
	$(this).css({ opacity: 1 });
  });
 