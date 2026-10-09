// add cube var
var addCube = document.getElementById("add-cube");
// engineGameEditor var
var engineGameEditor = document.getElementsByClassName("engineGameEditor")[0];

// addEventLisner

addCube.addEventListener('click',function() {
  var obj = document.createElement('div');
  obj.className = "mObj";
  // call appendChild
  engineGameEditor.appendChild(obj);
})