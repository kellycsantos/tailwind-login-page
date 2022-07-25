<template>
  <div class="h-64 w-full md:w-5/12 max-w-md mx-2 p-5 bg-white bg-opacity-40 rounded-md flex flex-col items-center gap-y-2">
    <h1 class="text-center uppercase text-4xl">Login</h1>
      <input type="email" class="px-5 py-2 border-none rounded-sm w-full">
      <input type="password" class="px-5 py-2 rounded-sm w-full">
      <input type="submit" value="confirm" class="bg-purple-300 hover:bg-purple-700 hover:text-white rounded-sm h-8 w-4/12 cursor-pointer">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
