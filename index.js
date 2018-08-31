'use strict';

module.exports = (client, stanzas, config) => {
  const sendReceipts =  config.sendReceipts !== false;

  client.on('message', (msg) => {
    if (sendReceipts && msg.type === 'groupchat' && msg.requestReceipt && !msg.receipt) {
      client.sendMessage({
        to: msg.from.bare,
        type: msg.type,
        receipt: msg.id,
        id: msg.id
      });
    }

    if (msg.receipt) {
      client.emit('receipt', msg);
      client.emit('receipt:' + msg.receipt);
    }
  });
};
