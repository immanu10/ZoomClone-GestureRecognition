const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidv4 } = require("uuid");
const { ExpressPeerServer } = require("peer");
const { Console } = require("console");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/peerjs", peerServer);

app.get("/", (req, res) => {
  res.render("join");
  //   res.redirect(`/${uuidv4()}`);
});

app.get("/room", (req, res) => {
  res.render("room", {
    roomId: req.query.roomId,
    username: req.query.username,
  });
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, username,id) => {
    console.log(roomId, username);
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", id);
    socket.on("message", (message) => {
      io.to(roomId).emit("createMessage", {
        user: username,
        newmessage: message,
      });
    });

    socket.on("disconnect", () => {
      socket.to(roomId).broadcast.emit("user-disconnected", id);
    });
  });
});

server.listen(process.env.PORT || 3030);
