<script setup lang="ts">
import { ref } from 'vue';
import { Post } from '../requests/posts';
import { usePostStore } from '../store/post';
import { KitCard, KitButton, KitModal } from '@proxymal/smoothui';
import AppPostForm from './AppPostForm.vue';

const postStore = usePostStore();

const props = defineProps<{
	post: Post;
}>();

//#region Edit post
const isEditOpen = ref(false);
const editablePost = ref({ ...props.post });
const editPost = async () => {
	await postStore.editPost(props.post.id, editablePost.value);
	// Hide
	isEditOpen.value = false;
};
//#endregion

//#region Delete post
const deletePost = async () => {
	await postStore.deletePost(props.post.id);
};
//#endregion
</script>

<template>
	<KitCard class="post">
		<p class="post__title">{{ post.title }}</p>
		<small class="post__body">{{ post.body }}</small>

		<div class="post__row">
			<KitButton
				class="post__button"
				color="light"
				@click="isEditOpen = true"
			>
				Редактировать
			</KitButton>
			<KitButton class="post__button" color="danger" @click="deletePost">
				Удалить
			</KitButton>
		</div>
	</KitCard>

	<KitModal v-if="isEditOpen" @close="isEditOpen = false" @submit="editPost">
		<AppPostForm
			v-model:model-value="editablePost"
			title="Редактировать пост"
		/>
	</KitModal>
</template>

<style scoped lang="scss">
.post {
	width: 100%;

	cursor: pointer;

	border: 2px solid var(--color-light);

	&__title {
		margin-bottom: 8px;

		font-size: 18px;
		font-weight: 600;
	}
	&__body {
		margin-bottom: 12px;

		font-size: 16px;

		opacity: 0.65;
	}
	&__row {
		display: flex;
		gap: 8px;
	}
	&__button {
		width: 50%;

		margin: 0 !important;
	}
}
</style>
