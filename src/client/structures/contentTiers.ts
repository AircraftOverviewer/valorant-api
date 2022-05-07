import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ContentTiersEndpoint {
	public async get(options: UuidOptions): Promise<ContentTier>;
	public async get(options?: BaseOptions): Promise<ContentTier[]>;
	public async get(options?: unknown): Promise<ContentTier | ContentTier[]> {
		if ((options as UuidOptions)?.uuid) {
			const _options = options as UuidOptions;
			return handleFetch<ContentTier>(`/contenttiers/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<ContentTier[]>(`/contenttiers?language=${_options?.language ?? 'en-US'}`);
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
