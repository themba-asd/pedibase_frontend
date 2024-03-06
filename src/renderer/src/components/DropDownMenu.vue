<script setup>

const props = defineProps({
  items: Array
})

</script>

<template>

  <div>
    <select id="dropdown">
      <option value="">Select Option</option>
      <option v-for="item in props.items" :key="item.id" :value="item.id">
        {{ item.name }}
      </option>
    </select>
  </div>

</template>

<style scoped>
</style>