<script setup lang="ts">
import SearchHeader from '../components/SearchHeader.vue';
import TableData from '../components/TableData.vue';

let array: Object[]

</script>
<template>

  <div class="router-main-view">
    <div>
      <SearchHeader 
        value="Pending Approvals:" 
        placeholder="Enter the dog's name" 
        :searchListResults=array
      />

    </div>
    <hr>

    <div class="table">
      <TableData />

    </div>
  </div>

</template>

<style scoped></style>