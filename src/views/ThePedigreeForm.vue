<script setup lang="ts">
import PrimaryForm from '../components/forms/PrimaryForm.vue';
import SecondaryForm from '../components/forms/SecondaryForm.vue';
import TertiaryForm from '../components/forms/TertiaryForm.vue';


let cancel = () => {
  document.querySelectorAll('input').forEach(element => element.value = '')
  document.querySelectorAll('select').forEach(element => element.value = '')
}

</script>

<template>
  
  <div class="router-main-view main-form">
    <form>
      <PrimaryForm />
      <SecondaryForm />
      <TertiaryForm />
    </form>
    <hr>
    <div>
      <button type="button">Save and Submit</button>
      <button type="button" @click="cancel">Cancel</button>
    </div>
  </div>

</template>


<style scoped>
form {
  display: flex;
  justify-content: space-between;
}

form div {
  display: grid;
  height: 100%;
  gap: .1rem;
}

</style>