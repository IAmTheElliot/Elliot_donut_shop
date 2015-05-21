// generates a random number of customers
DonutStore.prototype.generateRandom = function(custMin, custMax) {
  return Math.ceil((Math.random() * (custMax - custMin))) + custMin;
}

// gets random number of customers, multiples perCust for randomized total hourly
DonutStore.prototype.donutsPerHour = function() {
  var random = this.generateRandom(this.custMin, this.custMax);
  return (random * this.perCust);
}

// open time input
// close time input
// loop for hour = 7am-6pm

function DonutStore(location, custMin, custMax, perCust) {
  this.location = location;
  this.custMin = custMin;
  this.custMax = custMax;
  this.perCust = perCust;
}

// array data for tableHeadArrayData
var tableHeadArrayData = ["Location", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "Total"];

// constructor/call for table Head
for(var h = 0; h < tableHeadArrayData.length; h++){
  var productionTable = document.getElementById("tableA");
  var createHead = document.createElement("th");
  createHead.textContent = tableHeadArrayData[h];
  productionTable.appendChild(createHead);
}

// constructor/render template for 1 row of DonutStore
DonutStore.prototype.renderRow = function() {
  var productionTable = document.getElementById("tableA");
  // creates new table element as "tr", appends to tableA
  var storeRow = document.createElement("tr");
  productionTable.appendChild(storeRow);
  // creates new table element as "td", sets content to this.location, appends to "tr" above
  var newTd = document.createElement("td");
  newTd.textContent = this.location;
  storeRow.appendChild(newTd);

  for(var a = 0; a < tableHeadArrayData.length - 1; a++) {
    newTd = document.createElement("td");
    newTd.textContent = Math.floor(this.donutsPerHour());
    storeRow.appendChild(newTd);
  var totalProduction = totalProduction + DonutStore.donutsPerHour
  }
}

var tableLocationArrayData = [];
  tableLocationArrayData.push(new DonutStore("Downtown", 8, 43, 4.5));
  tableLocationArrayData.push(new DonutStore("Capitol Hill", 4, 37, 2.0));
  tableLocationArrayData.push(new DonutStore("South Lake Union", 9, 23, 6.33));
  tableLocationArrayData.push(new DonutStore("Wedgewood", 2, 28, 1.25));
  tableLocationArrayData.push(new DonutStore("Ballard", 8, 58, 3.75));
for (var z = 0; z < tableLocationArrayData.length; z++) {
  tableLocationArrayData[z].renderRow();
}




/*
// newLocation = []
// Array.prototype.push.apply(newLocation);

DonutStore.prototype.addNewLocation = function(){}

var buttonClick = document.getElementById("addLocationData");
buttonClick.addEventListener("click", addNewLocation, false);

var addNewLocation = function(){
  console.log("button clicked");
  var location = (document.getElementById("NewLocation").value);
  var custMin = (document.getElementById("MinimumCustomers").value);
  var custMax = document.getElementById("MaximumCustomers").value;
  var perCust = document.getElementById("AveragePerCust").value;
  console.log(location);
  console.log(custMin);
  console.log(custMax);
  console.log(perCust);
} */

// defines the function of verifying numeric value
  function verifyIsNumeric(){
    console.log("isnumeric triggers");
  var minCustAsStr = document.getElementById("MinimumCustomers").value;
  var minCustAsNum = parseInt(minCustAsStr);
// var num * 100, parseint, div/100. Do as func, return result

/*  console.log(isNaN(minCustAsNum));
  console.log(minCustAsStr); // returns 20
  console.log(minCustAsStr + 1); //returns 201
  console.log(minCustAsNum); //returns 20
  console.log(minCustAsNum + 1); //returns 21
  console.log(isNaNHolder);
  console.log(isNaN(minCustAsNum)); */
  var isNaNHolder = (isNaN(minCustAsNum));
  if ((isNaNHolder == true) && (document.getElementById("MinimumCustomers").value != "")) {
    window.alert("Ensure your minimum customers is a number");
    document.getElementById("MinimumCustomers").value = "";
    document.getElementById("MinimumCustomers").focus();
  } else {
    console.log(minCustAsNum);
    console.log(isNaNHolder);
  }
}


var minCustInput = document.getElementById("MinimumCustomers");
minCustInput.addEventListener("blur", verifyIsNumeric, false);
console.log(document.getElementById("MinimumCustomers").value);

