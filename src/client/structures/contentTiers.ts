import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ContentTiersEndpoint {
	public static async get(options?: BaseOptions): Promise<ContentTier> {
		return handleFetch<ContentTier>(`/contenttiers/${options?.uuid}?language=${options?.language ?? 'en-US'}`);
	}
}

export interface ContentTier {
	uuid: string;
	devName: string;
	rank: number;
	juiceValue: number;
	juiceCost: number;
	highlightColor: string;
	displayIcon: string;
	assetPath: string;
}
