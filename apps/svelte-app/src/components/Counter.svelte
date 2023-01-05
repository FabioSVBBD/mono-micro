<script>
  let count = 0;
</script>

<button
  class="px-4 text-lg text-gray-900 border-2 border-gray-900 rounded-md"
  on:click={() => (count = ++count)}
>
  clicked {count} time{count !== 1 ? 's' : ''}
</button>
