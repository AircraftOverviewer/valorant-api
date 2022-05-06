import { handleFetch } from '../../utils/Fetch';
import type { Language, BaseUuidOption } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class BundlesEndpoint {
	public static async getBundles(language?: Language): Promise<Bundle[]> {
		return handleFetch<Bundle[]>(`/bundles?language=${language ?? 'en-US'}`);
	}

	public static async getBundleByUuid(options: BaseUuidOption): Promise<Bundle> {
		return handleFetch<Bundle>(`/bundles/${options.uuid}?language=${options.language ?? 'en-US'}`);
	}
}

export interface Bundle {
	uuid: string;
	displayName: string;
	displayNameSubText: string;
	description: string;
	extraDescription: string;
	promoDescription: string;
	useAdditionalContext: boolean;
	displayIcon: string;
	displayIcon2: string;
	verticalPromoImage: string;
	assetPath: string;
}
