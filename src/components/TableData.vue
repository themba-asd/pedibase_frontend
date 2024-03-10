<script setup lang="ts">
import { mockData } from '../api/data';

let items = mockData

</script>

<template>

  <table class="table-columns">
    <thead>
      <tr>
        <th v-for="(item, key, index) in items[0]" :key>
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody class="records">
      <tr v-for="item in items" :key="item.Id">
        <th v-for="prop in item" :key="prop">
          {{ prop }}
        </th>
      </tr>
    </tbody>
  </table>

</template>

<style scoped></style>
