var ctx = document.getElementById("financeChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["totalement","partiellement","difficilement"],
    datasets: [{
      backgroundColor: [
        "#B22222",
        "#072b6f",
        "#6b87f3 "
      ],
      data: [31,12,4],
	  hoverBackgroundColor: [
			"#B22222",
			"#072b6f",
      "#6b87f3"
    ],
	  borderColor : [ 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)' ]
    }]
  },options: {
		legend: {
			position: 'bottom',
			labels: {
				padding: 25
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