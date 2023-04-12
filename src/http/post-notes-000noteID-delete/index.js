const arc = require("@architect/functions");

exports.handler = arc.http.async(deleteNote);

async function deleteNote(req) {
  const data = await arc.tables();
  await data.notes.delete({
    noteID: req.params.noteID,
  });
  return {
    location: "/notes",
  };
}
