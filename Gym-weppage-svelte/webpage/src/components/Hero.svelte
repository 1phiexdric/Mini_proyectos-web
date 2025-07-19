<script>
  import CtAs from "./CTAs.svelte";
  import Header from "./header.svelte";
  import Sectionwrapper from "./sectionwrapper.svelte";
  import Stars from "./Stars.svelte";


</script>
<Sectionwrapper id="hero">
    <Header/>
    <div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14">
      <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px]
      mx-auto w-full text-center font-semibold">
      <span class="text-indigo-400">Gym</span>
      Training <span class="text-slate-600 line-through">Is hard</span><br>
      Just Got <span class="text-indigo-400">Easier</span>
    </h2>
    <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full">
      Less thinking & more doing. we've the trainer in your pocket full of <span class="italic">personalized
        workouts, exercise, explanations, analytics
      </span> and much much more.
    </p>
    <CtAs dark={false}/>
    <Stars/>
    </div>
</Sectionwrapper>