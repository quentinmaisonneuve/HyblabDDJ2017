/* ################# CHART ###################### */


d3.json("./getLast24", function(data) {
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            /*columns: [["Alternative et punk",0,0,0,0,4,5],["Electronica",0,0,0,0,1,3],["Pop",0,0,0,0,2,1],["Rock",0,0,0,0,2,4],["Urban",0,0,0,0,0,6],["Jazz",0,0,0,0,0,0]],*/
            columns: data,
            types: {
                "Alternative et punk": 'area-spline',
                "Electronica":'area-spline',
                "Pop":'area-spline',
                "Rock":'area-spline',
                "Urban":'area-spline',
                "Jazz":'area-spline'
            },
            groups: [['Alternative et punk', 'Electronica', 'Pop', 'Rock', 'Urban', 'Jazz']]
        },
            legend: {
            // amount of padding to put between each legend element
            padding: 5,
            // define custom height and width for the legend item tile
            item: {
            tile: {
                width: 15,
                height: 2,

                }
            }
            },
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