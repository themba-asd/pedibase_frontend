<script setup lang="ts">
import { RouterView } from 'vue-router';
import PedibaseLogo from '../components/icons/PedibaseLogo.vue';
import SearchHeader from '../components/SearchHeader.vue';
import { ref } from 'vue';

let title = ref("Pedibase")

const setTitle = (text: string) => title.value = text 

</script>

<template>
  
  <div class="main">
    <div class="nav">
      <div class="nav-logo">
        <PedibaseLogo />
      </div>
      <div class="nav-links">
        <RouterLink @click="setTitle('Home')" to="/">Home</RouterLink>
        <RouterLink @click="setTitle('Pedigree Overview:')" to="/pedigree">Pedigree DB</RouterLink>
        <RouterLink @click="setTitle('Pending Chart:')" to="/diagram">Pedigree Diagram</RouterLink>
        <RouterLink @click="setTitle('Pending Breeds:')"  to="/pending">Pending Breeds</RouterLink>
        <RouterLink @click="setTitle('Breeders Info:')" to="/breeders">Breeders Info</RouterLink>
        <RouterLink @click="setTitle('Add a new dog:')" to="/create">Add New Dog</RouterLink>
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
  background: -webkit-linear-gradient(315deg, #88ccae 25%, #888b9c);
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

</style>