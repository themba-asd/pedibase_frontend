<script setup>
import SortFilterButtons from '../components/SortFilter.vue'
import TableButtons from '../components/TableButtons.vue'
import TableData from '../components/TableData.vue'
</script>

<template>
  <div class="main">
    <div>
      <SortFilterButtons />
    </div>
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
  height: 100%;
}

</style>../components/SortFilter.vue../components/TableButtons.vue
