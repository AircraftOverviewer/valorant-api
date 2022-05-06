import { fetch, RequestInit } from 'undici';
import type { BaseResult } from '../client/structures';

/* eslint-disable @typescript-eslint/no-extraneous-class */
export class Fetch {
	private static rootAPI = 'https://valorant-api.com/v1';

	public static get<type>(route: string, options?: RequestInit): Promise<type> {
		return new Promise((resolve, reject) => {
			fetch(`${this.rootAPI}${route}`, {
				...options
			})
				.then((res) => res.json())
				.then((res) => resolve(res as type))
				.catch((err) => reject(err));
		});
	}
}

export async function handleFetch<type>(endpoint: string): Promise<type> {
	const value = await Fetch.get<BaseResult>(endpoint);
	if (value.status !== 200) throw new Error(`[ValorantAPI ${value.status}] - ${value.error}`);
	return value.data as type;
}
