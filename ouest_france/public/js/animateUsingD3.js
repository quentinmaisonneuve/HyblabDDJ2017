// Create object for animation
function SimpleAnim(startPos, endPos, duration, image) {
    MyAnimation(startPos, endPos, duration, image, null )
}

function Animation(startPos, endPos, duration, image, nextTransition) {
    this.startPos = startPos; 
    this.endPos = endPos;
    this.duration = duration;
    this.image = image;
    this.nextTransition = nextTransition;
};
document.selectAll('body').on('click', clicked);

function clicked(d) {
    console.log(d3.mouse(this));
}


// power2: d3.scalePow().exponent(2),
// linear: d3.scaleLinear(),
// sqrt:   d3.scalePow().exponent(0.5),
// log2:   d3.scaleLog().base(2),
// log10:  d3.scaleLog().base(10)


// Create animation
// var simpleAnim = new SimpleAnim([0, 100], [0, 200], 120, element, image);
// var anim = new AnimationD3([0, 100], [0, 200], 120, element, null);

// Not using linear animation:
// .attr("y", function(d) { return y(d.y0 + d.y); })
// So var = new simpleAnim([function(d) { return y(d.y0 + d.y)])

// To chained translation
// mysquare.transition().attr("x",320).each("end",function() { d3.select(this).transition().attr("y",180); });

// Register transition