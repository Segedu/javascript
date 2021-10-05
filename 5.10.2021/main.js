//!removig function to use with onclick
// function removeListItem(element) {
//   element.remove();
// }

//!removing function to use with addEvent

// const lilist = document.querySelectorAll("li");
// for (let i = 0; i < lilist.length; i++) {
//   const element = lilist[i];
//   element.addEventListener("click", removeFromList);
// }

// function removeFromList() {
//   this.remove();
// }

// //!ajax error
// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onerror = () => {
//     console.log("ajax error!!");
//   };
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       document.getElementById("rates").innerHTML = this.responseText;
//       let obj = JSON.parse(this.responseText);
//       console.log(obj);
//     }
//     if (this.readyState === 4 && this.status === 404) {
//       document.getElementById("404Eror").innerHTML += `<h1>error</h1>
//       <p>try to write corect url</p>`;
//     }
//   };
//   let API_KEY = "a41bcc3062077bf602059436e8b26556";
//   let url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`;
//   xhttp.open("GET", url);
//   xhttp.send();
// }
