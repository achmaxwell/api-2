const url = 'https://api.nasa.gov/planetary/apod?api_key='
const key = 'L5Pud28nE1AfDOZ5gvVxeTTSnxzpJiWKrz0UavxG'

let submit_btn = document.querySelector(".submit_btn")

let fetchNASAData = async () => {
  let datePicker = document.querySelector("#datePicker").value
  let date = "&date=" + datePicker;
  let queryFull = url + key + date;
  try {
    const response = await fetch(`${queryFull}`)
    const data = await response.json()
    console.log('NASA APOD data', data)
    displayData(data)
  } catch (error) {
    console.log(error)
  }
}

submit_btn.addEventListener('click', fetchNASAData);

const displayData = data => {
  document.getElementById('title').textContent = data.title
  document.getElementById('date').textContent = data.date
  document.getElementById('picture').src = data.hdurl
  document.getElementById('explanation').textContent = data.explanation
}