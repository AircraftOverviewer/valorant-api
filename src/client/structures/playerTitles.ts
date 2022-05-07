import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PlayerTitlesEndpoint {
	public static async get(options?: BaseOptions): Promise<PlayerTitle> {
		return handleFetch<PlayerTitle>(`/playertitles/${options?.uuid}?language=${options?.language ?? 'en-US'}`);
	}
}

export interface PlayerTitle {
	uuid: string;
	displayName: string;
	titleText: string;
	isHiddenIfNotOwned: boolean;
	assetPath: string;
}
