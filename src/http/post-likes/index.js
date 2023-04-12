const arc = require("@architect/functions");

exports.handler = arc.http.async(http);

async function http(req) {
  const { noteID } = req.body;
  const data = await arc.tables();
  const note = await data.notes.get({ noteID });

  const likesCount = !note.likes ? 1 : (note.likes += 1);

  await data.notes.put({
    ...note,
    likes: likesCount,
  });

  if (likesCount === 10) {
    await arc.events.publish({
      name: "notification",
      payload: {
        note,
      },
    });
  }

  return {
    location: "/notes",
  };
}
