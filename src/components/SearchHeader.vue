<script setup lang="ts">
import DropDownMenu from './SearchHeaderDropDown.vue';

defineProps<{
  value: String,
  placeholder: string,
  searchListResults?: Object[]
}>()

</script>

<template>

  <div class="main">
    <div class="search">
      <input type="button" :value>
      <div>
        <input type="text" :placeholder>
        <button>Search</button>
      </div>
    </div>
    <div class="dropdown">
      <DropDownMenu />
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