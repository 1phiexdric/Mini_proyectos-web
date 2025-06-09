<script lang="ts">
    let {tarea, removeTask} = $props()
    
</script>
<style>
.task{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    border-bottom: 1px solid black;
  max-height: 200px;
}
.task-information{
    margin: 0;
    font-size: 13px;
    letter-spacing: 1px;
    text-align: left;
    /*Salto de linea*/
    word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}



</style>
<div class="task">
    <div class="taskInf-container">
        <p class="task-information"><strong>Titulo:</strong>{tarea.title}</p>
        <p class="task-information"><strong>Fecha:</strong>{tarea.fecha}</p>
        <p class="task-information"><strong>Description:</strong>{tarea.description}</p>
    </div>
    <button onclick={()=> removeTask(tarea.id)}>
        borrar
    </button>
</div>