

var c = document.getElementById("myChart");
var ctx = c.getContext('2d');

var data = {
	labels: [
		"- de 30 ans",
		"30 - 50 ans",
		"+ de 50 ans"
	],
	datasets: [
	{
		data: [32, 30, 37],
		backgroundColor: [
			"#ad3333",
			"#506db3",
			"#a69332"
		],
		hoverBackgroundColor: [
			"#ad3333",
			"#506db3",
      "#a69332"
    ],
		borderColor : [ 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)' ]
	}]
};

var myDoughnutChart = new Chart(ctx, {
	type: 'doughnut',
	data: data,
	options: {
		rotation: 1 * Math.PI,
		circumference: 1 * Math.PI,
		legend: {
			position: 'bottom',
			labels: {
				padding: 25
			}
		},
	tooltips: {
  callbacks: {
    label: function(tooltipItem, data) {
      //get the concerned dataset
      var dataset = data.datasets[tooltipItem.datasetIndex];
	  
      //calculate the total of this data set
	  
      var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
        return previousValue + currentValue;
      });
	  
      //get the current items value
      var currentValue = dataset.data[tooltipItem.index];
      //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
      //var precentage = Math.floor(((currentValue/total) * 100)+0.5);

      return currentValue + " personnes";
    }
  }
},
	animation: {
    duration: 500,
    easing: "easeOutQuart",
    onComplete: function () {
      var ctx = this.chart.ctx;
      ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';

      this.data.datasets.forEach(function (dataset) {

        for (var i = 0; i < dataset.data.length; i++) {
          var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
              total = dataset._meta[Object.keys(dataset._meta)[0]].total,
              mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
              start_angle = model.startAngle,
              end_angle = model.endAngle,
              mid_angle = start_angle + (end_angle - start_angle)/2;

          var x = mid_radius * Math.cos(mid_angle);
          var y = mid_radius * Math.sin(mid_angle);

          ctx.fillStyle = '#fff';
          if (i == 3){ // Darker text color for lighter background
            ctx.fillStyle = '#444';
          }
          var percent = String(Math.round(dataset.data[i]/total*100)) + "%";
          //ctx.fillText(dataset.data[i], model.x + x, model.y + y); //uncomment this line to display the value
          // Display percent in another line, line break doesn't work for fillText
          ctx.fillText(percent, model.x + x, model.y + y + 15);
		  
		  var val = dataset.data[i];
          var percent = String(Math.round(val/total*100)) + "%";

          if(val != 0) {
            //ctx.fillText(dataset.data[i], model.x + x, model.y + y);
            // Display percent in another line, line break doesn't work for fillText
            ctx.fillText(percent, model.x + x, model.y + y + 15);
          }
        }
      });               
    }
  }
}
	
});


    