import http from "http";

const HOSTNAME = "localhost";
const PORT = parseInt(<string>process.env.PORT, 0) || 3000;

function requestListener(
  req: http.IncomingMessage,
  res: http.ServerResponse
): void {
  console.log("> Request at:", req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      message: "Hello World!"
    })
  );
}

const server = http.createServer(requestListener);

server.listen(PORT, HOSTNAME, () => {
  console.log("> Listening on port %s:%s", HOSTNAME, PORT);
});
