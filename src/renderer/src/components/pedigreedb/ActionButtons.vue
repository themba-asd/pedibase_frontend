<script setup>

</script>

<template>
  <div class="buttons">
      <div>
          <input type="text" placeholder="Search id">
          <button>Search Record</button>
          <button>Pedigree Info</button>
          <button>Delete Record</button>
      </div><div>
          <button>Get All Data</button>
      </div>
  </div>
</template>

<style scoped>
.buttons, .buttons div {
    display: flex; justify-content: space-between;
    padding-block: .1rem;
}

</style>