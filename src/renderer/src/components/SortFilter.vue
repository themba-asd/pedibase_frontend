<script setup>
import ActionButton from './ActionButton.vue';
import RecordsReturned from './RecordsReturned.vue';

</script>

<template>
  <div class="buttons">
    <div>
      <ActionButton text="Sort By" />
      <ActionButton text="Filter By" />
    </div>
    <div>
      <RecordsReturned />
    </div>
  </div>
</template>

<style scoped>
.buttons,
.buttons div {
  display: flex;
  justify-content: space-between;
}
</style>
