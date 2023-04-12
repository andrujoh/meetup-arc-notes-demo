const arc = require("@architect/functions");
const sanitizeHtml = require("sanitize-html");

exports.handler = arc.http.async(edit);

async function edit(req) {
  // get the note (including title, body and noteID) from the form post
  const note = req.body;
  console.log("note:", note);

  const title = sanitizeHtml(note.title.trim());
  const body = sanitizeHtml(note.body.trim());

  const updatedNote = {
    ...note,
    title,
    body,
  };
  console.log("updatedNote:", updatedNote);

  // save the updated note
  const data = await arc.tables();
  await data.notes.put(updatedNote);

  return {
    location: "/notes",
  };
}
