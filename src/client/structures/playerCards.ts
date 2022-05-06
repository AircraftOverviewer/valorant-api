import { handleFetch } from '../../utils/Fetch';
import type { BaseUuidOption, Language } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PlayerCardsEndpoint {
	public static async getPlayerCards(language?: Language): Promise<PlayerCard[]> {
		return handleFetch<PlayerCard[]>(`/playercards?language=${language ?? 'en-US'}`);
	}

	public static async getPlayerCardByUuid(options: BaseUuidOption): Promise<PlayerCard> {
		return handleFetch<PlayerCard>(`/playercards/${options.uuid}?language=${options.language ?? 'en-US'}`);
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
