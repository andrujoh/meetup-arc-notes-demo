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
  },
  queues: {
    emails: {
      handler: {
        recipients: ["per, ola, knut"],
      },
    },
  },
};
