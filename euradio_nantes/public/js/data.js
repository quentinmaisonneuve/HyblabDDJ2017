window.onload = function () {
    creatFacebook();
    chartFacebook.render();
}

function showFacebook(){
    creatFacebook();
    chartFacebook.render();
}

function showTwitter(){
    creatTwitter();
    chartTwitter.render();
}

function creatFacebook(){
    $.ajaxSetup({
        async: false
    });
    $.getJSON('public/data/facebook.json', function(data) {
        chartFacebook = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: "Facebook",
                    fontFamily: "MetaPro-Normal",
                    fontColor: "#323B49",
                    fontSize: 28

                },
                animationEnabled: true,
                axisY: {
                    tickThickness: 0,
                    lineThickness: 0,
                    valueFormatString: " ",
                    gridThickness: 0
                },
                axisX: {
                    tickThickness: 0,
                    lineThickness: 0,
                    labelFontSize: 18,
                    labelFontColor: "#323B49"

                },
                data: [
                {
                    indexLabelFontSize: 26,
                    toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{y}</strong></span>",

                    indexLabelPlacement: "inside",
                    indexLabelFontColor: "#E44E7E",
                    indexLabelFontWeight: 600,
                    indexLabelFontFamily: "MetaPro-Normal",
                    color: "#D6E39C",
                    type: "bar",
                    dataPoints: data.provenancePaysPourcentage.reverse()
                }
                ]
            });
    });
    $.ajaxSetup({
        async: true
    });
}


function creatTwitter(){
    $.ajaxSetup({
        async: false
    });
    $.getJSON('public/data/twitter.json', function(data) {
        chartTwitter = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: "Twitter",
                    fontFamily: "MetaPro-Normal",
                    fontColor: "#323B49",
                    fontSize: 28

                },
                animationEnabled: true,
                axisY: {
                    tickThickness: 0,
                    lineThickness: 0,
                    valueFormatString: " ",
                    gridThickness: 0
                },
                axisX: {
                    tickThickness: 0,
                    lineThickness: 0,
                    labelFontSize: 18,
                    labelFontColor: "#323B49"

                },
                data: [
                {
                    indexLabelFontSize: 26,
                    toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{y}</strong></span>",

                    indexLabelPlacement: "inside",
                    indexLabelFontColor: "#FFFFFF",
                    indexLabelFontWeight: 600,
                    indexLabelFontFamily: "MetaPro-Normal",
                    color: "#87C8CB",
                    type: "bar",
                    dataPoints: data.reverse()
                }
                ]
            });
    });
    $.ajaxSetup({
        async: true
    });
}
