const arc = require("@architect/functions");

async function http(req) {
  // code here
}

module.exports.handler = arc.http.async(http);
