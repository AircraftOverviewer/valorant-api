import { handleFetch } from '../../utils/Fetch';
import type { BaseUuidOption, Language } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SeasonsEndpoint {
	public static async getSeasons(language?: Language): Promise<Season[]> {
		return handleFetch<Season[]>(`/seasons?language=${language ?? 'en-US'}`);
	}

	public static async getCompetitiveSeasons(language?: Language): Promise<CompetitiveSeason> {
		return handleFetch<CompetitiveSeason>(`seasons/competitive?language=${language ?? 'es-US'}`);
	}

	public static async getSeasonByUuid(options: BaseUuidOption): Promise<Season> {
		return handleFetch<Season>(`/seasons/${options.uuid}?language=${options.language ?? 'en-US'}`);
	}

	public static async getCompetitiveSeasonByUuid(options: BaseUuidOption): Promise<CompetitiveSeason> {
		return handleFetch<CompetitiveSeason>(`seasons/competitive/${options.uuid}?language=${options.language ?? 'en-US'}`);
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
