// DOM MANIPULATION
const btnAdd = document.querySelector('#add-task-open-btn')
const btnClose = document.querySelector('.btn-close')
const form = document.querySelector('.to-do-form')
const btnSubmit = document.querySelector('.btn-submit') // Corrected selector
const tasksContainer = document.getElementById('tasks-container')
const confirmCloseDialog = document.querySelector('.confirm-close-dialog')
const btnCancel = document.querySelector('#cancel-btn')
const btnDiscard = document.querySelector('#discard-btn')
const filterSelect = document.querySelector('.filter')
// The checkbox in the form has been removed, so this variable is no longer needed.
let span = null
let filterSelectValue
let title = ""
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentTask = {}
const removeSpecialChars = (val) => {
  return val.trim().replace(/[^A-Za-z0-9\-\s]/g, '')
}

filterSelect.addEventListener('change', (e)=>{
    filterSelectValue = e.target.value
    filterFunction(filterSelectValue)
})
function filterFunction(filtervalue){
    switch (filtervalue) {
        case "all":
            updateTaskContainer(tasks)
            break;
        case "completed":
            updateTaskContainer(tasks.filter((element)=> element.isCompleted == true))
            break;
        case "pending":
            updateTaskContainer(tasks.filter((element)=> element.isCompleted == false))
            break;
        default:
            updateTaskContainer(tasks)
            break;
    }
}
// This function updates the entire task list in the UI.
// It's called when tasks are added, updated, or deleted.
const updateTaskContainer = (tasks) => {
    tasksContainer.innerHTML = ""; // Clear the container first
    tasksContainer.innerHTML = "<h3>List of tasks</h3><hr>"; // Add the header and separator
    // If there are no tasks, display a message.
    if (tasks.length === 0) {
        tasksContainer.innerHTML = `
            <h3>Your tasks</h3>
            <hr>
            <p>there are no tasks ${filterSelectValue == "all" || !filterSelectValue? "": filterSelectValue}</p>
        `;
        return;
    }

    // Loop through each task and create its HTML representation.
    tasks.forEach(({ id, title, date, description, isCompleted }) => {
        // A task gets the 'completed' class if its isCompleted property is true.
        // This class is used for styling the task differently.
        tasksContainer.innerHTML += `
        <div class="task ${isCompleted ? 'completed' : ''}" id="${id}">
            <div class="task-info">
                <p><strong>Title:</strong> ${title}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p class="description"><strong>Description:</strong> ${description}</p>
            </div>
            <div class="task-actions">
                <!-- This checkbox allows toggling the task's completed state directly from the list. -->
                <label class="complete-checkbox-label">
                    <input type="checkbox" onchange="toggleCompleted(this)" ${isCompleted ? 'checked' : ''}>
                    Done
                </label>
                <div class="btns-actions">
                <button class="btn btn-edit" id="edit-${id}" type="button" onclick="editTask(this)">Edit</button>
                <button class="btn btn-delete" id="delete-${id}" type="button" onclick="deleteTask(this)">Delete</button>
                </div>
            </div>
        </div>`;
    });
};


// Initial UI update when the page loads.
updateTaskContainer(tasks);


const titleInput = document.querySelector('#title-task')
const date = document.querySelector('#date-task')
const description = document.querySelector('#description-task')
// Initialize button state
btnSubmit.disabled = true

