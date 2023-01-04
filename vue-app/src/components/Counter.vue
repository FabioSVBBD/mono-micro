<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <button
    @click="count++"
    class="px-4 text-lg text-gray-900 border-2 border-gray-900 rounded-md"
  >
    clicked {{ count }} time{{ count === 1 ? '' : 's' }}
  </button>
</template>
