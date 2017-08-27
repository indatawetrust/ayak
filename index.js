const events = require('events'), eventEmitter = new events.EventEmitter();

const ayak = prefix => {
  const back = {
    on: ons => {
      for (let on in ons) {
        eventEmitter.addListener(`${prefix}.${on}`, params => {
          const tick = (...params) => {
            setTimeout(() => eventEmitter.emit(`${prefix}.${on}.tick`, params));
          };

          ons[on](...params, tick);
        });
      }
    },
    emit: (on, ...params) => {
      eventEmitter.emit(`${prefix}.${on}`, params);

      return new Promise((resolve, reject) => {
        eventEmitter.addListener(`${prefix}.${on}.tick`, params => {
          resolve(...params);
        });
      });
    },
  };

  return back;
};

module.exports = ayak;
