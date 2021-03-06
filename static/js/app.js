// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

function buildTable(UFOReport) {

    // Clear table 
    tbody.html("")

    // check data in the console log 
    UFOReport.forEach(x => console.log(x));

    // populate the table 
    UFOReport.forEach(x => {
        var row = tbody.append("tr");
        Object.values(x).forEach(value => {
            row.append("td").text(value);
        })
    });
};
buildTable(tableData);

// ##########################
// Filter the data 
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(dates => dates.datetime === inputValue);
  
    console.log(filteredData);

    // d3.select("tbody").append("tr").append("td").text(inputValue)
    buildTable(filteredData);



};