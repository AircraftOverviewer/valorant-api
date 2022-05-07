# valorant-wrapper
A wrapper for the third-party [valorant-api](https://valorant-api.com/)
## How to Use
All endpoints can be accessed off the [ValAPI](https://github.com/AircraftOverviewer/valorant-api/blob/d5c23164ea4e2b33cebf412a40d44f001a1660d9/src/client/Client.ts#L24) class.
```ts
import { ValAPI } from 'valorant-wrapper'; // TS
const { ValAPI } = require('valorant-wrapper'); // JS
```
This class is static, and thus does not need to be instantiated to access the endpoints. All individual endpoint classes under `ValAPI` can be imported. To retrieve data from a specific endpoint, specify the class to fetch from in within `ValAPI`. Within each class exists the available endpoints to call the API. All methods support an optional [language](https://dash.valorant-api.com/) and [uuid](https://en.wikipedia.org/wiki/Universally_unique_identifier) parameter.
## Examples
Get a list of all maps
```ts
await ValAPI.maps.get();
// Expected Return: Map Array
```
Get a list of all playable agents
```ts
await ValAPI.agents.get({ isPlayableCharacter: true });
// Expected Return: Playable Agent Array
```
Get a Weapon for a given Weapon UUID
```ts
await ValAPI.weapons.get({ uuid: 'WEAPON_UUID' });
// Expected Return: Weapon Object
```
Get a list of Weapon Skin Chromas
```ts
await ValAPI.weapons.getSkinChromas();
// Expected Return: Weapon Skin Chroma Array
```
Check when a given Event ends
```ts
(await ValAPI.get({ uuid: 'EVENT_UUID' })).endTime
// Expected Return: Date
```
## Documentation
Full documentation for the available endpoints and their respective return types can be found on the [Valorant API Docs](https://dash.valorant-api.com/). Type declarations have been included in this package.