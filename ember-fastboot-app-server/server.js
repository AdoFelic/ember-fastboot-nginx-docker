const FastBootAppServer = require('fastboot-app-server');

let server = new FastBootAppServer({
  distPath: '../ember-fastboot-app/dist',
  gzip: true, // Optional - Enables gzip compression.
  port: 4201, // Optional - Sets the port the server listens on (defaults to the PORT env var or 3000).
  chunkedResponse: true // Optional - Opt-in to chunked transfer encoding, transferring the head, body and potential shoeboxes in separate chunks. Chunked transfer encoding should have a positive effect in particular when the app transfers a lot of data in the shoebox.
});

server.start();
