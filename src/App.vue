<script setup>
import { ref, computed } from "vue";
import PostCard from "@/components/PostCard.vue"  //Le @ permet de garder le chemin malgrè le changement de répertoire possible du fichier

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

      <p v-if="!posts.length">Aucun post pour le moment</p>

      <PostCard v-for="(post, index) in sortedPost" :key="index" :post="post" @delete="deletePost" @like="likePost"/>


    </div>
  </main>
</template>
