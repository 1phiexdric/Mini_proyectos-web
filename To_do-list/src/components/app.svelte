<script lang="ts">
      import {fade} from 'svelte/transition'
    import { clickOutSide } from "$lib/clickOutside";
    import Menu from "./menu.svelte";
    import Tareas from './tareas.svelte';
  import { json } from '@sveltejs/kit';
    import { onMount } from 'svelte';

    let tareas = $state([])
let mostrarMenu = $state(false)

    onMount(()=>{
      const storedTask = localStorage.getItem('tareas')
      if(storedTask !== null){
        try{
          tareas = JSON.parse(storedTask)
        }catch(e){
          console.log(e)
        }
      }
    })


    
    function show(){
        mostrarMenu = !mostrarMenu
    }
    function removeTask(taskid:any){
      console.log('funcion');
      try{
      tareas = tareas.filter(task => task.id !== taskid)
      localStorage.setItem('tareas', JSON.stringify(tareas))
      }catch(e){
        console.log(e)
      }
    }
    
</script>
<div class="principal-content">

    <h1>To-do List</h1>


<button class="add-task" onclick={show}>
    Nueva Tarea
</button>



{#if tareas.length !== 0}
<div id="tareas">
    <hr>

  {#each tareas as tarea}
  <Tareas {tarea} {removeTask}/>
{/each}
    <hr>
  </div>
{/if}


</div>
{#if mostrarMenu}
  <div class="principal-content menu" use:clickOutSide={() => mostrarMenu = false}
    transition:fade>
    <Menu mostrar = {show} {tareas}/>
  </div>
{/if}