<script setup> //permet de ne pas faire d'export à l'inverse du javascript de base ou on doit l'importer ici appvue ou uservue l'import directement grâce au setup
import {useRoute} from "vue-router";// récupère la route actuelle

const title = "User profile";

const router = useRoute();

const username = router.params.username;
</script>

<template>
    <h1>
        {{ title }} <!-- Rendu déclaratif ici première chose importante du vue.js pour afficher le contenu d'une variable-->
    </h1>
    <h2>
        Template : {{ $route.params.username }} <!-- la librairie vue router export automatiquement une variable $route accès de partout -->
    </h2>
    <h2>
        JS : {{ username }}
    </h2>
</template>

