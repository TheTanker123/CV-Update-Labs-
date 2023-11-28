const button = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("dropdownContent");

button.addEventListener("click", function(event) {
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
  event.stopPropagation();
});

document.addEventListener("click", function(event) {
  if (event.target !== button && event.target !== dropdownContent) {
    dropdownContent.style.display = "none";
  }
});


var cliclerID=document.getElementById("money")
var buttonID=document.getElementById("invisibleButton")
var counter=0;
buttonID.addEventListener('click', function(){
  counter++;
  cliclerID.textContent=''+ counter
});