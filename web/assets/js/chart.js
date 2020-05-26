anychart.onDocumentReady(function () {
  var data = [{
      "x": "fabulous",
      "value": 900,

    },
    {
      "x": "friendly",
      "value": 983,

    },
    {
      "x": "essential",
      "value": 544,

    },
    {
      "x": "clean",
      "value": 527,

    },
    {
      "x": "quality",
      "value": 422,

    },
    {
      "x": "beautiful",
      "value": 281,
    },

    {
      "x": "reward",
      "value": 267,

    },
    {
      "x": "excellent",
      "value": 261,

    },
    {
      "x": "delightful",
      "value": 229,

    },
    {
      "x": "welcome",
      "value": 229,

    },
    {
      "x": "cool",
      "value": 150,

    },
    {
      "x": "active",
      "value": 148,

    },
    {
      "x": "perfect",
      "value": 129,

    },
    {
      "x": "efficient",
      "value": 119,

    },
    {
      "x": "protected",
      "value": 80,

    },
    {
      "x": "easy",
      "value": 90,

    },
    {
      "x": "laugh",
      "value": 71,

    },
    {
      "x": "popular",
      "value": 89,

    },
    {
      "x": "simple",
      "value": 63,

    },
    {
      "x": "attractive",
      "value": 78,

    },
    {
      "x": "worthy",
      "value": 198,

    },
    {
      "x": "divine",
      "value": 250,

    },
    {
      "x": "suprising",
      "value": 290,

    },
    {
      "x": "fresh",
      "value": 115,

    },
    {
      "x": "simple",
      "value": 121,

    },
    {
      "x": "dazzling",
      "value": 178,

    },
    {
      "x": "awesome",
      "value": 200,

    }

  ];

  // create a tag (word) cloud chart
  var chart = anychart.tagCloud(data);

  // set a chart title
  //chart.title('15 most spoken languages')
  // set an array of angles at which the words will be laid out
  chart.angles([0])
  // enable a color range
  chart.colorRange(true);
  // set the color range length
  chart.colorRange().length('80%');

  // display the word cloud chart
  chart.container("poscloud");
  chart.draw();
});

anychart.onDocumentReady(function () {
  var data = [{

      "x": "bad",

      "value": 90000000,

    },

    {

      "x": "terrible",

      "value": 93000000,

    },

    {

      "x": "luggage",

      "value": 544000000,

    },

    {

      "x": "fear",

      "value": 527000000,

    },

    {

      "x": "experience",

      "value": 422000000,

    },

    {

      "x": "damaging",

      "value": 281000000,

    },

    {

      "x": "traffic",

      "value": 967000000,

    },

    {

      "x": "stressful",

      "value": 261000000,

    },

    {

      "x": "hate",

      "value": 229000000,

    },

    {

      "x": "check",

      "value": 229000000,

    },

    {

      "x": "boarding",

      "value": 150000000,

    },

    {

      "x": "airports",

      "value": 148000000,

    },

    {

      "x": "boring",

      "value": 129000000,

    },

    {

      "x": "worst",

      "value": 129000000,

    },

    {

      "x": "unfair",

      "value": 121000000,

    },

    {

      "x": "confused",

      "value": 129000000,

    },

    {

      "x": "scarcity",

      "value": 129000000,

    },

    {

      "x": "ignorant",

      "value": 129000000,

    },

    {

      "x": "garbage",

      "value": 129000000,

    },

  ];

  // create a tag (word) cloud chart
  var chart = anychart.tagCloud(data);

  // set a chart title
  //chart.title('15 most spoken languages')
  // set an array of angles at which the words will be laid out
  chart.angles([0])
  // enable a color range
  chart.colorRange(true);
  // set the color range length
  chart.colorRange().length('80%');

  // display the word cloud chart
  chart.container("negcloud");
  chart.draw();
});



// Facebook Wordcloud

