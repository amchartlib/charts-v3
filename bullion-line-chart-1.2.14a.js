var chart = AmCharts.makeChart( chartName1, {
  "type": "stock",
  "theme": "light",
  "categoryAxesSettings": {
    "minPeriod": "DD",
    "parseDates": true,
	"groupToPeriods": ["DD"],
    "dashLength": 1,
    "minorGridEnabled": true,
    "labelFunction": function(valueText, date, categoryAxis) {
      return date.toLocaleDateString();
    }
  },

  "dataSets": [ {
    "color": chartLineColor,
    "fieldMappings": [ {
      "fromField": "value",
      "toField": "value"
    } ],

    "dataProvider": chartData1,
    "categoryField": "date"
  } ],

  "panels": [ {
    "showCategoryAxis": true,
    "title": "",
    "eraseAll": false,
    "allLabels": [ {
      "x": 60,
      "y": 20,
      "text": chartPanelsText1,
      "url": chartUrl,
      "size": 12,
	  "bold": true,
      "color": '#777777'
    } ],

    "stockGraphs": [ {
      "id": "g1",
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
    "graph": "g1",
  	"enabled": true,
    "backgroundColor": chartBackgroundColor,
    "selectedBackgroundColor" : chartBackgroundColor,
    "graphFillColor" : chartLineColor,
    "selectedGraphFillColor" : chartLineColor,
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
