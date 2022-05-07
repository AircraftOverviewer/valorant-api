import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class BuddiesEndpoint {
	public static async get(options: UuidOptions): Promise<Buddy>;
	public static async get(options?: BaseOptions): Promise<Buddy[]>;
	public static async get(options?: unknown): Promise<Buddy | Buddy[]> {
		if ((options as UuidOptions).uuid) {
			const _options = options as UuidOptions;
			return handleFetch<Buddy>(`/buddies/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<Buddy>(`/buddies?language=${_options?.language ?? 'en-US'}`);
	}

	public static async getLevels(options: UuidOptions): Promise<BuddyLevel>;
	public static async getLevels(options?: BaseOptions): Promise<BuddyLevel[]>;
	public static async getLevels(options?: unknown): Promise<BuddyLevel | BuddyLevel[]> {
		if ((options as UuidOptions).uuid) {
			const _options = options as UuidOptions;
			return handleFetch<BuddyLevel>(`/buddies/levels/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<BuddyLevel[]>(`/buddies?language=${_options?.language ?? 'en-US'}`);
	}
}

export interface Buddy {
	uuid: string;
	displayName: string;
	isHiddenIfNotOwned: boolean;
	themeUuid: string;
	displayIcon: string;
	assetPath: string;
	levels: BuddyLevel[];
}

export interface BuddyLevel {
	uuid: string;
	charmLevel: number;
	displayName: string;
	displayIcon: string;
	assetPath: string;
}
