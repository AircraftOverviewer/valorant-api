import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class EventsEndpoint {
	public async get(options: UuidOptions): Promise<Event>;
	public async get(options?: BaseOptions): Promise<Event[]>;
	public async get(options?: unknown): Promise<Event | Event[]> {
		if ((options as UuidOptions)?.uuid) {
			const _options = options as UuidOptions;
			return handleFetch<Event>(`/events/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<Event[]>(`/events?language=${_options?.language ?? 'en-US'}`);
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
