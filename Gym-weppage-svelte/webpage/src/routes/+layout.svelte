<script lang="ts">
  import "../app.css";
  import CtAs from "../components/CTAs.svelte";
  import Footer from "../components/footer.svelte";
  import Header from "../components/header.svelte";
  import { openModal } from "../store";
  import { fade } from "svelte/transition";
  let { children } = $props();

  let y: number = $state(0);
  let outerHeight: number = $state(0);

  function retoute(href) {
	openModal.set(false)
	window.location.href = href
  }
</script>

{#if $openModal}
  <div
    class="flex top-0 left-0 w-screen h-screen border-b bg-white z-50
	fixed flex-col gap-8 p-5 px-8 md:hidden justify-between"
  ><div>
    <div class="flex items-center justify-between gap-4 border-b pb-2">
		        <h2 class="font-semibold">
            Swoley <span class="text-indigo-400">Moley</span>
        </h2>
		<button onclick={()=> openModal.set(false)} class="outline-none border-none" aria-label="close">
			<i class="fa-solid fa-xmark text-2xl"></i>
		</button>
	</div>
	<div class="flex flex-col gap-4">
		<button onclick={()=> retoute("#product")} class="border-none outline-none p-2 group duration-200 cursor-pointer
		text-left menu__option">
		<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">Products
			<i class="fa-solid fa-chevron-right text-xl pl-4"></i>
		</p>
	</button>
		<button onclick={()=> retoute("#reviews")} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left menu__option">
		<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">Reviews
			<i class="fa-solid fa-chevron-right text-xl pl-4"></i>
		</p>
	</button>
		<button onclick={()=> retoute("#FQAs")} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left menu__option">
		<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">FQAs
			<i class="fa-solid fa-chevron-right text-xl pl-4"></i>
		</p>
	</button>
	</div></div>
	<div class="flex flex-col items-center justify-center">
		<CtAs dark={false}/>
	</div>
</div>
{/if}
{#if y> outerHeight}
	<div class="bg-white fixed top-0 left-0 w-full flex flex-col z-20 px-4" in:fade={{ duration: 300 }}>
		<Header/>
	</div>
{/if}

{@render children()}
<Footer />
<svelte:window bind:scrollY={y} bind:outerHeight />
<style>
	.menu__option{
		border: none;
		border-radius: 3px;
		border-bottom: 1px solid indigo;
	}
</style>