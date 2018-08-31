'use strict';

module.exports = function (client, stanzas, config) {

  const sendReceipts =  config.sendReceipts !== false;

  client.on('message', (msg) => {
    const ackTypes = {
      groupchat: true,
    };
    
    if (sendReceipts && ackTypes[msg.type] && msg.requestReceipt && !msg.receipt) {
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
