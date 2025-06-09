<script>
    let {mostrar, tareas} = $props()
    let title = $state("")
    let tituloTouch = $state(false)
    let fecha = $state("")
    let description = $state("")
    function marcarTocado(){
        tituloTouch = true
    }
    function mostrarValores(){
        
        if(!fecha){
            fecha = "Sin fecha limite"
        }
        if(!description){
            description="Sin descripcion"
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
    }
    const validacionTitulo = $derived(!title && tituloTouch)
    const formularioInvalido = $derived(!title);
</script>
<button onclick={mostrar} id="btn-cerrarmenu">
    cerrar
</button>
<form onsubmit={mostrarValores}>
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