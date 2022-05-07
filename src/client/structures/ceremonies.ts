import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CeremoniesEndpoint {
	public static async get(options: UuidOptions): Promise<Ceremony>;
	public static async get(options?: BaseOptions): Promise<Ceremony[]>;
	public static async get(options?: unknown): Promise<Ceremony | Ceremony[]> {
		if ((options as UuidOptions).uuid) {
			const _options = options as UuidOptions;
			return handleFetch<Ceremony>(`/ceremonies/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<Ceremony[]>(`/ceremonies?language=${_options?.language ?? 'en-US'}`);
	}
}

export interface Ceremony {
	uuid: string;
	displayName: string;
	assetPath: string;
}
