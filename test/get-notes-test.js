const sandbox = require("@architect/sandbox");
const arc = require("@architect/functions");
const test = require("tape");
const tiny = require("tiny-json-http");

test("start sandbox", async t => {
  t.plan(1);
  await sandbox.start();
  t.ok("started sandbox");
});

test("can get /notes", async t => {
  t.plan(1);
  const url = "http://localhost:3333/notes";
  const result = await tiny.get({ url });
  t.ok(result.body, "got response");
  console.log(result.body);
});

test("can list notes", async t => {
  t.plan(1);
  const data = await arc.tables();
  const result = await data.notes.scan({});
  t.ok(result, "got result");
  console.log(result);
});

test("add a few notes", async t => {
  t.plan(1);
  const data = await arc.tables();
  const result = await Promise.all([
    data.notes.put({ noteID: "noteID1", title: "some title1", body: "somebody1" }),
    data.notes.put({ noteID: "noteID2", title: "some title2", body: "somebody2" }),
    data.notes.put({ noteID: "noteID3", title: "some title3", body: "somebody3" }),
  ]);
  t.ok(result, "got result");
  console.log(result);
});

test("shut down the sandbox", async t => {
  t.plan(1);
  await sandbox.end();
  t.ok(true, "shutdown successfully");
});
