<script setup>
import { ref, computed } from "vue";
import PostCard from "@/components/PostCard.vue"  //Le @ permet de garder le chemin malgré le changement de répertoire possible du fichier

const text = ref("");
const trimmedText = computed(() => text.value.trim());

const posts = ref([]);
const sortedPost = computed(() => posts.value.toSorted((postA, postB) => postB.createdAt - postA.createdAt))

function addPost() {
  const newPost = {
    id: Math.random().toString(36).substring(2),
    content: trimmedText.value,
    createdAt: new Date(),
    author: {
      username: "VicLou",
      avatarUrl: "https://media1.tenor.com/m/a5RGfluwSOgAAAAd/sylvian-delhoumi.gif",
    },
    like: false
  };
  posts.value.push(newPost);
  text.value = "";
}

function deletePost(postId){
  posts.value = posts.value.filter((post) => post.id != postId)
}

function likePost(postId){
  let post = posts.value.find((post) => post.id == postId)
  post.like = !post.like
}

const loading= ref(false);

const apiPosts = ref([]);
function fetchPosts(){
  loading.value = true;
    const results = fetch("https://posts-crud-api.vercel.app/posts");
    results.then((response) => response.json())
    .then((data)=>{
        apiPosts.value = data;
        loading.value = false;
    });
    //on ne peut pas mettre le loading value à false ici car la promesse du fetch va s'exécuter à la fin de tout le code exécutée.
    //Java script va mettre à true puis fetch puis il va directmeent mettre false puis après afficher nous on veut pas ça. On veut d'abord afficher puis false.
}

fetchPosts();

/*function updateText(event) {
  text.value = event.target.value;
} */
</script>

<template>
  <main>
    <div class="container">
      <form class="card" @submit.prevent="addPost">
        <textarea name="post" id="post" placeholder="Quoi de neuf ?" v-model="text"> </textarea>
        <button :disabled="!trimmedText" type="submit">Publier</button>
      </form>

      <p v-if="loading" >Chargement ...</p>
      <p v-else-if="!apiPosts.length">Aucun post pour le moment</p>

      <PostCard v-for="(post, index) in apiPosts" :key="index" :post="post" @delete="deletePost" @like="likePost"/>


    </div>
  </main>
</template>
