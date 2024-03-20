<script setup lang="ts">


</script>


<template>

  <div class="main">
    <button>Breed Overview</button>
    <button>Recently Added</button>
    <button>Breeders Table</button>
  </div>
  <div class="components">
      <component :is=''></component>
  </div>

</template>


<style scoped>
.components {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>