import WebSocket, { WebSocketServer } from "ws";
import { nanoid } from "nanoid";

const port = 3333;

const wss = new WebSocketServer({ port });

console.log("skribekk server startet on port", port);

wss.on("connection", function connection(ws) {
  ws.id = nanoid();

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);

    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });

    // Answer to specific client
    // ws.send(data)
  });
});
