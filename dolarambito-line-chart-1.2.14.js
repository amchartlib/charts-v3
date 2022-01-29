var chart = AmCharts.makeChart( "chart_historical", {
  "type": "stock",
  "theme": "light",
  "language": "es",
  "categoryAxesSettings": {
    "minPeriod": "mm",
    "parseDates": true,
	"groupToPeriods": ["DD"],
    "dashLength": 1,
    "minorGridEnabled": true,
    "labelFunction": function(valueText, date, categoryAxis) {
      return date.toLocaleDateString();
    }
  },

  "dataSets": [ {
    "color": chartColor,
    "fieldMappings": [ {
      "fromField": "value",
      "toField": "value"
    } ],

    "dataProvider": chartData,
    "categoryField": "date"
  } ],

  "panels": [ {
    "showCategoryAxis": false,
    "title": chartTitle,
    "percentHeight": 400,

    "stockGraphs": [ {
      "id": "g1",
      "valueField": "value",
      "lineThickness": 2,
    } ],


    "stockLegend": {
      "valueTextRegular": " ",
      "markerType": "none"
    }
  }, {

    "stockLegend": {
      "valueTextRegular": " ",
      "markerType": "none"
    }
  } ],

  "chartScrollbarSettings": {
    "graph": "g1",
  	"enabled": true,
    "color":"#212121",
    "backgroundColor": chartBackgroundColor,
    "selectedBackgroundColor" : chartBackgroundColor,
    "graphFillColor" : chartColor,
    "selectedGraphFillColor" : chartColor,
    "selectedBackgroundAlpha":1,
    "backgroundAlpha":0.5,
    "hideResizeGrips" : false
  },


  "pathToImages": chartImagesPath,

  "chartCursorSettings": {
    "valueBalloonsEnabled": true,
    "cursorPosition": "mouse",
    "pan": true,
  },

  "periodSelector": {
    "position": "top",
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
	    {"period": "YYYY", "count": 5, "label": "5Y", selected:true}, 
	    {"period": "YTD", "label": "YTD" }, 
	    {"period": "MAX","label": "MAX"} 
    ]
  },

  "panelsSettings": {
    "usePrefixes": false
  },

  "export": {
    "enabled": true,
    "position": "bottom-right"
  }
} );


function setGrouping(groupTo, button) {
  // set chart grouping
  chart.categoryAxesSettings.groupToPeriods = [groupTo];
  chart.validateData();

  // set selected style on the button
  var buttons = button.parentNode.getElementsByTagName("input");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = "amcharts-grouping-input";
  }
  button.className = "amcharts-grouping-input selected";
}

