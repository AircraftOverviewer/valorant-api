import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class BundlesEndpoint {
	public static async get(options: UuidOptions): Promise<Bundle>;
	public static async get(options?: BaseOptions): Promise<Bundle[]>;
	public static async get(options?: unknown): Promise<Bundle | Bundle[]> {
		if ((options as UuidOptions).uuid) {
			const _options = options as UuidOptions;
			return handleFetch<Bundle>(`/bundles/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<Bundle[]>(`/bundles?language=${_options?.language ?? 'en-US'}`);
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
