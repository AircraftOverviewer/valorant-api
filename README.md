# valorant-wrapper
A wrapper for the third-party [valorant-api](https://valorant-api.com/)
## How to Use
All endpoints can be accessed off the [ValAPI](https://github.com/AircraftOverviewer/valorant-api/blob/d5c23164ea4e2b33cebf412a40d44f001a1660d9/src/client/Client.ts#L24) class.
```ts
// JS
const { ValAPI } = require('valorant-wrapper');

// TS
import { ValAPI } from 'valorant-wrapper';
```
This class is static, and thus does not need to be instantiated to access the endpoints. All individual endpoint classes under `ValAPI` can be imported. To retrieve data from a specific endpoint, specify the endpoint you wish to fetch from in `ValAPI`. Within each endpoint exists the available methods to call the API with. All methods support an optional [language parameter](https://github.com/AircraftOverviewer/valorant-api/blob/d5c23164ea4e2b33cebf412a40d44f001a1660d9/src/client/structures/global.ts#L15). Note that not all returned strings are localised, meaning some values may remain in `en-US`.
## Examples
Get a list of all playable agents
```ts
await ValAPI.agents.getAgents({ isPlayableCharacter: true });
// Expected Return: Agent Array
```
Get a Weapon for a given Weapon UUID
```ts
await ValAPI.weapons.getWeaponByUuid({ uuid: '...' });
// Expected Return: Weapon Object
```
Check when an Event ends
```ts
(await ValAPI.getEventByUuid({ uuid: '...' })).endTime
// Expected Return: Date
```
## Documentation
Full documentation for the available endpoints and their respective return types can be found on the [Valorant API Docs](https://dash.valorant-api.com/). Type declarations have been included in this package.