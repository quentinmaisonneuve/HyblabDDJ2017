'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts

var years = [2013,2014,2015,2016,2017]; 
var keywords = ["association","budget","couts-des-services","culture","education","election","Environnement","equipements","marche-public","permis-de-construire","pv-deliberations","subventions","transport","urbanisme"];
var regions = ["Auvergne-Rhone-Alpes","Bourgogne-Franche-Comte","Bretagne","Centre-Val-de-Loire","Corse","Grand-Est","Hauts-de-France","Ile-de-France","Normandie","Nouvelle-Aquitaine","Occitanie","Pays-de-la-Loire","Provence-Alpes-Cote-d-Azur"]; 
var regionsName = ["Auvergne-Rhone-Alpes","Bourgogne-Franche-Comté","Bretagne","Centre-Val-de-Loire","Corse","Grand-Est","Hauts-de-France","Ile-de-France","Normandie","Nouvelle-Aquitaine","Occitanie","Pays-de-la-Loire","Provence-Alpes-Cote-d'Azur"]; 
var others = ["Autre","National","Europe","#N/A"]; 
var types = ["service","democratique"]; 

var arrayYearRegionC =  [];
var arrayYearRegionU = [];   
var arrayRegionKeyword = {}; 
var arrayKeywordRegion = {}; 
var arrayRegionDownload = {}; 
var arraySerDemo = {}; 

arrayRegionDownload.france = {}; 
arrayRegionDownload.france.all = 0; 

for(var year in years){
    arrayYearRegionC[years[year]] = {}; 
    arrayYearRegionC[years[year]].all = 0; 
    arrayYearRegionU[years[year]] = {};
    arrayYearRegionU[years[year]].all = 0; 
}

for(var keyword in keywords){
    arrayKeywordRegion[keywords[keyword]] = []; 
    arrayKeywordRegion[keywords[keyword]].all = 0;
    arrayRegionDownload.france[keywords[keyword]] = 0; 
}


for(var region in regions){
    arrayRegionKeyword[regions[region]] = {}; 
    arrayRegionKeyword[regions[region]].all = 0; 
    arrayRegionDownload[regions[region]] = {}; 
    arrayRegionDownload[regions[region]].all = 0; 
    for(var keyword in keywords){
        arrayRegionDownload[regions[region]][keywords[keyword]] = 0; 
    }
}

for(var other in others){
    arrayRegionKeyword[others[other]] = {}; 
    arrayRegionKeyword[others[other]].all = 0; 
    arrayRegionDownload[others[other]] = {}; 
    arrayRegionDownload[others[other]].all = 0; 
}

for(var type in types){
    arraySerDemo[types[type]] = {}; 
    arraySerDemo[types[type]].france = 0; 
}

/*fetch('data/dataLight.json')
    // this promise will be fulfilled when the json fill will be
    .then(function (response){
        // if we could load the resource, parse it
        if( response.ok )
            return response.json();
        else // if not, send some error message as JSON data
            return {data: "JSON file not found"};

    })
    // in case of invalid JSON (parse error) send some error message as JSON data
    .catch( function (error){
        return {data: "Invalid JSON"};
    })
    // this promise will be fulfilled when the json will be parsed
    .then(function (json) {
        var first = true; 
        json.forEach(function(item){
            // init data about openData created by Year

           // console.log(item);

            arrayYearRegionC[item.created_year].all += item.value; 

            if(isNaN(arrayYearRegionC[item.created_year][item.region])){
                arrayYearRegionC[item.created_year][item.region] = item.value; 
            }
            else {
                arrayYearRegionC[item.created_year][item.region] += item.value; 
            }
            
            // init data about openData modified by Year
            arrayYearRegionU[item.modified_year].all += item.value; 

            if(isNaN(arrayYearRegionU[item.modified_year][item.region])){
                arrayYearRegionU[item.modified_year][item.region] = item.value; 
            }
            else {
                arrayYearRegionU[item.modified_year][item.region] += item.value; 
            } 

            // init data about opendData by keyword, region 
            arrayKeywordRegion[item.keyword].all += item.value; 

            if(isNaN(arrayKeywordRegion[item.keyword][item.region])){
                arrayKeywordRegion[item.keyword][item.region] = item.value; 
            }
            else {
                arrayKeywordRegion[item.keyword][item.region] += item.value; 
            }

            //init data about openData by region keyword 
            arrayRegionKeyword[item.region].all += item.value; 

            if(isNaN(arrayRegionKeyword[item.region][item.keyword])){
                arrayRegionKeyword[item.region][item.keyword] = item.value; 
            }
            else {
                arrayRegionKeyword[item.region][item.keyword] += item.value; 
            }

            //init data about openData downloaded by region keyword
            arrayRegionDownload[item.region].all += item.downloadValue; 
            arrayRegionDownload[item.region][item.keyword] += item.downloadValue; 

            arrayRegionDownload.france[item.keyword] += item.downloadValue; 
            arrayRegionDownload.france.all += item.downloadValue

            arraySerDemo[item.DemoServ].france += item.value; 

            if(isNaN(arraySerDemo[item.DemoServ][item.region])){
                arraySerDemo[item.DemoServ][item.region] = item.value; 
            }
            else {
                arraySerDemo[item.DemoServ][item.region] += item.value; 
            }
        }) 
        initDataviz1();
        initDataviz2();  
        initDataviz3();
    });
*/ 

