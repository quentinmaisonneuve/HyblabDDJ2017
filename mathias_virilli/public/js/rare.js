

function lineUp( elem, w = 10.492) {
    if( elem.tagName != 'polyline') {
        for (i = 0 ; i < elem.childNodes.length ; i++) {
            e = elem.childNodes[i];
            if( e.tagName == "polyline") {
                e.style.strokeWidth = w;
            } else if ( e.tagName == "g" ) {
                lineUp(e);
            }
        }
    } else {
        elem.style.strokeWidth = w;
    }
}
