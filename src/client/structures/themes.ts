import { handleFetch } from '../../utils/Fetch';
import type { BaseUuidOption, Language } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ThemesEndpoint {
	public static async getThemes(language?: Language): Promise<Theme[]> {
		return handleFetch<Theme[]>(`/themes?language=${language ?? 'en-US'}`);
	}

	public static async getThemeByUuid(options: BaseUuidOption): Promise<Theme> {
		return handleFetch<Theme>(`/themes/${options.uuid}?language=${options.language ?? 'en-US'}`);
	}
}

export interface Theme {
	uuid: string;
	displayName: string;
	displayIcon: string;
	storeFeaturedImage: string;
	assetPath: string;
}
