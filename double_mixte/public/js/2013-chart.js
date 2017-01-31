document.addEventListener('DOMContentLoaded',function(){
    var data = {
        labels: ['2011', '2012', '2013'],
        series: [
            [60356.99009, 59817.68384, 72346.9775],
            [72929.96518, 67039.10476, 69870.0879]
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
