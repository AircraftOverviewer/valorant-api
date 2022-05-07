import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CeremoniesEndpoint {
	public static async get(options?: BaseOptions): Promise<Ceremony> {
		return handleFetch<Ceremony>(`/ceremonies/${options?.uuid}?language=${options?.language ?? 'en-US'}`);
	}
}

export interface Ceremony {
	uuid: string;
	displayName: string;
	assetPath: string;
}
