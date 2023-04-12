const arc = require("@architect/functions");

async function event(event) {
  console.log(JSON.stringify(event, null, 2));
  // code here
}

exports.handler = arc.events.subscribe(event);
