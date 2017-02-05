//SVG gauges script
var firstGauge = document.querySelector('.container .progress');
var firstTarget = parseInt(firstGauge.getAttribute('data-target'));
var firstGaugeReadout = document.querySelector('.container:first-of-type .percentage > .value');

//variables
var gaugeR = parseInt(document.querySelectorAll('circle')[0].getAttribute('r'));
var gaugeC = gaugeR * Math.PI * 2;
var animationDuration = 1.5;

//init svg circles
var circles = document.querySelectorAll('circle');
var gauges = document.querySelectorAll('.progress');
TweenMax.set(circles, {
  strokeDashoffset: gaugeC
});

TweenMax.set(gauges, {
  attr: {
    'stroke-dasharray': gaugeC + ' ' + gaugeC
  }
});

//calculate the offset
function calculateOffset(t, c) {

  var target = c - (c * t) / 100;
  return target;

}

//timeline
var tl = new TimelineMax();

//second gauge animation
tl.to(firstGauge, animationDuration, {

  strokeDashoffset: calculateOffset(secondTarget, gaugeC),
  ease: Power3.easeInOut

});
