<script setup>
import {TrashIcon, HandThumbUpIcon} from "@heroicons/vue/24/outline"
import {HandThumbUpIcon as solid} from "@heroicons/vue/24/solid"
import { ref } from "vue";
import {useRouter} from "vue-router";

const router = useRouter(); //obligatoire pour utiliser le router avec la méthode ci-dessous

const props = defineProps(["post"]) 
const emit = defineEmits(["delete","like"]);


function goToUserProfile(){
  router.push({ name: "userProfile", params: {username: props.post.author.username}}) // il faut utiliser props car on n'a pas accès au post directement contrairement au template.
}

</script>

<template>
    <article class="card">
        <header>
          <img :src="post.author.avatarUrl" alt="avatar" width="36" height="36" />
          <a @click="goToUserProfile">{{ post.author.username }}</a> <!-- @click permet de définir un listener sur le click -->
          <!-- <RouterLink :to="{name: 'userProfile'}"> {{ post.author.username }} </RouterLink>  Exactement la même méthode qu'au dessus --> 
          <small>{{ new Date(post.createdAt).toLocaleDateString() }}</small>
        </header>
        <p>{{ post.content }}</p>
        
        <footer>
            <button class="btn-icon" @click="emit('delete',post.id)"><TrashIcon/></button>
            <button class="btn-icon" @click="emit('like',post.id)" >
                <solid v-if="post.like"/>
                <HandThumbUpIcon v-else/>
            </button>
        </footer>
      </article>
</template>