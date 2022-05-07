import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ContractsEndpoint {
	public async get(options: UuidOptions): Promise<Contract>;
	public async get(options?: BaseOptions): Promise<Contract[]>;
	public async get(options?: unknown): Promise<Contract | Contract[]> {
		if ((options as UuidOptions).uuid) {
			const _options = options as UuidOptions;
			return handleFetch<Contract>(`/contracts/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<Contract[]>(`/contracts?language=${_options?.language ?? 'en-US'}`);
	}
}

export interface Contract {
	uuid: string;
	displayName: string;
	displayIcon: string;
	shipIt: boolean;
	freeRewardScheduleUuid: string;
	content: ContractContent;
	assetPath: string;
}

export interface ContractContent {
	relationType: string;
	relationUuid: string;
	chapters: ContractContentChapter[];
	premiumRewardScheduleUuid: string;
	premiumVPCost: number;
}

export interface ContractContentChapter {
	isEpilogue: boolean;
	levels: ContractContentChapterLevel[];
	freeRewards: ContractContentChapterReward[];
}

export interface ContractContentChapterLevel {
	reward: ContractContentChapterReward;
	xp: number;
	vpCost: number;
	isPurchasableWithVP: boolean;
}

export interface ContractContentChapterReward {
	type: string;
	uuid: string;
	amount: number;
	isHighlighted: boolean;
}
