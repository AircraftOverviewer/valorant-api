import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ThemesEndpoint {
	public static async get(options?: BaseOptions): Promise<Theme> {
		return handleFetch<Theme>(`/themes/${options?.uuid}?language=${options?.language ?? 'en-US'}`);
	}
}

export interface Theme {
	uuid: string;
	displayName: string;
	displayIcon: string;
	storeFeaturedImage: string;
	assetPath: string;
}
