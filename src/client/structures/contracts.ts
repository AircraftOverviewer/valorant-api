import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ContractsEndpoint {
	public static async get(options?: BaseOptions): Promise<Contract> {
		return handleFetch<Contract>(`/contracts/${options?.uuid}?language=${options?.language ?? 'en-US'}`);
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
