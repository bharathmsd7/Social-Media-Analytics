var a = [10, 20, 30, 40, 50, 60];



var options = {

	chart: {

		type: 'line'

	},

	series: [

		{

			name: 'sales',

			data: a

		},

		{

			name: 'sales',

			data: [75, 69, 25, 80, 40, 40]

		},

		{

			name: 'sales',

			data: [45, 29, 15, 40, 60, 50]

		}

	],

	markers: {

		size: 0

	},

	xaxis: {

		categories: ['July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

	}

};



var chart = new ApexCharts(document.querySelector('#chart'), options);



chart.render();



var options1 = {

	series: [

		{

			name: 'Twitter',

			data: [4776, 4362, 4377, 4355, 5599, 5971]

		},

		{

			name: 'Instagram',

			data: [3598, 2487, 3105, 2491, 3114, 4094]

		},

		{

			name: 'Facebook',

			data: [2035, 1341, 1436, 1026, 2005, 2448]

		}

	],

	chart: {

		type: 'bar',

		height: 350

	},

	plotOptions: {

		bar: {

			horizontal: false,

			columnWidth: '55%',

			endingShape: 'rounded'

		}

	},

	dataLabels: {

		enabled: false

	},

	stroke: {

		show: true,

		width: 2,

		colors: ['transparent']

	},

	xaxis: {

		categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

	},



	fill: {

		opacity: 1

	},

	tooltip: {

		y: {

			formatter: function (val) {

				return '$ ' + val + ' thousands';

			}

		}

	}

};



var chart = new ApexCharts(document.querySelector('#totalchart'), options1);

chart.render();



var options = {

	series: [

		{

			data: [1, 5, 3, 9, 4, 2, 8, 7]

		}

	],

	chart: {

		type: 'area',

		height: 160,

		sparkline: {

			enabled: true

		}

	},

	stroke: {

		curve: 'straight'

	},

	fill: {

		opacity: 0.3

	},

	yaxis: {

		min: 0

	},

	colors: ['#DCE6EC']

};



var chart = new ApexCharts(document.querySelector('#chart-spark1'), options);

chart.render();

var options = {

	chart: {

		type: "area",

		height: 300,

		foreColor: "#999",

		stacked: true,

		dropShadow: {

			enabled: true,

			enabledSeries: [0],

			top: -2,

			left: 2,

			blur: 5,

			opacity: 0.06

		}

	},

	colors: ['#00E396', '#0090FF'],

	stroke: {

		curve: "smooth",

		width: 3

	},

	dataLabels: {

		enabled: false

	},

	series: [{

		name: 'Total Views',

		data: generateDayWiseTimeSeries(0, 18)

	}, {

		name: 'Unique Views',

		data: generateDayWiseTimeSeries(1, 18)

	}],

	markers: {

		size: 0,

		strokeColor: "#fff",

		strokeWidth: 3,

		strokeOpacity: 1,

		fillOpacity: 1,

		hover: {

			size: 6

		}

	},

	xaxis: {

		type: "datetime",

		axisBorder: {

			show: false

		},

		axisTicks: {

			show: false

		}

	},

	yaxis: {

		labels: {

			offsetX: 14,

			offsetY: -5

		},

		tooltip: {

			enabled: true

		}

	},

	grid: {

		padding: {

			left: -5,

			right: 5

		}

	},

	tooltip: {

		x: {

			format: "dd MMM yyyy"

		},

	},

	legend: {

		position: 'top',

		horizontalAlign: 'left'

	},

	fill: {

		type: "solid",

		fillOpacity: 0.7

	}

};



var chart = new ApexCharts(document.querySelector("#timeline-chart"), options);



chart.render();



function generateDayWiseTimeSeries(s, count) {

	var values = [
		[

			4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5

		],
		[

			2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2

		]
	];

	var i = 0;

	var series = [];

	var x = new Date("11 Nov 2012").getTime();

	while (i < count) {

		series.push([x, values[s][i]]);

		x += 86400000;

		i++;

	}

	return series;

}

















var options = {

	series: [{

			name: 'Positive',

			data: [31, 40, 28, 51, 42, 109]

		}, {

			name: 'Negative',

			data: [11, 32, 45, 32, 34, 52]

		},

		{
			name: 'Neutral',

			data: [45, 56, 31, 15, 75, 85]

		}
	],



	chart: {

		height: 350,

		type: 'area'

	},

	dataLabels: {

		enabled: false

	},

	stroke: {

		curve: 'smooth'

	},

	xaxis: {

		type: 'month',

		categories: ["July", "August", "September", "October", "November", "December"]

	},

	tooltip: {

		x: {

			format: 'dd/MM/yy HH:mm'

		},

	},

};



var chart = new ApexCharts(document.querySelector("#sentiment"), options);

chart.render();



// Facebook sentiment

var options = {

	series: [{

			name: 'Positive',

			data: [406, 350, 506, 456, 400, 576]

		}, {

			name: 'Negative',

			data: [170, 220, 100, 250, 200, 145]

		},

		{
			name: 'Neutral',

			data: [530, 421, 667, 215, 470, 500]

		}
	],



	chart: {

		height: 350,

		type: 'area'

	},

	dataLabels: {

		enabled: false

	},

	stroke: {

		curve: 'smooth'

	},

	xaxis: {

		type: 'month',

		categories: ["July", "August", "September", "October", "November", "December"]

	},

	tooltip: {

		x: {

			format: 'dd/MM/yy HH:mm'

		},

	},

};



var chart = new ApexCharts(document.querySelector("#sentimentfb"), options);

chart.render();

// Twitter sentiment

var options = {

	series: [{

			name: 'Positive',

			data: [1542, 1834, 1624, 2359, 2139, 2536]

		}, {

			name: 'Negative',

			data: [1653, 1709, 2068, 1793, 1485, 1529]

		},

		{
			name: 'Neutral',

			data: [1787, 2013, 1430, 1942, 1689, 1908]

		}
	],



	chart: {

		height: 350,

		type: 'area'

	},

	dataLabels: {

		enabled: false

	},

	stroke: {

		curve: 'smooth'

	},

	xaxis: {

		type: 'month',

		categories: ["July", "August", "September", "October", "November", "December"]

	},

	tooltip: {

		x: {

			format: 'dd/MM/yy HH:mm'

		},

	},

};



var chart = new ApexCharts(document.querySelector("#sentimenttwitter"), options);

chart.render();


// insta sentiment

var options = {

	series: [{

			name: 'Positive',

			data: [1079, 1246, 915, 766, 1236, 1089]

		}, {

			name: 'Negative',

			data: [100, 70, 30, 150, 120, 170]

		},

		{
			name: 'Neutral',

			data: [724, 607, 492, 1033, 796, 696]

		}
	],



	chart: {

		height: 350,

		type: 'area'

	},

	dataLabels: {

		enabled: false

	},

	stroke: {

		curve: 'smooth'

	},

	xaxis: {

		type: 'month',

		categories: ["July", "August", "September", "October", "November", "December"]

	},

	tooltip: {

		x: {

			format: 'dd/MM/yy HH:mm'

		},

	},

};



var chart = new ApexCharts(document.querySelector("#sentimentins"), options);

chart.render();













var options = {

	series: [{

			name: 'Love',

			data: [31, 40, 28, 51, 42, 109, 100]

		}, {

			name: 'Suprise',

			data: [11, 32, 45, 32, 34, 52, 41]

		},

		{
			name: 'Joy',

			data: [15, 56, 31, 15, 75, 85, 41]

		},

		{
			name: 'Sadness',

			data: [25, 16, 21, 15, 35, 25, 11]

		},

		{
			name: 'Fear',

			data: [25, 36, 11, 15, 35, 45, 21]

		},

		{
			name: 'Anger',

			data: [55, 66, 37, 25, 85, 95, 51]

		},
	],



	chart: {

		height: 350,

		type: 'area'

	},

	dataLabels: {

		enabled: false

	},

	stroke: {

		curve: 'smooth'

	},

	xaxis: {

		type: 'month',

		categories: ["July", "August", "September", "October", "November", "December"]

	},

	tooltip: {

		x: {

			format: 'dd/MM/yy HH:mm'

		},

	},

};



var chart = new ApexCharts(document.querySelector("#emotion"), options);

chart.render();