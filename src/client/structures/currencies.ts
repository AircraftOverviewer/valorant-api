import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CurrenciesEndpoint {
	public static async get(options?: BaseOptions): Promise<Currency> {
		return handleFetch<Currency>(`/currencies/${options?.uuid}?language=${options?.language ?? 'en-US'}`);
	}
}

export interface Currency {
	uuid: string;
	displayName: string;
	displayNameSingular: string;
	displayIcon: string;
	largeIcon: string;
	assetPath: string;
}
