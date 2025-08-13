// DOM MANIPULATION
const btnAdd = document.querySelector('#add-task-open-btn')
const btnClose = document.querySelector('.btn-close')
const form = document.querySelector('.to-do-form')
const btnSubmit = document.querySelector('.btn-submit') // Corrected selector
const tasksContainer = document.getElementById('tasks-container')
const confirmCloseDialog = document.querySelector('.confirm-close-dialog')
const btnCancel = document.querySelector('#cancel-btn')
const btnDiscard = document.querySelector('#discard-btn')
let title = ""
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentTask = {}
const removeSpecialChars = (val) => {
  return val.trim().replace(/[^A-Za-z0-9\-\s]/g, '')
}
const updateTaskContainer = (tasks)=>{
    //const 
    tasksContainer.innerHTML = ""
    tasks.forEach(({ id, title, date, description }) => {
        tasksContainer.innerHTML += `
        <div class="task" id="${id}">
            <div>
                <p><strong>Title:</strong> ${title}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Description:</strong> ${description}</p>
            </div>
            <div class="task-actions">
                <button class="btn btn-edit" id="edit-${id}" type="button" onclick="editTask(this)">Edit</button>
                <button class="btn btn-delete" id="delete-${id}" type="button" onclick="deleteTask(this)">Delete</button>
            </div>
        </div>`
        
    });
//this se refiere al elemento que llama la funcion, por lo que toma el valor del botton
}

if(tasks.length){
    updateTaskContainer(tasks)
}

const titleInput = document.querySelector('#title-task')
const date = document.querySelector('#date-task')
const description = document.querySelector('#description-task')
// Initialize button state
btnSubmit.disabled = true

titleInput.addEventListener('input', () => {
    title = titleInput.value.trim();
    // Enable/disable button based on title presence
    btnSubmit.disabled = (title === "");

    // Toggle visual active state
    if (title.trim() !== "") {
        btnSubmit.classList.add('active')
    } else {
        btnSubmit.classList.remove('active')
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // Here you would typically handle the form data
    console.log('New Task:', { title, date, description });
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
    btnSubmit.innerText = "Add Task"
}

const addOrUpdateTask = ()=>{
    
if(!titleInput.value.trim()){
  alert("Please provide a title")
  return
}
    const dataArrIndex = tasks.findIndex((item) => item.id === currentTask.id)
    const taskObj = {
        id: `${removeSpecialChars(title).toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: removeSpecialChars(title),
        date: date.value,
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


const deleteTask = (buttonElement)=>{
    const dataArrIndex = tasks.findIndex((item)=> item.id === buttonElement.parentElement.parentElement.id)
    if(dataArrIndex !== -1){
        buttonElement.parentElement.parentElement.remove()
        tasks.splice(dataArrIndex, 1)
        // splice elimina el elemento del array
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
}

const editTask = (buttonElement)=>{
    const dataArrIndex = tasks.findIndex((item)=> item.id === buttonElement.parentElement.parentElement.id)
    currentTask = tasks[dataArrIndex]
    titleInput.value = currentTask.title
    date.value = currentTask.date
    description.value = currentTask.description
    title = currentTask.title
    btnSubmit.innerText = "Update Task"
    btnSubmit.classList.add('active')
    btnSubmit.disabled = false
    form.classList.add('active')
}