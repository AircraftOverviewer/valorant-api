import { ValAPI } from '../client/Client';

(async () => {
	const value = await ValAPI.weapons.get();
	console.log(value);
})().catch(console.log);
