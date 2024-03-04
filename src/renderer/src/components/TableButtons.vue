<script setup>
import ActionButton from './ActionButton.vue';

</script>

<template>
  <div class="buttons">
    <div>
      <input type="text" placeholder="Search" id="search">
      <ActionButton text="Search Record" />
      <ActionButton text="Pedigree Info" />
      <ActionButton text="Delete Record" />
    </div>
    <div>
      <ActionButton text="Fetch Data" />
    </div>
  </div>
</template>

<style scoped>
.buttons,
.buttons div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: .1rem;
}
</style>