<script>
    // declaramos una prop
    let {id, children} = $props()
</script>

<section {id} class={"min-h-screen flex flex-col px-4"}>
<div class="flex flex-col flex-1 max-w-[1400px] mx-auto w-full">
 {@render children()}

</div>
</section>