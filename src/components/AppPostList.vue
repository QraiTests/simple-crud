<script setup lang="ts">
import { Post } from '../requests/posts';
import AppPostItem from './AppPostItem.vue';
import AppPostCreate from './AppPostCreate.vue';

defineProps<{
	posts: Post[];
}>();
</script>

<template>
	<AppPostCreate />

	<AppPostItem v-for="post in posts" :key="post.id" :post="post" />
</template>
