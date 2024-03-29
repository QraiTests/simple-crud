export const API_URL = 'https://jsonplaceholder.typicode.com';

export type FetchState = 'none' | 'pending' | 'success' | 'fail';

export type FetchOptions<T> = Omit<
	RequestInit,
	'method' | 'headers' | 'body'
> & {
	body?: T;
};

/**
 * Fetch data from API
 * @param method HTTP Method
 * @param url HTTP Route
 * @param opts Options for request
 * @returns result of fetch
 */
export async function doFetch<TResult = unknown, TInput = unknown>(
	method: RequestInit['method'],
	url: string,
	opts?: FetchOptions<TInput>
): Promise<TResult> {
	const resp = await fetch(API_URL + url, {
		...opts,
		method,
		body: opts && opts.body ? JSON.stringify(opts.body) : void 0,
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Accept: '*/*'
		}
	});

	return (await resp.json()) as TResult;
}
