<template>
<div class="bg-ios-image bg-no-repeat h-screen flex items-center justify-center">
  <HelloWorld />
</div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

<style>

</style>

