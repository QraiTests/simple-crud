<script setup lang="ts">
import { ref, watch } from 'vue';
import {
	KitTitle,
	KitFieldGroup,
	KitField,
	KitButton
} from '@proxymal/smoothui';
import { PostDTO } from '../requests/posts';

const props = defineProps<{
	title?: string;
	modelValue: PostDTO;
}>();

const emit = defineEmits<{
	(event: 'update:modelValue', val: PostDTO): void;
}>();

const post = ref<PostDTO>(props.modelValue);
watch(post, (newPost) => emit('update:modelValue', newPost));
</script>

<template>
	<KitTitle>
		<p>{{ title ?? 'Пост' }}</p>
	</KitTitle>

	<KitFieldGroup name="text" label="Заголовок">
		<KitField
			v-model="post.title"
			type="text"
			name="title"
			placeholder="Введите заголовок"
			minlength="4"
			maxlength="75"
			:required="true"
		>
		</KitField>
	</KitFieldGroup>
	<KitFieldGroup name="text" label="Текст">
		<KitField
			v-model="post.body"
			type="bigtext"
			name="body"
			placeholder="Введите текст поста"
			rows="6"
			minlength="25"
			maxlength="5000"
			:required="true"
		>
		</KitField>
	</KitFieldGroup>

	<KitButton color="primary" size="lg" type="submit"> Сохранить </KitButton>
</template>
