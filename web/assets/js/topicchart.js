am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

    var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";

    networkSeries.nodes.template.label.text = "{name}"
    networkSeries.fontSize = 8;
    networkSeries.linkWithStrength = 0;

    var nodeTemplate = networkSeries.nodes.template;
    nodeTemplate.tooltipText = "{name}";
    nodeTemplate.fillOpacity = 1;
    nodeTemplate.label.hideOversized = true;
    nodeTemplate.label.truncate = true;

    var linkTemplate = networkSeries.links.template;
    linkTemplate.strokeWidth = 1;
    var linkHoverState = linkTemplate.states.create("hover");
    linkHoverState.properties.strokeOpacity = 1;
    linkHoverState.properties.strokeWidth = 2;


    nodeTemplate.events.on("over", function (event) {
        var dataItem = event.target.dataItem;
        dataItem.childLinks.each(function (link) {
            link.isHover = true;
        })
    })

    nodeTemplate.events.on("out", function (event) {
        var dataItem = event.target.dataItem;
        dataItem.childLinks.each(function (link) {
            link.isHover = false;
        })
    })

    networkSeries.data = [{
            "name": "bangalore",
            "value": 204,
            "linkWith": [

            ],
            "children": [{
                    "name": "airport",
                    "value": 100
                },
                {
                    "name": "flight",
                    "value": 100
                },
                {
                    "name": "hyderabad",
                    "value": 80
                },
                {
                    "name": "india",
                    "value": 75
                },

            ]
        },
        {
            "name": "terminal",
            "value": 216,
            "linkWith": [

            ],
            "children": [{
                    "name": "departure",
                    "value": 100
                },
                {
                    "name": "delhi",
                    "value": 80
                },
                {
                    "name": "land",
                    "value": 110
                },
                {
                    "name": "traveling",
                    "value": 80
                },

            ]
        },
        {
            "name": "lounge",
            "value": 167,
            "linkWith": [

            ],
            "children": [{
                    "name": "kempegowda",
                    "value": 105
                },
                {
                    "name": "bengaluru",
                    "value": 60
                },
                {
                    "name": "airport",
                    "value": 80
                },
                {
                    "name": "traveling",
                    "value": 60
                },
            ]
        },
        {
            "name": "uber",
            "value": 158,
            "linkWith": [

            ],
            "children": [{
                    "name": "driver",
                    "value": 80
                },
                {
                    "name": "cab",
                    "value": 70
                },
                {
                    "name": "toll",
                    "value": 60
                },
                {
                    "name": "ubersupport",
                    "value": 80
                },
                {
                    "name": "ride",
                    "value": 60
                },
            ]
        },
        {
            "name": "govt",
            "value": 158,
            "linkWith": [

            ],
            "children": [{
                    "name": "hotspots",
                    "value": 80
                },
                {
                    "name": "contributing",
                    "value": 70
                },
                {
                    "name": "addressing",
                    "value": 60
                },
                {
                    "name": "complaining",
                    "value": 80
                },
                {
                    "name": "opportunities",
                    "value": 60
                },
                {
                    "name": "act",
                    "value": 60
                },
                {
                    "name": "economy",
                    "value": 60
                },

            ]
        },
        {
            "name": "security",
            "value": 108,
            "linkWith": [

            ],
            "children": [{
                    "name": "check",
                    "value": 60
                },
                {
                    "name": "passengers",
                    "value": 70
                },
                {
                    "name": "staff",
                    "value": 50
                },
                {
                    "name": "long",
                    "value": 60
                },
                {
                    "name": "queues",
                    "value": 60
                },
                {
                    "name": "gates",
                    "value": 60
                },
                {
                    "name": "boarding",
                    "value": 60
                },

            ]
        },
        {
            "name": "Destination",
            "value": 108,
            "linkWith": [

            ],
            "children": [{
                    "name": "jaipurairport",
                    "value": 60
                },
                {
                    "name": "ahmedabadairport",
                    "value": 70
                },
                {
                    "name": "bhopalairport",
                    "value": 50
                },
                {
                    "name": "shirdiairport",
                    "value": 60
                },
                {
                    "name": "chennaiairport",
                    "value": 60
                },
                {
                    "name": "mumbaiairport",
                    "value": 60
                },
                {
                    "name": "hyderabadairport",
                    "value": 60
                },

            ]
        }
    ];


}); // end am4core.ready()