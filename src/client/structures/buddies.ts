import { handleFetch } from '../../utils/Fetch';
import type { Language, BaseUuidOption } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class BuddiesEndpoint {
	public static async getBuddies(language?: Language): Promise<Buddy[]> {
		return handleFetch<Buddy[]>(`/buddies?language=${language ?? 'en-US'}`);
	}

	public static async getBuddyLevels(language?: Language): Promise<BuddyLevel[]> {
		return handleFetch<BuddyLevel[]>(`/buddies?language=${language ?? 'en-US'}`);
	}

	public static async getBuddyByUuid(options: BaseUuidOption): Promise<Buddy> {
		return handleFetch<Buddy>(`/buddies/${options.uuid}?language=${options.language ?? 'en-US'}`);
	}

	public static async getBuddyLevelByUuid(options: BaseUuidOption): Promise<BuddyLevel> {
		return handleFetch<BuddyLevel>(`/buddies/levels/${options.uuid}?language=${options.language ?? 'en-US'}`);
	}
}

export interface Buddy {
	uuid: string;
	displayName: string;
	isHiddenIfNotOwned: boolean;
	themeUuid: string;
	displayIcon: string;
	assetPath: string;
	levels: BuddyLevel[];
}

export interface BuddyLevel {
	uuid: string;
	charmLevel: number;
	displayName: string;
	displayIcon: string;
	assetPath: string;
}
