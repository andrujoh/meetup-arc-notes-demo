const arc = require("@architect/functions");

exports.handler = async function scheduled(event) {
  console.log("Lowering likes");

  let data = await arc.tables();
  let notes = await data.notes.scan({});
  console.log("notes:", notes);

  for (const note of notes.Items) {
    console.log("note:", note);
    await data.notes.put({ ...note, likes: 0 });
  }
  return;
};
