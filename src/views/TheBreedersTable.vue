<script setup lang="ts">
import SearchHeader from '../components/SearchHeader.vue'
import { listOfBreeders } from '../api/breedersdata';

</script>

<template>

  <div class="router-main-view">
    <div>
      <SearchHeader 
        value="Breeders Information:" 
        placeholder="Enter the breeder's name" 
        :searchListResults=listOfBreeders 
      />
    </div>
    <hr>
    <div class="table">
      <table class="table-columns">
        <thead>
          <tr>
            <th>id</th>
            <th>fullname</th>
            <th>email</th>
            <th>contact</th>
            <th>location</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>

</template>

<style scoped>

</style>../api/breedersdata