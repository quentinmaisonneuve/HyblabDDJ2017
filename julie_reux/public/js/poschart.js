
            var btnSoc=document.getElementById('btnSocial');
            var btnL=document.getElementById('btnLib');
            var btnV=document.getElementById('btnValo');
            var btnN=document.getElementById('btnNat');
            var btnStim=document.getElementById('btnStim');
            //Social
          function myFunctionSocial() {
            
            $(btnSoc).removeClass("selected"); 
            $(btnL).removeClass("selected");
            $(btnV).removeClass("selected"); 
            $(btnN).removeClass("selected");
            $(btnStim).removeClass("selected"); 
            mychart.load({
                //data social
                columns: [['Pourcentage', 73]]
            });
            
            $(btnSoc).addClass("selected");
            //css boutons
        }

        document.getElementById('btnSocial').onmouseover=(function(){myFunctionSocial();});

        //valorisant
        function myFunctionV() {
            $(btnSoc).removeClass("selected"); 
            $(btnL).removeClass("selected");
            $(btnV).removeClass("selected"); 
            $(btnN).removeClass("selected");
            $(btnStim).removeClass("selected"); 
        mychart.load({
                //data valorisant
                columns: [['Pourcentage', 53]]
            });
        $(btnV).addClass("selected");
        }

        document.getElementById('btnValo').onmouseover=(function(){myFunctionV();});

        //Libérté
        function myFunctionL() {
            $(btnSoc).removeClass("selected"); 
            $(btnL).removeClass("selected");
            $(btnV).removeClass("selected"); 
            $(btnN).removeClass("selected");
            $(btnStim).removeClass("selected"); 
        mychart.load({
                //data phiysuqmenet difficile
                columns: [['Pourcentage', 77]]
            });
        $(btnL).addClass("selected");
        }
        document.getElementById('btnLib').onmouseover=(function(){myFunctionL();});

         //Stimulant
        function myFunctionStim() {
            $(btnSoc).removeClass("selected"); 
            $(btnL).removeClass("selected");
            $(btnV).removeClass("selected"); 
            $(btnN).removeClass("selected");
            $(btnStim).removeClass("selected"); 
        mychart.load({
                //data Stimulant
                columns: [['Pourcentage', 65]]
            });
        $(btnStim).addClass("selected");
        }
        document.getElementById('btnStim').onmouseover=(function(){myFunctionStim();});

        //-------------------------
        chart2 = document.getElementById('poschart');
        var mychart = c3.generate({
            bindto:chart2,
            data: {
                columns: [
                    []
                ],
                type: 'gauge',
                onclick: function (d, i) {},
                onmouseover: function (d, i) { console.log(d) },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            color: {
                    pattern: [ '#AEDCE8'], // the three color levels for the percentage values.
                    
                }

        });


       
        setTimeout(function () {
            myFunctionSocial();
        }, 1000),
        
        setTimeout(function () {
            myFunctionV();
        }, 2000),
        
       setTimeout(function () {
            myFunctionL();
        }, 3000)

       setTimeout(function () {
            myFunctionStim();
        }, 4000);

       /*setTimeout(function () {
            myFunctionSol();
        }, 4000),
        
       setTimeout(function () {
            myFunctionPV();
        }, 5000),
       setTimeout(function () {
            myFunctionE();
        }, 6000);*/
