window.onload = function() {
  let light = document.querySelector("button.light");
  let dark = document.querySelector("button.dark");
  let normal = document.querySelector("button.normal");
  let large = document.querySelector("button.large");

  dark.onclick = function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  dark.onmouseover = function() {
    dark.style.backgroundColor = "yellow";
  }
  dark.onmouseout = function() {
    dark.style.backgroundColor = "";
  }
  light.onclick = function() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

  light.onmouseover = function() {
    light.style.backgroundColor = "yellow"
  }
  light.onmouseout = function() {
    light.style.backgroundColor = "";
  }
  normal.onclick = function() {
    document.body.style.fontSize = "15px";
  }
  normal.onmouseover = function() {
    normal.style.backgroundColor = "yellow"
  }
  normal.onmouseout = function() {
    normal.style.backgroundColor = "";
  }
  large.onclick = function() {
    document.body.style.fontSize = "25px";
  }
  large.onmouseover = function() {
    large.style.backgroundColor = "yellow"
  }
  large.onmouseout = function() {
    large.style.backgroundColor = "";
  }
}