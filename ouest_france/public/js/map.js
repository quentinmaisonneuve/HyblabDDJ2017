function getDepart() {
  return zone0.id;
}

function getArrivee() {
  return zone1.id;
}

function hasSelectedPoints() {
  return getDepart().localeCompare("") != 0 &&
    getArrivee().localeCompare("") != 0;
}

var mapWidth = 960.0,
    mapHeight = 500.0,
    centered;

var debug_add_city = false;

var myCenter = [-74.0, 2.5];
var translation = [2 * mapWidth / 3, mapHeight / 2.0];
var scale = 2000.0;

var BASE_FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

var FONTS = [
  "Open Sans",
  "Josefin Slab",
  "Arvo",
  "Lato",
  "Vollkorn",
  "Abril Fatface",
  "Old StandardTT",
  "Droid+Sans",
  "Lobster",
  "Inconsolata",
  "Montserrat",
  "Playfair Display",
  "Karla",
  "Alegreya",
  "Libre Baskerville",
  "Merriweather",
  "Lora",
  "Archivo Narrow",
  "Neuton",
  "Signika",
  "Questrial",
  "Fjalla One",
  "Bitter",
  "Varela Round"
];

var cities = [
  ["Nantes", -72.10923927606828, 1.757726606443621],
  ["Pornic", -76.2345354010102, 0.8698843815074411],
  ["Guérande", -78.44042291226388, 2.7882252712886517],
  ["Ancenis", -68.81473195406605, 3.589117734374606],
  ["Chateaubriant", -70.99197157556318, 7.523164981942603]
];

var projection = d3.geo.mercator()
  .scale(scale)
  .center(myCenter)
  .translate([translation[0], translation[1]]);

function invertTransformation(n) {
  return projection.invert(n);
}

// apply translation and scale
for (var i=0; i<cities.length; i++) {
  pos = projection([cities[i][1], cities[i][2]])
  cities[i][1] = pos[0];
  cities[i][2] = pos[1];
}

var backGroundColor = '#e5e5e5';
var selectColor = '#cbc9c9';


// Define color scale
var color = d3.scale.linear()
  .domain([1, 20])
  .clamp(true)
  .range([backGroundColor, backGroundColor]);

var path = d3.geo.path()
  .projection(projection);

// Set svg width & height
var svg = d3.select('#carte')
  .attr("viewBox", "0 0 960 500");



// Add background
svg.append('rect')
  .attr('class', 'background')
  .attr('width', mapWidth)
  .attr('height', mapHeight)
  .attr('opacity', 0);


var g = svg.append('g');

var mapLayer = g.append('g')
  .classed('map-layer', true);

var actualZone = "";
var actualId = "";
var zoneBackgroundSize = [150, 40];
var iconCrossSize = [8, 8];
var zoneState = 0;

var zone0 = {
  text: "",
  id : "",
  element: null,
  location: [200, 270],
  color: '#d8584e',

};

var zone1 = {
  text: "",
  id: "",
  element: null,
  location: [200, 330],
  color: '#eab521',
};

// Ajout du texte decoratif
var decoG = g.append('g');
var decoTextG = decoG.append('g');

decoTextG.append("svg:foreignObject")
  .attr("class", "texth2")
  .style('font-family', 'Borg')
  .attr('x', '39px')
  .attr('y', '20px')
  .style('font-family', '60px')
  .attr('width', 300)
  .attr('height', 300)
  .style('color', 'white')
  .text('OÙ ALLLONS NOUS?');

decoTextG.append("svg:foreignObject")
  .attr("class", "bebas")
  .style('font-family', 'ArialR')
  .style('font-family', '14px')
  .attr('x', '43px')
  .attr('y', '182px')
  .attr('width', 200)
  .attr('height', 300)
  .style('color', 'white')
  .text('Un clic sur le départ, un sur l\'arrivée et c\'est parti !');

var rectG = decoG.append('g');

var startX = 40;
var rectWidth = 340;
var smallRectHeight = 30;

d3.select("#continuer")
  .style("bottom", "100px")
  .style("left", (startX + rectWidth/2 - 70) + "px");

rectG.append("rect")
    .attr("x", startX)
    .attr("y", 220)
    .attr("width", rectWidth)
    .attr("height", 150)
    .style("fill", "white")
    .attr("rx", 20)
    .attr("ry", 20);

rectG.append("rect")
    .attr("x", startX + 10)
    .attr("y", zone0.location[1] - 20)
    .attr("width", rectWidth - 20)
    .attr("height", smallRectHeight)
    .style("fill", zone0.color)
    .attr("rx", 20)
    .attr("ry", 20);

