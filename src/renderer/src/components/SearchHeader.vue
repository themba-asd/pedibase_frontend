<script setup>

const props = defineProps({
  title: String,
  placeholder: String
})

</script>

<template>
  <div class="header">

    <input type="button" :value=props.title>

    <div>
      <input type="text" :placeholder=props.placeholder>
      <button>Search</button>
    </div>

  </div>

</template>


<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input[type='button'] {
  font-size: 22px;
}

</style>