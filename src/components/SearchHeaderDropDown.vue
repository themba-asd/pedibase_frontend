<script setup lang="ts">

type breederObj = {
  id: number,
  name: string
}

defineProps<{
  array?: breederObj[]
}>()

</script>

<template>

  <div>
    <select id="dropdown" class="sort-filter-button">
      <option disabled selected>Click to select below</option>
      <option
        v-for="item in array" 
        :key="item.id" 
      >
        {{ item.name }}
      </option>
    </select>
  </div>

</template>

<style scoped>
select {
  width: 12.65rem;
}

</style>