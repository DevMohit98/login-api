const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.get("/", (request, respond) => {
  respond.sendFile(path.resolve(__dirname, "./public/index.html"));
});
app.post("/", (request, respond) => {
  const { username, password } = request.body;
  if (username === "admin" && password === "1234") {
    respond.sendFile(path.resolve(__dirname, "./public/success.html"));
  } else if (username === "" && password === "") {
    respond.sendFile(path.resolve(__dirname, "./public/enter.html"));
  } else if (username !== "admin" && password !== "1234") {
    respond.sendFile(path.resolve(__dirname, "./public/invalid.html"));
  }
});
app.get("/forgot", (request, respond) => {
  respond.sendFile(path.resolve(__dirname, "./public/forgot.html"));
});
app.listen(8080, () => {
  console.log("server started");
});
