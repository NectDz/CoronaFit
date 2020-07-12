// Progress bar
var totalCaloriesProgress = document.getElementById("totalCaloriesProgress");
totalCaloriesProgress.max = 1000;
var calories = document.getElementById("calories");
calories.innerHTML = totalCaloriesProgress.value;
var totalCalories = document.getElementById("totalCalories");
totalCalories.innerHTML = totalCaloriesProgress.max;

// Workout
var w = [];
var wUnitsChosen = [];
var wH3 = [];
var wDiv = [];
var wI = 0;

// Creates <div> elements for each exercise
var e = ["Run", "Push-ups", "Sit-ups", "Squats", "Plank", "Stop", "Drop", "Roll"];
var eCaloriesPer = [100, 1, 0.2, 0.25, 3, 100, 10, 1];
var eUnit = ["mile", "push-up", "sit-up", "squat", "minute", "mile", "minute", "rep"]
var eDiv = [];
var eH3 = [];
var eSlider = [];
var eP_units = [];
var eSpan_unitsChosen = [];
var eSpan_totalUnits = [];
var eButton = [];
var h2_Exercises = document.getElementById("h2-Exercises");
for(var i = 0; i < e.length; i++) {
  // Name of exercise
  var nameNode = document.createTextNode(e[i]);
  eH3[i] = document.createElement("h3");
  eH3[i].setAttribute("style", "font:normal 20px Segoe UI;");
  eH3[i].appendChild(nameNode);
  
  // x calories/unit
  var caloriesPerUnitNode = document.createTextNode(eCaloriesPer[i] + " calories/" + eUnit[i]);
  var p_caloriesPerUnit = document.createElement("p");
  p_caloriesPerUnit.style = "font:normal 16px Segoe UI;";
  p_caloriesPerUnit.appendChild(caloriesPerUnitNode);
  
  // Slider <input type="range" min="0" max="100" value="50" class="slider" id="slideri">
  eSlider[i] = document.createElement("input");
  eSlider[i].setAttribute("type", "range");
  eSlider[i].setAttribute("min", "0");
  eSlider[i].max = (totalCalories.innerHTML - calories.innerHTML) / eCaloriesPer[i];
  eSlider[i].setAttribute("value", "0");
  eSlider[i].setAttribute("class", "slider");
  eSlider[i].setAttribute("id", "slider" + i);
  eSlider[i].setAttribute("oninput", "update(eUnitsChosen[i], 'slider" + i + "')");
  //<p id="units" style="display:none;">Units: <span id="unitsChoseni"></span>/<span id="totalUnitsi"></span></p>
  var unitsNode1 = document.createTextNode(eUnit[i] + "s ");
  eSpan_unitsChosen[i] = document.createElement("span");
  eSpan_unitsChosen[i].setAttribute("id", "unitsChosen" + i);
  var unitsNode2 = document.createTextNode("/"); // TODO: replace eSlider[i].max with <span>
  eSpan_totalUnits[i] = document.createElement("span");
  eSpan_totalUnits[i].setAttribute("id", "totalUnits" + i);
  eSpan_totalUnits[i].innerHTML = eSlider[i].max;
  eP_units[i] = document.createElement("p");
  eP_units[i].setAttribute("id", "units" + i);
  eP_units[i].setAttribute("style", "display:none; font:normal 16px Segoe UI; margin-bottom:0px;");
  eP_units[i].appendChild(unitsNode1);
  eP_units[i].appendChild(eSpan_unitsChosen[i]);
  eP_units[i].appendChild(unitsNode2);
  eP_units[i].appendChild(eSpan_totalUnits[i]);
  
  // "Add" button
  eButton[i] = document.createElement("button");
  eButton[i].setAttribute("type", "button");
  eButton[i].setAttribute("onclick", "addToWorkout(" + i + ")");
  eButton[i].innerHTML = "Add";
  eButton[i].setAttribute("style", "display:none; border:none; color:#ffffff; background:#ff8000; padding:8px; border-radius:4px; margin-left:165px;");
  eButton[i].setAttribute("id", "button" + i)
  
  eDiv[i] = document.createElement("div");
  eDiv[i].setAttribute("class", "slidecontainer");
  eDiv[i].style = "margin-left:300px;";
  eDiv[i].setAttribute("onmouseover", "setDisplay(['slider" + i + "', 'units" + i + "', 'button" + i + "'], 'block')");
  eDiv[i].setAttribute("onmouseout", "setDisplay(['slider" + i + "', 'units" + i + "', 'button" + i + "'], 'none')");
  eDiv[i].appendChild(eH3[i]);
  eDiv[i].appendChild(p_caloriesPerUnit);
  eDiv[i].appendChild(eSlider[i]);
  eDiv[i].appendChild(eP_units[i]);
  eDiv[i].appendChild(eButton[i]);
  
  if(i != 0) {
    insertAfter(eDiv[i], eDiv[i - 1]);
  } else {
    insertAfter(eDiv[0], h2_Exercises);
  }
}

