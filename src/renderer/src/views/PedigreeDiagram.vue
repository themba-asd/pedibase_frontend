<script setup></script>
<template>
  <div class="main">
    <div class="child">
      <div>1</div>
    </div>
    <div class="parents">
      <div>2</div>
      <div>3</div>
    </div>
    <div class="grandparents">
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>

  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  padding: 0rem 1rem;
}
.child,
.parents,
.grandparents 
{
  display: grid;
  align-items: center;
  flex: 1;

  > div {
    display: grid;
    align-items: center;
    width: 12rem;
    height: 7rem;
    margin-top: .5rem;
    border-left: 1px solid;
  }
}

</style>
