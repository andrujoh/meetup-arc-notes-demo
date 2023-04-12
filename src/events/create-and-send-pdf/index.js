const arc = require("@architect/functions");
const CreateAndSendPdfService = require("./services/create-and-send-pdf");

async function event(event) {
  const [ok, data] = await new CreateAndSendPdfService().perform(event);
  if (!ok) console.error("CreateAndSendPdfService not ok", data);

  console.log(`Create and send pdf event done`);
}

exports.handler = arc.events.subscribe(event);
