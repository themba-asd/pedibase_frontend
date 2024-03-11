<script setup lang="ts">

</script>


<template>

  <div>

    <label>
      Identification No:
      <input type="text">
    </label>

    <label>
      Breeder:
      <input type="text">
    </label>

    <label>
      Owner:
      <input type="text">
    </label>

    <label>
      Country of Origin:
      <input type="text">
    </label>

    <label>
      Breeding Dog:
      <select>
        <option value="">Select Breeding</option>
        <option value="active">Active</option>
        <option value="retired">Retired</option>
        <option value="pet">Pet</option>
      </select>

    </label>

    <label>
      Date of Death:
      <input type="date">
    </label>

    <label>
      DNA Profile:
      <input type="file">
    </label>

    <label>
      Photo:
      <input type="file">
    </label>

  </div>

</template>


<style scoped></style>