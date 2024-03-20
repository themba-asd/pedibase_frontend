<script setup lang="ts">
import { mockData } from '../api/data';

let items = mockData

let dataCounter = 1
let incrementCounter = () => dataCounter++

defineProps<{
  buttonText: string
  buttonClass: string
}>()

</script>

<template>

  <table class="table-columns">
    <thead>
      <tr class="table-header">
        <th>Option</th> 
        <th>No.</th>
        <th v-for="(item, key, index) in items[0]" :key>
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody dy class="records">
      <tr v-for="item in items" :key="item.Id">
        <th>
          <button :class="buttonClass">{{ buttonText }}</button>
        </th>
        <th>{{ incrementCounter() }}</th>
        <th v-for="prop in item" :key="prop">
          {{ prop }}
        </th>
      </tr>
    </tbody>
  </table>

</template>

<style scoped>
thead {
  background:#aaaaaa;
}
thead th {
  color: #1f1e1e;
  font-weight: 500;
}
tbody th {
  font-weight: 100;
}

</style>
