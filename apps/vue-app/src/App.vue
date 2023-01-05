<script>
import Counter from './components/Counter.vue';

export default {
  data: () => {
    return {};
  },
  components: {
    Counter,
  },
};
</script>

<template>
  <div class="flex flex-col items-center mt-10">
    <img src="./assets/vue.png" alt="vue" class="w-32 mb-1" />
    <Counter />
  </div>
</template>
