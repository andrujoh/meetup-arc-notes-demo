const arc = require("@architect/functions");
const Hashids = require("hashids");
const hashids = new Hashids();

module.exports = async function save({ title, body }) {
  if (!title.trim() || !body.trim()) throw new Error("Missing fields");

  const data = await arc.tables();
  return data.notes.put({
    title,
    body,
    noteID: hashids.encode(Date.now()),
  });
};
