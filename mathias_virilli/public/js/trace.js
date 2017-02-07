
function hideWall( bulle ) {
        for( i=0 ; i < bulle.length ; i++) {
            e = document.getElementById(bulle[i]);
            e.setAttribute('visibility', 'hidden');
        }
}
function showWall( bulle ) {
        for( i=0 ; i < bulle.length ; i++) {
            e = document.getElementById(bulle[i]);
            e.setAttribute('visibility', 'visible');
        }
}
function intialize(svg, listMur) {
    var mouseDown = 0;
    var lastPoint = 0;
    var polyCount = 0;
    var startDraw = false;

    var point = svg.createSVGPoint();


    svg.addEventListener("mousemove", drawLine);
    svg.addEventListener("mousemove", drawLine);
    svg.addEventListener("mousedown", function() {
        ++mouseDown;
    });
    svg.addEventListener("mouseup", function() {
        --mouseDown;
    });;

    createPolyline();
    var polyline = document.querySelector("#polyDraw");
    hideWall(listMur)

    function drawLine(evt) {

        // console.log("mouse location:", evt.clientX, evt.clientY);
        if( mouseDown == 0 ) {
            if( startDraw ) {
                svg.removeEventListener("mousemove", drawLine);
                svg.removeEventListener("mousemove", drawLine);
                svg.removeEventListener("mousedown", function() {
                    ++mouseDown;
                });
                svg.removeEventListener("mouseup", function() {
                    --mouseDown;
                });;
                showWall(listMur)
                document.getElementById('textFrontiere').setAttribute('visibility', 'hidden');


            }
            return;
        }
        startDraw = true
        point = svg.createSVGPoint();
        point.x = evt.clientX;
        point.y = evt.clientY;
        // console.log(point);
        if( lastPoint === 0 ) {
            polyline.points.appendItem(point);
            lastPoint = point;
        } else {
            console.log((lastPoint.x - point.x)*(lastPoint.x - point.x) + (lastPoint.y - point.y)*(lastPoint.y - point.y) );
            if( (lastPoint.x - point.x)*(lastPoint.x - point.x) + (lastPoint.y - point.y)*(lastPoint.y - point.y) > 100 ) {
                polyline.points.appendItem(point);
                lastPoint = point;
            }
        }
    }

    function createPolyline() {
        var poly =  document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        poly.setAttribute("id", "polyDraw");
        poly.setAttribute("fill", "none");
        poly.setAttribute("stroke", "#FF0");
        poly.setAttribute("stroke-width", "7.5");
        poly.setAttribute("points", "");

        svg.appendChild(poly);
        polyline = document.querySelector("#polyDraw");
    }

}


