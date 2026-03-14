
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const articles = require("./routes/articles");
const members = require("./routes/members");
const subscribers = require("./routes/subscribers");
const contacts = require("./routes/contacts");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/admin", express.static("admin"));

app.use("/api/articles", articles);
app.use("/api/members", members);
app.use("/api/subscribers", subscribers);
app.use("/api/contacts", contacts);

app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});
