<script>
    import Notification from "./notification.svelte";
    let {mostrar, tareas} = $props()
    let title = $state("")
    let tituloTouch = $state(false)
    let fecha = $state("")
    let description = $state("")
    let notification = $state(false)
    function marcarTocado(){
        tituloTouch = true
    }
    function guardarTarea(){
        
        if(!fecha){
            fecha = "Sin fecha limite"
        }
        let tareaParaAgregar = {
            id: crypto.randomUUID(),
            title: title.trim(),
            fecha: fecha.trim(),
            description: description.trim()
        }
        tareas.unshift(tareaParaAgregar)
        localStorage.setItem('tareas', JSON.stringify(tareas))
        title = ""
        fecha = ""
        description = ""
        tituloTouch = false
        notification = true
        const timer = setTimeout(()=>{
            notification = false
        }, 1000)
    }
    const validacionTitulo = $derived(!title && tituloTouch)
    const formularioInvalido = $derived(!title);
</script>
{#if notification}
    <Notification mensaje={"✅ Tarea agregada!"}/>
{/if}
<button onclick={mostrar} id="btn-cerrarmenu">
    ❌
</button>
<form onsubmit={guardarTarea}>
    <fieldset>
        <label for="task" >Titulo</label>
    <input type="text" id="task"bind:value={title} onblur={marcarTocado}>
    {#if validacionTitulo}
        <span class="validacion">Titulo no puede estar vacio</span>
    {/if}
    <label for="fecha">Fecha</label>
    <input type="date" name="" id="fecha" bind:value={fecha}>
    <label for="description">Descripcion</label>
    <textarea name="" id="description" bind:value={description}></textarea>
    </fieldset>
    <input type="submit" value="Agregar" class="add-task" disabled={formularioInvalido}
    class:btndeshabilitado={formularioInvalido}>

</form>
<style>
#btn-cerrarmenu{
    border: none;
    font-size: 25px;
    cursor: pointer;
}
</style>