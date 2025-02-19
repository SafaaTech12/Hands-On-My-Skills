const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Event to add a new task
addButton.addEventListener("click", () => {
    if (taskInput.value.trim() !== "") {
        addTask(taskInput.value);
        taskInput.value = ""; 
    } else {
        alert("Enter task!");
    }
});

// Function to add a task
function addTask(texte) {
    const newTask = document.createElement("li");
    newTask.textContent = texte;

    const editButton = document.createElement("button");
    editButton.textContent = "Modifier";
    editButton.classList.add("edit-btn");

    // Edit button event listener
    editButton.addEventListener("click", () => {
        editTache(newTask);
    });

    // Append elements to <li>
    newTask.appendChild(editButton);
    taskList.appendChild(newTask);
}

// Function to edit a task
function editTache(taskElement) {
    let newText = prompt("Modifie la tâche :", taskElement.firstChild.textContent);
    if (newText !== null && newText.trim() !== "") {
        taskElement.firstChild.textContent = newText;
    }
    else{
        alert("You didn't write anything!")
    }
}

