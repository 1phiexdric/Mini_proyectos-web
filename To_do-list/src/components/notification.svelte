<script>
    import { slide } from "svelte/transition";
    let {mensaje} = $props()
</script>
<style>
#notification{
    height: 50px;
    width: 170px;
    position: fixed;
    top: 40px;
    right: 90px;
    background-color: bisque;
    border-radius: 10px;
    border: 1px solid gray;
    display: flex;
    color: green;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
}
</style>
    <div id="notification" transition:slide>
        <p>{mensaje}</p>
    </div>