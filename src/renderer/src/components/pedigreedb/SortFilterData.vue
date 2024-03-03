<script setup></script>

<template>
  <div class="tools-bar">
    <div>
      <button>Sort by</button>
      <button>Filter by</button>
      <button>Export to</button>
    </div>
    <div>
      <small>
        Records returned :
        <span>70</span> /
        <span>100</span>
      </small>
    </div>
  </div>
</template>

<style scoped>
.tools-bar {
  display: flex;
  justify-content: space-between;
}
</style>
