var activeNations = new Array('it', 'de', 'gb', 'be', 'es', 'fr', 'ch');
    var highlighted_countries = {
      fr: '#001526',
      gb: '#2cda9b',
      de: '#dd0707',
      be: '#8cc63f',
      es: '#1e8c62',
      it: '#f43f00',
      ch: '#e58c4a',
  }
$.get("data/2015-data.json",function(data){

    var codePays = new Array();
    var nomPays = new Array();
    var nombreVisiteurs = new Array();
    var json_data = data;
        for(var i = 0; i < json_data.length; i++) {
            codePays.push(json_data[i].codePays);
            nomPays.push(json_data[i].nomPays);
            nombreVisiteurs.push(json_data[i].nombreVisiteurs);
        }
        jQuery(document).ready(function () {
        jQuery('#vmap').vectorMap({

          map: 'europe_en',
          enableZoom: false,
          showTooltip: true,
          hoverColor : "#aedbdf",
          backgroundColor: null,
          color : "white",
          scaleColors: ['#b6d6ff', '#005ace'],
          onRegionOver: function (event, code, region) {
            if (activeNations.indexOf(code) === -1) {
                event.preventDefault();
            }
          },
          onRegionClick: function (element, code, region) {
              if (activeNations.indexOf(code) > -1) {
                  // dom interaction outside the map
                  // ...
              } else {
                  element.preventDefault();
              }
          },
          colors: highlighted_countries, 
          onLabelShow: function (event, label, code)
          {
            if (activeNations.indexOf(code) > -1) {
              if(code != "fr"){
                label[0].innerHTML = nomPays[codePays.indexOf(code)]+ " - " +nombreVisiteurs[codePays.indexOf(code)]+ " visiteurs";
              }        
            }
           else {
                event.preventDefault();
            }

        },

      });
  });

  })