<script setup lang="ts">
import TableButtons from '../components/TableButtons.vue';
import TableData from '../components/TableData.vue';

</script>
<template>

  <div class="router-main-view">
    <TableButtons />
    <div class="table">
      <TableData buttonText="+" buttonClass="table-add-buttons"/>
    </div>
  </div>

</template>

<style scoped></style>