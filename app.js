let todo = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let priorityInput = document.getElementById("priority");
    let task = taskInput.value.trim();
    let priority = parseInt(priorityInput.value.trim(), 10);

    if (task !== "" && !isNaN(priority)) {
        todo.push({ task: task, priority: priority });
        taskInput.value = "";
        priorityInput.value = "";
        renderTasks();
        console.log("Task added with priority", priority);
    } else {
        alert("Please enter a task and a valid priority number");
    }
}

function deleteTask(index) {
    todo.splice(index, 1);
    renderTasks();
    console.log("Task deleted");
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    todo.sort((a, b) => a.priority - b.priority);

    todo.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.task} (Priority: ${item.priority})`;
        li.classList.add("task-item");

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => deleteTask(index));

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

renderTasks();
