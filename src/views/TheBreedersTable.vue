<script setup lang="ts">
import TableButtons from '../components/TableButtons.vue';

</script>

<template>

  <div class="router-main-view">
    <div>
      <TableButtons />
    </div>
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
</style>