<script setup>
import SearchHeader from '../components/SearchHeader.vue';

</script>
<template>

  <div class="main">

    <div>
      <SearchHeader title="Pedigree Chart:" placeholder="Enter the name or id" />
    </div>
    <hr>

    <div class="chart">
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
        <div>7</div>
      </div>
      <div class="grandparents">
        <div>
          <div>8</div>
          <div>8</div>
        </div>
        <div>
          <div>9</div>
          <div>9</div>
        </div>
        <div>
          <div>10</div>
          <div>10</div>
        </div>
        <div>
          <div>11</div>
          <div>11</div>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.main {
  display: grid;
  height: 100%;
  gap: 1rem;
  padding: 1rem;
}

.chart {
  display: flex;
  justify-content: center;
  padding: 0rem 1rem;
}

.child,
.parents,
.grandparents {
  display: grid;
  align-items: center;
  flex: 1;

  >div {
    display: grid;
    align-items: center;
    width: 12rem;
    height: 7rem;
    margin-top: .5rem;
    border: 1px solid;
    div {
      border-block: 1px solid;
    }
  }
}

</style>
