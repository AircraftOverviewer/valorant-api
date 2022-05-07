import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class GamemodesEndpoint {
	public static async get(options: UuidOptions): Promise<Gamemode>;
	public static async get(options?: BaseOptions): Promise<Gamemode[]>;
	public static async get(options?: unknown): Promise<Gamemode | Gamemode[]> {
		if ((options as UuidOptions).uuid) {
			const _options = options as UuidOptions;
			return handleFetch<Gamemode>(`/gamemodes/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<Gamemode[]>(`/gamemodes?language=${_options?.language ?? 'en-US'}`);
	}

	public static async getEquippable(options: UuidOptions): Promise<GamemodeEquippable>;
	public static async getEquippable(options?: BaseOptions): Promise<GamemodeEquippable[]>;
	public static async getEquippable(options?: unknown): Promise<GamemodeEquippable | GamemodeEquippable[]> {
		if ((options as UuidOptions).uuid) {
			const _options = options as UuidOptions;
			return handleFetch<GamemodeEquippable>(`/gamemodes/equippables/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<GamemodeEquippable[]>(`/gamemodes/equippables?language=${_options?.language ?? 'en-US'}`);
	}
}

export interface Gamemode {
	uuid: string;
	displayName: string;
	duration: string;
	allowsMatchTimeouts: boolean;
	isTeamVoiceAllowed: boolean;
	isMinimapHidden: boolean;
	orbCount: number;
	teamRoles: string[];
	gameFeatureOverrides: GamemodeGameFeatureOverride[];
	gameRuleBoolOverrides: object[];
	displayIcon: string;
	assetPath: string;
}

export interface GamemodeGameFeatureOverride {
	featureName: string;
	state: boolean;
}

export interface GamemodeGameRuleBoolOverride {
	ruleName: string;
	state: boolean;
}

export interface GamemodeEquippable {
	uuid: string;
	displayName: string;
	category: string;
	displayIcon: string;
	killStreamIcon: string;
	assetPath: string;
}
