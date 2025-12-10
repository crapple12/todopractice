// function addTask(title, description, dueDate, priority, notes, checklist) {
//     return {
//         title: title,
//         description: description,
//         dueDate: dueDate,
//         priority: priority,
//         notes: notes,
//         checklist: checklist

//     }
// }

let count = 0;
const projectList = document.querySelector("#project-list")
const projectContent = document.querySelector(".project-content")
const inputBox = document.querySelector("#input-box")
const newProjectBtn = document.querySelector("#new-project-btn")
    newProjectBtn.addEventListener("click", addProject)
const newTaskBtn = document.querySelector("#new-task-btn")
    newTaskBtn.addEventListener("click", openTaskForm)

function addProject () {
    if (inputBox.value === "") {
        alert("You must write something!")
    } else {
        let project = document.createElement("div")
        project.classList.add("project" + count)
            let projectHeader = document.createElement("h3")
            projectHeader.innerHTML = inputBox.value;
            project.appendChild(projectHeader);
        projectList.appendChild(project);
        count ++;
        console.log(count)
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
    projectContent.appendChild(projectTask)
    console.log(title)
    console.log(description)
    exitTaskForm()
}

