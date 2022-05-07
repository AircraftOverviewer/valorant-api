import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SpraysEndpoint {
	public async get(options: UuidOptions): Promise<Spray>;
	public async get(options?: BaseOptions): Promise<Spray[]>;
	public async get(options?: unknown): Promise<Spray | Spray[]> {
		if ((options as UuidOptions).uuid) {
			const _options = options as UuidOptions;
			return handleFetch<Spray>(`/sprays/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<Spray[]>(`/sprays?language=${_options?.language ?? 'en-US'}`);
	}

	public async getLevels(options: UuidOptions): Promise<SprayLevel>;
	public async getLevels(options?: BaseOptions): Promise<SprayLevel[]>;
	public async getLevels(options?: unknown): Promise<SprayLevel | SprayLevel[]> {
		if ((options as UuidOptions).uuid) {
			const _options = options as UuidOptions;
			return handleFetch<SprayLevel>(`/sprays/levels/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<SprayLevel[]>(`/sprays/levels?language=${_options?.language ?? 'en-US'}`);
	}
}

export interface Spray {
	uuid: string;
	displayName: string;
	category: string;
	themeUuid: string;
	displayIcon: string;
	fullIcon: string;
	fullTransparentIcon: string;
	animationPng: string;
	animationGif: string;
	assetPath: string;
	levels: SprayLevel[];
}

export interface SprayLevel {
	uuid: string;
	sprayLevel: number;
	displayName: string;
	displayIcon: string;
	assetPath: string;
}
