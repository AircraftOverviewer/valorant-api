import { handleFetch } from '../../utils/Fetch';
import type { BaseUuidOption, Language } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class GearEndpoint {
	public static async getGear(language?: Language): Promise<Gear[]> {
		return handleFetch<Gear[]>(`/gear?language=${language ?? 'en-US'}`);
	}

	public static async getGearByUuid(options: BaseUuidOption): Promise<Gear> {
		return handleFetch<Gear>(`/gear/${options.uuid}?language=${options.language ?? 'en-US'}`);
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
