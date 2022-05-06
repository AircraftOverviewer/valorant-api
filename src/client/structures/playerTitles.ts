import { handleFetch } from '../../utils/Fetch';
import type { BaseUuidOption, Language } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PlayerTitlesEndpoint {
	public static async getPlayerTitles(language?: Language): Promise<PlayerTitle[]> {
		return handleFetch<PlayerTitle[]>(`/playertitles?language=${language ?? 'en-US'}`);
	}

	public static async getPlayerTitleByUuid(options: BaseUuidOption): Promise<PlayerTitle> {
		return handleFetch<PlayerTitle>(`/playertitles/${options.uuid}?language=${options.language ?? 'en-US'}`);
	}
}

export interface PlayerTitle {
	uuid: string;
	displayName: string;
	titleText: string;
	isHiddenIfNotOwned: boolean;
	assetPath: string;
}
