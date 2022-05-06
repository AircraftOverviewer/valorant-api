import { handleFetch } from '../../utils/Fetch';
import type { Language, BaseUuidOption } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CompetitiveTiersEndpoint {
	public static async getCompetitiveTiers(language?: Language): Promise<CompetitiveTierTable[]> {
		return handleFetch<CompetitiveTierTable[]>(`/competitivetiers?language=${language ?? 'en-US'}`);
	}

	public static async getCompetitiveTierByUuid(options: BaseUuidOption): Promise<CompetitiveTierTable> {
		return handleFetch<CompetitiveTierTable>(`/competitivetiers/${options.uuid}?language=${options.language ?? 'en-US'}`);
	}
}

export interface CompetitiveTierTable {
	uuid: string;
	assetObjectName: string;
	tiers: CompetitiveTier[];
	assetPath: string;
}

export interface CompetitiveTier {
	tierName: string;
	division: string;
	divisionName: string;
	color: string;
	backgroundColor: string;
	smallIcon: string;
	largeIcon: string;
	rankTriangleDownIcon: string;
	rankTriangleUpIcon: string;
}
