import { handleFetch } from '../../utils/Fetch';
import type { BaseUuidOption, Language } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SpraysEndpoint {
	public static async getSprays(language?: Language): Promise<Spray[]> {
		return handleFetch<Spray[]>(`/sprays?language=${language ?? 'en-US'}`);
	}

	public static async getSprayLevels(language?: Language): Promise<SprayLevel[]> {
		return handleFetch<SprayLevel[]>(`/sprays/levels?language=${language ?? 'en-US'}`);
	}

	public static async getSprayByUuid(options: BaseUuidOption): Promise<Spray> {
		return handleFetch<Spray>(`/sprays/${options.uuid}?language=${options.language ?? 'en-US'}`);
	}

	public static async getSprayLevelByUuid(options: BaseUuidOption): Promise<SprayLevel> {
		return handleFetch<SprayLevel>(`/sprays/levels/${options.uuid}?language=${options.language ?? 'en-US'}`);
	}
}

export interface Spray {
	uuid: string;
	displayName: string;
	category: string;
	themeUuid: string;
	displayIcon: string;
	fullIcon: string;
	fullTransparentIcon: string;
	animationPng: string;
	animationGif: string;
	assetPath: string;
	levels: SprayLevel[];
}

export interface SprayLevel {
	uuid: string;
	sprayLevel: number;
	displayName: string;
	displayIcon: string;
	assetPath: string;
}
