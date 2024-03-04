<script setup>
import ToolsBar from '../components/pedigreedb/SortFilterData.vue'
import ActionBar from '../components/pedigreedb/ActionButtons.vue'
import TableData from '../components/pedigreedb/TableData.vue'
</script>

<template>
  <div class="main">
    <div class="tool-bar">
      <ToolsBar />
    </div>
    <div class="action-bar">
      <ActionBar />
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

</style>
