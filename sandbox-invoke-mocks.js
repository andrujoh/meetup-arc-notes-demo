module.exports = {
  events: {
    notification: {
      handler: {
        noteID: "abcde",
        title: "a title",
        body: "a body",
        likes: 11,
      },
    },
    "create-and-send-pdf": {
      event: {
        id: 123,
        title: "pdf",
      },
    },
  },
  queues: {
    emails: {
      handler: {
        recipients: ["per, ola, knut"],
      },
    },
  },
};
