import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class MapsEndpoint {
	public static async get(options?: BaseOptions): Promise<Map> {
		return handleFetch<Map>(`/maps/${options?.uuid}?language=${options?.language ?? 'en-US'}`);
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
