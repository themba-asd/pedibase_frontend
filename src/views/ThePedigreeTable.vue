<script setup lang="ts">
import TableButtons from '../components/TableButtons.vue'
import TableData from '../components/TableData.vue'

</script>

<template>
  
  <div class="router-main-view">

    <div>
      <TableButtons />
    </div>
    <div class="table">
      <TableData />
    </div>
  </div>

</template>

<style scoped>
.select {
  width: 12.65rem;
}
</style>
