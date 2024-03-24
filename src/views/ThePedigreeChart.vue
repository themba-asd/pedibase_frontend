<script lang="ts" setup>
import { mockData, PedigreeChartType } from '../api/pedigreeChart';
//array length will determine how many child-divs to create
let htmlDivCountArray = ['x'] 
// set the the array length
let htmlDivCounterHandler = (): void => {
  if (htmlDivCountArray.length < 8) htmlDivCountArray.push('x')
  return
}

let chartContentItems: PedigreeChartType[] = [...mockData]

let chartContentHandler = (): string | undefined => {
  let item = chartContentItems.shift()
  let rawHTML = `
    <p>${item?.Id ?? 'No Information'}</p>
    <p>${item?.Name ?? 'Unknown'}</p>
    <p>${item?.RegNo ?? ''}</p>
    <p>${item?.Dob ?? ''}</p>
    <p>${item?.PreTitle ?? ''}</p>
    <p>${item?.PostTitle ?? ''}</p>
    <p>${item?.Breeder ?? ''}</p>`
  return rawHTML
}

</script>

<template>

  <div class="router-main-view">
    <div class="chart">
      <div v-for="item in '1234'" :key="item" class="parent">
        <div v-for="item in htmlDivCountArray" :key="item" class="child">
          {{ htmlDivCounterHandler() }}
          <div v-html="chartContentHandler()" class="content"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.chart {
  display: flex;
  justify-content: space-evenly;
}

.parent,
.child {
  display: grid;
  align-content: space-evenly;
}

.child {
  font-weight: 500;
  line-height: 1.3rem;
  background: -webkit-linear-gradient(315deg, #797e7a 25%, #9fa7a7);
}

.content {
  padding: .5rem 1rem;
  border: 1px solid silver;
}

.parent:last-child .child:not(.child:first-of-type) .content {
  border-top: 0;
}
</style>