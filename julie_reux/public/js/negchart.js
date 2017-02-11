
            var btnS=document.getElementById('btnS');
            var btnP=document.getElementById('btnP');
            var btnF=document.getElementById('btnF');
            var btnSol=document.getElementById('btnSol');
            var btnPV=document.getElementById('btnPV');
            var btnE=document.getElementById('btnE');
            //stressant
          function myFunctionS() {          
            $(btnF).removeClass("selected");
            $(btnP).removeClass("selected");
        chart.load({
                //data Financierement difficile
                columns: [['Pourcentage', 46]]
            });
        $(btnS).addClass("selected");
        }

        document.getElementById('btnS').onmouseover=(function(){myFunctionS();});

        //Financierement difficile
        function myFunctionF() {
            $(btnS).removeClass("selected");
            $(btnP).removeClass("selected");
        chart.load({
                //data Financierement difficile
                columns: [['Pourcentage', 42]]
            });
        $(btnF).addClass("selected");
        }

        document.getElementById('btnF').onmouseover=(function(){myFunctionF();});
        //Physiquemen difficile
        function myFunctionP() {
            $(btnS).removeClass("selected");
            $(btnF).removeClass("selected");
        chart.load({
                //data phiysuqmenet difficile
                columns: [['Pourcentage', 36]]
            });
        $(btnP).addClass("selected");
        }
        document.getElementById('btnP').onmouseover=(function(){myFunctionP();});
/*
        //Solitaire
        function myFunctionSol() {
            $(btnS).removeClass("selected");
            $(btnF).removeClass("selected");
            $(btnP).removeClass("selected");
        chart.load({
                //data solitaire
                columns: [['data', 4]]
            });
        $(btnSol).addClass("selected");
        }
       document.getElementById('btnSol').onmouseover=(function(){myFunctionSol();});
       //Peu Valorisant
       function myFunctionPV() {
            $(btnS).removeClass("selected");
            $(btnF).removeClass("selected");
            $(btnP).removeClass("selected");
            $(btnSol).removeClass("selected");
        chart.load({
                //data peu valirisant
                columns: [['data', 2]]
            });
        $(btnPV).addClass("selected");
        }
       document.getElementById('btnPV').onmouseover=(function(){myFunctionPV();});

       //Ennuyeux
       function myFunctionE() {
            $(btnS).removeClass("selected");
            $(btnF).removeClass("selected");
            $(btnP).removeClass("selected");
            $(btnSol).removeClass("selected");
            $(btnPV).removeClass("selected");
        chart.load({
                //data Ennuyeux
                columns: [['data', 1]]
            });
        $(btnPV).addClass("selected");
        }
       document.getElementById('btnE').onmouseover=(function(){myFunctionE();});*/
        //-------------------------
        chart1 = document.getElementById('chart1');
        var chart = c3.generate({
            bindto:chart1,
            data: {
                columns: [
                    []
                ],
                
                type: 'gauge',
                onclick: function (d, i) {},
                onmouseover: function (d, i) {},
                onmouseout: function (d, i) {}
            },
            color: {
                    pattern: [ '#98A1A0'], // the three color levels for the percentage values.
                    
                }

        });


       
        setTimeout(function () {
            myFunctionS();
        }, 1000),
        
        setTimeout(function () {
            myFunctionF();
        }, 2000),
        
       setTimeout(function () {
            myFunctionP();
        }, 3000);

       /*setTimeout(function () {
            myFunctionSol();
        }, 4000),
        
       setTimeout(function () {
            myFunctionPV();
        }, 5000),
       setTimeout(function () {
            myFunctionE();
        }, 6000);*/
        