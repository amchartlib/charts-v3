var chart = AmCharts.makeChart( "chart_intraday", {
  "type": "stock",
  "theme": "light",
  "categoryAxesSettings": {
    "minPeriod": "mm",
    "parseDates": true,
	"groupToPeriods": ["mm"],
    "equalSpacing": true,
    "dashLength": 1,
    "minorGridEnabled": true,
    "labelFunction": function(valueText, date, categoryAxis) {
      return date.toLocaleDateString();
    }
  },
  "dataDateFormat": "YYYY-MM-DD HH:NN:SS",
  "dataSets": [ {
    "color": chartLineColor,
    "fieldMappings": [ {
      "fromField": "value",
      "toField": "value"
    } ],
    "dataProvider": chartIntradayData ,
    "categoryField": "date"
  } ],
  "panels": [ {
    "showCategoryAxis": false,
    "title": chartIntradayTitle ,
    "percentHeight": 400,
    "stockGraphs": [ {
      "id": "g1",
      "valueField": "value",
      "lineThickness": 2,
    } ],
  }, {
    "stockLegend": {
      "valueTextRegular": " ",
      "markerType": "none"
    }
  } ],
  "chartScrollbarSettings": {
    "graph": "g1",
  	"enabled": true,
    "backgroundColor": chartBackgroundColor,
    "selectedBackgroundColor" : chartBackgroundColor,
    "graphFillColor" : chartLineColor,
    "selectedGraphFillColor" : chartLineColor,
    "selectedBackgroundAlpha":1,
    "backgroundAlpha":0.5,
    "color":"#fff",
    "hideResizeGrips" : false
  },
  "pathToImages": chartImagesPath,
  "chartCursorSettings": {
    "valueBalloonsEnabled": true,
    "cursorPosition": "mouse",
    "pan": true,
  },

  "panelsSettings": {
    "usePrefixes": false
  },
  "export": {
    "enabled": false,
    "position": "bottom-right"
  }
} );

var chart = AmCharts.makeChart( "chart_historical", {
  "type": "stock",
  "theme": "light",
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
    "color": chartLineColor,
    "fieldMappings": [ {
      "fromField": "value",
      "toField": "value"
    } ],
    "dataProvider": chartHistoricalData,
    "categoryField": "date"
  } ],
  "panels": [ {
    "showCategoryAxis": false,
    "title": chartHistoricalTitle,
    "percentHeight": 400,
    "stockGraphs": [ {
      "id": "g1",
      "valueField": "value",
      "lineThickness": 2,
    } ],
  }, {
    "stockLegend": {
      "valueTextRegular": " ",
      "markerType": "none"
    }
  } ],
  "chartScrollbarSettings": {
    "graph": "g1",
  	"enabled": true,
    "backgroundColor": chartBackgroundColor,
    "selectedBackgroundColor" : chartBackgroundColor,
    "graphFillColor" : chartLineColor,
    "selectedGraphFillColor" : chartLineColor,
    "selectedBackgroundAlpha":1,
    "backgroundAlpha":0.5,
    "color":"#fff",
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
    "enabled": false,
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
  chart.chartScrollbarSettings.enabled = true;
}

$(document).ready(function() {    
	$('#tabs li a:not(:first)').addClass('inactive');
	$('.tab-container').hide();
	$('.tab-container:first').show();
	$('#tabs li a').click(function(){
	    var t = $(this).attr('id');
	  if($(this).hasClass('inactive')){ //this is the start of our condition 
	    $('#tabs li a').addClass('inactive');           
	    $(this).removeClass('inactive');
	    $('.tab-container').hide();
	    $('#'+ t + '-container').fadeIn('slow');
	 }
	});
});
