const arc = require("@architect/functions");

async function event(event) {
  console.log(JSON.stringify(event, null, 2));
  console.log(`a note has reached 10 likes!`);
  // Celebrate!
  return;
}

exports.handler = arc.events.subscribe(event);
