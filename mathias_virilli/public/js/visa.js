var listCode = ["AB"
    ,"AD" ,"AE" ,"AF" ,"AG"
    ,"AL" ,"AM" ,"AO" ,"AR"
    ,"AT" ,"AU" ,"AZ" ,"BA"
    ,"BB" ,"BD" ,"BE" ,"BF"
    ,"BG" ,"BH" ,"BI" ,"BJ"
    ,"BN" ,"BO" ,"BR" ,"BS"
    ,"BT" ,"BW" ,"BY" ,"BZ"
    ,"CA" ,"CF" ,"CG" ,"CH"
    ,"CI" ,"CL" ,"CM" ,"CN"
    ,"CO" ,"CR" ,"CU" ,"CV"
    ,"CY" ,"CZ" ,"DE" ,"DJ"
    ,"DK" ,"DM" ,"DO" ,"DZ"
    ,"EC" ,"EE" ,"EG" ,"ER"
    ,"ES" ,"ET" ,"FI" ,"FJ"
    ,"FM" ,"FR" ,"GA" ,"GB"
    ,"GD" ,"GE" ,"GH" ,"GM"
    ,"GN" ,"GR" ,"GT" ,"GW"
    ,"GY" ,"HK" ,"HN" ,"HR"
    ,"HT" ,"HU" ,"ID" ,"IE"
    ,"IL" ,"IN" ,"IQ" ,"IR"
    ,"IS" ,"IT" ,"JM" ,"JO"
    ,"JP" ,"KE" ,"KG" ,"KH"
    ,"KI" ,"KM" ,"KN" ,"KP"
    ,"KR" ,"KW" ,"KZ" ,"LA"
    ,"LB" ,"LC" ,"LI" ,"LK"
    ,"LR" ,"LS" ,"LT" ,"LU"
    ,"LV" ,"LY" ,"MA" ,"MC"
    ,"MD" ,"ME" ,"MG" ,"MH"
    ,"MK" ,"ML" ,"MM" ,"MN"
    ,"MO" ,"MR" ,"MT" ,"MU"
    ,"MV" ,"MW" ,"MX" ,"MY"
    ,"MZ" ,"NA" ,"NE" ,"NG"
    ,"NI" ,"NK" ,"NL" ,"NO"
    ,"NP" ,"NR" ,"NZ" ,"OM"
    ,"PA" ,"PE" ,"PG" ,"PH"
    ,"PK" ,"PL" ,"PS" ,"PT"
    ,"PW" ,"PY" ,"QA" ,"RO"
    ,"RS" ,"RU" ,"RW" ,"SA"
    ,"SB" ,"SC" ,"SD" ,"SE"
    ,"SG" ,"SI" ,"SK" ,"SL"
    ,"SM" ,"SN" ,"SR" ,"ST"
    ,"SV" ,"SY" ,"SZ" ,"TD"
    ,"TG" ,"TH" ,"TJ" ,"TM"
    ,"TN" ,"TO" ,"TR" ,"TT"
    ,"TV" ,"TW" ,"TZ" ,"UA"
    ,"UG" ,"US" ,"UY" ,"UZ"
    ,"VA" ,"VC" ,"VE" ,"VG"
    ,"VN" ,"VU" ,"WS" ,"YE"
        ,"ZA" ,"ZM" ,"ZW"]

var canVisa = {}

function putColor( id, next ) {
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "../data/visa_data/" + id.toUpperCase() + ".csv", true);
    txtFile.onloadend = function() { if(next) { next(); } }
    txtFile.onreadystatechange = function() {
      if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
        if (txtFile.status === 200) {  // Makes sure it's found the file.
          allText = txtFile.responseText;
          lines = txtFile.responseText.split("\n"); // Will separate each line into an array
          for( var i = 0 ; i < lines.length-1 ; i++) {
            sp = lines[i].split('|');
            name = sp[0]
            code = sp[1]
            status = sp[2]
            statusCode = sp[3]
            canVisa[code.toLowerCase()] = sp

            //console.log(name, code, status, statusCode)
            comment = sp[4]
            /* Code :
             *    - 0 = Visa not required
             *    - 1 = Visa required
             *    - 2 = eVisa (Electronic Visa)
             *    - 3 = Visa on arrival
             *    - ? = Other
             *
             */
            if (statusCode == 0 )
                colorCountry( code.toLowerCase(), '#2aea9c')
            else if (statusCode == 1)
                colorCountry( code.toLowerCase(), '#ef613a')
            else if (statusCode == 2)
                colorCountry( code.toLowerCase(), '#ffc943')
            else if (statusCode == 3)
                colorCountry( code.toLowerCase(), '#7693a3')
            else
                colorCountry( code.toLowerCase(), '#ff8022')
          }
        }
      }
    }
    txtFile.send();
}
var nbClick = 0
var lastCode = ""

function colorCountry(id, c="#000") {
    if( typeof(id) == "string" ) {
        root = document.getElementById(id);
    } else if (typeof(id) == "object"){
        root = id;
    }
    root.style.fill=c
    for (i = 0; i < root.childNodes.length ; i++ ) {
        e = root.childNodes[i];
        if( e.tagName == "path") {
            e.style.fill=c; 
        } else if( e.tagName == "g") {
            colorCountry(e,c);
        }
    };
}

function clickHandler( code ) {
   return function() {
        nbClick+=1;

        if(nbClick == 1) {
            text = document.getElementById('tspan5395');
            text.innerHTML = "Sélectionner un pays où vous pensez pouvoir allez sans visa"
            colorCountry( code, '#d7f7ff' );
        }else if(nbClick == 2) {
            putColor( lastCode.toLowerCase(), function() {
                text = document.getElementById('tspan5395');
                if( canVisa[lastCode] ) {
                    sp = canVisa[code];
                    if( sp[3] == '0' ) {
                        text.innerHTML = "Bravo ! Vous pouvez effectivement y allez sans visa"
                    }else if( sp[3] == '1' ) {
                        text.innerHTML = "Et non ! Vous avez absolument besoin d'un visa"
                    }else{
                        text.innerHTML = "La situation est un peu compliquée"
                    }

                }else{
                    text.innerHTML = "Oups"
                }
            });
        } else {
            colorCountry( code, '#d7f7ff' );
            putColor( code.toLowerCase() );
        }
        lastCode = code
    };
};

window.onload = function() {
    for( i =0 ; i < listCode.length ; i++) {
        var code = listCode[i].toLowerCase();
        if( code ) {
            var country  = document.getElementById( code );
            if( country )  {
                country.onclick = clickHandler( code )
            };
        };
    };
}
