import { writable } from "svelte/store";

export let openModal = writable(false)
/*
en svelte las variables con la propiedad writable se cambia el valor con
set
*/