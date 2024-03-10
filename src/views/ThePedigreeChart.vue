<script setup lang="ts">
import SearchHeader from '../components/SearchHeader.vue';

let array: Object[]

</script>
<template>

  <div class="router-main-view">

    <div>
      <SearchHeader 
        value="Pedigree Chart:" 
        placeholder="Enter the name or id"
        :searchListResults=array
      />
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

      <div class="greatgrandparents">
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
.chart {
  display: flex;
  padding: 3rem;
  border: 1px solid grey;

  div {
    color: grey;
  }
}

.child,
.parents,
.grandparents,
.greatgrandparents {
  display: grid;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
  gap: 1rem;

  >div {
    display: grid;
    width: 12rem;
    height: 5rem;
    border: 1px solid;

    div:first-child {
      border-bottom: 1px solid;
    }
  }
}
</style>
