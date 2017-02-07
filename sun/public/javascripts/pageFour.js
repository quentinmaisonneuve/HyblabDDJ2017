/* ################# CHART ###################### */

function parseDate(number)
{
    if (number < 10)
        return "0"+number;
}

d3.json("./getLast24", function(data) {


    var today = new Date();

    var time = ["times"];
    time.push(today.getFullYear()+"-"+parseDate(today.getMonth())+"-"+parseDate(today.getDay())+" "+today.getHours()+":"+today.getMinutes());
    console.log(today.getFullYear()+"-"+parseDate(today.getMonth())+"-"+parseDate(today.getDay())+" "+today.getHours()+":"+today.getMinutes());
    for (var i=5; i>0 ;i--)
    {
        today.setHours(today.getHours()-4);
        time.push(today.getFullYear()+"-"+parseDate(today.getMonth())+"-"+parseDate(today.getDay())+" "+today.getHours()+":"+today.getMinutes());
    }

    data.push(time);
    console.log(data);
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            x: 'times',
            xFormat: '%Y-%m-%d %H:%M', // how the date is parsed
            columns: data,
            types: {
                "Alternative et punk": 'area-spline',
                "Electronica":'area-spline',
                "Pop":'area-spline',
                "Rock":'area-spline',
                "Urban":'area-spline',
                "Jazz":'area-spline'
            },
            groups: [['Alternative et punk', 'Electronica', 'Pop','Rock', 'Urban', 'Jazz']]
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%H:%M' // how the date is displayed
                }
            }
        }
    });
});

/*var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
    }
});*/