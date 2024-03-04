<script setup>
import { RouterView } from 'vue-router';
import PedibaseLogo from '../components/icons/PedibaseLogo.vue';

</script>

<template>
  <div class="dashboard">
    <div class="nav">
      <div class="nav-logo">
        <PedibaseLogo />
      </div>
      <div class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pedigree">Pedigree DB</RouterLink>
        <RouterLink to="/diagram">Pedigree Diagram</RouterLink>
        <RouterLink to="/pending">Pending Breeds</RouterLink>
        <RouterLink to="/breeders">Breeders Info</RouterLink>
        <RouterLink to="/create">Create Record</RouterLink>
      </div>
    </div>
    <div class="router-view">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: grid;
  height: 100%;
  gap: .1rem;
  padding: .1rem .1rem .1rem .1rem;
  border: 5px solid rgba(178, 168, 168, 0.689);
}

.nav {
  display: flex;
  align-items: center;
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
</style>