const name = document.getElementById("name");
const add = document.getElementById("add-btn");
const row = document.getElementById("row");
let arr = [];

// LocalStorage'dan ma'lumotlarni o'qish
if (localStorage.getItem("users")) {
  arr = JSON.parse(localStorage.getItem("users"));
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((req) => req.json())
  .then((data) => {
    arr.push(...data);
    // LocalStorage'ga ma'lumotlarni saqlash
    localStorage.setItem("users", JSON.stringify(arr));
  });

add.addEventListener("click", (e) => {
  e.preventDefault();
  const nameValue = name.value.trim();
  const filteredUsers = arr.filter(
    (user) => user.id === parseInt(nameValue)
  );

  filteredUsers.forEach((user) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
    `;
    row.appendChild(newRow);
  });
});