d3.json('data', function(error,data) { // D3 HTTP GET request + parse JSON to the server
    if(error)
    {
      console.log("erreur"); 
    }
    else {
        var first = true; 
        data.forEach(function(item){
            // init data about openData created by Year

           // console.log(item);

            arrayYearRegionC[item.created_year].all += item.value; 

            if(isNaN(arrayYearRegionC[item.created_year][item.region])){
                arrayYearRegionC[item.created_year][item.region] = item.value; 
            }
            else {
                arrayYearRegionC[item.created_year][item.region] += item.value; 
            }
            
            // init data about openData modified by Year
            arrayYearRegionU[item.modified_year].all += item.value; 

            if(isNaN(arrayYearRegionU[item.modified_year][item.region])){
                arrayYearRegionU[item.modified_year][item.region] = item.value; 
            }
            else {
                arrayYearRegionU[item.modified_year][item.region] += item.value; 
            } 

            // init data about opendData by keyword, region 
            arrayKeywordRegion[item.keyword].all += item.value; 

            if(isNaN(arrayKeywordRegion[item.keyword][item.region])){
                arrayKeywordRegion[item.keyword][item.region] = item.value; 
            }
            else {
                arrayKeywordRegion[item.keyword][item.region] += item.value; 
            }

            //init data about openData by region keyword 
            arrayRegionKeyword[item.region].all += item.value; 

            if(isNaN(arrayRegionKeyword[item.region][item.keyword])){
                arrayRegionKeyword[item.region][item.keyword] = item.value; 
            }
            else {
                arrayRegionKeyword[item.region][item.keyword] += item.value; 
            }

            //init data about openData downloaded by region keyword
            arrayRegionDownload[item.region].all += item.downloadValue; 
            arrayRegionDownload[item.region][item.keyword] += item.downloadValue; 

            arrayRegionDownload.france[item.keyword] += item.downloadValue; 
            arrayRegionDownload.france.all += item.downloadValue

            arraySerDemo[item.DemoServ].france += item.value; 

            if(isNaN(arraySerDemo[item.DemoServ][item.region])){
                arraySerDemo[item.DemoServ][item.region] = item.value; 
            }
            else {
                arraySerDemo[item.DemoServ][item.region] += item.value; 
            }
        });  
        initDataviz1();
        initDataviz2();  
        initDataviz3();
    }
});

function dataCreateYear(year){
    var data = [];
    switch(year){
        case '2013':
        data.push(arrayYearRegionC[2013].all);
            break;
        case '2014':
        data.push(arrayYearRegionC[2013].all);
        data.push(arrayYearRegionC[2014].all);
            break;
        case '2015':
        data.push(arrayYearRegionC[2013].all);
        data.push(arrayYearRegionC[2014].all);
        data.push(arrayYearRegionC[2015].all);
            break;
        case '2016':
        data.push(arrayYearRegionC[2013].all);
        data.push(arrayYearRegionC[2014].all);
        data.push(arrayYearRegionC[2015].all);
        data.push(arrayYearRegionC[2016].all);
            break;
        case '2017':
        data.push(arrayYearRegionC[2013].all);
        data.push(arrayYearRegionC[2014].all);
        data.push(arrayYearRegionC[2015].all);
        data.push(arrayYearRegionC[2016].all);
        data.push(arrayYearRegionC[2017].all);
            break;
    }
    return data; 
}

