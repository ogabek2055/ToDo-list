let addToDOButton = document.getElementById("addTodo");
let InputField = document.getElementById("inputField");
let containerToDo = document.getElementById("containerToDo");

addToDOButton.addEventListener("click", function () {
  var formTd = document.createElement("td");
  formTd.innerText = inputField.value;
  formTd.classList.add("td-style");
  containerToDo.appendChild(formTd);
  inputField.value = "";
  formTd.addEventListener("click", function () {
    formTd.style.textDecoration = "line-through";
    formTd.style.color = "red";
  });
  formTd.addEventListener("dblclick", function () {
    containerToDo.removeChild(formTd);
  });
});
