<script setup lang="ts">
import { mockData } from '../api/data';

let items = mockData

let count = 1
let incrementCount = () => count++

</script>

<template>

  <table class="table-columns">
    <thead>
      <tr>
        <th></th>
        <th v-for="(item, key, index) in items[0]" :key>
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody class="records">
      <tr v-for="item in items" :key="item.Id">
        <th>{{ incrementCount() }}</th>
        <th v-for="prop in item" :key="prop">
          {{ prop }}
        </th>
      </tr>
    </tbody>
  </table>

</template>

<style scoped></style>
