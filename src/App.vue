<script setup lang="ts">
import Navigation from './views/TheNavigation.vue'
import TheFooter from './views/TheFooter.vue';
</script>

<template>

  <main>
    <div class="nav">
      <Navigation />
    </div>
    <div class="footer">
      <TheFooter />
    </div>
  </main>

</template>

<style scoped>
main {
  width: 100svw;
  height: 100svh;
  overflow: hidden;
  padding: 0rem;
  border: 0px solid rgb(158, 155, 155);
}

.nav {
  height: 95%;
}

</style>
