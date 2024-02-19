import { Transform } from 'node:stream';

const customReporter = new Transform({
  writableObjectMode: true,
  transform(event, encoding, callback) {
    const puts = function (message) {
      callback(null, `${message}\n`);
    };
    switch (event.type) {
      case 'test:dequeue': {
        puts(`${event.type} ${event.data.name}`);
        break;
      }
      case 'test:enqueue': {
        puts(`${event.type} ${event.data.name}`);
        break;
      }
      case 'test:watch:drained': {
        puts(`${event.type} ${event.data.name}`);
        break;
      }
      case 'test:start': {
        puts(`${event.type} ${event.data.name}`);
        break;
      }
      case 'test:pass': {
        puts(`${event.type} ${event.data.name}`);
        break;
      }
      case 'test:fail': {
        puts(`${event.type} ${event.data.name}`);
        break;
      }
      case 'test:plan': {
        puts(`${event.type} ${event.data.name}`);
        break;
      }
      case 'test:diagnostic': {
        puts(`${event.type} ${event.data.message}`);
        break;
      }
      case 'test:stderr': {
        puts(`${event.type} ${event.data.message}`);
        break;
      }
      case 'test:stdout': {
        puts(`${event.type} ${event.data.message}`);
        break;
      }
      case 'test:coverage': {
        // const { totalLineCount } = event.data.summary.totals;
        // puts(`total line count: ${totalLineCount}`);
        puts(`${event.type} ${event.data.summary}`);
        break;
      }
    }
  },
});

export default customReporter;
