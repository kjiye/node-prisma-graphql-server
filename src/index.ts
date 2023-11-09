import server from "./server";
/**
 * Running the Express GraphQL server which would be imported from the ./server.ts
 */

const PORT = process.env.PORT;

const init = async () => {};

server.listen(PORT, async () => {
  console.log(`✅  Listening on: http://localhost:${PORT}`);
  // wait for a web server to start before running init()
  await init();
});
