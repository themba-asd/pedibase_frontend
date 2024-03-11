<script setup lang="ts">
import TableButtons from '../components/TableButtons.vue'
import TableData from '../components/TableData.vue'
import { countHandler } from '../api/data';

</script>

<template>

  <div class="router-main-view">
    <div>
      <TableButtons />
    </div>
    <div class="table">
      <TableData />
    </div>
    <small>
      Records Returned: {{ countHandler() }}
    </small>
  </div>


</template>

<style scoped>
.select {
  width: 12.65rem;
}
</style>