// Update eSpan_unitsChosen[i]
for(var i = 0; i < e.length; i++) {
  var input = document.getElementById("slider" + i);
  var output = document.getElementById("unitsChosen" + i);
  output.innerHTML = input.value; // Display the default slider value
  // Update the current slider value (each time you drag the slider handle)
  input.setAttribute("oninput", "setVal('unitsChosen" + i + "', 'slider" + i + "')");
}

// Update eSpan_totalUnits[i]
function updateTotalUnits() {
  for(var i = 0; i < e.length; i++) {
    document.getElementById("totalUnits" + i).innerHTML = document.getElementById("slider" + i).max;
  }
}

function updateUnitsChosen() {
  for(var i = 0; i < e.length; i++) {
    document.getElementById("unitsChosen" + i).innerHTML = document.getElementById("slider" + i).value;
  }
}

function setVal(outputId, inputId) {
  document.getElementById(outputId).innerHTML = document.getElementById(inputId).value;
}

// When click "Add" button
function addToWorkout(i) { if(document.getElementById("slider" + i).value != 0) {
  // Add <div>s to My workout
  w.push(e[i]);
  wUnitsChosen.push(document.getElementById("slider" + i).value);
  var nameNode2 = document.createTextNode(w[wI] + ": " + wUnitsChosen[wI] + " " + eUnit[i] + "s");
  wH3[wI] = document.createElement("h3");
  wH3[wI].setAttribute("style", "font:normal 20px Segoe UI;");
  wH3[wI].appendChild(nameNode2);
  
  wDiv[wI] = document.createElement("div");
  wDiv[wI].style = "margin-top:10px";
  wDiv[wI].appendChild(wH3[wI]);
  
  if(wI != 0) {
    insertAfter(wDiv[wI], wDiv[wI - 1]);
  } else {
    insertAfter(wDiv[wI], document.getElementById("h2-My workout"));
  }
  
  wI++;
  
  // Update progress
  totalCaloriesProgress.value += document.getElementById("slider" + i).value * eCaloriesPer[i];
  // Update progress bar text
  calories.innerHTML = totalCaloriesProgress.value;
  
  // Update sliders' max values
  for(var j = 0; j < e.length; j++ ) {
    document.getElementById("slider" + j).max = (totalCalories.innerHTML - calories.innerHTML) / eCaloriesPer[j];
  }
  // Update sliders' text max
  updateTotalUnits();
  // Update sliders' text value
  updateUnitsChosen();
}}

/*
for(var i = 0; i < w.length; i++) {
  var nameNode2 = document.createTextNode(w[i]);
  wH3[i] = document.createElement("h3");
  wH3[i].setAttribute("style", "font:normal 30px Segoe UI;");
  wH3[i].appendChild(nameNode2);
  
  wDiv[i] = document.createElement("div");
  wDiv[i].style = "margin-left:300px;";
  wDiv[i].appendChild(wH3[i]);
  
  if(i != 0) {
    insertAfter(wDiv[i], wDiv[i - 1]);
  } else {
    insertAfter(wDiv[i], document.getElementById("h2-My workout"));
  }
}
*/

function viewWorkout() {
  window.location.href = "workout-draft.html";
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function setDisplay(ids, display) {
  for(var i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).style.display = display;
  }
}
