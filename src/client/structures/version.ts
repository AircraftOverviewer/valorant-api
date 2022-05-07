import { handleFetch } from '../../utils/Fetch';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class VersionEndpoint {
	public static async get(): Promise<Version> {
		return handleFetch<Version>(`/version`);
	}
}

export interface Version {
	manifestId: string;
	branch: string;
	version: string;
	buildVersion: string;
	engineVersion: string;
	riotClientVersion: string;
	buildDate: Date;
}
