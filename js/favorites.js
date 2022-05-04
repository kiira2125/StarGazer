// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Get the id for list-dates to show on modal pop
var listDates = document.getElementById("list-dates");

//Create var to store localstorage 'dates'
var storeDates = JSON.parse(localStorage.getItem("pastDates"))

// When the user clicks on the button, open the modal
btn.onclick = function() {
for (let i = 0; i < storeDates.length; i++) {
    const date = storeDates[i];
var liEl=document.createElement("li")
liEl.textContent = date;
listDates.append(liEl);
}
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}