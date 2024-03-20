<script setup lang="ts">
import TableButtons from '../components/TableButtons.vue';

</script>

<template>

  <div class="router-main-view">
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>fullname</th>
            <th>email</th>
            <th>contact</th>
            <th>location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Frank Bard</td>
            <td>frank@fastemail.org</td>
            <td>1234567890</td>
            <td>Gemini Scape</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<style scoped>

td {
  padding: 1rem;
}
</style>