const url = "https://api.nasa.gov/planetary/apod?api_key=";
const api_key = "5bUvkb0JwlsXJrZnZ10jfhZ6o5GGNLb43RTWTE9w";
let userDate = moment().format("YYYY-MM-DD")
var currentDate = moment().format("YYYY-MM-DD");

// const favorites = JSON.parse(localStorage.getItem("favorites")) || []
// console.log(favorites);
const dateInputEl = document.querySelector("duet-date-picker");

//set the maximum date to today
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //gotta add 1 because january is 0
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = `${yyyy}-${mm}-${dd}`;
document.querySelector("duet-date-picker").setAttribute("max", today);


// receive the date that was input from user on the html
const getDate = () => {
  const date =
  document.querySelector(".duet-date input")?.value || dateInputEl.value;
  return date;
};

// Fetching data from the API
const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${api_key}&date=${currentDate}`);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};

// Displaying data on the page
const displayData = (data) => {
  document.getElementById("title").textContent = data.title;
  document.getElementById("picture").src = data.hdurl || 'https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png';
  document.getElementById("explanation").textContent = data.explanation || "NASA doesn't have any information for that day and it makes us sad.";
};

//earliest picture from NASA APOD is june 16, 1995
const setDate = () => {
  var storedDate = sessionStorage.getItem("currentDate");
  userDate = getDate();
  if (userDate) {
    currentDate = userDate
    console.log("userDate was chosen");
  } else if (typeof storedDate != 'object') {
    currentDate = storedDate
  } else {
    currentDate = moment().format("YYYY-MM-DD")
  }
  sessionStorage.setItem("currentDate", currentDate);
  dateInputEl.value = currentDate;
}
setDate();
fetchNASAData();

//check for when the user changes the date
dateInputEl.addEventListener("duetChange", function () {
  setDate();
  fetchNASAData();
});

