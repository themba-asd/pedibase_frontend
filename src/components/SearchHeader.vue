<script setup lang="ts">
import { ref } from 'vue';
import { listOfBreeders } from '../api/breedersdata';
import DropDownMenu from './SearchHeaderDropDown.vue';

defineProps<{
  value: String
}>()

let visible = ref(false)

let setVisible = (): boolean => visible.value = !visible.value

</script>

<template>

  <div class="main">
    <div class="search">
      <p class="header-title">{{ value }}</p>
      <div @click="setVisible" @focusout="setVisible">
        <input type="text" placeholder="Search for something..">
        <button>Search</button>
      </div>
    </div>
    <div v-if="visible" class="dropdown">
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