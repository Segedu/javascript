//! ajax_6
// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       document.getElementById("demo").innerHTML = this.responseText;
//       let obj = JSON.parse(this.responseText);
//       console.log(obj);
//       for (const element of obj) {
//         console.log(element.title, element.userId);
//       }
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
//   xhttp.send();
// }
//! ajax_7
// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       let obj = JSON.parse(this.responseText);
//       let container = document.getElementById("container");
//       for (const element of obj) {
//         container.innerHTML += `<ul>
//         <li>${element.title}, ${element.userId}</li></ul>`;
//       }
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
//   xhttp.send();
// }

//!ajax_8

// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       let obj = JSON.parse(this.responseText);
//       for (const element of obj) {
//         console.log(element.title, element.id, element.completed);
//       }
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
//   xhttp.send();
// }

//!ajax_9
// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       let obj = JSON.parse(this.responseText);
//       for (const element of obj) {
//         let container = document.getElementById("container");
//         container.innerHTML += `<ul><li>
//         ${element.title}, ${element.id}, ${element.completed}
//         </li>
//         </ul>`;
//       }
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
//   xhttp.send();
// }

//!ajax_10
// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState < 4) {
//       container.innerHTML = `<p>loading</p>`;
//     } else if (this.readyState == 4) {
//       container.innerText = "";
//     }
//     if (this.readyState === 4 && this.status === 200) {
//       let obj = JSON.parse(this.responseText);
//       for (const element of obj) {
//         let container = document.getElementById("container");
//         container.innerHTML += `<ul><li>
//             ${element.title}, ${element.id}, ${element.completed}
//             </li>
//             </ul>`;
//       }
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
//   xhttp.send();
// }
