const arc = require("@architect/functions");
const layout = require("@architect/views/layout");
const getNotes = require("./get-notes.js");
const welcome = require("@architect/shared/welcome");

// Middleware and then http lambda (Require login etc)
exports.handler = arc.http.async(welcome, http);

// display all notes
async function http(req) {
  const { notes, mostLikedNote } = await getNotes();

  let greeting = `There are no notes! Make some below`;
  if (notes.length) {
    greeting = `There are <strong>${notes.length}</strong> notes.`;
  }

  const list = notes.map(note => {
    return `
      <section class="card ${mostLikedNote.noteID === note.noteID ? "mostLiked" : ""}">
        <div style="display: flex; justify-content: space-between;">
          <a href=/notes/${note.noteID}>
            <heading>
              ${note.title}
            </heading>
            <p>${note.body}</p>
          </a>
          <form style="display: flex; justify-content: flex-end; width: 30px;" action=/likes method=post>
            <p>Likes:&nbsp;${note.likes ?? "0"}</p>
            <input name="noteID" type="hidden" value=${note.noteID}>
            <button id="note:${note.noteID}" class="likebutton" type=submit>
              <img src=/_static/images/like-icon.svg>
            </button>
          </form>
        </div>
        </section>
      `;
  });

  const contents = `
    <section>
      <h2>Welcome to the Notes page!</h2>
      <p>${greeting}</p>
      <section class="cards">
        ${list.join("")}
      </section>
      <form action=/notes method=post>
        <h2>Make a note</h2>
        <div class="input-and-label">
          <input name="title" required="required" type="text" autocomplete="off" value="" placeholder="Title"/>
          <label for="email">Title</label>
        </div>
        <div class="input-and-label">
          <textarea name="body" required="required" autocomplete="off" value="" placeholder="Body text"></textarea>
          <label for="body">Body</label>
        </div>
        <button>Make a note</button>
      </form>
    </section>
  `;

  return {
    html: layout({ contents }),
  };
}
