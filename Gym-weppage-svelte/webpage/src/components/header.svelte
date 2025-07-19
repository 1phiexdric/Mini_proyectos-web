<script>
    import { openModal } from "../store";
</script>

<header class="flex flex-col relative z-20">
    <div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6">
        <a href="/">
        <h1 class="font-semibold">Swoley <span class="text-indigo-400">Moley</span></h1>
    </a>
    <!-- este boton solo se mostrara cuando la ventana tenga el tamaño de la mitad de la pantalla o
     menos eso es lo que hace la clase md:hidden-->
    <button onclick={()=> openModal.set(true)} class="md:hidden grid place-items-center" aria-label="open">
            <i class="fa-solid fa-bars"></i>
    </button>
    <nav class="hidden md:flex items-center gap-4 lg:gap-6">
        <a href="#product" class="duration-200 hover:text-indigo-400 cursor-pointer">Productos</a>
        <a href="#reviews" class="duration-200 hover:text-indigo-400 cursor-pointer">Reseñas</a>
        <a href="#FQAs" class="duration-200 hover:text-indigo-400 cursor-pointer">P.Frecuentes</a>
        <button class="specialBtn">
            <p>Empieza Gratis</p>
        </button>
    </nav>
    </div>
</header>