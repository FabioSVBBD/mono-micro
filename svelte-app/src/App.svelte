<script>
  import svelte from './assets/svelte.png';
  import Counter from './components/Counter.svelte';
</script>

<div class="flex flex-col items-center mt-10">
  <img src={svelte} alt="svelte" class="w-32 mb-1" />
  <Counter />
</div>
