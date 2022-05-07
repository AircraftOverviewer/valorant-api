import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PlayerTitlesEndpoint {
	public static async get(options: UuidOptions): Promise<PlayerTitle>;
	public static async get(options?: BaseOptions): Promise<PlayerTitle[]>;
	public static async get(options?: unknown): Promise<PlayerTitle | PlayerTitle[]> {
		if ((options as UuidOptions).uuid) {
			const _options = options as UuidOptions;
			return handleFetch<PlayerTitle>(`/playertitles/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<PlayerTitle[]>(`/playertitles?language=${_options?.language ?? 'en-US'}`);
	}
}

export interface PlayerTitle {
	uuid: string;
	displayName: string;
	titleText: string;
	isHiddenIfNotOwned: boolean;
	assetPath: string;
}
