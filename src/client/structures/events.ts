import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class EventsEndpoint {
	public static async get(options?: BaseOptions): Promise<Event> {
		return handleFetch<Event>(`/events/${options?.uuid}?language=${options?.language ?? 'en-US'}`);
	}
}

export interface Event {
	uuid: string;
	displayName: string;
	shortDisplayName: string;
	startTime: Date;
	endTime: Date;
	assetPath: string;
}
