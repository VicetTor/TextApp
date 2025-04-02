<script setup>
import {useRouter, useRoute} from "vue-router";
import {  computed } from "vue";

const router = useRouter();
const route = useRoute();

function logout(){ 
  localStorage.removeItem("userData")
  router.push("/register")
}

const showNavbar = computed(() =>{
  return route.path != "/register"
})

</script>

<template>
  <header class="navbar" v-if="showNavbar">
    <button @click="logout">Se déconnecter</button>
  </header>
  <RouterView></RouterView> <!-- Sorte de placeholder pour la route qui va être choisit (Router view va se transformer en homePage si on est sur Homepage et inversement pour les autres pages)-->
</template>

<style scoped>
  .navbar{
    padding: 1rem;
  }
</style>