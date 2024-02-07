
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText.trim() === "") {
        return;
    }
    let newTaskItem = document.createElement("li");
    newTaskItem.textContent = taskText;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Elimina";
    deleteButton.addEventListener("click", function () {
        newTaskItem.remove();
    });
    newTaskItem.appendChild(deleteButton);

    newTaskItem.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            if (event.target.classList.contains("completed")) {
                event.target.classList.remove("completed");
            } else {
                event.target.classList.add("completed");
            }
        }
    });
    let taskList = document.getElementById("taskList");
    taskList.appendChild(newTaskItem);
    taskInput.value = "";
}

