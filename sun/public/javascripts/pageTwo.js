$(document).ready(function() {
      $('#timeline_value1').html((" " + ($('#timeline1').val()*2) + "h " + " - " + ($('#timeline1').val()*2+2) + "h "));
      $('#timeline_value2').html((" " + ($('#timeline2').val()*2) + "h " + " - " + ($('#timeline2').val()*2+2) + "h "));
    });

$(document).on('input change', '#timeline1', function() {
      $('#timeline2').val($('#timeline1').val());
      $('#timeline_value1').html((" " + ($('#timeline1').val()*2) + "h " + " - " + ($('#timeline1').val()*2+2) + "h "));
      $('#timeline_value2').html((" " + ($('#timeline1').val()*2) + "h " + " - " + ($('#timeline1').val()*2+2) + "h "));
});

$(document).on('input change', '#timeline2', function() {
      $('#timeline1').val($('#timeline2').val());
      $('#timeline_value1').html((" " + ($('#timeline2').val()*2) + "h " + " - " + ($('#timeline2').val()*2+2) + "h "));
      $('#timeline_value2').html((" " + ($('#timeline2').val()*2) + "h " + " - " + ($('#timeline2').val()*2+2) + "h "));
});

$(document).on('click change','#')

function toggleOne(el){
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

function synchroRadio()
{
    var saison;
    saison = $("input[name=credit-card]:checked").val();
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


$('input[name=credit-card]').on('change', function() {
    var saison;
    saison = $('input[name=credit-card]:checked').val();
    if(saison == 'printemps')
    {
        val_saison = 0;
    }
    else if(saison == 'ete')
    {
        val_saison = 1;
    }
    else if(saison == 'automne')
    {
        val_saison = 2;
    }
    else if(saison == 'hiver')
    {
        val_saison = 3;
    }
    $('#slider').roundSlider("option", "value", val_saison);
    changeBubble(getRoad());
});

changer_image();
toggle();
toggleTwo();
toggleThree();
changeImagePrintemps();
changeImageHiver();
changeImageAutomne();
changeImageEte();