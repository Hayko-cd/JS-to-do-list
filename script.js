let toDoData = [];
let counter = 0;
const mainBlock = document.getElementById("main-block");
const input = document.getElementById("input");
const button = document.getElementById("button");

const AddToDo = () => {
  if(input.value === "") {
    alert("To Do Input Should not be empty")
  } else {
    counter++;
    toDoData.push({
      toDoName: input.value,
      id: counter
    });
    input.value = "";
    renderToDos();
  }
};

const renderToDos = () => {
  mainBlock.innerHTML = "";

  toDoData.map((element) => {
    const bigDiv = document.createElement("div");
    bigDiv.classList.add("parent-wrapper")
    const ToDoElement = document.createElement("span");
    const toDoText = document.createTextNode(element.toDoName);
    ToDoElement.appendChild(toDoText);

    const toDoDeleteButton = document.createElement("button");
    toDoDeleteButton.innerHTML = "Delete";
    toDoDeleteButton.classList.add("deleteButton");

    toDoDeleteButton.addEventListener("click", () => {
      deleteToDo(element.id);
    });

    bigDiv.appendChild(ToDoElement);
    bigDiv.appendChild(toDoDeleteButton)
    mainBlock.appendChild(bigDiv);
  });
};

const deleteToDo = (toDoId) => {
  toDoData = toDoData.filter((toDo) => toDo.id !== toDoId);
  renderToDos();
};



