<script setup>
import { ref, computed } from "vue";

const text = ref("");
const trimmedText = computed(() => text.value.trim());

const posts = ref([]);

function addPost() {
  const newPost = {
    id: Math.random().toString(36).substring(2),
    content: trimmedText.value,
    createdAt: new Date(),
    author: {
      username: "VicLou",
      avatarUrl: "https://media1.tenor.com/m/a5RGfluwSOgAAAAd/sylvian-delhoumi.gif",
    },
  };
  posts.value.push(newPost);
  text.value = "";
}

function sortPosts(post) {
  posts.value.sort(post.createdAt);
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

      <article v-for="(post, index) in posts" :key="index" class="card">
        <div class="post-header">
          <img :src="post.author.avatarUrl" alt="avatar" width="36" height="36" />
          <a>{{ post.author.username }}</a>
        </div>

        <p>{{ post.content }}</p>
      </article>
    </div>
  </main>
</template>

<style scoped>
.container {
  height: 100vh;
  margin: 0 auto;
  max-width: 640px;
}
.card {
  background-color: var(--color-bg-secondary);
  border-radius: 10px;
  border: 1px solid var(--color-border);
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  width: 100%;
}
textarea {
  background: none;
  border: none;
  color: var(--color-text-primary);
  flex: 1;
  margin-bottom: 1rem;
  outline: none;
  padding: 0.5rem 0;
  resize: none;
  field-sizing: content;
}
button {
  align-self: flex-end;
  background: none;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  cursor: pointer;
  font-size: 1rem;
  height: 40px;
  padding: 0 1rem;
}

button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

article {
  padding: 1rem;
  overflow: hidden;
}

article p {
  white-space: pre-wrap;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.post-header img {
  border-radius: 50%;
}
</style>
