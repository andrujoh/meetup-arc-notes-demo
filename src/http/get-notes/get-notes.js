const arc = require("@architect/functions");

module.exports = async function getNotes() {
  const data = await arc.tables();
  const allNotes = await data.notes.scan({});

  const mostLikedNote = allNotes.Items.filter(i => i.likes > 0).reduce((prev, current) => {
    return prev.likes > current.likes ? prev : current;
  }, {});

  return { notes: allNotes.Items, mostLikedNote };
};
