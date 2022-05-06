import {
	AgentsEndpoint,
	BuddiesEndpoint,
	BundlesEndpoint,
	CeremoniesEndpoint,
	CompetitiveTiersEndpoint,
	ContentTiersEndpoint,
	ContractsEndpoint,
	CurrenciesEndpoint,
	EventsEndpoint,
	GamemodesEndpoint,
	GearEndpoint,
	MapsEndpoint,
	PlayerCardsEndpoint,
	PlayerTitlesEndpoint,
	SeasonsEndpoint,
	SpraysEndpoint,
	ThemesEndpoint,
	VersionEndpoint,
	WeaponsEndpoint
} from './structures';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ValAPI {
	public static agents = AgentsEndpoint;
	public static buddies = BuddiesEndpoint;
	public static bundles = BundlesEndpoint;
	public static ceremonies = CeremoniesEndpoint;
	public static competitiveTiers = CompetitiveTiersEndpoint;
	public static contentTiers = ContentTiersEndpoint;
	public static contracts = ContractsEndpoint;
	public static currencies = CurrenciesEndpoint;
	public static events = EventsEndpoint;
	public static gamemodes = GamemodesEndpoint;
	public static gear = GearEndpoint;
	public static maps = MapsEndpoint;
	public static playerCards = PlayerCardsEndpoint;
	public static playerTitles = PlayerTitlesEndpoint;
	public static seasons = SeasonsEndpoint;
	public static sprays = SpraysEndpoint;
	public static themes = ThemesEndpoint;
	public static weapons = WeaponsEndpoint;
	public static version = VersionEndpoint;
}
