
function calculate() {
  var temp = document.getElementById("temp").value;
  var speed = document.getElementById("speed").value;
  var windchill = 35.74 + 0.6215*temp  +(0.4275*temp - 35.75)  *  speed ^ 0.16;
  document.getElementById("windchill").innerHTML = windchill.toFixed(3);
}
