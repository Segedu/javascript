const api_key = "641974375fb31ab9962b7f26bce1a2a0";
const cordCont = document.getElementById("cordCont");
let btn = document.getElementById("btn");
let cordinates = document.getElementById("cordinates");
let cordValue = cordinates.value;

function fetchFunc(cordinate) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cordinate}&appid=${api_key}`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (response.code == 404) {
        `<h1>${response.message}</h1>`;
      }
      cordCont.innerHTML += `${response.main.cordinate}`;
    })
    .catch((error) => console.log(error));
}
fetchFunc("london");
btn.onclick = fetchFunc(cordValue);
