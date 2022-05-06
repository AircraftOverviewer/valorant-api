import { handleFetch } from '../../utils/Fetch';
import type { BaseFetchOption, BaseUuidOption } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AgentsEndpoint {
	public static async getAgents(options?: AgentsOptions): Promise<Agent[]> {
		return handleFetch<Agent[]>(`/agents?language=${options?.language ?? 'en-US'}&isPlayableCharacter=${options?.isPlayableCharacter ?? false}`);
	}

	public static async getAgentsByUuid(options: BaseUuidOption): Promise<Agent> {
		return handleFetch<Agent>(`/agents/${options.uuid}?language=${options.language ?? 'en-US'}`);
	}
}

export interface Agent {
	uuid: string;
	displayName: string;
	description: string;
	developerName: string;
	characterTags: string[];
	displayIcon: string;
	displayIconSmall: string;
	bustPortrait: string;
	fullPortrait: string;
	fullPortraitV2: string;
	killfeedPortrait: string;
	background: string;
	backgroundGradientColors: string[];
	assetPath: string;
	isFullPortraitRightFacing: boolean;
	isPlayableCharacter: boolean;
	isAvailableForTest: boolean;
	isBaseContent: boolean;
	role: AgentRole;
	abilities: AgentAbility[];
	voiceline: AgentVoiceline;
}

export interface AgentRole {
	uuid: string;
	displayName: string;
	description: string;
	displayIcon: string;
	assetPath: string;
}

export interface AgentAbility {
	slot: string;
	displayName: string;
	description: string;
	displayIcon: string;
}

export interface AgentVoiceline {
	minDuration: number;
	maxDuration: number;
	mediaList: AgentVoicelineMedia[];
}

export interface AgentVoicelineMedia {
	id: number;
	wwise: string;
	wave: string;
}

export interface AgentsOptions extends BaseFetchOption {
	isPlayableCharacter?: boolean;
}
