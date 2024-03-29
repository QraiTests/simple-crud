import { defineStore } from 'pinia';
import { FetchState } from '../requests/doFetch';
import {
	Post,
	PostDTO,
	fetchPosts,
	createPost,
	editPost,
	deletePost
} from '../requests/posts';

export const usePostStore = defineStore('post', {
	state: () => {
		return {
			/**
			 * State of fetching list of posts
			 */
			listFetchState: 'none' as FetchState,

			/**
			 * List of posts
			 */
			postList: [] as Post[]
		};
	},
	actions: {
		async getPosts(): Promise<boolean> {
			this.listFetchState = 'pending';
			const data = await fetchPosts();

			// Success -> set post
			this.postList = data;
			this.listFetchState = 'success';
			return true;
		},

		async createPost(post: PostDTO): Promise<boolean> {
			const data = await createPost(post);

			// Success -> add post
			this.postList = [data, ...this.postList];
			return true;
		},

		async editPost(id: number, post: PostDTO): Promise<boolean> {
			await editPost(id, post);

			// Success -> edit post
			this.postList = this.postList.map((_post) =>
				_post.id === id ? { ..._post, ...post } : _post
			);
			return true;
		},

		async deletePost(id: number): Promise<boolean> {
			await deletePost(id);

			// Success -> delete post
			this.postList = this.postList.filter((post) => post.id !== id);
			return true;
		}
	}
});
