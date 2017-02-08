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
    for (var i=5; i>0 ;i--)
    {
        today.setHours(today.getHours()-4);
        time.push(today.getFullYear()+"-"+parseDate(today.getMonth())+"-"+parseDate(today.getDay())+" "+today.getHours()+":"+today.getMinutes());
    }

    data.push(time);
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
        },
        legend: {
        position: 'right',
        item: {
            tile: {
                width: 15,
                height: 2
                }
            }
        }
    });
});


/* ################# COVERS ########################## */

function giveCovers2()
{
    $.getJSON('/today', function(data2)
    {
        var CoverList = "";
        for (var i = 0, len = data2.length; i < len; i++) {
            var title=data2[i].title;
            var artist=data2[i].artist;

                $.getJSON('/Cover/'+artist+'/'+title+'/', function(data3) {
                    if (data3 && data3.track && data3.track.album && data3.track.album.image)
                    {
                        Cover=data3.track.album.image[2]['#text'];
                        CoverList+= "<img src=\""+Cover+"\"/>";
                    }
                    else
                    {
                        CoverList+= "<img src=\"http://www.cdcenter.fr/upload/PAGE1/pochette-cd-4.jpg\" alt='Pochette non trouvée'/>";
                    }

                    document.getElementById("Cover2").innerHTML = CoverList;
                    //else throw 'errordejugement'
                });//end first get json
        }//end for each
    });
}
giveCovers2();