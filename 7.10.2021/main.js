//!1
//  פונקציית קולבאק היא פונקציה שמועברת כפרמטר ומשמשת כפונקציה מטפלת.

//!1.a
// callback מגיעה כפרמטר גם עבור פונקציוצת וגם עבור אירועים. למשל:
// setInterval(() => {}, 3000);
// addEventListener("click", () => {});

//!1.b
// פונקציית קולבאק הל היא פונקציי קולבאק שקוראת לפונקציית קול באק וכן הלאה.
// דבר שיש להימנע ממנו.

//!2
// בשימוש ב Promise מדובר במנגנון בעל הבטחה עתידית (pending ) לתשובה שלילית(rejected )או חיובית(resolved) בתגובה לבקשה שנשלחה. מנגנון להתמודדות עם פעולה אסינכרונית בצורה של כישלון או הצלחה.
// ביצירה promise  מגדיר מה נחשב לתוצאה חיובית או שלילית למקרה בו יהיה שימוש בpromise  ע"י בקשה מהמשתמש.

//!3
// const url = "https://jsonplaceholder.typicode.com/posts";

// axios
//   .get(url)
//   .then(function (response) {
//     console.log("successed");
//     console.log(response);
//     if (response.status === 200) {
//       console.log(response.data);
//     }
//   })
//   .catch(function (error) {
//     console.log("error");
//     console.log(error);
//   });

//!4

const api_key = "641974375fb31ab9962b7f26bce1a2a0";
const tempCont = document.getElementById("tempCont");
let btn = document.getElementById("btn");
let cityInput = document.getElementById("cityInput");
let cityValue = cityInput.value;

function fetchFunc(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`,
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
      tempCont.innerHTML += `${response.main.temp}`;
    })
    .catch((error) => console.log(error));
}
fetchFunc("london");
btn.onclick = fetchFunc(cityValue);
