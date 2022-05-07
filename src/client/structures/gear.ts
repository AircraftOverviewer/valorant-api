import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class GearEndpoint {
	public async get(options: UuidOptions): Promise<Gear>;
	public async get(options?: BaseOptions): Promise<Gear[]>;
	public async get(options?: unknown): Promise<Gear | Gear[]> {
		if ((options as UuidOptions)?.uuid) {
			const _options = options as UuidOptions;
			return handleFetch<Gear>(`/gear/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<Gear[]>(`/gear?language=${_options?.language ?? 'en-US'}`);
	}
}

export interface Gear {
	uuid: string;
	displayName: string;
	description: string;
	displayIcon: string;
	assetPath: string;
	shopData: GearShopData;
}

export interface GearShopData {
	cost: number;
	category: string;
	categoryText: string;
	gridPosition: GearShopDataGridPosition;
	canBeTrashed: boolean;
	image: string;
	newImage: string;
	newImage2: string;
	assetPath: string;
}

export interface GearShopDataGridPosition {
	row: number;
	column: number;
}
