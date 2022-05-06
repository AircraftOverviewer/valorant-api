import { handleFetch } from '../../utils/Fetch';
import type { Language, BaseUuidOption } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CurrenciesEndpoint {
	public static async getCurrencies(language?: Language): Promise<Currency[]> {
		return handleFetch<Currency[]>(`/currencies?language=${language ?? 'en-US'}`);
	}

	public static async getCurrencyByUuid(options: BaseUuidOption): Promise<Currency> {
		return handleFetch<Currency>(`/currencies/${options.uuid}?language=${options.language ?? 'en-US'}`);
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