rectG.append("rect")
    .attr("x", startX + 10)
    .attr("y", zone1.location[1] - 20)
    .attr("width", rectWidth - 20)
    .attr("height", smallRectHeight)
    .style("fill", zone1.color)
    .attr("rx", 20)
    .attr("ry", 20);

rectG.append("text")
  .attr("class", "bebas")
  .style('font-family', 'ArialR')
  .style('font-family', '14px')
  .attr('x', zone0.location[0] - (rectWidth - 20)/2 + 25)
  .attr('y', zone0.location[1] - smallRectHeight/2 - 10)
  .attr('width', 200)
  .attr('height', 300)
  .style('color', '#1f546e')
  .text('DÉPART:');

rectG.append("text")
  .attr("class", "bebas")
  .style('font-family', 'ArialR')
  .style('font-family', '14px')
  .attr('x', zone1.location[0] - (rectWidth - 20)/2 + 25)
  .attr('y', zone1.location[1] - smallRectHeight/2 - 10)
  .attr('width', 200)
  .attr('height', 300)
  .style('color', '#1f546e')
  .text('ARRIVÉE:');

// Ajout des éléments
zone0.textElement = g.append('text')
      .classed('big-text', true)
      .style('font-family', defaultFontFamily)
      .style("font-size", "14px")
      .attr('x', zone0.location[0])
      .attr('y', zone0.location[1])
      .style('fill', 'white')
      .attr("unselectable", "on");

zone1.textElement = rectG.append('text')
      .classed('big-text', true)
      .style('font-family', defaultFontFamily)
      .style("font-size", "14px")
      .attr('x', zone1.location[0])
      .attr('y', zone1.location[1])
      .style('fill', 'white')
      .attr("unselectable", "on");

var defaultFontFamily = FONTS[0] + ', ' + BASE_FONT;

var cross0Image = rectG.append("svg:image")
      .classed('hiddenCross', true)
      .attr('x', zone0.location[0] + zoneBackgroundSize[0] - iconCrossSize[0]/2)
      .attr('y', zone0.location[1] - iconCrossSize[1])
      .attr('width', iconCrossSize[0])
      .attr('height', iconCrossSize[1])
      .style('fill', 'white')
      .attr("xlink:href", "img/map/cross.png");

var cross1Image = rectG.append("svg:image")
      .classed('hiddenCross', true)
      .attr('x', zone1.location[0] + zoneBackgroundSize[0] - iconCrossSize[0]/2)
      .attr('y', zone1.location[1] - iconCrossSize[1])
      .attr('width', iconCrossSize[0])
      .attr('height', iconCrossSize[1])
      .attr("xlink:href", "img/map/cross.png");

var bigText = rectG.append('text')
  .classed('big-text', true)
  .attr('x', 20)
  .attr('y', 45)
  .attr("unselectable", "on");

// Display cities
function displayCities() {
  var fontFamily = FONTS[0] + ', ' + BASE_FONT;
  for (var i=0; i<cities.length; i++) {

    var icon_width = 8;
    var icon_height = 8;

    var text = cities[i][0];
    var city_x = cities[i][1];
    var city_y = cities[i][2];

    svg.append("svg:image")
      .classed('notSelectable', true)
      .attr('x', city_x - icon_width/2)
      .attr('y', city_y - icon_height)
      .attr('width', icon_width)
      .attr('height', icon_height)
      .attr("xlink:href", "img/map/dot.png");

    var text = g.append('text')
      .classed('big-text', true)
      .style('font-family', fontFamily)
      .style("font-size", "14px")
      .text(text)
      .attr("unselectable", "on");

    // determine text size
    var bbox = text.node().getBBox();

    var textWidth = bbox.width;
    var textHeight = bbox.height;

    text.attr('x', city_x - textWidth/2)
      .attr('y', city_y + textHeight)
  }
}

var continuerButton = d3.select("#continuer");
updateContinuer();

displayCities();

// Load map data
//edgt30_simp32_transformed.geo.json
d3.json('data/map/edgt30.geo.json', function(error, mapData) {
  var features = mapData.features;

  // Update color scale domain based on data
  color.domain([0, d3.max(features, nameLength)]);

  // Draw each province as a path
  mapLayer.selectAll('path')
      .data(features)
    .enter().append('path')
      .attr('d', path)
      .attr('vector-effect', 'non-scaling-stroke')
      .style('fill', fillFn)
      .on('mouseover', mouseOverMap)
      .on('mouseout', mouseOutMap)
      .on('click', mapClicked);
});

