<script setup lang="ts">

import { mockData } from '../api/data';

let items = mockData

</script>

<template>

  <table class="table-columns">
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>RegNo</th>
        <th>Sire</th>
        <th>Dam</th>
        <th>Sex</th>
        <th>Dob</th>
        <th>PreTitle</th>
        <th>PostTitle</th>
        <th>Cotation</th>
        <th>Color</th>
        <th>Height</th>
        <th>Weight</th>
        <th>Breeder</th>
        <th>Owner</th>
        <th>Country</th>
        <th>Breeding</th>
        <th>Identi. No.</th>
      </tr>
    </thead>

    <tbody class="records">

      <tr v-for="item in items" :key="item.Id">
        <th>{{ item.Id }}</th>
        <th>{{ item.Name }}</th>
        <th>{{ item.RegNo }}</th>
        <th>{{ item.Sire }}</th>
        <th>{{ item.Dam }}</th>
        <th>{{ item.Sex }}</th>
        <th>{{ item.Dob }}</th>
        <th>{{ item.PreTitle }}</th>
        <th>{{ item.PostTitle }}</th>
        <th>{{ item.Cotation }}</th>
        <th>{{ item.Color }}</th>
        <th>{{ item.Height }}</th>
        <th>{{ item.Weight }}</th>
        <th>{{ item.Breeder }}</th>
        <th>{{ item.Owner }}</th>
        <th>{{ item.Country }}</th>
        <th>{{ item.Breeding }}</th>
        <th>{{ item.IdentificationNo }}</th>
      </tr>
      
    </tbody>

  </table>

</template>

<style scoped></style>
