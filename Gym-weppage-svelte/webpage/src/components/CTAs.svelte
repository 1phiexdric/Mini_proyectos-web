<script>
    let {dark} = $props()
</script>

<div class="flex items-center gap-4">
    <button  class={`specialBtn ` + (dark? "oscuro" : "")}>
        <p class="text-base sm:text-lg md:text-xl">Contact us</p>
    </button>
    <button class="specialBtnDark">
        <p class="text-base sm:text-lg md:text-xl">Get Started &rArr;</p>
    </button>

</div>

<style>
    .oscuro{
        background-color: #181b34;
    }
</style>