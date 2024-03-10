<script setup lang="ts">
import ActionButton from './ActionButton.vue';
import SortFilterButtons from './TableButtonsSortFilter.vue';

</script>

<template>

  <div class="main">
    <div>
      <input type="text" placeholder="Search" id="search">
      <ActionButton text="Search Record" />
      <ActionButton text="Pedigree Info" />
      <ActionButton text="Delete Record" />
    </div>
    <div>
      <ActionButton text="Load More" />
    </div>
    <div>
      <SortFilterButtons />
    </div>
  </div>
  
</template>

<style scoped>
.main,
.main div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: .1rem;
}
</style>
