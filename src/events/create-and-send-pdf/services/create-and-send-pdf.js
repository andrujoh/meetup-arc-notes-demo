class CreateAndSendPdfService {
  async init() {
    // Do init stuff like database config and connections
  }

  async perform(payload) {
    if (!payload.id || !payload.title) {
      return [false, { error: "Invalid payload" }];
    }

    const data = this.generatePdf();

    const [ok, result] = await this.uploadToAws({
      file: "some file",
      path: "some path",
    });

    if (!ok) return this.bad(result);

    return [true, data];
  }

  generatePdf() {
    const data = {
      pdfText: "lorem ipsum",
    };
    return data;
  }

  async uploadToAws(file, path) {
    // do upload stuff
    return [true, { message: "It worked" }];
  }
}

module.exports = CreateAndSendPdfService;
