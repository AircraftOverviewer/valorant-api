import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ThemesEndpoint {
	public async get(options: UuidOptions): Promise<Theme>;
	public async get(options?: BaseOptions): Promise<Theme[]>;
	public async get(options?: unknown): Promise<Theme | Theme[]> {
		if ((options as UuidOptions).uuid) {
			const _options = options as UuidOptions;
			return handleFetch<Theme>(`/themes/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<Theme[]>(`/themes?language=${_options?.language ?? 'en-US'}`);
	}
}

export interface Theme {
	uuid: string;
	displayName: string;
	displayIcon: string;
	storeFeaturedImage: string;
	assetPath: string;
}
