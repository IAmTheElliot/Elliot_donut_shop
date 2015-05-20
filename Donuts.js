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
  }
  var totalProduction = totalProduction + DonutStore.donutsPerHour
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




// defines the function of verifying numeric value
function verifyIsNumeric() {
  var minCustAsStr = document.getElementById("MinimumCustomers").value;
  var minCustAsNum = parseInt(minCustAsStr);
  if (isNaN(minCustAsNum) === "NaN") {
    console.log("minCustAsNum isNaN = false");
    window.alert("Your minimum customers must be a number!");
  }
  console.log(isNaN(minCustAsNum));
  console.log(minCustAsStr); // returns 20
  console.log(minCustAsStr + 1); //returns 201
  console.log(minCustAsNum); //returns 20
  console.log(minCustAsNum + 1); //returns 21

/*
  console.log(isNaN("string")); //true "string is not a number"
  console.log(isNaN(4)); //false "4 is a number"
  console.log(!isNaN(4)); //true "4 is not not a number"
  console.log(isNaN("4")); //false "4 is a number"
  console.log(minCustAsStr.type);
  console.log(1 + (parseInt(minCustAsStr),10));
*/
  // } else {
    // prompt("Only enter numbers in Minimum Customers");
    // document.getElementById("MinimumCustomers").value = ""
}

  // console.log(!isNaN(minCustAsStr));

var minCustInput = document.getElementById("MinimumCustomers");
minCustInput.addEventListener("blur", verifyIsNumeric, false);
;
//  console.log(isNaN(document.getElementById("MinimumCustomers")).value);
//  console.log(isFinite(minCustInput));
//  console.log(isFinite(0));

// found online
// function isNumber(n) {
// console.log(isNaN(parseFloat(minCustAsStr)) && isFinite(minCustAsStr));



/*
  var verifyMaxCust = document.getElementById("MaximumCustomers");
  verifyMinCust.addEventListener("blur",  )
}

function addLocationArray() {
  var buttonClick = document.getElementById("addLocationData");
  buttonClick.addEventListener("onclick", outputToArray, false);
}
var outputToArray = blahblahblah
*/
