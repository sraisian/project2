
var layout = {
  title: 'Type of Flu Reported in Incidents' 
}
// Initializes the page with a default plot
function init() {
  data = [{
    x: ["A (H3)",	"A (H1N1)pdm09",	"A (Subtyping not Performed)",	"B (Victoria Lineage)",	"B (Yamagata Lineage)",	"B (Lineage Unspecified)",	"H3N2v"],
    y: [3754,	14119,	362,	1523,	3295,	2166,	18],
    type: 'bar',
    title: 'Test Title'
  }]

  Plotly.newPlot("plot", data, layout);
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  var x = [];
  var y = [];
//Season 15-16
  if (dataset === 'dataset1') {
    x = ["A (H3)",	"A (H1N1)pdm09",	"A (Subtyping not Performed)",	"B (Victoria Lineage)",	"B (Yamagata Lineage)",	"B (Lineage Unspecified)",	"H3N2v"],
    y = [3754,	14119,	362,	1523,	3295,	2166,	18]
  }
//Season 16-17
  if (dataset === 'dataset2') {
    x = ["A (H3)",	"A (H1N1)pdm09",	"A (Subtyping not Performed)",	"B (Victoria Lineage)",	"B (Yamagata Lineage)",	"B (Lineage Unspecified)",	"H3N2v"],
    y = [27877,	874,	232,	2238,	5723,	1639,	58]
  }
//Season 17-18
  if (dataset === 'dataset3') {
    x = ["A (H3)",	"A (H1N1)pdm09",	"A (Subtyping not Performed)",	"B (Victoria Lineage)",	"B (Yamagata Lineage)",	"B (Lineage Unspecified)",	"H3N2v"],
    y = [28630,	5337,	366,	1237,	10174,	2548,	3]
  }
 //Season 18-19 
  if (dataset === 'dataset4') {
    x = ["A (H3)",	"A (H1N1)pdm09",	"A (Subtyping not Performed)",	"B (Victoria Lineage)",	"B (Yamagata Lineage)",	"B (Lineage Unspecified)",	"H3N2v"],
    y = [17303,	20599,	1294,	1239,	434,	861,	0]
  }

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
}

init();
