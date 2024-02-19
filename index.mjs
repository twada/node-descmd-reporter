import { Transform } from 'node:stream';

const customReporter = new Transform({
  writableObjectMode: true,
  transform(event, encoding, callback) {
    switch (event.type) {
      case 'test:start': {
        const suiteMarker = event.data.nesting === 0 ? '###' : '-';
        callback(null, `${"  ".repeat(event.data.nesting)}${suiteMarker} ${event.data.name}\n`);
        break;
      }
      default: {
        callback(null);
      }
    }
  },
});

export default customReporter;
