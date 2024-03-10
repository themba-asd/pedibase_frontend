<script setup lang="ts">
import SearchHeader from '../components/SearchHeader.vue'
import TableButtons from '../components/TableButtons.vue'
import TableData from '../components/TableData.vue'

let array: Object[]

</script>

<template>
  
  <div class="router-main-view">
    <div>
      <SearchHeader 
        value="Pedigree Table:"
        placeholder="Search" 
        :searchListResults=array
      />
    </div>
    <hr>
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
