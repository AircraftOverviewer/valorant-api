import { ValAPI } from '../client/Client';

(async () => {
	const value = await ValAPI.agents.get();
	console.log(value);
})().catch(console.log);
