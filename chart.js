

var xArray = ["Boston","New York","Philadelphia","Atlanta","Chicago", "Fort Worth", "Kansas City"];
var yArray = [30, 56, 33, 68, 54, 53, 29];

var data = [{
  x:xArray,
  y:yArray,
  type:"bar"
}];

var layout = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot", data, layout);
