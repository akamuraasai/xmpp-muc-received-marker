# MUC Received Message Plugin

This plugin inserts the capability of send acks in MUCs when using XEP-0184 with stanza.io.

## Install

Just run ```yarn add xmpp-muc-received-marker``` or ```npm install --save xmpp-muc-received-marker```.

## Configuration

This plugin needs no configuration.

## How to use

For Node/CommonJS:

```javascript
const MUCReceivedMarker = require('xmpp-muc-received-marker');

client.use(MUCReceivedMarker);
``` 

For ES6+:
```ecmascript 6
import MUCReceivedMarker from 'xmpp-muc-received-marker';

client.use(MUCReceivedMarker);
```

## License

This plugin is [MIT licensed](./LICENSE).