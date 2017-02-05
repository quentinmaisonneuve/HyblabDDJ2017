function getHeure()
{
	return(document.getElementById("timeline").value);
}

$(document).ready(function() {
      $('#timeline_value').html((" " + ($('#timeline').val()*2) + "h " + " - " + ($('#timeline').val()*2+2) + "h "));
    });

$(document).on('input change', '#timeline', function() {
      $('#timeline_value').html((" " + ($('#timeline').val()*2) + "h " + " - " + ($('#timeline').val()*2+2) + "h "));
    });

function toggle(el){
    if(el.className!="pause")
    {
        el.src='/images/bouton_semaine_weekend_page2v2.png';
        el.className="pause";
    }
    else if(el.className=="pause")
    {
        el.src='/images/bouton_semaine_weekend_page2.png';
        el.className="play";
    }
    return false;
}

function toggleTwo(el){
    if(el.className!="pause")
    {
        el.src='/images/ambiance_off.svg';
        el.className="pause";
    }
    else if(el.className=="pause")
    {
    	el.src='/images/ambiance_on.svg';
        el.className="play";
    }
    return false;
}

function toggleThree(el){
    if(el.className!="pause")
    {
        el.src='/images/btn-weekend.svg';
       el.className="pause";
    }
    else if(el.className=="pause")
    {
        el.src='/images/btn-semaine.svg';
        el.className="play";
    }
    return false;
}

function changeImagePrintemps()
{
    var img = document.getElementById("image");
    img.src="/images/btn-saison1.png";
    return false;
}

function changeImageHiver()
{
   var img = document.getElementById("image");
   img.src="/images/btn-saison2.png";
	return false;
}

function changeImageAutomne()
{
    var img = document.getElementById("image");
    img.src="/images/btn-saison4.png";
	return false;
}

function changeImageEte()
{
    var img = document.getElementById("image");
    img.src="/images/btn-saison3.png";
    return false;
}



function changer_image(image) {
   $('.image').css('background-image', 'url("'+image+'")');
}

changer_image();
toggle();
toggleTwo();
toggleThree();
changeImagePrintemps();
changeImageHiver();
changeImageAutomne();
changeImageEte();