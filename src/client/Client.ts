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
	public static agents = new AgentsEndpoint();
	public static buddies = new BuddiesEndpoint();
	public static bundles = new BundlesEndpoint();
	public static ceremonies = new CeremoniesEndpoint();
	public static competitiveTiers = new CompetitiveTiersEndpoint();
	public static contentTiers = new ContentTiersEndpoint();
	public static contracts = new ContractsEndpoint();
	public static currencies = new CurrenciesEndpoint();
	public static events = new EventsEndpoint();
	public static gamemodes = new GamemodesEndpoint();
	public static gear = new GearEndpoint();
	public static maps = new MapsEndpoint();
	public static playerCards = new PlayerCardsEndpoint();
	public static playerTitles = new PlayerTitlesEndpoint();
	public static seasons = new SeasonsEndpoint();
	public static sprays = new SpraysEndpoint();
	public static themes = new ThemesEndpoint();
	public static weapons = new WeaponsEndpoint();
	public static version = new VersionEndpoint();
}
