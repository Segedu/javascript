//!ajax_12
// const containerDiv = document.getElementById("rates");
// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onerror = () => {
//     console.log("ajax error!!!");
//   };
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       let obj = JSON.parse(this.responseText);
//       console.log(obj);
//       let input = document.getElementById("inputNum");
//       containerDiv.innerHTML = `<p>${
//         input.value / obj.rates.EUR
//       }</p>`;
//     }
//     if (this.readyState === 4 && this.status === 404) {
//       document.getElementById(
//         "404Eror"
//       ).innerHTML += `<h1>error 404 page not found</h1>`;
//     }
//   };
//   let API_KEY = "a41bcc3062077bf602059436e8b26556";
//   let url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`;
//   xhttp.open("GET", url);
//   xhttp.send();
// }

//!ajax_13
// let API_KEY = "a41bcc3062077bf602059436e8b26556";
// const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`;
// const containerDiv = document.getElementById("rates");
// const btn = document.getElementById("exchangeBtn");
// btn.addEventListener("click", axiosFunc);
// function axiosFunc() {
//   axios
//     .get(url)
//     .then(function (response) {
//       console.log("successed");
//       if (response.status === 200) {
//         let input = document.getElementById("inputNum");
//         let result = Math.floor(input.value / response.data.rates.ILS);
//         containerDiv.innerHTML = `<p>Euro: ${result} €</p>`;
//         console.log(response.data);
//       }
//     })
//     .catch(function (error) {
//       console.log("error");
//       console.log(error);
//     });
// }

//!ajax_14-not finished
// let API_KEY = "a41bcc3062077bf602059436e8b26556";
// const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`;
// const containerDiv = document.getElementById("rates");
// const btn = document.getElementById("exchangeBtn");
// btn.addEventListener("click", axiosFunc);

// function axiosFunc() {
//   axios
//     .get(url)
//     .then(function (response) {
//       console.log("successed");
//       let userChoice = document.getElementById("coinType").value;
//       if (
//         response.status === 200 &&
//         userChoice === response.data.rates.userChoice
//       ) {
//         let input = document.getElementById("inputNum");
//         let result = Math.floor(input.value / response.data.rates.userChoice);
//         containerDiv.innerHTML = `<p>Euro: ${result} €</p><p>${response.data.rates.userChoice}
//         </p>`;
//         console.log(response);
//       }
//     })
//     .catch(function (error) {
//       console.log("error");
//       console.log(error);
//     });
// }
