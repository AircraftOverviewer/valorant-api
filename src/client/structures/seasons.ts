import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SeasonsEndpoint {
	public async get(options: UuidOptions): Promise<Season>;
	public async get(options?: BaseOptions): Promise<Season[]>;
	public async get(options?: unknown): Promise<Season | Season[]> {
		if ((options as UuidOptions)?.uuid) {
			const _options = options as UuidOptions;
			return handleFetch<Season>(`/seasons/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<Season[]>(`/seasons?language=${_options?.language ?? 'en-US'}`);
	}

	public async getCompetitive(options: UuidOptions): Promise<CompetitiveSeason>;
	public async getCompetitive(options?: BaseOptions): Promise<CompetitiveSeason[]>;
	public async getCompetitive(options?: unknown): Promise<CompetitiveSeason | CompetitiveSeason[]> {
		if ((options as UuidOptions)?.uuid) {
			const _options = options as UuidOptions;
			return handleFetch<CompetitiveSeason>(`/seasons/competitive/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<CompetitiveSeason[]>(`/seasons/competitive?language=${_options?.language ?? 'en-US'}`);
	}
}

export interface Season {
	uuid: string;
	displayName: string;
	type: string;
	startTime: Date;
	endTime: Date;
	parentUuid: string;
	assetPath: string;
}
export interface CompetitiveSeason {
	uuid: string;
	startTime: Date;
	endTime: Date;
	seasonUuid: string;
	competitiveTiersUuid: string;
	borders: CompetitiveSeasonBoarder[];
	assetPath: string;
}

export interface CompetitiveSeasonBoarder {
	uuid: string;
	level: number;
	winsRequired: number;
	displayIcon: string;
	smallIcon: string;
	assetPath: string;
}
