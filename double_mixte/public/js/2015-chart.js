var activeNations = new Array('it', 'de', 'gb', 'be', 'es', 'fr', 'ch');
    var highlighted_countries = {
      fr: '#f43f00',
      gb: '#041e37',
      de: '#2a4d6e',
      be: '#81aeda',
      es: '#133353',
      it: '#51799f',
      ch: '#728CA6',
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

        jQuery('#vmap').vectorMap({

          map: 'europe_en',
          enableZoom: false,
          showTooltip: true,
          hoverColor : "#e58c4a",
          backgroundColor: null,
          color : "white",
          scaleColors: ['#b6d6ff', '#005ace'],
          onRegionOver: function (event, code, region) {
            if (activeNations.indexOf(code) === -1) {
                event.preventDefault();
            }
            if(code=="fr"){
              event.preventDefault();
            }

          },
 onRegionClick: function(event, code, region){
            event.preventDefault();
          },
          colors: highlighted_countries, 
          onLabelShow: function (event, label, code)
          {
            if (activeNations.indexOf(code) > -1) {
              if(code != "fr"){
                label[0].innerHTML = nomPays[codePays.indexOf(code)]+ " - " +nombreVisiteurs[codePays.indexOf(code)]+ " visiteurs";
              }        
              if(code == 'fr'){
                event.preventDefault();
              }
            }
           else {
                event.preventDefault();
            }

        },

      });

  })