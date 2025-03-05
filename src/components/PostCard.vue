<script setup>
import {TrashIcon, HandThumbUpIcon} from "@heroicons/vue/24/outline"
import {HandThumbUpIcon as solid} from "@heroicons/vue/24/solid"
import { ref } from "vue";

defineProps(["post"])
const emit = defineEmits(["delete","like"]);



</script>



<template>
    <article class="card">
        <header>
          <img :src="post.author.avatarUrl" alt="avatar" width="36" height="36" />
          <a>{{ post.author.username }}</a>
          <small>{{ post.createdAt.toLocaleDateString() }}</small>
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