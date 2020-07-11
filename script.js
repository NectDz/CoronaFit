/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

class Slider {
  constructor(id, labelId) {
    this.id = id;
    this.labelId = labelId;
    this.display = document.getElementById(this.id).style.display;
    this.labelDisplay = document.getElementById(this.labelId).style.display;
  }
  
  click() {
    this.display = document.getElementById(this.id).style.display;
    if(this.display == "none") {
      setDisplay([this.id, this.labelId], "block")
    } else {
      setDisplay([this.id, this.labelId], "none");
    } 
  }
}

// Progress bar
var totalCaloriesProgress = document.getElementById("totalCaloriesProgress");
var totalCalories = document.getElementById("totalCalories");
totalCalories.innerHTML = totalCaloriesProgress.value;

// Sliders
let slider1 = new Slider("calorieRange", "units");
var slider = document.getElementById("calorieRange");
var output = document.getElementById("unitsChosen");
output.innerHTML = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

function setDisplay(ids, display) {
  for(var i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).style.display = display;
  }  
}

// TODO: permanently set display (override hover)
function clickSlider() {
  var display = document.getElementById("calorieRange").style.display;
  if(display == "none") {
    setDisplay(["calorieRange", "units"], "block")
  } else {
    setDisplay(["calorieRange", "units"], "none");
  }  
}


