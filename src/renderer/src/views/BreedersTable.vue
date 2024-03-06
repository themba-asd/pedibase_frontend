<script setup>
import SearchHeader from '../components/SearchHeader.vue'
</script>

<template>
  <div class="main">

    <div>
      <SearchHeader title="Breeders Information:" placeholder="Enter the breeder's name" />
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
.main {
  display: grid;
  height: 100%;
  gap: 1rem;
  padding: 1rem;
}
</style>