// Get province name
function nameFn(d) {
  return d && d.properties && index.loaded ? index.d30[d.properties.d30] : null;
}

function idFn(d) {
  return d && d.properties ? d.properties.d30 : null;
}

// Get province name length
function nameLength(d){
  var n = nameFn(d);
  return n ? n.length : 0;
}

// Get province color
function fillFn(d){
  return color(nameLength(d));
}

function mapClicked(d) {
  updateZoneText(d);
  // Create city from clicked location
  if (debug_add_city)
    console.log(invertTransformation(d3.mouse(this)));

  if (!actualZone || actualZone.localeCompare("") == 0)
    return;

  switch (zoneState) {
    case 0:
      zone0.text = actualZone;
      zone0.id = actualId;
      zoneState++;
      cross0Image.classed('cross', true).classed('hiddenCross', false);
      cross0Image.on('click', unclickedMap0);

      // Highlight clicked province
      zone0.element = d3.select(this);
      zone0.element.style('fill', zone0.color);

      if (zone1.text.localeCompare("") != 0) {
        zoneState++;
      }
      break;
    case 1:
      zone1.text = actualZone;
      zone1.id = actualId;
      zoneState++;

      // Highlight clicked province
      zone1.element = d3.select(this);
      zone1.element.style('fill', zone1.color);

      cross1Image.classed('cross', true).classed('hiddenCross', false);
      cross1Image.on('click', unclickedMap1);

      create_dataviz(); // Auto creation of dataviz, scroll without usin buttons
      
      break;
  }
  updateContinuer();
}

function updateContinuer() {
  if (zoneState < 2) {
    continuerButton.style("opacity", "0")
        .style("pointer-events", "none");

  } else {
    continuerButton.style("opacity", "1")
        .style("pointer-events", null);
  }
}

function unclickedMap0(d) {
  zone0.text = "";
  zone0.id = "";
  zoneState = 0;
  zone0.element = null;
  zone0.textElement.text("");
  cross0Image.classed('cross', false).classed('hiddenCross', true);
  cross0Image.on('click', null);
  
  updateContinuer();
  colorMap();
}

function unclickedMap1(d) {
  zone1.text = "";
  zone1.id = "";
  zoneState = (zoneState < 1) ? zoneState : 1;
  zone1.textElement.text("");
  zone1.element = null;
  cross1Image.classed('cross', false).classed('hiddenCross', true);
  cross1Image.on('click', null);

  updateContinuer();
  colorMap();
}

function mouseOverMap(d) {
  if (zoneState < 2) {
    // Highlight hovered province
    d3.select(this).style('fill', selectColor);

    // Draw effects
    updateZoneText(d);

  }
}

function mouseOutMap(d){

  d3.select(this).style('fill', function(d) {return centered && d===centered ? '#D5708B' : fillFn(d);});

  updateZoneText("");

  colorMap();
}

function updateZoneText(d) {
  var text = nameFn(d);
  actualZone = text;
  actualId = idFn(d);

  var myText, loc;
  switch (zoneState) {
    case 0:
      zone0.text = text;
      myText = zone0.textElement;
      loc = zone0.location;
      break;
    case 1:
      zone1.text = text;
      myText = zone1.textElement;
      loc = zone1.location;
      break;
    default:
      return;
  }

  // Change text
  myText.text(text);

  // Compute text size
  var bbox = myText.node().getBBox();
  var textWidth = bbox.width;

  // Update text to center
  myText.attr('x', loc[0] - textWidth/2);
}

function myTextArt(data) {
  // Use random font
  var fontIndex = 0;
  var fontFamily = FONTS[fontIndex] + ', ' + BASE_FONT;

  x = mapWidth / 2;
  y = mapHeight - 20;

  var text = nameFn(data);

  bigText
    .style('font-family', fontFamily)
    .text(text)
    .style('opacity', 0);

  var bbox = bigText.node().getBBox();

  var textWidth = bbox.width;
  var textHeight = bbox.height;

  bigText.attr('x', x - textWidth/2)
    .attr('y', y);

  bigText.transition()
    .style('opacity', function(d){
      return 1.0;
    })
    .attr("y", y - 10)
    .duration(170)
}

function colorMap() {
  mapLayer.selectAll('path')
    .style('fill', function(d){return centered && d===centered ? '#D5708B' : fillFn(d);});

  if (zone0.element != null) {
    zone0.element.style('fill', zone0.color);
  }
  if (zone1.element != null) {
    zone1.element.style('fill', zone1.color);
  }
}
