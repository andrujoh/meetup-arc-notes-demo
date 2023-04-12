const arc = require("@architect/functions");

exports.handler = arc.http.async(home);

async function home(req) {
  return {
    location: "/notes",
  };
}
