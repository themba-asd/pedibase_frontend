<script setup>
import TableButtons from '../components/TableButtons.vue'
import TableData from '../components/TableData.vue'
</script>

<template>
  <div class="main">
    <div>
      <TableButtons />
    </div>
    <div class="table">
      <TableData />
    </div>
  </div>
</template>

<style scoped>
.main {
  display: grid;
  align-content: space-between;
  height: 100%;
}
</style>
