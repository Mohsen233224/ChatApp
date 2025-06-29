const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("مستخدم جديد دخل 🎉");
  
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
  
  socket.on("disconnect", () => {
    console.log("مستخدم طلع ❌");
  });
});

http.listen(PORT, () => {
  console.log(`السيرفر شغال على http://localhost:${PORT}`);
});