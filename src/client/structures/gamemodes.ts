import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class GamemodesEndpoint {
	public static async get(options?: BaseOptions): Promise<Gamemode> {
		return handleFetch<Gamemode>(`/gamemodes/${options?.uuid}?language=${options?.language ?? 'en-US'}`);
	}

	public static async getEquippables(options?: BaseOptions): Promise<GamemodeEquippable> {
		return handleFetch<GamemodeEquippable>(`/gamemodes/equippables/${options?.uuid}?language=${options?.language ?? 'en-US'}`);
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
