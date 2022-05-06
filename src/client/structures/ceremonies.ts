import { handleFetch } from '../../utils/Fetch';
import type { Language, BaseUuidOption } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CeremoniesEndpoint {
	public static async getCeremonies(language?: Language): Promise<Ceremony[]> {
		return handleFetch<Ceremony[]>(`/ceremonies?language=${language ?? 'en-US'}`);
	}

	public static async getCeremonyByUuid(options: BaseUuidOption): Promise<Ceremony> {
		return handleFetch<Ceremony>(`/ceremonies/${options.uuid}?language=${options.language ?? 'en-US'}`);
	}
}

export interface Ceremony {
	uuid: string;
	displayName: string;
	assetPath: string;
}
