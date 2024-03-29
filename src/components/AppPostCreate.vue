<script setup lang="ts">
import { ref } from 'vue';
import { PostDTO } from '../requests/posts';
import { usePostStore } from '../store/post';
import { KitButton, KitModal } from '@proxymal/smoothui';
import AppPostForm from './AppPostForm.vue';

const postStore = usePostStore();

//#region Create post
const isCreateOpen = ref(false);
const creatablePost = ref<PostDTO>({ title: '', body: '' });
const createPost = async () => {
	await postStore.createPost(creatablePost.value);
	// Hide
	isCreateOpen.value = false;
};
//#endregion
</script>

<template>
	<KitButton class="post-create" color="primary" @click="isCreateOpen = true">
		Создать пост
	</KitButton>

	<KitModal
		v-if="isCreateOpen"
		@close="isCreateOpen = false"
		@submit="createPost"
	>
		<AppPostForm v-model:model-value="creatablePost" title="Создать пост" />
	</KitModal>
</template>

<style scoped>
.post-create {
	margin-bottom: 16px;
}
</style>
