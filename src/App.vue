<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { usePostStore } from './store/post';
import AppPostList from './components/AppPostList.vue';
import { KitView, KitTitle, KitSuspenseLoader } from '@proxymal/smoothui';

const postStore = usePostStore();
onBeforeMount(() => {
	if (postStore.listFetchState === 'none') postStore.getPosts();
});
</script>

<template>
	<main class="smooth-container">
		<KitView>
			<KitTitle>Посты ({{ postStore.postList.length }})</KitTitle>

			<AppPostList
				v-if="postStore.listFetchState === 'success'"
				:posts="postStore.postList"
			/>
			<KitSuspenseLoader v-else size="md" />
		</KitView>
	</main>
</template>

<style lang="scss"></style>
