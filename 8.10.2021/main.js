const api_key = "641974375fb31ab9962b7f26bce1a2a0";
const cordCont = document.getElementById("cordCont");
let longtitude = document.getElementById("longtitude");
let latitude = document.getElementById("latitude");
let btn = document.getElementById("btn");

function print() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${api_key}`;
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.cod == 400) {
        cordCont.innerHTML += `<h1>${data.message}</h1>`;
      }
      cordCont.innerHTML += `${response.main.coordinates}`;
    })
    .catch((error) => console.log(error));
}
btn.addEventListener("click", () => {
  print(longtitude.value, latitude.value, cordCont);
});
