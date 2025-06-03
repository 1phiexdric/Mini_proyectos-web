'use strict'

let boleano
    //llmar al formulario
const formulario = document.getElementById("form");

//crear evento submit
formulario.addEventListener('submit', function(event){
    event.preventDefault();
    const newstask = document.querySelector("#ulList")
    console.log(newstask);
const textarea = document.querySelector('#descrition')
const task = document.querySelector('#new_task');
    agreagartarea(newstask, textarea, task);
})

const fieldset = document.querySelector('#tareas');
let ul = fieldset.querySelector('ul');

function agreagartarea(newstask, textarea, task){
    if(task.value.trim() === ""){
        alert('ingresa una tarea')
        return
    }
    const info = `<li style:"list-style: none">
                    <p style="display: inline">${task.value}</p>
                    <button class="delete" aria-label="Delete ${task.value}"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg></button>
                    </li>`
    const info1 = `   <li style="display: flex; align-items: center;">
                    <details>
                      <summary>${task.value}</summary>
                      <p>${textarea.value}</p>
                      
                    
                    </details>
                    <button class="delete" aria-label="Delete"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg></button>
                    </li>`
    const taskHTML = textarea.value === "" ? info : info1;

    // Agregar la nueva tarea al DOM
    newstask.insertAdjacentHTML('beforeend', taskHTML);
                
    // Asignar evento al botón de eliminar recién creado
    const newTaskElement = newstask.lastElementChild; // El último <li> agregado
    const deleteButton = newTaskElement.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        newstask.removeChild(newTaskElement);
    });
                
    // Guardar tareas
    boleano = textarea.value !== "";
    guardartareas(boleano);
    task.value = ''
}

function guardartareas(valor){
    const tasks = [];
    const tareasDescription = []
    const tareasSummary = []
    const regex = /\s+/g;

    if(!valor){
        document.querySelectorAll('li').forEach(function(li){
            let task = li.textContent
            let texto = task.replace(regex, " ").trim()
            console.log(texto)
            tasks.push(texto)
            console.log(tasks)
        })
        localStorage.setItem('tareas', JSON.stringify(tasks))
    }else{
        document.querySelectorAll('summary').forEach(function(title){
            let content = title.textContent
            tareasSummary.push(content)
        })
        localStorage.setItem('titulossummary', JSON.stringify(tareasSummary))
        document.querySelectorAll('details p').forEach(function(description){
            let content = description.textContent
            tareasDescription.push(content)
            console.log(tareasDescription)
        })
        localStorage.setItem('descriptions', JSON.stringify(tareasDescription))
    }

}