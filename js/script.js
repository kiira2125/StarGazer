const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = '5bUvkb0JwlsXJrZnZ10jfhZ6o5GGNLb43RTWTE9w'
let userDate = moment().format('YYYY-MM-DD')
console.log(userDate);

const dateInputEl = document.getElementById('date')

//set the maximum date to today
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //gotta add 1 because january is 0
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd;
}
if(mm<10){
  mm='0'+mm;
}
today = `${yyyy}-${mm}-${dd}`;
document.getElementById('date').setAttribute("max", today);

// receive the date that was input from user on the html
const getDate = () => {
    const date = dateInputEl.value
    return date
}
console.log(getDate());

// Fetching data from the API
const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${api_key}&date=${userDate}`)
    const data = await response.json()
    console.log('NASA APOD data', data)
    displayData(data)
  } catch (error) {
    console.log(error)
  }
}
// Displaying data on the page
const displayData = data => {
  document.getElementById('title').textContent = data.title
  //for the date use the date received from user
  document.getElementById('date').textContent = getDate()
  // document.getElementById('date').textContent = data.getDate
  document.getElementById('picture').src = data.hdurl
  document.getElementById('explanation').textContent = data.explanation
}

//earliest picture from NASA APOD is june 16, 1995
fetchNASAData()
dateInputEl.addEventListener('change', function() {
  userDate = getDate();
  fetchNASAData();
})
