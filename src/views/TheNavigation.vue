<script setup lang="ts">
import { RouterView } from 'vue-router';
import PedibaseLogo from '../components/icons/PedibaseLogo.vue';
import SearchHeader from '../components/SearchHeader.vue';
import { ref } from 'vue';

let title = ref("Pedibase")

const changeTitle = (text: string) => title.value = text 

</script>

<template>
  
  <div class="main">
    <div class="nav header-footer">
      <div class="nav-logo">
        <PedibaseLogo />
      </div>
      <div class="nav-links">
        <RouterLink @click="changeTitle('Home')" to="/">Home</RouterLink>
        <RouterLink @click="changeTitle('Pending Chart:')" to="/diagram">Pedigree Diagram</RouterLink>
        <RouterLink @click="changeTitle('Pedigree Overview:')" to="/pedigree">Pedigree DB</RouterLink>
        <RouterLink @click="changeTitle('Pending Breeds:')"  to="/pending">Pending Breeds</RouterLink>
        <RouterLink @click="changeTitle('Add a new dog:')" to="/create">Add New Dog</RouterLink>
      </div>
    </div>
    <div class="section">
      <div>
        <SearchHeader :value="title" />
      </div>
      <hr>
      <div class="router-view">
        <RouterView />
      </div>
    </div>
  </div>

</template>

<style scoped>
.main {
  height: 100%;
}

.nav {
  display: flex;
  height: 3.5rem;
  padding: 1rem;
}

.nav-links {
  margin-inline: auto;
  font-size: 18px;
  a {
    padding-inline: 1.5rem;
    border-left: 1px solid rgb(145, 139, 139);
  }
}

.section {
  display: grid;
  gap: 1rem;
  padding: .8rem 1rem;
}

a {
  border: none;
  background: -webkit-linear-gradient(315deg, #ffffff 25%, #c7c7c7, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>