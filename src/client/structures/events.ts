import { handleFetch } from '../../utils/Fetch';
import type { Language, BaseUuidOption } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class EventsEndpoint {
	public static async getEvents(language?: Language): Promise<Event[]> {
		return handleFetch<Event[]>(`/events?language=${language ?? 'en-US'}`);
	}

	public static async getEventByUuid(options: BaseUuidOption): Promise<Event> {
		return handleFetch<Event>(`/events/${options.uuid}?language=${options.language ?? 'en-US'}`);
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
