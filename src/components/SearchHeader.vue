<script setup lang="ts">
import { ref } from 'vue';
import DropDownMenu from './SearchHeaderDropDown.vue';

import { listOfBreeders } from '../api/breedersdata';

defineProps<{
  value: String
}>()

let x = ref(false)

let visibleMenu = (): boolean => {
  return x.value = !x.value
}

</script>

<template>

  <div class="main">
    <div class="search">
      <input type="button" :value>
      <div @click="visibleMenu" @focusout="visibleMenu">
        <input type="text" placeholder="Search for something..">
        <button>Search</button>
      </div>
    </div>
    <div v-if="x" class="dropdown">
      <DropDownMenu :array="listOfBreeders" />
    </div>
  </div>

</template>


<style scoped>
.main {
  display: grid;
}

.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input[type='button'] {
  font-size: 22px;
}

.dropdown {
  position: absolute;
  top: 16%;
  justify-self: end;
  background: #ffffff;
}
</style>