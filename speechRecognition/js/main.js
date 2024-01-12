//? setTimeout
// console.log("Bomba Otildi !");

// const bomb = setTimeout(() => {
//   console.log("Boom");
// }, 1000 * 3);

// document
//   .querySelector("#defuserKit")
//   .addEventListener("click", () => {
//     clearTimeout(bomb);
//     console.log("Bomb was defused");

//     const winner = setTimeout(() => {
//       console.log("Terorist Win!");
//     }, 1000 * 1);
//   });

//? setInterval

// const timer = setInterval(() => {
//   console.log("Booom!!!");
// }, 1000 * 1);

// document.querySelector("#defuserKit").addEventListener("click", () => {
//   clearInterval(timer);
//   console.log("stopped");
// });
// //? Flashbang
// const stopFlash = () => {
//  setTimeout(() => {
//   clearInterval(flash)
//   body.style.backgroundColor = "white";
//   body.style.color = "black";

//   console.log("Korindi");
//  }, 3000)
// };

// console.log("Flash otildi");
// const flash = setTimeout(() => {
//   document.querySelector("#defuserKit").addEventListener("click", () => {
//     console.log("Tiiiiiiiing flash!");
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//   });
//   stopFlash();
// }, 1000 * 2);

// let body = document.querySelector("#body");
// let whiteButton = document.querySelector("#white")
// let blackButton = document.querySelector("#black")

// whiteButton.addEventListener("click", () => {
//   body.style.backgroundColor = "white";
// });
// blackButton.addEventListener("click", () => {
//   body.style.backgroundColor = "black";
// });

//?  Date
const date = new Date();
//* hour/ minutes/ seconds
// const hour = date.getHours();
// const minut = date.getMinutes();
// const second = date.getSeconds();

//* months/ years

// const months = [
//   "Yanvar",
//   "Fevral",
//   "Mart",
//   "Aprel",
//   "May",
//   "Iyun",
//   "Iyul",
//   "Avgust",
//   "Sentabr",
//   "Octabr",
//   "Noyabr",
//   "Dekabr",
// ];

// const month = months[date.getMonth()];
// const year = date.getFullYear();
// console.log(month, year);

//? speechRecognition
const speechRecognition = new webkitSpeechRecognition();
console.log(speechRecognition);

speechRecognition.lang = "en-US";

document
  .querySelector("#defuserKit")
  .addEventListener("click", function () {
    speechRecognition.start();
  });

speechRecognition.onstart = function () {
  console.log("You are speaking...");
};

speechRecognition.onresult = function (event) {
  const text = event.results[0][0].transcript;
  console.log(event);
  document.body.style.background = text;
  console.log(text);
};

speechRecognition.onend = () => {
  console.log("Stop Talking");
};

speechRecognition.start();