function dataUpdateYear(year){
    var data = [];
    switch(year){
        case '2013':
        data.push(arrayYearRegionU[2013].all); 
            break;
        case '2014':
        data.push(arrayYearRegionU[2013].all);
        data.push(arrayYearRegionU[2014].all);
            break;
        case '2015':
        data.push(arrayYearRegionU[2013].all);
        data.push(arrayYearRegionU[2014].all);
        data.push(arrayYearRegionU[2015].all);
            break;
        case '2016':
        data.push(arrayYearRegionU[2013].all);
        data.push(arrayYearRegionU[2014].all);
        data.push(arrayYearRegionU[2015].all);
        data.push(arrayYearRegionU[2016].all);
            break;
        case '2017':
        data.push(arrayYearRegionU[2013].all);
        data.push(arrayYearRegionU[2014].all);
        data.push(arrayYearRegionU[2015].all);
        data.push(arrayYearRegionU[2016].all);
        data.push(arrayYearRegionU[2017].all);
            break;
    }
    return data; 
}


function arrayValue(tupleArray){
    var dataV = [];
    $.each(tupleArray, function(index,item){
        if(index != "all" && index != "National" && index != "Europe" && index != "#N/A" && index != "Autre"){
            if(index == "Europe"){
                console.log(item);
            }
            dataV.push(item);
        }
    });
    return dataV;
}

function arrayClassement(tupleArray, data){
    var classement = [];
    $.each(tupleArray, function(index,item){
        if(index != "all" && index != "National" && index != "Europe" && index != "#N/A" && index != "Autre"){
            if(data[0] == item){
                classement[0] = index;
            }else if(data[1] == item){
                classement[1] = index;
            }else if(data[2] == item){
                classement[2] = index;
            }
        }
    });
    if(classement.length == 0){
        classement.push("###");
        classement.push("###");
        classement.push("###");
    }else if(classement.length == 1){
        classement.push("###");
        classement.push("###");
    }else if(classement.length == 2){
        classement.push("###");
    }
    return classement;
}
function classementCreationTop(year){
    var tupleArray = arrayYearRegionC[parseInt(year)];
    var data = arrayValue(tupleArray);
    data.sort(function(a,b){return b - a;});
    return arrayClassement(tupleArray, data);
}

function classementCreationFlop(year){
    var tupleArray = arrayYearRegionC[parseInt(year)];
    var data = arrayValue(tupleArray);
    data.sort(function(a,b){return a - b;});
    return arrayClassement(tupleArray, data);
}

function classementModificationTop(year){
    var tupleArray = arrayYearRegionU[parseInt(year)];
    var data = arrayValue(tupleArray);
    data.sort(function(a,b){return b - a;});
    return arrayClassement(tupleArray, data);
}

function classementModificationFlop(year){
    var tupleArray = arrayYearRegionU[parseInt(year)];
    var data = arrayValue(tupleArray);
    data.sort(function(a,b){return a - b;});
    return arrayClassement(tupleArray, data);
}

function decimalAdjust(type, value, exp) {
    // Si la valeur de exp n'est pas définie ou vaut zéro...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Si la valeur n'est pas un nombre 
    // ou si exp n'est pas un entier...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Décalage
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Décalage inversé
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

function datavizCircle(){
    var data = {"name":"France", "id":"France","children" : [] };  
    for(region in regions){
        var arraykeyword = []; 
        for(keyword in keywords){
            if(!(isNaN(arrayKeywordRegion[keywords[keyword]][regions[region]]))){
                arraykeyword.push({"name": decimalAdjust('round',arrayRegionKeyword[regions[region]][keywords[keyword]]*100/arrayRegionKeyword[regions[region]].all,-2) + "%", "id" : keywords[keyword], "size": arrayKeywordRegion[keywords[keyword]][regions[region]], "children" : []});
            }

        } 
        data.children.push({"name":regionsName[region], "id" : regions[region],"children":arraykeyword});
    }
    return data; 
}

function datavizDownLoad(region ="france"){
    return arrayRegionDownload[region]; 
}

function getSerDemo(type, region = "france"){
    return arraySerDemo[type][region];
}

