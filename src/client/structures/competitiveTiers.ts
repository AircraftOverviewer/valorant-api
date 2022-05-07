import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CompetitiveTiersEndpoint {
	public static async get(options: UuidOptions): Promise<CompetitiveTierTable>;
	public static async get(options?: BaseOptions): Promise<CompetitiveTierTable[]>;
	public static async get(options?: unknown): Promise<CompetitiveTierTable | CompetitiveTierTable[]> {
		if ((options as UuidOptions).uuid) {
			const _options = options as UuidOptions;
			return handleFetch<CompetitiveTierTable>(`/competitivetiers/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<CompetitiveTierTable[]>(`/competitivetiers?language=${_options?.language ?? 'en-US'}`);
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
