// DB
const dataItemsForm = document.querySelector("#dataItems");
const gendersdate = {
  usersHistory: JSON.parse(localStorage.getItem("History")) || [],
  addUser(gender) {
    this.usersHistory.push(gender);
  },
};

// formSubmit
dataItemsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.target[0].value;
  
  // API
  const data = fetch(`https://api.genderize.io/?name=${name}`)
    .then((date) => {
      return date.json();
    })
    .then((date) => {
      console.log(date);
      gendersdate.addUser(date);
      console.log(gendersdate.usersHistory);
      localStorage.setItem("History", JSON.stringify(gendersdate.usersHistory));
      renderUserGender();
    })
    .catch((error) => {
      console.log(error);
    });
  event.target[0].value = "";
});

// renderGender
const modalInfo = document.querySelector("#modalInfo");
function renderUserGender() {
  gendersdate.usersHistory.forEach((user) => {
    const template = `
  <h2> ${user.name}</h2>
  <p>Gender: ${user.gender}</p>
  `;
    modalInfo.innerHTML = template;
  });
}

// RenderHistory
const modalHistoryBody = document.querySelector("#modalHistoryBody");
function renderHistory() {
  let counter = 1;
  modalHistoryBody.innerHTML = "";
  gendersdate.usersHistory.forEach((user) => {
    const template = `
    <div class="card border border-5 p-3 my-3">
    <h1>${counter++}</h1>
    <h2>${user.name}</h2>
    <h3>${user.gender}</h3>
    <button class="btn btn-danger" onclick='deteHistory(${
      user.count
    })'>Delete</button>
    </div>
    `;
    modalHistoryBody.innerHTML += template;
  });
}

// Delete function
function deteHistory(count) {
  const newHistory = gendersdate.usersHistory.filter((obj) => {
    return obj.count != count;
  });
  gendersdate.usersHistory = newHistory;
  localStorage.setItem("History", JSON.stringify(newHistory));
  console.log(newHistory);
  renderHistory();
}
