<script setup>
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
  padding: .1rem;
  border: 5px solid rgba(178, 168, 168, 0.689);
}

.nav {
  height: 95%;
}

</style>
