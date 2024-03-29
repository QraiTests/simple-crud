import { doFetch } from './doFetch';

/**
 * Raw type of Post
 */
export type Post = {
	id: number;
	userId: number;
	title: string;
	body: string;
};

/**
 * DTO for editing/creating Post
 */
export type PostDTO = Omit<Post, 'id' | 'userId'>;

/**
 * Get post
 * @param id post id
 */
export const fetchPost = async (id: number) =>
	await doFetch<Post>('GET', `/posts/${id}`);

/**
 * Listing posts
 */
export const fetchPosts = async () => await doFetch<Post[]>('GET', '/posts');

/**
 * Create post
 * @param dto post model
 */
export const createPost = async (dto: PostDTO) =>
	await doFetch<Post>('POST', '/posts', { body: dto });

/**
 * Edit post
 * @param id post id
 * @param dto post model
 */
export const editPost = async (id: number, dto: PostDTO) =>
	await doFetch<Post, PostDTO>('PUT', `/posts/${id}`, { body: dto });

/**
 * Delete post
 * @param id post id
 */
export const deletePost = async (id: number) =>
	await doFetch('DELETE', `/posts/${id}`);
