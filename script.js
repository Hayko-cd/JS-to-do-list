let userData = [];
let counter = 0;
const mainBlock = document.getElementById("main-block");
const input = document.getElementById("input");
const button = document.getElementById("button");

const AddUser = () => {
  if(input.value === "") {
    alert("User Name Should be written")
  } else {
    counter++;
    userData.push({
      userName: input.value,
      id: counter
    });
    input.value = "";
    renderUsers();
  }
};

const renderUsers = () => {
  mainBlock.innerHTML = "";

  userData.map((element) => {
    const bigDiv = document.createElement("div");
    bigDiv.classList.add("parent-wrapper")
    const userSpan = document.createElement("span");
    const userSpanText = document.createTextNode(element.userName);
    userSpan.appendChild(userSpanText);

    const userDeleteButton = document.createElement("button");
    userDeleteButton.innerHTML = "Delete";
    userDeleteButton.classList.add("deleteButton");

    userDeleteButton.addEventListener("click", () => {
      deleteUser(element.id);
    });

    bigDiv.appendChild(userSpan);
    bigDiv.appendChild(userDeleteButton)
    mainBlock.appendChild(bigDiv);
  });
};

const deleteUser = (userId) => {
  userData = userData.filter((user) => user.id !== userId);
  renderUsers();
};



