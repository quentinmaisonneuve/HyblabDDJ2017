var chart_annee = new Array();
var chart_aout = new Array();
var chart_octobre = new Array();

$(function() {
    $.get("data/2013-data.json", function(data) {
        var json_data = data;
        
        for(var i = 0; i < json_data.length; i++) {
            chart_annee.push(json_data[i].annee);
            chart_aout.push(json_data[i].aout);
            chart_octobre.push(json_data[i].octobre);
        }
        console.log(json_data);
    })
});

document.addEventListener('DOMContentLoaded',function(){
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

    var mychart = Chartist.Bar('.ct-chart', data, options, responsiveOptions);

    mychart.on('draw', function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 0px'
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
});
