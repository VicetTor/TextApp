<script setup>
import { ref, computed } from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const username =  ref("");
const email =  ref("");
const password =  ref("");

const title = "Créer un compte"

const isFormValid = computed(() =>{
    return username.value.trim() && email.value.trim() && password.value.trim()
})

const able = ref(true);

const token = localStorage.getItem("userData");

function logObjet(){
    fetch("https://posts-crud-api.vercel.app/register",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bear ${token}`
        },
        body: JSON.stringify({
            email: email.value,
            username: username.value,
            password: password.value
        }),
    })
    .then((response) => response.json())
    .then((data) =>
        localStorage.setItem("userData", JSON.stringify(data)),
        router.push("/")
    );
}

</script>

<template>

    <h1 style="text-align: center; margin-top: 20px;">{{ title }}</h1>

    <div class="container">

        <form class="card" @submit.prevent="logObjet">

            <label for="username" style="font-weight: bold;">Username</label>
            <input type="text" name="username" id="username" placeholder="Nom d'utilisateur" v-model="username"/>

            <label for="mail" style="font-weight: bold;">Email</label>
            <input type="email" name="mail" id="mail" v-model="email" placeholder="Email"/>

            <label for="password" style="font-weight: bold;">Password</label>
            <input type="password" name="password" id="password" v-model="password" placeholder="Mot de passe"/>
            
            <button type="submit" id="submitButton" :disabled="!isFormValid || !able"> S'inscrire </button>

      </form>

    </div>

</template>