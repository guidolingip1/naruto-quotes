const cors = require("cors");
const express = require("express");
const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));

const Quotes = [];

// Lê o CSV pega somente as frases e adiona elas no array Quotes
fs.createReadStream("finalQuotes.csv")
  .pipe(
    parse({
      columns: true,
    })
  )
  .on("data", (data) => {
    Quotes.push(data[1]);
  })
  .on("error", (err) => {
    console.log(err);
  });

app.get("/", cors(), (req, res) => {
  // sorteia uma frase do array Quotes
  let quote = Quotes[Math.floor(Math.random() * Quotes.length)];
  res.send({ mensagem: quote });
});

app.get("*", cors(), (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
