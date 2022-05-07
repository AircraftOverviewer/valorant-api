import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CurrenciesEndpoint {
	public async get(options: UuidOptions): Promise<Currency>;
	public async get(options?: BaseOptions): Promise<Currency[]>;
	public async get(options?: unknown): Promise<Currency | Currency[]> {
		if ((options as UuidOptions).uuid) {
			const _options = options as UuidOptions;
			return handleFetch<Currency>(`/currencies/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<Currency[]>(`/currencies?language=${_options?.language ?? 'en-US'}`);
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
