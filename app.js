import WebSocket, { WebSocketServer } from "ws";
import { nanoid } from "nanoid";
import { getRandomWords } from "./word-list.js";

const port = 3333;

const wss = new WebSocketServer({ port });

console.log("skribekk server startet on port", port);

let hostId, word;
let gameStarted = false;

wss.on("connection", function connection(ws) {
  const clientId = nanoid(16);
  let clientName = "";

  const sendToAllClients = (msg) => {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg, {
          binary: true,
        });
      }
    });
  };

  const sendToOtherClients = (msg) => {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(msg, {
          binary: true,
        });
      }
    });
  };

  ws.on("error", console.error);

  ws.on("message", function message(msg) {
    const { type, data } = JSON.parse(msg);

    switch (type) {
      case "setName":
        console.log(`${data} joined the game! (clientID: ${clientId})`);
        clientName = data;
        sendToOtherClients(msg);
        break;
      case "startGame":
        console.log("Game started by", clientName);
        hostId = clientId;
        gameStarted = true;
        // fetch("https://random-word-form.herokuapp.com/random/animal/a?count=3")
        //   .then((r) => r.json())
        //   .then((d) => console.log({ type, data: JSON.stringify(d) }));
        ws.send(JSON.stringify({ type, data: getRandomWords(3) }), {
          binary: true,
        });
        break;
      case "setWord":
        console.log("Word to guess:", data);
        word = data;
        sendToOtherClients(JSON.stringify({ type: "gameStarted", data: null }));
        break;
      case "draw":
        if (gameStarted && clientId === hostId) {
          sendToAllClients(msg);
        }
        if (!gameStarted) {
          sendToAllClients(msg);
        }
        break;
      case "guess":
        console.log(`${clientName} guessed: ${data}`);
        if (data.toLowerCase() === word.toLowerCase()) {
          console.log("=> guessed correctly!");
          sendToAllClients(
            JSON.stringify({
              type: "wordGuessed",
              data: { name: clientName, word },
            })
          );
        }
        break;
    }
  });
});
