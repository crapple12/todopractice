
const projectList = document.querySelector("#project-list")
const projectContent = document.querySelector(".project-content")
const inputBox = document.querySelector("#input-box")
const newProjectBtn = document.querySelector("#new-project-btn")
    newProjectBtn.addEventListener("click", addProject)
const newTaskBtn = document.querySelector("#new-task-btn")
    newTaskBtn.addEventListener("click", openTaskForm)
const exitTaskFormBtn = document.querySelector("#exit-task-form");
    exitTaskFormBtn.addEventListener("click", exitTaskForm)
const confirmNewTask = document.querySelector("#confirm-new-task");
    confirmNewTask.addEventListener("click", addTask)
// const dropdownBtn = document.querySelector("#dropdown-btn")
//     dropdownBtn.addEventListener("click", showDropdownContent)
// const closeDropdownBtn = document.querySelector("#close-dropdown-btn")
//     closeDropdownBtn.addEventListener("click", closeDropdownContent)

function addProject () {
    if (inputBox.value === "") {
        alert("You must write something!")
    } else {
        let project = document.createElement("div")
        project.classList.add("project")
            let projectHeader = document.createElement("h3")
            projectHeader.innerHTML = inputBox.value;
            project.appendChild(projectHeader);
        projectList.appendChild(project);
    }   
}

function openTaskForm () {
    const taskForm = document.querySelector("#task-form")
    taskForm.style.display = "block";
    console.log("yes")
}

function exitTaskForm () {
    const taskForm = document.querySelector("#task-form");
    taskForm.style.display = "none"
}

function checkInput (projectTask) {
    const inputs = document.querySelectorAll(".todo-input")
    let allFilled = true;

    inputs.forEach(input => {
        if(input.hasAttribute("required") && input.value.trim() === "") {
            allFilled = false;
        }
    });

    return allFilled;
}

function addTask () {
    let projectTask = document.createElement("div");
    projectTask.classList.add("project-task")
        let title = document.createElement("h2");
        let titleContent = document.getElementById("title");
            title.textContent = titleContent.value;
        projectTask.appendChild(title);
        let description = document.createElement("p")
        let descriptionContent = document.getElementById("description")
            description.textContent = descriptionContent.value;
        projectTask.appendChild(description)
        let dropDownBtn = document.createElement("button");
            dropDownBtn.classList.add("dropdown-btn")
            dropDownBtn.textContent = "^"
            dropDownBtn.addEventListener("click", showDropdownContent)
        projectTask.appendChild(dropDownBtn)
        let closeDropdownBtn = document.createElement("button");
            closeDropdownBtn.classList.add("close-dropdown-btn")
            closeDropdownBtn.textContent = "^"
            closeDropdownBtn.addEventListener("click", closeDropdownContent)
        projectTask.appendChild(closeDropdownBtn)
        let dropDownContent = document.createElement("div");
        dropDownContent.classList.add("dropdown-content")
            let dueDate = document.createElement("p");
            let dueDateContent = document.getElementById("duedate")
                dueDate.textContent = dueDateContent.value;
            dropDownContent.appendChild(dueDate)
            let priority = document.createElement("p")
            let priorityContent = document.getElementById("priority")
                priority.textContent = "Priority: " + priorityContent.value;
            dropDownContent.appendChild(priority)
        projectTask.appendChild(dropDownContent)
    if (checkInput(projectTask) === true) {
        projectContent.appendChild(projectTask)
        exitTaskForm()
    } else {
        alert("Ensure all fields are filled.")
    }     
}

function showDropdownContent () {
    let dropDownContent = document.querySelector(".dropdown-content");
    dropDownContent.style.display = "flex";
    let closeDropdownBtn = document.querySelector(".close-dropdown-btn");
    closeDropdownBtn.style.display = "flex";
    let dropdownBtn = document.querySelector(".dropdown-btn");
    dropdownBtn.style.display = "none";
}

function closeDropdownContent () {
    let dropdownContent = document.querySelector(".dropdown-content")
    dropdownContent.style.display = "none"
    let closeDropdownBtn = document.querySelector(".close-dropdown-btn");
    closeDropdownBtn.style.display = "none";
    let dropdownBtn = document.querySelector(".dropdown-btn");
    dropdownBtn.style.display = "block"; 
}
    
