import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions, UuidOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class MapsEndpoint {
	public async get(options: UuidOptions): Promise<Map>;
	public async get(options?: BaseOptions): Promise<Map[]>;
	public async get(options?: unknown): Promise<Map | Map[]> {
		if ((options as UuidOptions)?.uuid) {
			const _options = options as UuidOptions;
			return handleFetch<Map>(`/maps/${_options.uuid}?language=${_options?.language ?? 'en-US'}`);
		}
		const _options = options as BaseOptions;
		return handleFetch<Map[]>(`/maps?language=${_options?.language ?? 'en-US'}`);
	}
}

export interface Map {
	displayName: string;
	coordinates: string;
	displayIcon: string;
	listViewIcon: string;
	splash: string;
	assetPath: string;
	mapUrl: string;
	xMultiplier: number;
	yMultiplier: number;
	xScalarToAdd: number;
	yScalarToAdd: number;
	callouts: MapCallout[];
}

export interface MapCallout {
	regionName: string;
	superRegionName: string;
	location: MapCalloutLocation;
}

export interface MapCalloutLocation {
	x: number;
	y: number;
}
