import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PlayerCardsEndpoint {
	public async get(options: UuidOptions): Promise<PlayerCard>;
	public async get(options?: BaseOptions): Promise<PlayerCard[]>;
	public async get(options?: unknown): Promise<PlayerCard | PlayerCard[]> {
		if ((options as UuidOptions).uuid) {
			const _options = options as UuidOptions;
			return handleFetch<PlayerCard>(`/playercards/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<PlayerCard[]>(`/playercards?language=${_options?.language ?? 'en-US'}`);
	}
}

export interface PlayerCard {
	uuid: string;
	displayName: string;
	isHiddenIfNotOwned: boolean;
	themeUuid: null;
	displayIcon: string;
	smallArt: string;
	wideArt: string;
	largeArt: string;
	assetPath: string;
}
