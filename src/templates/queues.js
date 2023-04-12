const arc = require("@architect/functions");

async function handler(event) {
  console.log(JSON.stringify(event, null, 2));

  // code here
  return;
}
exports.handler = arc.queues.subscribe(handler);
