var debugMode = 2;

function Point(arr) {
    this.x = arr[0];
    this.y = arr[1];

    this.set = function (p) {
        this.x = p.x;
        this.y = p.y;
    };
}

function MyKey(p, duration) {
    this.p = p;
    this.duration = duration;

    this.p_x = function() {
        return p[0] + "px";
    };
    this.p_y = function() {
        return p[1] + "px";
    };
};

// Function
function startScene1() {
   carImg.reset();
   
   // Reset the car sym
   carImg.symX = -1.0;
   

   var key0 = scene1.key0;
   var key1 = scene1.key1;
   var key2 = scene1.key2;
   var key3 = scene1.key3;
   
   updateCar();
   // Create transition
    carImg.el.transition()
            .style('left', key0.p_x())
            .style('top', key0.p_y())
            .duration(key0.duration)
    .transition().delay(2000)
        .style('left', key1.p_x())
        .style('top', key1.p_y())
        .duration(key1.duration)
        .ease("linear")
        .each("end", function () { carImg.el.style('left', key2.p_x())
            .style('top', key2.p_y()); carImg.symX = 1.0; updateCar(); })
    .transition()
        .style('left', key3.p_x())
        .style('top', key3.p_y())
        .duration(key3.duration)
}

function startScene2() {
    carImg.reset();
    updateCar();

    var key0 = scene1.key3;
    var key1 = scene2.key0;
    var key2 = scene2.key1;
    var key3 = scene2.key2;

    carImg.el.transition()
            .style('left', key0.p_x())
            .style('top', key0.p_y())
            .duration(key0.duration)
    .transition().delay(2000)
        .style('left', key1.p_x())
        .style('top', key1.p_y())
        .duration(key1.duration)
        .ease("linear")
        .each("end", function () { carImg.el.style('left', key2.p_x())
            .style('top', key2.p_y()); carImg.symX = -1.0; updateCar(); })
    .transition()
        .style('left', key3.p_x())
        .style('top', key3.p_y())
        .duration(key3.duration);
}

function startScene3() {
    carImg.reset();
    carImg.symX = -1.0;

    updateCar();

    var key0 = scene2.key2;
    var key1 = scene3.key0;
    var key2 = scene3.key1;
    var key3 = scene3.key2;

    carImg.el.transition()
            .style('left', key0.p_x())
            .style('top', key0.p_y())
            .duration(key0.duration)
    .transition().delay(2000)
        .style('left', key1.p_x())
        .style('top', key1.p_y())
        .duration(key1.duration)
        .ease("linear")
        .each("end", function () { carImg.el.style('left', key2.p_x())
            .style('top', key2.p_y()); carImg.symX = 1.0; updateCar(); })
    .transition()
        .style('left', key3.p_x())
        .style('top', key3.p_y())
        .duration(key3.duration);
}

function updateCar() {
    carImg.el.style('transform', 'matrix' + carImg.matrix());
}

function clicked(e) {
    var e = e || window.event;
    if (e.which == 2) {
        carImg.symX = -1.0 * carImg.symX;
        updateCar();
    } else if (e.which == 1) {
        console.log(d3.mouse(this));
    }
}

function moveCar() {
    var coor = d3.mouse(this);
    carImg.el.style('left', coor[0] + "px")
            .style('top', coor[1] + "px");
}


// Object
var carImg = {
   el: d3.select("#container1").select("#car"),
   scale: 0.4,
   translate: new Point([0, 0]),
   symX: 1.0,
   symY: 1.0,
   matrix: function () {
       //return "(" + this.scale ;
        return "(" + (this.scale * this.symX) + ", 0, 0, " 
        + (this.scale * this.symY) + ", "
        + (this.translate.x - this.center.x) + ", " 
        + (this.translate.y - this.center.y) + ")";   
   },
   reset : function () {
        this.scale = 0.4;
        this.translate.x = 0;
        this.translate.y = 0;
        this.symX = 1.0;
        this.symY = 1.0;    
   },
};
carImg.center = new Point([carImg.el.node().getBoundingClientRect().width/2, carImg.el.node().getBoundingClientRect().height/2]);

var scene1 = {
     key0: new MyKey([281, 19], 0),
     key1: new MyKey([1072, 470], 6000),
     key2: new MyKey([1078, 492], 0),
     key3: new MyKey([888, 602], 3000)

};

var scene2 = {
    key0: new MyKey([148, 1022], 6000),
    key1: new MyKey([149, 1046], 0),
    key2: new MyKey([467, 1230], 3000)
};

var scene3 = {
    key0: new MyKey([1034, 1552], 6000),
    key1: new MyKey([1041, 1573], 0),
    key2: new MyKey([767, 1730], 3000)
};

// Init
// Add debug helper
if (debugMode == 1) {
    d3.select("#fullpage").on("mousemove", moveCar)
        .on('mousedown', clicked);
} else if (debugMode == 2) {
    d3.select("#scenario1")[0][0]
      .addEventListener("click", function() { console.log("start"); startScene1(); }, false);
    d3.select("#scenario2")[0][0]
      .addEventListener("click", function() { startScene2(); }, false);
    d3.select("#scenario3")[0][0]
      .addEventListener("click", function() { startScene3(); }, false);

}

// Change start pos
//carImg.symX = -1.0;

// init car position 
updateCar();

// start animation
//startScene1();
//startScene2();
//startScene3();


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