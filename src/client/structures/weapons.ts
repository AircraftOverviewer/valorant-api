import { handleFetch } from '../../utils/Fetch';
import type { BaseOptions } from './global';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class WeaponsEndpoint {
	public static async get(options?: BaseOptions): Promise<Weapon> {
		return handleFetch<Weapon>(`/weapons/${options?.uuid}?language=${options?.language ?? 'en-US'}`);
	}

	public static async getSkins(options?: BaseOptions): Promise<WeaponSkin> {
		return handleFetch<WeaponSkin>(`/weapons/skins/${options?.uuid}?language=${options?.language ?? 'en-US'}`);
	}

	public static async getSkinChromas(options?: BaseOptions): Promise<WeaponSkinChroma> {
		return handleFetch<WeaponSkinChroma>(`/weapons/skinchromas/${options?.uuid}?language=${options?.language ?? 'en-US'}`);
	}

	public static async getSkinLevels(options?: BaseOptions): Promise<WeaponSkinLevel> {
		return handleFetch<WeaponSkinLevel>(`/weapons/skinlevels/${options?.uuid}?language=${options?.language ?? 'en-US'}`);
	}
}

export interface Weapon {
	uuid: string;
	displayName: string;
	category: string;
	defaultSkinUuid: string;
	displayIcon: string;
	killStreamIcon: string;
	assetPath: string;
	weaponStats: WeaponStats | null;
	shopData: WeaponShopData | null;
	skins: WeaponSkin[];
}

export interface WeaponStats {
	fireRate: string;
	magazineSize: number;
	runSpeedMultiplier: string;
	equipTimeSeconds: string;
	reloadTimeSeconds: string;
	firstBulletAccuracy: string;
	shotgunPelletCount: number;
	wallPenetration: string;
	feature: string | null;
	fireMode: string | null;
	altFireType: string | null;
	adsStats: WeaponAdsStats | null;
	altShotgunStats: WeaponAltShotgunStats | null;
	airBurstStats: WeaponAirBurstStats | null;
	damageRanges: WeaponDamageRange[];
}

export interface WeaponAdsStats {
	zoomMultiplier: number;
	fireRate: number;
	runSpeedMultiplier: number;
	burstCount: number;
	firstBulletAccuracy: number;
}

export interface WeaponAltShotgunStats {
	shotgunPelletCount: number;
	burstRate: number;
}

export interface WeaponAirBurstStats {
	shotgunPelletCount: number;
	burstDistance: number;
}

export interface WeaponDamageRange {
	rangeStartMeters: number;
	rangeEndMeters: number;
	headDamage: number;
	bodyDamage: number;
	legDamage: number;
}

export interface WeaponShopData {
	cost: number;
	category: string;
	categoryText: string;
	gridPosition: WeaponShopDataGridPosition | null;
	canBeTrashed: boolean;
	image: string | null;
	newImage: string;
	newImage2: string | null;
	assetPath: string;
}

export interface WeaponShopDataGridPosition {
	row: number;
	column: number;
}

export interface WeaponSkin {
	uuid: string;
	displayName: string;
	themeUuid: string;
	contentTierUuid: string;
	displayIcon: string;
	wallpaper: string;
	assetPath: string;
	chromas: WeaponSkinChroma[];
	levels: WeaponSkinLevel[];
}

export interface WeaponSkinChroma {
	uuid: string;
	displayName: string;
	displayIcon: string | null;
	fullRender: string;
	swatch: string | null;
	streamedVideo: string | null;
	assetPath: string;
}

export interface WeaponSkinLevel {
	uuid: string;
	displayName: string;
	levelItem: string | null;
	displayIcon: string | null;
	streamedVideo: string;
	assetPath: string;
}
