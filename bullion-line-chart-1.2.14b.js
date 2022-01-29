var chart = AmCharts.makeChart(chartName2 , {
  "type": "stock",
  "theme": "light",
  "precision": 3, 
  "categoryAxesSettings": {
    "minPeriod": "DD",
    "parseDates": true,
	"groupToPeriods": ["DD"],
    "dashLength": 1,
    "minorGridEnabled": true,
    "equalSpacing": false,
    "labelFunction": function(valueText, date, categoryAxis) {
      return date.toLocaleDateString();
    }
  },

  "dataSets": [ {
    "color": "#7F7F7F",
    "fieldMappings": [ {
      "fromField": "value",
      "toField": "value"
    } ],

    "dataProvider": chartData2,
    "categoryField": "date"
  } ],

  "panels": [ {
    "showCategoryAxis": true,
    "title": "",
    "eraseAll": false,
    "allLabels": [ {
      "x": 60,
      "y": 20,
      "text": chartPanelsText2,
      "url": chartUrl,
      "size": 12,
	  "bold": true,
      "color": '#777777'
    } ],

    "stockGraphs": [ {
      "id": "g2",
      "valueField": "value",
      "lineThickness": 2,
      "useDataSetColors": true
    } ],

    "stockLegend": {
      "valueTextRegular": "",
      "markerType": "none"
    },
  } ],

  "chartScrollbarSettings": {
    "graph": "g2",
  	"enabled": true,
    "backgroundColor": "#CECECE",
    "selectedBackgroundColor" : "#CECECE",
    "graphFillColor" : "#7F7F7F",
    "selectedGraphFillColor" : "#7F7F7F",
    "selectedBackgroundAlpha":1,
    "backgroundAlpha":0.7,
    "hideResizeGrips" : false
  },
  "pathToImages": chartImagesPath,

  "chartCursorSettings": {
    "valueBalloonsEnabled": true,
    "cursorPosition": "mouse",
    "pan": true,
  },
  
  "periodSelector": {
    "position": "bottom",
    "dateFormat": "YYYY-MM-DD",
    "inputFieldWidth": 120,
    "periods": [ 
	    {"period": "DD", "count": 7, "label": "1W"}, 
	    {"period": "MM", "count": 1, "label": "1M"}, 
	    {"period": "MM", "count": 3, "label": "3M"}, 
	    {"period": "MM", "count": 6, "label": "6M"}, 
	    {"period": "YYYY", "count": 1, "label": "1Y"}, 
	    {"period": "YYYY", "count": 2, "label": "2Y"}, 
	    {"period": "YYYY", "count": 3, "label": "3Y"}, 
	    {"period": "YYYY", "count": 5, "label": "5Y"}, 
	    {"period": "YTD", "label": "YTD" }, 
	    {"period": "MAX","label": "MAX", selected:true} 
    ]
  },

  "panelsSettings": {
    "usePrefixes": false
  },

  "export": {
    "enabled": false,
  }
} );
