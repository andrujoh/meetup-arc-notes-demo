const arc = require("@architect/functions");

async function handler(event) {
  console.log(JSON.stringify(event, null, 2));
  console.log(`
          __
         | _]
      .--||-----.
      |  || Mail|
 _____|__||_____|
           \ |
 _______    ||
|==   []|   ||
|  ==== |   ||
'-------'   ||
            ||
  jgs       ||
            ||
^^^^^^^^^^^^^^^^^^^^
  `);
  return;
}
exports.handler = arc.queues.subscribe(handler);
