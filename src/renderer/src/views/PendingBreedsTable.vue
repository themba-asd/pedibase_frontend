<script setup>
import SearchHeader from '../components/SearchHeader.vue';
import TableData from '../components/TableData.vue';

</script>
<template>

  <div class="main">

    <div>
      <SearchHeader title="Pending Approvals:" placeholder="Enter the dog's name" />
    </div>
    <hr>
    
    <div class="table">
      
      <TableData />
      
    </div>

  </div>

</template>


<style scoped>
.main {
  display: grid;
  height: 100%;
  gap: 1rem;
  padding: 1rem;
}
</style>