anychart.onDocumentReady(function () {
  var data = [{
      "x": "satisfaction",
      "value": 90000000,

    },
    {
      "x": "super",
      "value": 983000000,

    },
    {
      "x": "honest",
      "value": 544000000,

    },
    {
      "x": "clean",
      "value": 527000000,

    },
    {
      "x": "real",
      "value": 422000000,

    },
    {
      "x": "funny",
      "value": 281000000,
    },

    {
      "x": "bliss",
      "value": 267000000,

    },
    {
      "x": "heal",
      "value": 261000000,

    },
    {
      "x": "wothy",
      "value": 229000000,

    },
    {
      "x": "beautiful",
      "value": 229000000,

    },
    {
      "x": "skillful",
      "value": 150000000,

    },
    {
      "x": "hearty",
      "value": 148000000,

    },
    {
      "x": "attractive",
      "value": 129000000,

    },
    {
      "x": "novel",
      "value": 129000000,

    },
    {
      "x": "friendly",
      "value": 121000000,

    },
    {
      "x": "kind",
      "value": 121000000,

    },
    {
      "x": "cool",
      "value": 121000000,

    },
    {
      "x": "fantastic",
      "value": 121000000,

    },
    {
      "x": "truthful",
      "value": 121000000,

    },
    {
      "x": "ethical",
      "value": 121000000,

    },
    {
      "x": "cute",
      "value": 121000000,

    },
    {
      "x": "supporting",
      "value": 121000000,

    },
    {
      "x": "suprising",
      "value": 121000000,

    },
    {
      "x": "fresh",
      "value": 121000000,

    },
    {
      "x": "respect",
      "value": 121000000,

    },
    {
      "x": "wow",
      "value": 121000000,

    },
    {
      "x": "awesome",
      "value": 121000000,

    }

  ];

  // create a tag (word) cloud chart
  var chart = anychart.tagCloud(data);

  // set a chart title
  //chart.title('15 most spoken languages')
  // set an array of angles at which the words will be laid out
  chart.angles([0])
  // enable a color range
  chart.colorRange(true);
  // set the color range length
  chart.colorRange().length('80%');

  // display the word cloud chart
  chart.container("fbposcloud");
  chart.draw();
});


anychart.onDocumentReady(function () {
  var data = [{

      "x": "bad",

      "value": 1090000000,

    },

    {

      "x": "confused",

      "value": 983000000,

    },

    {

      "x": "notworthy",

      "value": 544000000,

    },

    {

      "x": "fault",

      "value": 527000000,

    },

    {

      "x": "scarcity",

      "value": 422000000,

    },

    {

      "x": "unfair",

      "value": 281000000,

    },

    {

      "x": "ignorant",

      "value": 267000000,

    },

    {

      "x": "annoy",

      "value": 261000000,

    },

    {

      "x": "damaging",

      "value": 229000000,

    },

    {

      "x": "check",

      "value": 229000000,

    },

    {

      "x": "boring",

      "value": 150000000,

    },

    {

      "x": "terrible",

      "value": 148000000,

    },

    {

      "x": "hate",

      "value": 129000000,

    },

    {

      "x": "waiting",

      "value": 129000000,

    },

    {

      "x": "worst",

      "value": 121000000,

    },

    {

      "x": "pay",

      "value": 129000000,

    },

    {

      "x": "crowd",

      "value": 129000000,

    },

    {

      "x": "help",

      "value": 129000000,

    },

    {

      "x": "garbage",

      "value": 129000000,

    },

    {

      "x": "queue",

      "value": 129000000,

    },

    {

      "x": "poor",

      "value": 129000000,

    },

    {

      "x": "security",

      "value": 129000000,

    },

  ];

  // create a tag (word) cloud chart
  var chart = anychart.tagCloud(data);

  // set a chart title
  //chart.title('15 most spoken languages')
  // set an array of angles at which the words will be laid out
  chart.angles([0])
  // enable a color range
  chart.colorRange(true);
  // set the color range length
  chart.colorRange().length('80%');

  // display the word cloud chart
  chart.container("fbnegcloud");
  chart.draw();
});




var options = {
  series: [11918, 9918, 10855],
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Positive', 'Negative', 'Neutral'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#emotionpie"), options);
chart.render();




var options = {
  series: [2741, 1023, 3178],
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Positive', 'Negative', 'Neutral'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#emotionpiefb"), options);
chart.render();


var options = {
  series: [6474, 604, 4346],
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Positive', 'Negative', 'Neutral'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#emotionpieinsta"), options);
chart.render();