titleInput.addEventListener('blur', ()=>{
    if(title.trim() == ""){
        //titleInput.parentElement.innerHTML += `<span style="color: red; font-size: 1rem; font-weigth: 400" class="required">Title is required</span>`
        span = document.createElement('span')
        span.innerText = `Title is required`
        span.style.color= "red"
            
            span.style.fontSize= "0.7rem"
            span.style.fontWeigth= "ligth" 
        
        titleInput.parentElement.append(span)
    }
})
titleInput.addEventListener('input', () => {
    title = titleInput.value.trim();
    // Enable/disable button based on title presence
    btnSubmit.disabled = (title === "");

    // Toggle visual active state
    if (title.trim() !== "") {
        btnSubmit.classList.add('active')
        if(span) span.remove()
    } else {
        btnSubmit.classList.remove('active')
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // Here you would typically handle the form data
    addOrUpdateTask()
    // Reset form and button state
    resetForm()
    
    
})

btnAdd.addEventListener('click', () => {
    form.classList.add('active')
})

btnClose.addEventListener('click', () => {
    const formInputsContainValues = titleInput.value || date.value || description.value;
    const formInputValuesUpdated = titleInput.value !== currentTask.title || date.value !== currentTask.date || description.value !== currentTask.description
    if(formInputsContainValues && formInputValuesUpdated){
        confirmCloseDialog.showModal()
    }else{
        resetForm()
    }
})
btnDiscard.addEventListener('click', () => {
    confirmCloseDialog.close()
    form.classList.remove('active')
    form.reset()
    btnSubmit.disabled = true
    btnSubmit.classList.remove('active') // Reset visual state
})
btnCancel.addEventListener('click', () => {
    confirmCloseDialog.close()
})

function resetForm(){
    form.classList.remove('active')
    form.reset()
    btnSubmit.disabled = true
    btnSubmit.classList.remove('active') // Reset visual state
    title = ""
    currentTask = {}; // Also reset the currentTask object
    btnSubmit.innerText = "Add Task"
}

const addOrUpdateTask = ()=>{
    
    if(!titleInput.value.trim()){
      alert("Please provide a title")
      return
    }
    const dataArrIndex = tasks.findIndex((item) => item.id === currentTask.id)
    
    // Since the form checkbox was removed, the logic is simplified.
    // New tasks are always not completed.
    // Existing tasks keep their completed status, which is only changed by the list checkbox.
    const taskObj = {
        id: currentTask.id || `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: removeSpecialChars(titleInput.value),
        date: date.value,
        // New tasks are 'false', updated tasks keep their existing value from 'currentTask'.
        isCompleted: currentTask.isCompleted || false,
        description: removeSpecialChars(description.value),
    }
    
    if (dataArrIndex === -1) {
        tasks.unshift(taskObj)
    }else{
        tasks[dataArrIndex] = taskObj
    }
    updateTaskContainer(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    resetForm()
}

// This function is called when a task's "Done" checkbox is clicked.
const toggleCompleted = (checkboxElement) => {
    // Find the parent task element to get its ID.
    const taskElement = checkboxElement.closest('.task');
    const taskId = taskElement.id;
    const taskIndex = tasks.findIndex((item) => item.id === taskId);

    if (taskIndex !== -1) {
        // Update the task's completed status in the array.
        tasks[taskIndex].isCompleted = checkboxElement.checked;
        // Save the updated array to localStorage.
        localStorage.setItem('tasks', JSON.stringify(tasks));
        // Toggle the 'completed' class on the element for immediate visual feedback.
        taskElement.classList.toggle('completed', checkboxElement.checked);
    }
    filterFunction(filterSelectValue)
    if(checkboxElement.checked){
        mostrarNotificacion("Task completed", 3000)
    }
};


const deleteTask = (buttonElement)=>{
    // Use .closest('.task') to reliably find the task container.
    const taskElement = buttonElement.closest('.task');
    const taskId = taskElement.id;
    const dataArrIndex = tasks.findIndex((item)=> item.id === taskId)

    if(dataArrIndex !== -1){
        taskElement.remove()
        tasks.splice(dataArrIndex, 1)
        // Save the change to localStorage.
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    // If the last task was deleted, refresh the container to show the "no tasks" message.
    if(tasks.length === 0){
        updateTaskContainer(tasks)
    }
}

const editTask = (buttonElement)=>{
    // Use .closest('.task') to reliably find the task container.
    const taskElement = buttonElement.closest('.task');
    const taskId = taskElement.id;
    const dataArrIndex = tasks.findIndex((item)=> item.id === taskId)

    currentTask = tasks[dataArrIndex]
    titleInput.value = currentTask.title
    date.value = currentTask.date
    description.value = currentTask.description
    // The line below is removed as the checkbox in the form no longer exists.
    title = currentTask.title
    btnSubmit.innerText = "Update Task"
    btnSubmit.classList.add('active')
    btnSubmit.disabled = false
    form.classList.add('active')
}

let notificationTimeout;

function mostrarNotificacion(mensaje, segundos) {
    const notificacion = document.getElementById("notificacion");
    const notificacionText = notificacion.querySelector(".notification-text");
    const closeBtn = notificacion.querySelector(".notification-close-btn");

    notificacionText.textContent = mensaje;
    notificacion.classList.add('active');

    // Clear any existing timeout to prevent premature closing
    if (notificationTimeout) {
        clearTimeout(notificationTimeout);
    }

    notificationTimeout = setTimeout(() => {
        notificacion.classList.remove('active');
    }, segundos);

    // Function to close the notification, reusable for button click
    const closeNotification = () => {
        clearTimeout(notificationTimeout); // Stop the timer if closed manually
        notificacion.classList.remove('active');
        // Remove the event listener after it's used to avoid multiple listeners
        closeBtn.removeEventListener('click', closeNotification);
    };

    // Add event listener to the close button
    closeBtn.addEventListener('click', closeNotification, { once: true });
}