import { handleFetch } from '../../utils/Fetch';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AgentsEndpoint {
	public async get(options: AgentUuidOptions): Promise<Agent>;
	public async get(options?: AgentOptions): Promise<Agent[]>;
	public async get(options?: unknown): Promise<Agent | Agent[]> {
		if ((options as AgentUuidOptions)?.uuid) {
			const _options = options as AgentUuidOptions;
			return handleFetch<Agent>(
				`/agents/${_options.uuid}?language=${_options?.language ?? 'en-US'}&isPlayableCharacter=${_options?.isPlayableCharacter ?? false}`
			);
		}
		const _options = options as AgentOptions;
		return handleFetch<Agent[]>(
			`/agents?language=${_options?.language ?? 'en-US'}&isPlayableCharacter=${_options?.isPlayableCharacter ?? false}`
		);
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

export interface AgentOptions {
	language?: string;
	isPlayableCharacter?: boolean;
}

export interface AgentUuidOptions extends AgentOptions {
	uuid: string;
}
