<script setup>

const props = defineProps({
  text: String,
})

</script>

<template>
  <div>
    <button>{{ props.text }}</button>
  </div>
</template>

<style scoped></style>
