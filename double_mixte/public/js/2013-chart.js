function drawChart() {
    var chart_annee = new Array();
    var chart_aout = new Array();
    var chart_octobre = new Array();

    $.get("data/2013-data.json", function(data) {
        var json_data = data;
        
        for(var i = 0; i < json_data.length; i++) {
            chart_annee.push(json_data[i].annee);
            chart_aout.push(json_data[i].aout);
            chart_octobre.push(json_data[i].octobre);
        }
        toto(chart_annee, chart_aout, chart_octobre);
        //titi();
        //setTimeout(titi(), 3000);
        //console.log(json_data);
    });
}

function toto(chart_annee, chart_aout, chart_octobre){
    var data = {
        labels: chart_annee,
        series: [
            chart_aout,
            chart_octobre
        ]
    };

    var options = {
        seriesBarDistance: 30,
        height: "20em",
        plugins: [
            Chartist.plugins.legend({
                position: 'bottom',
                legendNames: ['Aout', 'Octobre']
            })
        ]
    };

    var responsiveOptions = [
        ['screen and (min-width: 641px) and (max-width: 1024px)', {
            seriesBarDistance: 30,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value;
            }
        }
        }],
        ['screen and (max-width: 640px)', {
            seriesBarDistance: 30,
            showLine: false,
            height: "10em",
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }]
    ];

    var mychart = new Chartist.Bar('#chart1', data, options, responsiveOptions);

    mychart.on('draw', function (data) {
        if (data.type === 'bar') {

            data.element.attr({
                style: 'stroke-width: 0px',
                id: 'line1'
            });
            var strokeWidth = 28;

            for (var s = 0; s < data.series.length; ++s) {
                if (data.seriesIndex === s) {
                    data.element.animate({
                        y2:             {
                            begin:  s * 500,
                            dur:    500,
                            from:   data.y1,
                            to:     data.y2,
                            easing: Chartist.Svg.Easing.easeOutSine
                        },
                        'stroke-width': {
                            begin: s * 500,
                            dur:   1,
                            from:  0,
                            to:    strokeWidth,
                            fill:  'freeze'
                        }
                    }, false);
                }
            }
        }
    });

    $('#chart1').on('mouseover', '.ct-chart-bar .ct-series-a line, .ct-chart-bar .ct-series-b line, .ct-chart-bar .ct-series-c line', function(evt) {
        console.log('ok');
        console.log($(this).attr('ct:value'));
        var val = $(this).attr('ct:value');
        $(this).attr('data-toggle', 'tooltip');
        $(this).attr('data-placement', 'top');
        $(this).attr('title', 'test');
        $('#val_graph2013').html('<p>'+val+'</p>');

    });
    
}


function titi() {
    //console.log($("body").html());
    var test = $('.ct-series-a').length;
    $('line').on('click', function() {
        alert($('line').attr('x1'));
    });   
    //console.log(test);
}


$(function() {
    //drawChart();
    //$('p').css("color", "red");
});

/*
$(document).on('ready', function() {
    drawChart();
});
*/










